const { createApp } = Vue

createApp({
  data() {
    return {
        x: 0
    }
  },
  methods: {
    press() {
        console.log("Button pressed")
    }
  }
}).mount('#app')