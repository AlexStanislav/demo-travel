<template>
  <div class="customCheckContainer">
    <label class="container">
      <slot></slot>
      <input class="customRadio" type="radio" :data-filter="checkName" :name="radioGroupName" @change="selectCheck"/>
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script>
export default {
    props:{
        radioGroupName:{
            type:String,
            default: 'customRadio'
        },
        checkName: {
            type: String,
            default: ''
        }
    },
    methods:{
        selectCheck(event){
            this.$store.commit("setfilter", {name: 'category', value: event.target.dataset.filter})
        }
    }
};
</script>
<style lang="scss" scoped>

@import "@/assets/scss/imports";
/* Customize the label (the container) */
.customCheckContainer{
    width: fit-content;
    padding: 0 0.5em;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 1.2em;
  color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 0.2em;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $mainLightAccent;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 7px;
  left: 7px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
}
</style>