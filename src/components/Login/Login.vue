<template>
  <form>
    <div v-if="showMsg == true" class="alert alert-danger" role="alert">
      E-mail or password is incorrect
    </div>

    <input v-model="user.email" type="email" placeholder="E-mail" />
    <input v-model="user.password" type="password" placeholder="Password" />
    <div class="button-box">
      <!--
      <div class="login-toggle-btn">
        <input type="checkbox" />
        <label>Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      -->
      <button @click="login()" type="button">
        <span>Login </span>
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      user: {
        id: 0,
        email: "",
        password: "",
        role: "",
      },
      showMsg: false,
      userValide: false,
    };
  },
  methods: {
    login() {
      console.log(this.user.email + "------" + this.user.password);
      if (this.user.password == "0000") {
        //-----------
        this.showMsg = false;
        this.userValide = true;
        // this.$router.push("/User");
      } else {
        this.showMsg = true;
        this.userValide = false;
      }
      if (this.userValide) {
        this.$router.push("/User");
      }
      // $cookies.set("name", "66", "1h");
      //  console.log($cookies.get("name"));
    },
  },
};

/*
@click="this.$router.push('Stores')"
*/
</script>
