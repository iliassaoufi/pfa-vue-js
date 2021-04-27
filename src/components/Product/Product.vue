<template>
  <h1>{{ test }}</h1>
  <ProdShop :product="product" />
  <ProdDescreption :product="product" />
  <ProdRelated :product="product" />
</template>
<script>
import ProdShop from "./Prod_shop_area";
import ProdDescreption from "./Prod_description";
import ProdRelated from "./Prod_related";
export default {
  name: "Product",
  components: {
    ProdShop,
    ProdDescreption,
    ProdRelated,
  },
  props: {
    productId: Number,
  },
  data: function() {
    return {
      product: {
        id: this.productId,
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
      onSale: false,
      test: "",
    };
  },
  mounted() {
    this.product.id = this.productId;
    this.product.name = "product 1 ";
    this.product.price = "50.00";
    this.product.salePrice = "45.50";
    this.product.description = "description";
    this.product.shortDescription = "shortDescription";
    this.product.rating = 3;
    this.product.option.name = "option";
    this.product.option.options = [
      { id: 458, value: "option 1" },
      { id: 12, value: "option 5" },
    ];
    this.product.Categories = ["cat 1 ", "cat 2"];
    this.product.images = ["im1.jpeg", "im2.jpeg"];
    this.product.ProdRelated = [1, 2, 3, 5, 5, 6];
    this.product.reviews = [454, 658, 545];

    if (this.product.salePrice != "" || this.product.salePrice != null)
      this.onSale = true;
  },
};
</script>
