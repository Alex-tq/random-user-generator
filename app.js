const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com",
      gender: "male",
      picture:
        "https://www.newamericanjackets.com/wp-content/uploads/2021/05/Johnny-Cage-Mortal-Kombat-X-Hooded-Vest.jpg",
    };
  },
});

app.mount("#app");
