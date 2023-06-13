const { createApp } = Vue

createApp({
  data() {
    return {
        api: "api.php",
        toDoList: []
    }
  },
  methods: {
    getData() {
        axios.get(this.api).then((response) => {
          this.toDoList = response.data;
          console.log("aaaaaaa");
        });
    }
  },
  mounted() {
    this.getData();
  }
}).mount('#app')