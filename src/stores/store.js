import { defineStore } from 'pinia'



export const useStorageStore = defineStore({
  id: 'storage',
  state: () => ({
    "storages": [
      {
        "location": "Nitra",
        "size": "50m2",
        "monthly_rent": "150€",
        "available": "3"
      },
      {
        "location": "Bratislava",
        "size": "30m2",
        "monthly_rent": "120€",
        "available": "0"
      },
      {
        "location": "Kosice",
        "size": "40m2",
        "monthly_rent": "130€",
        "available": "5"
      },
      {
        "location": "Zilina",
        "size": "25m2",
        "monthly_rent": "100€",
        "available": "1"
      }
      
    ],
  }),
  actions: {
    updateAvailable(location) {
      const storage = this.storages.find((s) => s.location === location);
      if (storage) {
        
        storage.available -= 1;
      }
    },
  },
});
