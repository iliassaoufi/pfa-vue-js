<template>
  <div class="contact-form">
    <div class="contact-title mb-30">
      <h2>Update Account Info</h2>
    </div>
    <form
      class="contact-form-style"
      id="contact-form"
      action="assets/php/mail.php"
      method="post"
    >
      <div class="row">
        <div class="col-lg-6">
          <input name="name" placeholder="Name*" type="text" />
        </div>
        <div class="col-lg-6">
          <input name="email" placeholder="Email*" type="email" />
        </div>
        <div class="col-lg-12">
          <input name="subject" placeholder="Subject*" type="text" />
        </div>
        <div class="col-lg-12">
          <textarea name="message" placeholder="Your Message*"></textarea>
          <button class="submit " type="submit">SEND</button>
        </div>
      </div>
    </form>
    <p class="form-messege"></p>
  </div>
</template>
<script>
export default {
  name: "Update_account_info",
};
</script>
<style scoped>
.contact-form {
  background-color: #fff;
}
</style>
