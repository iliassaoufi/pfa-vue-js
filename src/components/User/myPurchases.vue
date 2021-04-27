<template>
  <div class="store-info col-md-12">
    <div class="contact-social welcome-content">
      <h1>My Perchases</h1>
    </div>
  </div>

  <div class="cart-main-area pt-40 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
          <form action="#">
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Order</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="index" v-for="(order, index) in orders">
                    <td class="">
                      <strong>{{ order.date }}</strong>
                    </td>
                    <td class="">
                      <div
                        :key="index"
                        v-for="(product, index) in order.products"
                      >
                        {{ product.name }} x {{ product.quantity }} <br />
                      </div>
                    </td>
                    <td class="">
                      {{ order.totalPrice }}
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
export default {
  name: "",
  props: {
    user: Object,
  },
  data: function() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.setOrders();
  },
  methods: {
    setOrders() {
      this.orders = [
        {
          date: "20 / 12 / 2021",
          products: [
            { name: "product 1", quantity: 3 },
            { name: "product 2", quantity: 1 },
          ],
          totalPrice: "650,00",
        },
        {
          date: "1 / 1 / 2021",
          products: [{ name: "product 1", quantity: 1 }],
          totalPrice: "300,00",
        },
      ];
    },
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
