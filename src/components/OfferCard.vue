<template>
    <div class="offer-card" :style="{'background-image': `url(${require(`@/assets/img/${offer.img}.jpg`)})`}">
        <div class="offer-card-name">
            {{offer.name}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        offer: {
            type: Object,
            default: function(){
                return {}
            }
        }
    }
}
</script>
<style lang="scss">
.offer-card{
    width: 300px;
    height: 300px;
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
}
.offer-card-name{
    background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0, 0, 0, 0.6));
    color: white;
    padding: 0.2em 0.5em;
    border-radius: 5px;
}

@media screen and(max-width:412px) {
    .offer-card{
        width: 150px;
        height: 150px;
        margin: 0.8em;
    }
}
</style>