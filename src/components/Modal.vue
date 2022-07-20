<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <div class="modal-close" @click="closeModal()"><img src="@/assets/svg/close.svg" alt=""></div>
  </div>
</template>

<script>
export default {
  props:{
    isVisible: {
      type: Boolean,
      default: false
    },
    modalName:{
      type: String,
      default: 'Default'
    }
  },
  methods: {
    closeModal(){
      window.EventBus.dispatch("closemodal", this.modalName)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/imports";
.modal{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-background{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: $mainDarkShade;
}

.modal-content{
  position: relative;
  z-index: 2;
  border-radius: 0.5vw;
  padding: 2em;
  background: $mainLightShade;
}

.modal-close{
  width: 1vw;
  height: 1vh;
  position: absolute;
  top: 2vh;
  right: 2vh;
  z-index: 11;
  cursor: pointer;
}
</style>
