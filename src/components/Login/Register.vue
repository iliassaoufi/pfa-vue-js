<template>
  <form action="#" method="post">
    <input v-model="user.firstName" type="text" placeholder="First Name" />
    <input v-model="user.lastName" type="text" placeholder="Last Name" />
    <input v-model="user.email" placeholder="Email" type="email" />
    <input v-model="user.password" type="password" placeholder="Password" />
    <div class="button-box">
      <button @click="Register()" type="button"><span>Register</span></button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Register",
  data: function() {
    return {
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  mounted() {},
  methods: {
    Register() {
      console.log(
        this.user.firstName +
          this.user.lastName +
          "---" +
          this.user.email +
          "---" +
          this.user.password
      );
      this.user.id = 128;
      this.user.role = 0;
      localStorage.setItem("user", JSON.stringify(this.user));
      this.$router.push("/User");
    },
  },
};
</script>
<style scoped></style>
