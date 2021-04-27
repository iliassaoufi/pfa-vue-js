<template>
  <div class="store-info col-md-12">
    <div class="contact-social welcome-content">
      <h1>Sales</h1>
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
                    <th>Order id</th>
                    <th>Products</th>
                    <th>Total Price</th>
                    <th>State</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">
                      <strong>4567</strong>
                      <br />
                      <small>25/5/2022</small>
                    </td>
                    <td class="">
                      Product * 2 <br />
                      Product * 1<br />
                    </td>
                    <td class="">
                      2600.00 Dh
                    </td>
                    <td class="">
                      completed
                    </td>

                    <td>
                      <div class="shopping-cart-btn btn-hover ">
                        <Order :id="50" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="">
                      <strong>4567</strong>
                      <br />
                      <small>25/5/2022</small>
                    </td>
                    <td class="">
                      Product * 2 <br />
                      Product * 1<br />
                    </td>
                    <td class="">
                      2600.00 Dh
                    </td>
                    <td class="">
                      completed
                    </td>

                    <td>
                      <div class="shopping-cart-btn btn-hover ">
                        <Order :id="3" />
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
import Order from "./Order";
export default {
  name: "List_sales",
  components: {
    Order,
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
</style>
