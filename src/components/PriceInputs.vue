<template>
  <div class="price-inputs">
    <input
      class="price-filter"
      type="text"
      placeholder="Min"
      v-model="priceMin"
    />
    <input
      class="price-filter"
      type="text"
      placeholder="Max"
      v-model="priceMax"
    />
    <button @click="filterPrice()">Filter</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      priceMin: 0,
      priceMax: 0,
    };
  },
  methods: {
    filterPrice() {
      this.$store.commit("setfilter", {
        name: "finalPrice",
        value: [this.priceMin, this.priceMax],
      });
    },
  },
};
</script>