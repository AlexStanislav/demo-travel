<template>
    <div class="property-container">
        <div class="property-img" :style="{'background-image': `url(${require(`@/assets/img/${property.img}.jpg`)})`}"></div>
        <div class="property-content">
            <div class="property-title">{{property.title}}</div>
            <div class="property-description">{{property.description}}</div>
            <div class="property-score">{{property.score}}</div>
            <div class="property-quality">{{propertyQuality()}}</div>
            <div class="property-price"><span>{{finalPrice}} <span v-if="parseInt(finalPrice, 10) > 0">{{$store.state.pageCoin}}</span></span></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            days: 0,
            finalPrice: parseInt(this.property.finalPrice, 10) > 0 ? this.property.finalPrice : 'Please select stay duration',
        }
    },
    props:{
        property:{
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    methods:{
        propertyQuality(){
            let score = parseInt(this.property.score, 10)
            switch(score){
                case 1:
                case 2:
                case 3:
                    return 'Bad'
                case 4:
                case 5:
                    return 'Ok'
                case 6:
                case 7:
                case 8:
                    return 'Good'
                case 9:
                case 10:
                    return 'Best'

            }
        }
    },
    mounted(){
        let self = this
        window.EventBus.listen('daysselected', function(days){
            self.days = days
        })
    },
    watch: {
        days(){
            this.finalPrice = `${this.days * this.property.pricePerDay}`
            this.property.finalPrice = this.finalPrice
            window.EventBus.dispatch("priceproperty", this.property)
        }
    },
}
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.property-container{
    width: 95%;
    margin: 1vh auto;
    border: 1px solid $mainLight;
    padding: 0.5em;
    box-sizing: border-box;
    border-radius: 0.5em;
    display: flex;
    position: relative;
}

.property-img{
    width: 150px;
    height: 150px;
    border-radius: 0.5em;
    background-size: cover;
}

.property-content{
    width: calc(95% - 200px);
    margin: 0 auto;
}

.property-title{
    font-size: 1.3em;
    color: $mainColor;
    font-weight: 700;
}

.property-description{
    text-align: justify;
    margin: 0.5vh 0;
    font-size: 0.9em;
}

.property-score{
    width: 1.5em;
    text-align: center;
    position: absolute;
    right: 1em;
    bottom: 1em;
    background: $mainColor;
    color: white;
    padding: 0.5em;
    border-radius: 0.3em;
}

.property-quality{
    position: absolute;
    right: 4em;
    bottom: 1.6em;
    font-weight: bold;
    color: $mainColor;
}

.property-price{
    position: absolute;
    bottom: 1.5em;
    font-size: 1em;
    font-weight: bold;
    color: $mainColor;
    span{
        color: $mainDarkAccent;
        font-weight: 400;
    }
}
@media screen  and(max-width:412px){
    .property-content{
        width: calc(110% - 200px);
        height: 220px;
    }
    .property-score{
        left: 1em
    }
    .property-quality{
        left: 4em;
    }
    .property-price{
        width: 170px;
        bottom: 1em;
        font-size: 0.8em;
    }
}
</style>