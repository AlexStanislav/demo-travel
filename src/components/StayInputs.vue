<template>
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
</template>
<script>
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
  methods: {
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
};
</script>
<style lang="scss">
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
@media screen and(max-width: 420px) {
  .stay-inputs{
    margin-top: 0;
    padding-top: 1vh;
  }
}
</style>