<template>
  <div>
    <Nav v-on:goMenu="onGoMenu" />

    <!-- Header -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container">
        <img class="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt="">
        <h1 class="text-uppercase mb-0">Start Avarkey</h1>
        <hr class="star-light">
        <h2 class="font-weight-light mb-0">Generate a unique avatar from a public key</h2>
      </div>
    </header>    

    <!-- generate Section -->
    <section id="generate">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Generate avarkey</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">            
            <form name="generate" id="generateForm" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Address</label>
                  <input class="form-control" id="name" type="text" placeholder="Address" required="required" data-validation-required-message="Please enter your address.">
                  <p class="help-block text-danger"></p>
                </div>
              </div>              
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="generateButton">Generate Avarkey</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <!-- Portfolio Grid Section -->
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">PortFolio</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="/cake.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="text-center text-uppercase text-white">About</h2>
        <hr class="star-light mb-5">
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <p class="lead">Generating Identicon with NFT(Non Fungible Token). Each identicon can be generated by user’s painting within a square grid system and non-fungible. It connect with user’s address and unique account name.</p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">Avarkey is a unique shaped avatar that is generated using a user's own public key. Your avarkey is unique, no one has the same avarkey as you.</p>
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
        <h2 class="text-center text-uppercase text-secondary mb-0">Register an email</h2>
        <hr class="star-dark mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">            
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email</label>
                  <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address.">
                  <p class="help-block text-danger"></p>
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
            <h4 class="mb-4">EpitomeCL</h4>            
            <h6>Creators</h6>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">            
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <img class="fab" src="/facebook.png" alt="">
              </li>
              <li class="list-inline-item">
                <img class="fab" src="/twitter.png" alt="">
              </li>
              <li class="list-inline-item">
                <img class="fab" src="/telegram.png" alt="">
              </li>              
              <li class="list-inline-item">
                <img class="fab" src="/gmail.png" alt="">
              </li>              
            </ul>
          </div>
          <div class="col-md-4">
            <!-- <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
              <a href="http://startbootstrap.com">Start Bootstrap</a>.</p> -->
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
import Nav from '~/components/landing/Nav.vue'


export default {
  components: {
    Nav
  },

  mounted() {
    console.log($(window)); 
    
  },

  methods: {
    onGoMenu(hash) {      
      if(hash){
        this.$scrollTo(`#${hash}`, 500)                
      }
    }
  }  
}
</script>
<style scoped>

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

.portfolio .portfolio-item {
  position: relative;
  display: block;
  max-width: 25rem;
  margin-bottom: 15px;
}

.portfolio .portfolio-item .portfolio-item-caption {
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  opacity: 0;
  background-color: rgba(24, 188, 156, 0.9);
}

.portfolio .portfolio-item .portfolio-item-caption:hover {
  opacity: 1;
}

.portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
  font-size: 1.5rem;
}

@media (min-width: 576px) {
  .portfolio {
    margin-bottom: -30px;
  }
  .portfolio .portfolio-item {
    margin-bottom: 30px;
  }
}

.fab {
  width: 32px;
  cursor: pointer;
}


.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #2C3E50;
  color: #fff;
}

.copyright {
  background-color: #1a252f;
}


</style>