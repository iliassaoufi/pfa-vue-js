<template>
  <div class="product-wrap mb-25">
    <div class="product-img">
      <router-link :to="url">
        <img class="default-img" :src="product.image1" alt="" />

        <img class="hover-img" :src="product.image2" alt="" />
      </router-link>
      <div v-if="onSale">
        <span class="purple">{{ salePer }}</span>
      </div>
      <div class="product-action">
        <div class="pro-same-action pro-wishlist">
          <a title="Wishlist" href="wishlist.html"
            ><i class="pe-7s-like"></i
          ></a>
        </div>
        <div class="pro-same-action pro-cart">
          <a title="Add To Cart" href="#"
            ><i class="pe-7s-cart"></i> Add to cart</a
          >
        </div>
        <div class="pro-same-action pro-quickview">
          <!--    <a
            title="Quick View"
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
            ><i class="pe-7s-look"></i
          ></a> -->
        </div>
      </div>
    </div>
    <div class="product-content text-center">
      <h3>
        <router-link :to="url">{{ product.name }} {{ id }}</router-link>
      </h3>
      <div class="product-rating">
        <i :key="i" v-for="i in product.rating" class="fa fa-star-o yellow"></i>
        <i :key="i" v-for="i in 5 - product.rating" class="fa fa-star-o "></i>
      </div>
      <div class="product-price">
        <div v-if="!onSale">
          <span>{{ product.price }} dhs</span>
        </div>
        <div v-if="onSale">
          <span>{{ product.salePrice }} dhs</span>
          <span class="old">{{ product.price }} dhs</span>
        </div>
      </div>
    </div>
  </div>
  <ProductModal />
</template>
<script>
import ProductModal from "./Product_modal";

export default {
  name: "Product_card",
  components: {
    ProductModal,
  },
  props: {
    id: 0,
  },
  data: function() {
    return {
      product: {
        id: "",
        name: "",
        price: "",
        salePrice: "",
        rating: 0,
        image1: "",
        image2: "",
      },
      onSale: false,
      url: "/Product/" + this.id,
    };
  },
  mounted() {
    this.onSale = false;

    //console.log(this.id);
    this.product = {
      id: this.id,
      name: "product 1",
      price: "55.00",
      salePrice: "45.50",
      rating: 3,
      image1: "/img/Product/" + "im1.jpeg",
      image2: "/img/Product/" + "im2.jpeg",
    };
    //console.log(this.id + "**" + this.product.id);
    if (this.product.salePrice != "") this.onSale = true;
  },
  computed: {
    salePer: function() {
      return (
        (
          ((this.product.salePrice - this.product.price) /
            this.product.salePrice) *
          100
        ).toFixed(0) + " %"
      );
    },
  },
};
</script>
<style scoped>
.product-img img {
  height: 345px;
  width: 270px;
  object-fit: cover;
  object-position: center;
}
</style>
