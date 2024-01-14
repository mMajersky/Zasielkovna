<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Size</th>
          <th>Monthly rent</th>
          <th>Available</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="storage in storages" :key="storage.location">
          <td>{{ storage.location }}</td>
          <td>{{ storage.size }}</td>
          <td>{{ storage.monthly_rent }}</td>
          <td>{{ storage.available }}</td>
          <td>
            <button v-if="storage.available != 0" @click="reserveSpace(storage.location)">
              <router-link :to="{ name: 'reserving', params: { location: storage.location } }">Reserve</router-link>
            </button>
            <span v-else>No available space</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStorageStore } from '../stores/store'; 

const storageStore = useStorageStore();
const storages = storageStore.storages;
const reserveSpace = storageStore.updateAvailable;
</script>



<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

span {
  color: red;
}
</style>
