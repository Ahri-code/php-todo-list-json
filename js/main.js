const { createApp } = Vue

createApp({
  data() {
    return {
        api: "api.php"
    }
  },
  methods: {
    press() {
        axios.get(this.api).then((response) => {
            console.log("To do: ", response.data);
        });
    }
  }
}).mount('#app')