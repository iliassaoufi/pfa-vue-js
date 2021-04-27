<template>
  <section>
    <div class="s1">
      <div class="s1-bg ">
        <img
          class="animation-slow"
          src="@/assets/img/undraw_successful_purchase_uyin.svg"
        />
      </div>

      <div class="s1-content animation-slow  ">
        <br />
        <h2>Mall Store</h2>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          veniam velit delectus dolores reprehenderit! Voluptatem harum
          veritatis quaerat.
        </p>
        <div class="shopping-cart-btn btn-hover ">
          <router-link class="default-btn" to="Stores">View Store</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home_Banner",
};
</script>
<style lang="css" scoped>
/********************************/
.s1 {
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: #94111104;
}

.s1-bg {
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 60% 100%);
  background-color: #a824180c;
  width: 100%;
  height: 80vh;
  z-index: -1;
}

.s1-bg img {
  position: absolute;
  right: 60px;
  height: 80vh;
  width: 500px;
}

.s1-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  margin-top: 15vh;
  margin-left: 10%;
}
/******/
.s1-content h2 {
  font-size: 3.5rem;
  width: 70%;
  margin-bottom: 1rem;
  color: #222;
}

.s1-content p {
  width: 60%;
  margin-bottom: 3rem;
  color: #444;
}

/************ s2 ***********/
.animation-slow {
  animation-name: animation-slow;
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.2, 0.4, 0.7, 1);
}
@keyframes animation-slow {
  0% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
