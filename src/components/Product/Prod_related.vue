<template>
  <div class="related-product-area pb-95">
    <div class="container">
      <div class="section-title text-center mb-50">
        <h2>Related products</h2>
      </div>

      <div class="row">
        <div
          :key="index"
          v-for="(id, index) in product.ProdRelated.slice(0, 4)"
          class="col-xl-3 col-md-6 col-lg-4 col-sm-6"
        >
          <ProductCard :id="id" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "./Product_Card";
export default {
  name: "prod_related",
  components: {
    ProductCard,
  },
  props: ["product"],
  data: function() {
    return {
      productsRelated: this.product.ProdRelated,
    };
  },
  mounted() {},
};
</script>
