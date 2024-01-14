<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <RouterLink to="/" class="logo">
              <img src="/assets/images/logo.png" alt="">
            </RouterLink>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a ><RouterLink to="/" href="#up">Home</RouterLink></a></li>
              <li class="scroll-to-section"><RouterLink to="/deliveries">Deliveries</RouterLink></li>
              
              <li class="has-sub">
                <a href="javascript:void(0)">Pages</a>
                <ul class="sub-menu">
                  
                  <li><RouterLink to="/about">About</RouterLink></li>
                  <li><RouterLink to="/contact_us">Contact Us</RouterLink></li>
                </ul>
              </li>
              <li class="scroll-to-section"><RouterLink to="/tracker">Tracker</RouterLink></li>
              
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  // Your document.ready code
  $(document).ready(function () {
    // Add the existing document.ready code here

    // Example: Scroll function
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

    // Example: Click function
    $('.filters ul li').click(function () {
      // Add your existing code for handling filter clicks
    });

    // Add other functions and event listeners as needed
  });

  // Additional setup for Accordion
  const Accordion = {
    // ... (copy your existing Accordion code here)
  };

  (function () {
    // Initiate all instances on the page
    const accordions = document.getElementsByClassName("accordions");
    for (let i = 0; i < accordions.length; i++) {
      Accordion.init(accordions[i]);
    }
  })();
});

onUnmounted(() => {
  // Clean up any resources if needed
});
</script>

<style scoped>
.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
}
</style>
