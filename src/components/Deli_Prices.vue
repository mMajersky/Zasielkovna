<template>
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Shipping to Address</th>
            <th>Shipping to Dropbox</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="price in prices" :key="price.country">
            <td>{{ price.country }}</td>
            <td>{{ price.shipping_to_address }}</td>
            <td>{{ price.shipping_to_dropbox }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script>
  
  export default {
    data() {
      return {
        prices: [],
      };
    },
    mounted() {
      
      fetch('./src/prices.json')
        .then(response => response.json())
        .then(data => {
          this.prices = data.prices;
        })
        .catch(error => {
          console.error('Error fetching shipping prices:', error);
        });
    },
  };
  </script>

  <style scoped>
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
  
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #f2f2f2;
    }
  </style>
  