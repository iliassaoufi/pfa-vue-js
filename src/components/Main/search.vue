<template>
  <div class="same-style header-search">
    <a v-on:click="Cart_search" class="search-active" href="#"
      ><i class="pe-7s-search"></i
    ></a>
    <div class="search-content">
      <form>
        <select v-model="selected">
          <option value="1">Products</option>
          <option value="2">Stores</option>
        </select>
        <input v-model="search" type="text" placeholder="Search" />
        <button @click="research()" type="button" class="button-search">
          <i class="pe-7s-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data: function() {
    return {
      search: "",
      selected: 1,
    };
  },
  methods: {
    research() {
      console.log(this.search + "---" + this.selected);

      this.$router.push({
        name: "Product",
        params: {
          id: "1",
        },
      });
    },
  },
};
</script>
<style scoped>
.header-right-wrap .same-style.header-search .search-content form {
  display: flex;
}
.header-right-wrap .same-style.header-search .search-content form input {
  width: 350px;
  border-radius: 0;
}
.header-right-wrap .same-style.header-search .search-content form select {
  border: 1px solid #d3d3d3;
  border-right-width: 0px;
  outline: medium none;
  padding: 5px 72px 5px 15px;
  transition: all 0.4s ease 0s;
  width: 180px;
  color: #000;
  background: transparent;
  border-radius: 0;
}
</style>
