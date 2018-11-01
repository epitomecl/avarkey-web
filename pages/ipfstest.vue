<template>
  <section class="container">
    <div>      
      <h1 class="title">
        IPFS test
      </h1>
      <h2 class="subtitle">
        ipfs - infura
      </h2>
      <div>
        <form v-on:submit.prevent="onSubmitFile">
          <input type="file" @change="captureFile" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <button v-on:click="getTransaction">Get Transaction</button>        
        <h2>Status:</h2>
        <div>ipfs hash : {{ipfsHash}}</div>
        <div>eth address : {{ethAddress}}</div>
        <div>transaction hash : {{transactionHash}}</div>
      </div>

      <div>
        <h2>Access my file : </h2>
        <div>
          https://gateway.ipfs.io/ipfs/{{ipfsHash}}
        </div>
      </div>

      <div>
        <h2>Transaction Receipt:</h2>
        <div>{{txReceipt}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import Web3 from 'web3'
import IPFS from 'ipfs-api'
import {sh_abi, sh_address} from '~/components/util/constants/storeHashContract'

export default {
  components: {
    
  },  

  data() {
    return {
      web3: null,
      storehashInstance: null,
      ipfs: null,
      ipfsHash: null,
      buffer: null,
      ethAddress: null,
      transactionHash: null,
      txReceipt: null
    }
  },

  mounted() {
    const web3js = window.web3
    if(typeof web3js !== 'undefined') {
      this.web3 = new Web3(web3js.currentProvider)
    }
    this.ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https'})

    this.storehashInstance = new this.web3.eth.Contract(sh_abi, sh_address)    
  },

  methods: {
    captureFile(e) {
      e.stopPropagation()
      e.preventDefault()
      const file = e.target.files[0]
      let reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => { 
        this.convertToBuffer(reader) 
      }
    },

    async convertToBuffer(reader) {
      const buffer = await Buffer.from(reader.result)
      this.buffer = buffer       
    },

    async onSubmitFile(event) {      
      const accounts = await this.web3.eth.getAccounts()
      this.ethAddress = await this.storehashInstance.options.address
      
      await this.ipfs.add(this.buffer, (err, ipfsHash) => {
        console.log(err, ipfsHash)
        this.ipfsHash = ipfsHash[0].hash
        this.storehashInstance.methods.setHash(this.ipfsHash).send({
          from: accounts[0],
          gas: 5000000
        }, (error, transactionHash) => {
          console.log(transactionHash)
          this.transactionHash = transactionHash
        })
      })
    },

    async getTransaction(event) {
      if(!this.transactionHash){
        alert("no transaction hash")
        return
      }

      await this.web3.eth.getTransactionReceipt(this.transactionHash, (err, txReceipt) => {
        console.log(err, txReceipt)
        this.txReceipt = txReceipt
      })
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
