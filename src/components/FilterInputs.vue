<template>
  <div class="filter-inputs">
    <div class="filter-reset">
      <button v-if="hasFilter" @click="resetFilters">Reset filters</button>
    </div>
    <CustomCheck :checkName="'Urban'">Urban</CustomCheck>
    <CustomCheck :checkName="'Beach'">Beach</CustomCheck>
    <CustomCheck :checkName="'Mountain'">Mountain</CustomCheck>
  </div>
</template>
<script>
import CustomCheck from "./CustomCheck.vue";
export default {
  computed: {
    hasFilter: {
      get() {
        return this.$store.state.filter !== false;
      },
      set(newValue) {
        this.$store.commit("setfilter", newValue);
        let radios = document.getElementsByClassName("customRadio");
        for (const radio of radios) {
          radio.checked = false;
        }
      },
    },
  },
  methods: {
    resetFilters() {
      this.hasFilter = false;
    },
  },
  components: { CustomCheck },
};
</script>