<template>
  <HomeBanner />
  <Stores />
  <!--<RecommendedProducts />-->
  <GroupProducts />
  <Support />
</template>
<script>
import HomeBanner from "./Home_banner";
import Stores from "./Stores";
import RecommendedProducts from "./Recommended_products";
import GroupProducts from "./Group_products";
import Support from "./Support";
export default {
  name: "HomeComponent",
  components: {
    HomeBanner,
    Stores,
    RecommendedProducts,
    GroupProducts,
    Support,
  },
};
</script>
