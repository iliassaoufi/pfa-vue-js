<template>
  <div class="store-card">
    <img class="img-cover" :src="Store.img" />
    <div class="store-info">
      <router-link :to="url">
        <img class="img-logo" :src="Store.logo" />
      </router-link>
      <h3>
        <router-link :to="url"> {{ Store.name }} {{ Store.id }} </router-link>
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Store_card",
  props: {
    id: Number,
  },
  data() {
    return {
      Store: {
        id: this.id,
        name: String,
        img: String,
        logo: String,
      },
      url: "/Store/" + this.id,
    };
  },
  mounted: function() {
    this.Store.name = "store test";
    this.Store.img = "/img/Store/" + "store.jpg";
    this.Store.logo = "/img/Store/" + "store.jpg";
    // console.log(this.Store.id);
  },
};
</script>
<style scoped>
.store-card {
  box-shadow: 0 0 10px rgba(90, 90, 90, 0.614);
  border-radius: 15px;
}
.store-card img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.store-info {
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  padding: 7px 0 0 30px;
  display: flex;
  border-radius: 0 0 15px 15px;
  transition: all 0.5s ease;
}

.store-info:hover {
  background: rgba(34, 34, 34, 0.7);
}
.store-info .img-logo {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.store-info h3 {
  margin: 7px 0 0 20px;
  font-size: 18px;
  font-weight: 500;
}
.store-info h3 a {
  color: rgba(255, 255, 255, 0.95);
}
</style>
