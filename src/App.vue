<template>
  <div id="app">
    <div class="mobile-header" v-if="$store.state.isMobile">
      <div id="mobile-menu-button" @click="toggleMobileMenu()">
        <img src="@/assets/svg/menu.svg" alt="" />
      </div>
      <div id="mobile-logo">Company logo</div>
      <div class="mobile-buttons">
        <button
          id="currency-button"
          @click="modals.currencyModal.isVisible = true"
        >
          {{ pageCoin }}
        </button>
        <button id="lang-button" @click="modals.languageModal.isVisible = true">
          <img :src="require(`@/assets/svg/${langIcon}.svg`)" />
        </button>
      </div>
    </div>
    <div
      id="mobile-menu-container"
      v-if="$store.state.isMobile"
      :style="{ left: `${menuPosition}vw` }"
    >
      <div id="mobile-menu">
        <div class="filter-title">Stay Duration</div>
        <stay-inputs />
        <div class="filter-title">Filter by type</div>
        <filter-inputs />
        <div class="filter-title">Filter by price</div>
        <price-inputs />
      </div>
    </div>
    <header v-if="$store.state.isMobile == false">
      <div id="header-content" class="desktop-header">
        <div id="title">Company Name</div>
        <div id="sub-title">The premier vacationing solution</div>

        <div id="company-logo">Company Logo</div>
        <div id="header-right-content">
          <button
            id="currency-button"
            @click="modals.currencyModal.isVisible = true"
          >
            {{ pageCoin }}
          </button>
          <button
            id="lang-button"
            @click="modals.languageModal.isVisible = true"
          >
            <img :src="require(`@/assets/svg/${langIcon}.svg`)" />
          </button>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer v-if="$store.state.isMobile == false">
      <div class="section-title" style="margin: 0; padding-top: 2vh">
        <div class="main-title" style="color: white">Contact</div>
        <div class="sub-title" style="color: white">
          Don't hesitate to contact us
        </div>
      </div>
      <div id="contact-wrapper">
        <div id="contact-content">
          <div
            class="contact-card"
            v-for="(contact, index) in contacts"
            :key="index"
          >
            <div
              class="contact-icon"
              :style="{
                'background-image': `url(${require(`@/assets/svg/${contact.icon}`)})`,
              }"
            ></div>
            <div class="contact-data">{{ contact.data }}</div>
          </div>
        </div>
        <div id="contact-social">
          <div
            class="social-card"
            v-for="(social, index) in socials"
            :key="index"
          >
            <div
              class="social-icon"
              :style="{
                'background-image': `url(${require(`@/assets/svg/${social.icon}`)})`,
              }"
            ></div>
            <div class="social-data">{{ social.data }}</div>
          </div>
        </div>
      </div>
      <div id="credits">
        Photos by Quang Nguyen Vinh, Felix Mittermeier and Mateusz Sałaciak from
        <a href="https://www.pexels.com/" target="_blank">Pexels</a> <br />
        Contact icons courtest of
        <a href="https://icons.mono.company/" target="_blank">Mono Icons</a>
        <br />
        Social icons courtesy of
        <a href="https://github.com/edent/SuperTinyIcons" target="_blank"
          >Super Tiny Icons</a
        >
      </div>
    </footer>
    <modals :modals="modals" />
  </div>
</template>
<script>
import modalData from "./assets/js/ModalData";
import Modals from "./components/Modals.vue";
import StayInputs from "./components/StayInputs.vue";
import FilterInputs from "./components/FilterInputs.vue";
import PriceInputs from "./components/PriceInputs.vue";
export default {
  components: { Modals, StayInputs, FilterInputs, PriceInputs },
  data() {
    return {
      menuPosition: -100,
      langIcon: "united-kingdom",
      modals: modalData,
      contacts: [
        {
          icon: "call.svg",
          data: "0244 555 555",
        },
        {
          icon: "mobile.svg",
          data: "0725 555 555",
        },
        {
          icon: "email.svg",
          data: "info@example.com",
        },
      ],
      socials: [
        {
          icon: "facebook.svg",
          data: "Facebook",
        },
        {
          icon: "whatsapp.svg",
          data: "Whatsapp",
        },
        {
          icon: "twitter.svg",
          data: "Twitter",
        },
      ],
    };
  },
  computed: {
    pageLang: function () {
      return this.$store.state.pageLang;
    },
    pageCoin: {
      get() {
        return this.$store.state.pageCoin;
      },
      set(newValue) {
        this.$store.commit("setpagecoin", newValue);
      },
    },
  },
  mounted() {},
  methods: {
    toggleMobileMenu() {
      if (this.menuPosition == 0) {
        this.menuPosition = -100;
      } else {
        this.menuPosition = 0;
      }
    },
  },
  watch: {
    pageLang(newValue, oldValue) {
      switch (newValue) {
        case "ro":
          this.langIcon = "romania";
          this.pageCoin = "RON";
          break;
        case "en":
          this.langIcon = "united-kingdom";
          this.pageCoin = "GBP";
          break;
      }
      console.log(oldValue);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
@import "@/assets/scss/header";

.mobile-header {
  width: 100%;
  height: 50px;
  background: $mainColor;
}

.mobile-buttons {
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  button {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
  }
}

#mobile-menu-button {
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: auto;
  }
}

#mobile-logo {
  width: 100px;
  height: 45px;
  background: white;
  position: absolute;
  top: 2px;
  left: 35%;
  text-align: center;
  border-radius: 0.5em;
  font-weight: bold;
  color: $mainColor;
}

#mobile-menu-container {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 5;
  transition: 0.3s all ease-in-out;
}

#mobile-menu {
  width: 50%;
  height: 100%;
  background: $mainColor;
  -webkit-box-shadow: inset 0px 3px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: inset 0px 3px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: inset 0px 1px 5px 0px rgba(0, 0, 0, 0.45);
  position: relative;
  z-index: 3;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
body {
  padding: 0;
  margin: 0;
  background: $mainLightShade;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

main {
  width: 65vw;
  margin: auto;
  margin-top: 30px;
}

@media screen and(max-width: 915px) {
  main{
    width: 100%;
  }
}

@media screen and(max-width: 412px){
  main {
    width: 100%;
  }
}


@import "@/assets/scss/footer";
</style>
