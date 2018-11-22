<template>
  <div>
    <Nav v-on:goMenu="onGoMenu" />

    <!-- Header -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container">
        <!-- <img class="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt=""> -->
        <h1 class="text-uppercase mb-0">Start Avarkey <b-badge class="badge">Beta</b-badge></h1>
        <hr class="star-light">
        <h2 class="font-weight-light mb-0">Generate a unique avatar from a public key</h2>
      </div>
    </header>    

    <!-- generate Section -->
    <section id="generate">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Generate avarkey</h2>
        <hr class="star-dark mb-5">        
        <Gavarkey />
      </div>
    </section>


    <!-- Portfolio Grid Section -->
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">PortFolio</h2>
        <hr class="star-dark mb-5">
        <Portfolio />
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="text-center text-uppercase text-white">About</h2>
        <hr class="star-light mb-5">
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <p class="lead">Avarkey is generating identicon service with public key. It connect with user’s address and unique account name, supports EOS and Ethereum. Other platforms will be supported. </p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">The main problem is that it’s difficult to recognize existing addresses for general users. So, a more familiar avatar replaces this address. Avarkey is a unique shaped avatar that is generated using a user's own public key.</p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">
              In near future, we will release NFT(Non Fungible Token) marketplace, which amateur artists can easily upload avatars they want and support tools to earn revenue. Coming Soon!! 
            </p>
          </div>
        </div>
        <div class="text-center mt-4">
          <a class="btn btn-xl btn-outline-light" href="#" v-scroll-to="{ element: '#generate', easing: 'linear' }">
            <i class="fas fa-download mr-2"></i>
            Try it Now!
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Register your email</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">                        
            <form name="sentMessage" id="contactForm" novalidate="novalidate" @submit.prevent="registerEmail">              
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email</label>
                  <input class="form-control" id="email" type="email" placeholder="Enter your email" required="required" data-validation-required-message="Please enter your email address." v-model="email">
                  <p class="help-block text-danger"></p>
                  <div class="hint">We'll let you know if there's any news.</div>
                </div>
              </div>                                          
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-5 mb-lg-0">
            <h4 class="mb-4">DEVELOPERS</h4>                        
            <div class="creator">Will Park <a href="https://www.linkedin.com/in/elegantuniv/" target="_blank"><img class="fab" src="/linkedin.png" alt=""></a></div>
            <div class="creator">Marian Kulisch <a href="https://www.linkedin.com/in/marian-kulisch-3b13483b/" target="_blank"><img class="fab" src="/linkedin.png" alt=""></a></div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">            
            <b-button class="btnDonate">Donate</b-button>
            <a href="mailto:willpark@epitomecl.com"><b-button class="btnContact">Contact Us</b-button></a>
          </div>
          <div class="col-md-4">
            
          </div>
        </div>
      </div>
    </footer>

    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; EpitomeCL 2018</small>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseStore from 'firebase/firestore'
import Nav from '~/components/landing/Nav.vue'
import Gavarkey from '~/components/landing/Gavarkey.vue'
import Portfolio from '~/components/landing/Portfolio.vue'


export default {
  components: {
    Nav,
    Gavarkey,
    Portfolio
  },

  data() {
    return {
      email: null
    }
  },

  computed: {
    validation: function () {
      const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return {        
        email: emailRE.test(this.email)
      }
    },
    isValid: function () {
      const validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },

  mounted() {    
    const config = {
      apiKey: "AIzaSyCsVi15QQTbjtEYkl0nAiIxqldW3hU1orM",
      authDomain: "avarkey-bb036.firebaseapp.com",
      databaseURL: "https://avarkey-bb036.firebaseio.com",
      projectId: "avarkey-bb036",
      storageBucket: "",
      messagingSenderId: "725374065200"
    };
    firebase.initializeApp(config);
  },

  methods: {
    onGoMenu(hash) {      
      if(hash){
        this.$scrollTo(`#${hash}`, 500, {offset: -60})                
      }
    },

    registerEmail() {
      if(this.isValid){
        const db = firebase.firestore()
        db.collection("emails").add({
          email: this.email
        })
        .then((docRef) => {
          console.log("savedId:", docRef.id)
          alert("Email registration completed..!")
          this.email = null
        })
        .catch((error) => {
          console.error("error:", error)
        })          
      } else {
        alert("please confirm your email correctly")
      }      
    }
  }  
}
</script>
<style scoped>

.bg-primary {
  background-color: #133e73 !important;
}

section {
  padding: 6rem 0;
}

section h2 {
  font-size: 2.25rem;
  line-height: 2rem;
}

@media (min-width: 992px) {
  section h2 {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}


header.masthead {
  padding-top: calc(6rem + 72px);
  padding-bottom: 6rem;
}

header.masthead h1 {
  font-size: 3rem;
  line-height: 3rem;
}

header.masthead h2 {
  font-size: 1.3rem;
  font-family: 'Lato';
}

header .badge {
  width: 60px;
  font-size: 15px;
}

@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(6rem + 106px);
    padding-bottom: 6rem;
  }
  header.masthead h1 {
    font-size: 4.75em;
    line-height: 4rem;
  }
  header.masthead h2 {
    font-size: 1.75em;
  }
}


.portfolio {
  margin-bottom: -15px;
}


@media (min-width: 576px) {
  .portfolio {
    margin-bottom: -30px;
  }  
}

.fab {
  width: 32px;
  cursor: pointer;
}

#contact .hint {
  margin: 10px;
  color: #676363;
  font-size: 15px;
  opacity: .6;
}

.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #2C3E50;
  color: #fff;
}

.footer .creator {
  margin: 10px;
}

.footer .fab {
  width: 22px;
  height: 22px;
}

.footer .btnDonate {
  width: 100px;
  height: 37px;
  background: #4984a0;
  margin-top: 20px;
}

.footer .btnContact {
  width: 110px;
  height: 37px;  
  margin-top: 20px;
}

.copyright {
  background-color: #1a252f;
}


</style>