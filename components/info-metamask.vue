<template>
  <div>
    <b-btn v-b-toggle.collapse1 variant="primary">Metamask Status</b-btn>

    <!-- <b-collapse id="collapse1" class="mt-2"> -->
      <b-card>
      <div class='metamask-info'>
        <p v-if="web3.isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
        <p v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</p>
        <p>Network: {{ network }}</p>
    	  <p>Account: {{ web3.coinbase }}</p>
    	  <p>Balance: {{ web3.balance }} Wei </p>      
        <p>networkId: {{web3.networkId}}</p>
      </div>
    </b-card>
    <!-- </b-collapse> -->
  </div>
</template>

<script>
import {NETWORKS} from './util/constants/networks'
// import {mapState} from 'vuex'
// import getWeb3 from './util/getWeb3'

export default {
  name: 'info-metamask',

  data() {
    return {
      web3: {
        isInjected: false,
        web3Instance: null,
        networkId: null,
        coinbase: null,
        balance: null,
        error: null
      },
      contractInstance: null
    }
  },

  computed: {
    network() {
      return NETWORKS[this.web3.networkId]
    } 
  },

  mounted() {

    const web3js = window.web3
    if(typeof web3js !== 'undefined') {
      const web3 = new Web3(web3js.currentProvider)
      //const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))      
      this.web3.isInjected = web3.isConnected()
      web3.version.getNetwork((err, networkId) => {
        if(err) {
          console.error('Unable to retrieve network ID')
        } else {
          this.web3.networkId = networkId          
        }
      })
      web3.eth.getCoinbase((err, coinbase) => {
        if (err) {
          console.error('Unable to retrieve coinbase')
        } else {
          this.web3.coinbase = coinbase

          web3.eth.getBalance(coinbase, (err, balance) => {
            if (err) {
              console.error('Unable to retrieve balance for address: ' + coinbase)
            } else {
              this.web3.balance = balance
            }
          })
        }
      })
      
    } else {
      // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
        console.error('Unable to connect to Metamask')
    }
  },
}
</script>
<style scoped>
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}
</style>