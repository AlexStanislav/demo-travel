<template>
  <div class="home">
    <sidebar />
    <div class="home-content">
      <div id="promo-offer-title">Explore our most popular locations</div>
      <div id="promo-offers">
        <offer-card
          v-for="(offer, index) of offers"
          :key="index"
          :offer="offer"
        />
      </div>
      <div id="properties-title">Explore properties</div>
      <div id="properties-container">
        <property-card
          v-for="(property, index) of properties"
          :key="index"
          :property="property"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import OfferCard from "../components/OfferCard.vue";
import PropertyCard from "../components/PropertyCard.vue";
// @ is an alias to /src

export default {
  components: { Sidebar, OfferCard, PropertyCard },
  data() {
    return {
      offers: this.$store.state.offerData,
      priceproperties: [],
    };
  },
  mounted() {
    let self = this;
    this.$store.commit("setfilteredproperties", this.$store.state.properties);
    window.EventBus.listen("priceproperty", function (data) {
      self.priceproperties.push(data);
    });
  },
  computed: {
    properties: function () {
      return this.$store.state.filteredProperties;
    },
    filter: function () {
      return this.$store.state.filter;
    },
  },
  watch: {
    filter: function (newValue, oldValue) {
      let filter = newValue;
      if (filter !== false) {
        let filteredProperties = [];
        for (const property of this.$store.state.properties) {
          if (typeof filter.value !== "object") {
            if (property[filter.name] == filter.value.toLowerCase()) {
              filteredProperties.push(property);
            }
          } else {
            if (
              parseInt(filter.value[0], 10) <
                parseInt(property[filter.name], 10) &&
              parseInt(property[filter.name], 10) <
                parseInt(filter.value[1], 10)
            ) {
              filteredProperties.push(property);
            }
          }
        }
        console.log(filteredProperties);
        this.$store.commit("setfilteredproperties", filteredProperties);
      } else {
        this.$store.commit(
          "setfilteredproperties",
          this.$store.state.properties
        );
      }
      console.log(oldValue);
    },
    priceproperties: function (newValue, oldValue) {
      console.log(oldValue);
      if (newValue.length == 6) {
        this.$store.commit("setproperties", newValue);
        this.priceproperties = [];
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.home {
  display: flex;
}
.home-content {
  width: 80%;
  margin: 0 1vw;
  box-sizing: content-box;
}
#promo-offer-title,
#properties-title {
  font-size: 1.8em;
  padding-bottom: 0.3em;
  margin: 0vh 0 2vh 0.7vw;
  color: $mainColor;
  border-bottom: 1px solid $mainColor;
}

#properties-title {
  font-size: 1.5em;
  color: $mainColor;
  border-bottom: 1px solid $mainColor;
  margin: 2vh 0 0 0.7vw;
}

#promo-offers {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

#properties-container {
  padding: 0.5em 0;
  height: 550px;
  overflow-x: auto;
}

/* width */
#properties-container::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#properties-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
#properties-container::-webkit-scrollbar-thumb {
  background: $mainColor;
}

/* Handle on hover */
#properties-container::-webkit-scrollbar-thumb:hover {
  background: $mainLight;
}

@media screen and(max-width:915px) {
  .home-content {
    width: 100%;
  }
}
@media screen and(max-width:412px) {
  #promo-offer-title {
    font-size: 1.2em;
    text-align: center;
  }

  .home-content {
    width: 95%;
    margin: auto;
  }
  #properties-title {
    text-align: center;
    font-size: 1.2em;
  }
}
</style>