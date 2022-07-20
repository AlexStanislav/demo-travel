<template>
  <div>
    <modal
      :modalName="modals.languageModal.name"
      :isVisible="modals.languageModal.isVisible"
    >
      <div class="languageModal">
        <div>Select your language:</div>
        <div class="langModalContainer">
          <div
            class="langModalIcon"
            v-if="$store.state.pageLang == 'en'"
            @click="selectLang"
          >
            <img data-lang="ro" :src="require(`@/assets/svg/romania.svg`)" />
          </div>
          <div
            class="langModalIcon"
            v-if="$store.state.pageLang == 'ro'"
            @click="selectLang"
          >
            <img
              data-lang="en"
              :src="require(`@/assets/svg/united-kingdom.svg`)"
            />
          </div>
        </div>
      </div>
    </modal>

    <modal
      :modalName="modals.currencyModal.name"
      :isVisible="modals.currencyModal.isVisible"
    >
      <div style="text-align: center">Select your currency:</div>
      <div class="currencyContainer">
        <div
          v-for="(coin, index) of currency"
          :key="index"
          :data-coin="coin"
          @click="selectCurrency"
          class="currencyModalCoin"
        >
          {{ coin }}
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  props: {
    modals: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      currency: ["GBP", "RON", "USD", "EUR"],
    };
  },
  mounted() {
    let self = this;
    window.EventBus.listen("closemodal", function (data) {
      self.modals[data].isVisible = false;
    });
  },
  methods: {
    selectLang(event) {
      this.$store.commit("setpagelang", event.target.dataset.lang);
      this.modals.languageModal.isVisible = false;
    },
    selectCurrency(event) {
      this.$store.commit("setpagecoin", event.target.dataset.coin);
      this.modals.currencyModal.isVisible = false;
    }
    // selectLang(event) {
    //   window.EventBus.dispatch("langselected", event.target.dataset.lang);
    //   this.modals.languageModal.isVisible = false;
    // },
    // selectCurrency(event) {
    //   window.EventBus.dispatch("currencyselected", event.target.dataset.coin);
    //   this.modals.currencyModal.isVisible = false;
    // },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.langModalContainer {
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
}
.langModalIcon {
  width: 3em;
  height: 3em;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
}

.currencyContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}

.currencyModalCoin {
  margin: 0 0.2em;
  background: $mainLightAccent;
  color: $mainLightShade;
  padding: 0.5em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 0.2em;
}

.currencyModalCoin:hover {
  background: $mainColor;
}
</style>