<template>
  <a
    @click="ShowModel = true"
    class="default-btn btn-list "
    data-toggle="modal"
    data-target="#staticBackdrop"
  >
    <i class="fa fa-eye"> </i>
    see more
  </a>

  <!-- Modal -->
  <div v-if="ShowModel">
    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              @click="ShowModel = false"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">... {{ id }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",

  props: {
    id: {
      type: String,
      default: "100",
    },
  },
  data() {
    return {
      ShowModel: false,
    };
  },
  mounted: function() {},
};
</script>
<style scoped>
.btn-list {
  padding: 15px;
  font-size: 15px;
  width: 130px;
  text-align: center;
  text-transform: capitalize;
}
</style>
