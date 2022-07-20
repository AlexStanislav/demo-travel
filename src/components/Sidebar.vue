<template>
  <div id="sidebar" v-if="$store.state.isMobile == false">
    <div class="filter-container">
      <div class="filter-title">Stay Duration</div>
      <div class="stay-inputs">
        <label for="check-in-date">Check In</label>
        <input
          type="date"
          id="check-in-date"
          :min="new Date().toLocaleDateString('en-ca')"
          class="check-in-date"
          @change="selectDate"
          v-model="dates.checkIn"
        />
        <label for="check-out-date">Check Out</label>
        <input
          type="date"
          id="check-out-date"
          :min="dates.checkoutMin"
          class="check-out-date"
          @change="getDays()"
          v-model="dates.checkOut"
        />
      </div>
      <div class="filter-title">Filter</div>
      <div class="filter-inputs">
        <div class="filter-reset">
          <button v-if="hasFilter" @click="resetFilters">Reset filters</button>
        </div>
        <CustomCheck :checkName="'Urban'">Urban</CustomCheck>
        <CustomCheck :checkName="'Beach'">Beach</CustomCheck>
        <CustomCheck :checkName="'Mountain'">Mountain</CustomCheck>
      </div>
    </div>
  </div>
</template>
<script>
import CustomCheck from './CustomCheck.vue';
export default {
    data() {
        return {
            dates: {
                checkIn: "",
                checkOut: "",
                checkoutMin: "",
                selectedDays: 0,
            },
        };
    },
    computed:{
      hasFilter:{
        get(){
          return (this.$store.state.filter !== false)
        },
        set(newValue){
          this.$store.commit("setfilter", newValue)
          let radios = document.getElementsByClassName("customRadio")
          for (const radio of radios) {
            radio.checked = false
          }
        }
      }
    },
    methods: {
        resetFilters(){
          this.hasFilter = false
        },
        selectDate(event) {
            let currentDate = event.target._value.split("-");
            let endDay = parseInt(this.$store.state.endDay[currentDate[1]], 10);
            let nextDay = parseInt(currentDate[2], 10) + 1;
            let currentMonth = parseInt(currentDate[1], 10);
            if (nextDay > endDay) {
                nextDay = "01";
                currentMonth += 1;
            }
            if (currentMonth <= 9) {
                currentMonth = `0${currentMonth}`;
            }
            if (nextDay <= 9) {
                nextDay = `0${nextDay}`;
            }
            this.dates.checkoutMin = `${currentDate[0]}-${currentMonth}-${nextDay}`;
        },
        getDays() {
            let checkIn = new Date(this.dates.checkIn).getTime();
            let checkOut = new Date(this.dates.checkOut).getTime();
            let numberOfDays = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
            this.dates.selectedDays = numberOfDays;
            window.EventBus.dispatch("daysselected", numberOfDays);
        },
    },
    components: { CustomCheck }
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

.stay-inputs {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 1vh 0;
  position: relative;
  input {
    width: 80%;
    border: none;
    padding: 0.3em;
    margin: 0.5vh 0;
    border-radius: 0.3em;
  }
  label {
    width: 80%;
    color: white;
  }
  label:nth-child(3) {
    margin: 1vh 0 0 0;
  }
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
</style>