<template>
  <!--
  <h1>{{ $store.state.cartItem }}</h1>
  <h1>*******{{ $store.state.cartTotalPrice }}</h1>
  -->
  <div class="shop-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="product-details-img mr-20 product-details-tab">
            <div
              id="carouselIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  :key="index"
                  v-for="(img, index) in product.images"
                  :class="[index == 0 ? 'active' : '', 'carousel-item']"
                >
                  <div class="banner-area pb-70">
                    <div class="row">
                      <img :src="'/img/Product/'.concat(img)" />
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselIndicators"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselIndicators"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-lg-5 col-md-12">
          <div class="product-details-content">
            <h2>{{ product.name }}</h2>
            <div class="product-details-price">
              <div v-if="product.salePrice == '' || product.salePrice == null">
                <span>{{ product.price }} </span>
              </div>
              <div v-else>
                <span>{{ product.salePrice }} </span>
                <span class="old">{{ product.price }}</span>
              </div>
            </div>
            <div class="pro-details-rating-wrap">
              <div class="pro-details-rating">
                <i
                  :key="i"
                  v-for="i in product.rating"
                  class="fa fa-star-o yellow"
                ></i>
                <i
                  :key="i"
                  v-for="i in 5 - product.rating"
                  class="fa fa-star-o "
                ></i>
              </div>
              <span
                ><a href="#">{{ product.reviews.length }} Reviews</a></span
              >
            </div>
            <p>
              {{ product.shortDescription }}
            </p>
            <div class="product-option">
              <div class="form-group">
                <label>Product Option : select {{ product.option.name }}</label>
                <select class="form-control" v-model="selectedOption">
                  <option disabled value="">Please select one</option>
                  <option
                    :key="index"
                    v-for="(option, index) in product.option.options"
                    :value="option.id"
                    >{{ option.value }}</option
                  >
                </select>
              </div>
            </div>

            <div class="pro-details-quality">
              <div class="cart-plus-minus">
                <input
                  type="number"
                  v-model="quantity"
                  class="cart-plus-minus-box"
                />
              </div>
              <div class="pro-details-cart btn-hover">
                <a @click="addToCart()">Add To Cart</a>
              </div>
              <div class="pro-details-wishlist">
                <a><i class="fa fa-heart-o"></i></a>
              </div>
            </div>
            <div class="pro-details-meta">
              <span>Categories :</span>
              <ul>
                <li :key="index" v-for="(cat, index) in product.Categories">
                  <a href="#">{{ cat }}</a>
                </li>
              </ul>
            </div>

            <div class="pro-details-social">
              <ul>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Prod_shop_area",
  props: {
    product: Object,
  },
  data: function() {
    return {
      productData: {
        id: "",
        name: "",
        price: "",
        salePrice: "",
        description: "",
        shortDescription: "",
        rating: 0,
        option: {
          name: "",
          options: [],
        },
        Categories: [],
        images: [],
        ProdRelated: [],
        reviews: [],
      },
      quantity: 1,
      selectedOption: "", //this.product.option.options[0].id
    };
  },

  mounted() {
    this.productData = this.product;
  },
  methods: {
    addToCart() {
      console.log("click" + this.quantity + this.selectedOption);
      this.$store.commit("increment", {
        product: this.product,
        quantity: this.quantity,
        option: this.selectedOption,
      });
      this.$store.commit("setTotal");
    },
  },
};
</script>

<style scoped>
a .fa-angle-right,
a .fa-angle-left {
  color: #222;
  font-size: 50px;
}
.banner-area img {
  height: 680px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.product-option {
  margin: 50px auto;
}
</style>
