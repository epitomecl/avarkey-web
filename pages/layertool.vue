<template>
  <div>
  	<CommonNav />

  	<div class="containWrap">
  	  <h2>Create layered tool</h2>
  	  <b-container>
  	    <b-row>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Body</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price1" type="text" placeholder="price" /></b-row>
  	      	</b-card>
  	      </b-col>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Fur</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price2" type="text" placeholder="price" /> </b-row>
  	      	</b-card>
  	      </b-col>
  	    </b-row>
  	    <b-row>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Eyes</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price3" type="text" placeholder="price" /> </b-row>
  	      	</b-card>
  	      </b-col>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Mouth</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price4" type="text" placeholder="price" /> </b-row>
  	      	</b-card>
  	      </b-col>
  	    </b-row>
  	    <b-row>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Background</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price5" type="text" placeholder="price" /> </b-row>
  	      	</b-card>
  	      </b-col>
  	      <b-col>
  	      	<b-card>
  	      	  <div class="fileInput">Accessory</div>
  	      	  <b-row>Price: <b-form-input class="ipPrice" v-model="price6" type="text" placeholder="price" /> </b-row>
  	      	</b-card>
  	      </b-col>
  	    </b-row>
  	  </b-container>

  	  <b-row>
  	    <b-card class="predictAvatar">
  	  	  <img src="/portfolio/a.jpg" alt="">
  	  	  <div class="totalPrice">
  	  		Total Price : {{totalPrice}}
  	  	  </div>
  	    </b-card>

	  	<b-button id="btnProceed">Proceed</b-button>
	  </b-row>
  	</div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      totalPrice: 0,
      price1: 0,
      price2: 0,
      price3: 0,
      price4: 0,
      price5: 0,
      price6: 0
    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style scoped>
.containWrap {
  margin-top: 150px;
  margin-bottom: 150px;
}

.fileInput {
  width: 256px;
  height: 256px;
  background: #f0f0f0;
}

.ipPrice {
  width: 150px;
}

.predictAvatar img {
  width: 250px;
  height: 250px;
}

#btnProceed {
  width: 150px;
  height: 45px;
  margin-top: 100px;
  margin-left: 20px;
}
</style>