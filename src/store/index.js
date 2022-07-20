import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

export default new Vuex.Store({
  state: {
    isMobile: detectMob(),
    pageLang: "en",
    pageCoin: "GBP",
    offerData: [
      {
        name: 'City',
        locations: 3,
        promoOffer: true,
        img: 'pexels-felix-mittermeier-2832039'
      },
      {
        name: 'Mountain',
        locations: 3,
        promoOffer: true,
        img: 'pexels-mateusz-sałaciak-4275885'
      },
      {
        name: 'Beach',
        locations: 3,
        promoOffer: true,
        img: 'pexels-quang-nguyen-vinh-3355732'
      },
    ],
    properties: [
      {
        location: 'City',
        title: 'Central Hotel',
        category: 'urban',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '8.9',
        pricePerDay: 100,
        img: 'pexels-felix-mittermeier-2832039'
      },
      {
        location: 'Mountain',
        title: 'Rustic Cabin',
        category: 'mountain',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '5.5',
        pricePerDay: 250,
        img: 'pexels-mateusz-sałaciak-4275885'
      },
      {
        location: 'Beach',
        title: 'Beachfront Hotel',
        category: 'beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '9.5',
        pricePerDay: 350,
        img: 'pexels-quang-nguyen-vinh-3355732'
      },
      {
        location: 'City',
        title: 'Old Hotel',
        category: 'urban',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '7.6',
        pricePerDay: 87,
        img: 'pexels-felix-mittermeier-2832039'
      },
      {
        location: 'Mountain',
        title: 'Renovated Cabin',
        category: 'mountain',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '3.5',
        pricePerDay: 98,
        img: 'pexels-mateusz-sałaciak-4275885'
      },
      {
        location: 'Beach',
        title: 'Ocean View Hotel',
        category: 'beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim pretium felis vel ornare. Vestibulum auctor faucibus arcu, id tristique libero tincidunt non. Integer in convallis ex.',
        score: '6.5',
        pricePerDay: 120,
        img: 'pexels-quang-nguyen-vinh-3355732'
      },
    ],
    endDay: {
      '01': "31",
      '02': "29",
      '03': "31",
      '04': "30",
      '05': "31",
      '06': "30",
      '07': "31",
      '08': "31",
      '09': "30",
      '10': "31",
      '11': "30",
      '12': "31",
    },
    filteredProperties: null,
    filter: false
  },
  mutations: {
    setpagelang: function(state, payload){
      state.pageLang = payload
    },
    setpagecoin: function(state, payload){
      state.pageCoin = payload
    },
    setfilteredproperties(state, payload){
      state.filteredProperties = payload
    },
    setfilter(state, payload){
      state.filter = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
