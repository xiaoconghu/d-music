<template>
    <div class="header">
        <!--<div class="block">-->
            <wxc-ep-slider :slider-id="sliderId"
                           :card-length='cardLength'
                           :card-s="cardSize"
                           :select-index="2"
                           @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
                <!--自动生成demo-->
                <div v-for=" (item,index) in swipes" :key="index"
                     :slot="`card${index}_${sliderId}`"
                     :class="['slider',`slider${index}`]">
                    <image class="l-image" :src="item.picUrl"></image>
                </div>
            </wxc-ep-slider>
        <text class="list-title">热门歌单推荐</text>
        <div class="song-recommend">
            <list>
                <cell class="recommend-ceil" v-for="(item, index) in items" :key="index"
                      @click="goToDetail(item.dissid)">
                    <div class="song-img">
                        <image class="s-image" :src="item.imgurl"></image>
                    </div>
                    <div class="song-info">
                        <a href="">{{item.creator.name}}</a>
                        <text>{{item.dissname}}</text>
                    </div>
                </cell>
            </list>
        </div>
    </div>

</template>

<script>
    import {WxcEpSlider} from 'weex-ui';

    export default {
        name: 'recommend',
        components: {WxcEpSlider},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                items: [],
                swipes: [],
                sliderId: 1,
                cardLength: 5,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                }
            }
        },
        created() {
            this.getRecommend();
            this.getCdInfo();
        },
        methods: {
            getRecommend() {
                this.$recommendService.getRecommend().then(success => {
                    console.log(success);
                    this.swipes = success.data.slider;
                }, err => {
                    throw new Error(err);
                })
            },
            getCdInfo() {
                this.$recommendService.getCdInfo().then(success => {
                    this.items = success.data.list;
                })
            },
            goToDetail(id) {
                this.$router.push({
                    path: `/recommend/detail/${id}`,
                })
            },
            wxcEpSliderCurrentIndexSelected(e) {
                const index = e.currentIndex;
                console.log(index);
            }

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        width: 750px;
        height: 1400px;
        overflow: hidden;
    }

    .l-image {
        width: 350px;
        height: 300px;
    }

    .s-image {
        width: 120px;
        height: 120px;
    }

    .block {
        width: 750px;
        height: 300px;
    }
    .slider {
        width: 400px;
        height: 300px;
        background-color: #C3413D;
        align-items: center;
        justify-content: center;
    }

    .list-title {

        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: 30px;
        color: #ffcd32;
    }

    .song-recommend {
        height: 800px;
        overflow: scroll;
    }

    .recommend-ceil {
        flex-direction: row;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding-left: 20px;
        padding-bottom: 20px;
    }

    .song-img {
        /*flex: 0 0 120px;*/
        width: 120px;
        padding-right: 20px;
        margin-right: 40px;
    }

    .song-info {
        /*flex: 5;*/
        text-align: left;
    }
    .wrapper {
        padding-top: 100px;
    }

    .slider {
        width: 400px;
        height: 300px;
        background-color: #C3413D;
        align-items: center;
        justify-content: center;
    }

    .slider1 {
        background-color: #635147;
    }

    .slider2 {
        background-color: #FFC302;
    }

    .slider3 {
        background-color: #FF9090;
    }

    .slider4 {
        background-color: #546E7A;
    }
</style>
