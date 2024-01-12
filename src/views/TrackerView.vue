<script setup>
import state from '../components/StateofDel.vue'
import notfound from '../components/NotFound.vue'
import deliveriesData from '../deliveries.json';
const deliveries = deliveriesData.delivery;
</script>

<template>
<div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-text">
            <h2>Check your delivery</h2>
            <div class="div-dec"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <section class="calculator">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="section-heading">
          <h6>We'll find it</h6>
          <h4>Just give us a hint</h4>
        </div>
        <form id="calculate" @submit.prevent="handleSubmit" action="" method="get">
              <div class="row">
                <div class="col-lg-6">
                  <fieldset>
                    <label for="id">Enter ID of your delivery</label>
                    <input type="text" name="id" v-model="deliveryId" placeholder="" autocomplete="on" required>
                  </fieldset>
                </div>

                <div class="col-lg-8">
                  <fieldset>
                    <button type="submit" id="form-submit" class="orange-button">Check</button>
                  </fieldset>
                </div>
              </div>
            </form>
      </div>
      <div class="col-lg-4">
    <state v-if="showState" :delivery="selectedDelivery" />
    <notfound v-if="showNotFound"/>
  </div>
    </div>
  </div>
</section>
</template>

<script>

import deliveriesData from '../deliveries.json';

export default {
  data() {
    return {
      deliveries: deliveriesData.delivery,
      deliveryId: '',
      showState: false,
      selectedDelivery: null,
      showNotFound: false,
    };
  },
  methods: {
    handleSubmit() {
      this.selectedDelivery = this.deliveries.find((item) => item.id === this.deliveryId);

      // If a delivery is found, set showState to true; otherwise, showNotFound to true
      if (this.selectedDelivery) {
        this.showState = true;
        this.showNotFound = false;
      } else {
        this.showState = false;
        this.showNotFound = true;
      }
    },
  },
};
</script>
