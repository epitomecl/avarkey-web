<template>
  <div>
    <b-card>      
      <b-form @submit.prevent="generateAvatar">        
            <b-input-group>
              <b-form-input type="text" placeholder="Please enter your address" v-model="address" ></b-form-input>
              <b-input-group-append>
                <b-btn variant="info" type="submit">Generate</b-btn>
              </b-input-group-append>
            </b-input-group>          
      </b-form>

      <div id="imgBox">
      	<b-img id="genImg" center thumbnail :src="genImgData" />

      	<template v-if="loading">
	      <div class="spinner"></div>
	    </template>
      </div>
    </b-card>
  </div>	
</template>
<script>
import qs from 'qs';

export default {
  components: {
    
  },

  data() {
    return {
      loading: false,
      genImgData: null,
      address: 'thisismyavarkey',
      address2: '0x3BDB8baC386815E07E0A089Dd8756FF32f678c63'
    }
  },

  mounted() {
    
  },

  methods: {
    generateAvatar() {
      this.loading = true;
      this.genImgData = null
      this.$axios
        .$post('/api/genAvatar', qs.stringify({'address': this.address}))
        .then(response => {
          // console.log("result", response)
          if(response.flag==1){
          	const imgData = response.result.imageData
            const prefix = response.result.prefix
            const category = response.result.category
            const parts = response.result.parts
            
          	this.genImgData = imgData
          	// console.log(this.genImgData)
          }
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    },

    test() {
      const formData = {
        module: 'Avatar',
        walletAddress: this.address
      }

      this.$axios
        .$post('https://api.avarkey.com/api/', qs.stringify(formData), { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*' })
        .then(response => {
          console.log("result", response)
          const data = response.data          
          const imgData = data.imageData                        
          this.genImgData = imgData                        
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    }
  }
  
}
</script>
<style scoped>
.bgCoins .selEOS {
  background: #6ba5d6;
}

.bgCoins .selEOS.active{

}

.bgCoins .selEther {
  background: #90bd9a;
}

.spinner {
  width: 40px;
  height: 40px;
  background-color: #4cd8ef;
  border-radius: 15px;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>