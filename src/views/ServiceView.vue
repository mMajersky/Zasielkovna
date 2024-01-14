

<script setup>
import banner from '../components/Banner.vue'
import DPrice from '../components/Deli_Prices.vue'
import SPrice from '../components/Storage_prices.vue'
</script>
<template>
    <div>
        <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-text">
            <h2>Our Services</h2>
            <div class="div-dec"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ***** Main Banner Area End ***** -->

  <section class="main-services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="service-item">
            <div class="row">
              <div class="col-lg-6">
                <div class="left-image">
                  <img src="/assets/images/service-image-01.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="right-text-content">
                <i class="fa-solid fa-truck-fast"></i>   
                  <h4>Pesonal delivery</h4>
                  <p>Discover convenience at your doorstep with our personalized delivery services, ensuring prompt and reliable solutions tailored to your individual needs. Experience a seamless and satisfying delivery experience with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="service-item">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div class="left-text-content">
                    <i class="fa-solid fa-business-time"></i>
                  <h4>Help with bussines?</h4>
                  <p>Elevate your business logistics with our long-term delivery solutions tailored for individual businesses. Our comprehensive services ensure sustained reliability, efficiency, and cost-effectiveness, providing a seamless transportation framework to support your business growth over the long haul.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-image">
                  <img src="/assets/images/service-image-02.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="service-item last-service">
            <div class="row">
              <div class="col-lg-6">
                <div class="left-image">
                  <img src="/assets/images/service-image-03.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="right-text-content">
                    <i class="fa-solid fa-warehouse"></i>
                  <h4>Storage units</h4>
                  <p>Explore our diverse range of available storage units, offering secure and flexible solutions to accommodate your varying storage needs. With our well-maintained facilities, you can trust us to provide a reliable and convenient space for safeguarding your belongings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<banner></banner>

  <section class="service-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading">
            <h6>We are fair with our prices</h6>
            <h4>Here is our general pricelist</h4>
          </div>
        </div>
        <div class="col-lg-10 offset-lg-1">
          <div class="naccs">
            <div class="tabs">
              <div class="row">
                <div class="col-lg-12">
                  <div class="menu">
                    <div class="active gradient-border"><span>Package delivery</span></div>
                    <div class="gradient-border"><span>Deliveries for bussineses</span></div>
                    <div class="gradient-border"><span>Storage units</span></div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <ul class="nacc">
                    <li class="active">
                      <div>
                        
                        <div class="content">
                          <DPrice/>
                        </div>
                      </div>
                    </li>
                    <li>
                      
                      <h3 class="item item-title">Your bussines is unique, and so will be our arrangement, we will contact you after filling our <RouterLink to="/contact_us">form</RouterLink>.</h3>

                    </li>
                    <li>
                      <div>
                        
                        <div class="content">
                          <SPrice/>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="item">
            <img src="./assets/images/client-01.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
</template>
