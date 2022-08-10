<template>
  <div id="sidebar" v-if="$store.state.isMobile == false">
    <div class="filter-container">
      <div class="filter-title">Stay Duration</div>
      <StatyInputs />
      <div class="filter-title">Filter by type</div>
      <FilterInputs />
      <div class="filter-title">Filter by price</div>
      <PriceInputs />
    </div>
  </div>
</template>
<script>
import StatyInputs from './StayInputs.vue';
import FilterInputs from './FilterInputs.vue';
import PriceInputs from './PriceInputs.vue';
export default {
    components: { StatyInputs, FilterInputs, PriceInputs }
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
#sidebar {
  width: 15vw;
  height: 100vh;
  background: $mainColor;
  border-radius: 5px;
}

.filter-title {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  color: white;
  padding: 0.5em 0;
  font-weight: bold;
  border-bottom: 1px solid white;
}



.filter-inputs{
  display: flex;
  flex-flow: row wrap;
  padding: 0.5em 0;
  width: 80%;
  margin: auto;
  .filter-reset{
    width: 100%;
    display: flex;
    justify-content: center;
    button{
      margin-bottom: 0.5em;
      border: none;
      background: $warning;
      color: white;
      padding: 0.5em;
      border-radius: 0.5em;
    }
  }
}

.price-inputs{
  width: 70%;
  margin: 1em auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  input{
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: none;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    font-size: 1rem;
  }
  input::placeholder{
    color: white;
  }
  button{
    padding: 0.4rem;
    border: none;
    border-radius: 0.2rem;
    background: $mainLightAccent;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>