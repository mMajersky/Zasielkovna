<template>
    <div class="section-heading" v-if="delivery">
      <h6>We got it!</h6>
      <h4>Here is what we got:</h4>
    </div>
      <!-- Render details from delivery -->
      <div class="section-heading white-text">
  <table >
    <tr>
      <th>ID:</th>
      <td>{{ delivery.id }}</td>
    </tr>
    <tr>
      <th>Status:</th>
      <td>{{ delivery.status }}</td>
    </tr>
    <tr>
      <th>Location:</th>
      <td>{{ delivery.location || 'Not available' }}</td>
    </tr>
    <tr>
      <th>Estimated Delivery Date:</th>
      <td>{{ delivery.est }}</td>
    </tr>
  </table>
</div>

    
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['delivery']);
  </script>

<style>
  .white-text {
    color: white;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table th, table td {
    padding: 8px; 
    
  }
</style>
  
  
  
  