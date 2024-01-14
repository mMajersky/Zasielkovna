<script setup>
import banner from '../components/Banner.vue'
</script>
<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-text">
            <h2>About Us</h2>
            <div class="div-dec"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <banner/>
  <section class="calculator">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="section-heading">
            <h6>Chosen location: {{ $route.params.location }}</h6>
            <h4>Please fill this introduction form</h4>
          </div>
          <form id="calculate" action="" method="get" @submit.prevent="reserveSpace(storage.location)">
            <div class="row">
              <div class="col-lg-6">
                <fieldset>
                  <label for="name">Name</label>
                  <input type="name" name="name" id="name" placeholder="" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-6">
                <fieldset>
                  <label for="name">Surname</label>
                  <input type="name" name="name" id="name" placeholder="" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="email">Your Email</label>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="" required="true">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="address">Home Address</label>
                  <input type="text" name="address" id="address" placeholder="" required>
                </fieldset>
              </div>

              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="orange-button">Submit Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedStorage: null,
    };
  },
  methods: {
    handleSubmit() {

      this.$router.push({ name: 'reserving', params: { location: this.selectedStorage.location } });
    },
    handleSelectChange(event) {

      const selectedOption = event.target.value;
      this.selectedStorage = selectedOption !== 'Choose an Option' ? { location: selectedOption } : null;
    },
  },
  mounted() {

    this.selectedStorage = this.$route.params.location
      ? { location: this.$route.params.location }
      : null;
  },
};
</script>