<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Size</th>
            <th>Monthly rent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="storage in storages" :key="storage.location">
            <td>{{ storage.location }}</td>
            <td>{{ storage.size }}</td>
            <td>{{ storage.monthly_rent }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        storages: [],
      };
    },
    mounted() {
      fetch('./src/prices.json')
        .then(response => response.json())
        .then(data => {
          this.storages = data.storages;
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
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