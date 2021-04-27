<template>
  <div class="store-info col-md-12">
    <div class="contact-social welcome-content">
      <h1>List Of Products</h1>
    </div>
  </div>

  <div class="cart-main-area pt-40 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <form action="#">
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">
                      <img class="product-img-small" src="@/assets/logo.png" />
                    </td>
                    <td class="">
                      Product 1
                    </td>
                    <td class="">
                      12
                    </td>

                    <td>
                      <div class="shopping-cart-btn btn-hover ">
                        <Product :id="50" />
                        <Update :id="51" />
                        <Delete :id="52" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Update from "./Update";
import Product from "./Product";
import Delete from "./Delete";

export default {
  name: "update_product",
  components: {
    Update,
    Product,
    Delete,
  },
};
</script>
<style scoped>
table {
  width: 100%;
}
table td,
table th {
  text-align: left !important;
  padding: 20px 30px !important;
}
.product-img-small {
  height: 65px;
  width: 50px;
  object-fit: cover;
}
.shopping-cart-btn {
  display: inline-flex;
}
</style>
