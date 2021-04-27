<template>
  <div class="description-review-area pb-90">
    <div class="container">
      <div class="description-review-wrapper">
        <div class="description-review-topbar nav">
          <a class="active" data-toggle="tab" href="#des-details2"
            >Description</a
          >
          <a data-toggle="tab" href="#des-details3">Reviews (2)</a>
        </div>
        <div class="tab-content description-review-bottom">
          <div id="des-details2" class="tab-pane active">
            <div class="product-description-wrapper">
              {{ product.description }}
            </div>
          </div>

          <div id="des-details3" class="tab-pane">
            <div class="row">
              <div class="col-lg-7">
                <div class="review-wrapper">
                  <div
                    :key="index"
                    v-for="(id, index) in product.reviews"
                    class="single-review"
                  >
                    <Review :reviewId="id" />
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="ratting-form-wrapper pl-50">
                  <h3>Add a Review</h3>
                  <span>Your rating:</span>
                  <div class="ratting-form">
                    <form action="#">
                      <div class="star-box">
                        <div class="ratting-star">
                          <i
                            :key="index"
                            v-for="(i, index) in form.rating"
                            class="fa fa-star"
                            @click="form.rating = index + 1"
                          ></i>
                          <i
                            :key="index"
                            v-for="(i, index) in 5 - form.rating"
                            class="fa fa-star-o "
                            @click="form.rating = form.rating + index + 1"
                          ></i>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="Name" type="text" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="Email" type="email" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="rating-form-style form-submit">
                            <textarea
                              name="Your Review"
                              placeholder="Message"
                            ></textarea>
                            <input type="submit" value="Submit" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Review from "./review";
export default {
  name: "Prod_description",
  components: {
    Review,
  },

  props: {
    product: Object,
  },
  data: function() {
    return {
      form: {
        rating: 0,
        name: "",
        email: "",
        text: "",
      },
    };
  },
  mounted() {
    this.form.rating = 0;
  },
};
</script>
<style scoped>
.fa-star,
.fa-star-o {
  font-size: 25px;
  cursor: pointer;
  margin: 5px 3px;
}
</style>
