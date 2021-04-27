<template>
  <div class="row  ">
    <div class="img-cover col-md-12"></div>
    <div class=" col-md-4">
      <div class="img-logo ">
        <img alt="" src="@\assets\img\Logo.png" />
      </div>
    </div>
    <div class="store-info col-md-7">
      <div class="contact-social welcome-content">
        <h1>ZARA</h1>
        <p>
          L’enseigne de vêtements féminins et d’accessoires qui satisfait la
          citadine active et moderne.

          <br />
          <br />
          <i class="fa fa-envelope"></i> : iliass@gmial.com
          <br />
          <i class="fa fa-phone"></i> : +2126 89 45 45 78
        </p>
        <div class="shopping-cart-btn btn-hover "></div>
      </div>
    </div>
  </div>
  <section>
    <Statistic />
  </section>
</template>
<script>
import Statistic from "../Statistic/Statistic";
export default {
  name: "Account_info",
  components: {
    Statistic,
  },
};
</script>
<style scoped>
.img-cover {
  height: 400px;
  width: 100%;
  background: black;
}

.img-logo {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: #f3f3f3;
  box-shadow: 1px 1px 20px #20202063;
  margin-top: -100px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-logo img {
  width: 250px;
  padding: 40px;
}

.store-info h1,
.store-info p,
.store-info ul {
  margin-left: 30px;
}
.default-btn {
  padding: 15px 60px;

  margin: 50px 30px;
}
.contact-form {
  background-color: #fff;
}
</style>
