<template>
    <div class="container">
        <div class="search-t">
            <input type="text" class="search-input" v-model="value"
                   @input="searchChange($event)"
                   placeholder="搜索歌曲、歌名">
        </div>
        <div class="search-hot-key" v-show="!value">
            <text class="se-text">热门搜索</text>
            <list class="se-keyword">
                <cell class="hot-key" v-for="(item,index) in hotKey" :key="index" @click="searchIt(item.k)">
                    <text>{{item.k}}</text>
                </cell>
            </list>
        </div>
        <!--<div class="search-list" v-show="value">-->
            <!--<list class="s-list">-->
                <!--<cell class="s-ceil" v-for="(item,index) in songList" :key="index" @click="navigateToDetail(index)">-->
                    <!--<text class="iconfont icon-yinle1"></text>-->
                    <!--<text>{{item.songname}}</text>-->
                <!--</cell>-->
            <!--</list>-->
        <!--</div>-->
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    // import {getSongUrlList} from '../../core/utils/song-util'
    export default {
        data() {
            return {
                value: '',
                result: [
                    {title: 'ssss', value: 'ssss'},
                ],
                hotKey: [],
                songList: [],
            }
        },
        created() {
            this.getSearchKey();
        },
        methods: {
            getSearchKey() {
                this.$searchService.getSearchKey().then(success => {
                    console.log(success);
                    this.hotKey = success.data.hotkey.slice(0, 10);
                }, failed => {
                    console.log(failed.msg);
                })
            },
            searchIt(key) {
                this.search(key);
                this.value = key;
            },
            searchChange(event) {
                this.search(event.target.value)
            },
            search(value) {
                this.$searchService.searchMusicByKeyWord(value).then(success => {
                    let list = success.data.song.list;
                    getSongUrlList(list).then(res => {
                        this.songList = res
                    }, failed => {

                    })
                }, failed => {

                })
            },
            deleteValue() {
                this.value = '';
            },
            navigateToDetail(index) {
                this.currentMusic(this.songList);
                this.currentMusicIndex(index);
                this.playAll({isPlay: true});
                this.playerDetailShow(true);
            },
            ...mapActions([
                'currentMusic',
                'currentMusicIndex',
                'playAll',
                'playerDetailShow'
            ])
        }
    }</script>

<style lang="css" type="text/css" rel="stylesheet/css" scoped>
    .container {
        width: 750px;
        height: 1400px;
    }

    .search-t {
        /*margin: px2rem(20px);*/
        /*padding: 30px 15px;*/
    }

    .search {
        /*padding: 0 30px;*/
        display: flex;
        /*-ms-flex-align: center;*/
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        /*padding: px2rem(20px) px2rem(6px);*/
        height: 60px;
        background-color: #333;
        border-radius: 6px;

    }

    .icon-color {
        color: #866363 !important;
    }

    .search-input {
        /*flex-shrink: 1;*/
        margin-top: 20px;
        margin-left: 20px;
        border-radius: 10px;
        padding-left: 20px;
        width: 710px;
        height: 90px;
        /*margin: 0 5px;*/
        /*line-height: px2rem(18px);*/
        background-color: #333;
        color: #fff;
        font-size: 24px;
        outline: 0;
    }

    .search-hot-key {
        margin-bottom: 30px;
        font-size: 24px;
        color: hsla(0, 0%, 100%, .5);

    }

    .hot-key {
        width: 400px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        margin-bottom: 20px;
        flex-direction: row;
        border-radius: 6px;
        background-color: #333;
        font-size: 24px;
        float: left;
    }

    .search-list {

    }

    .s-list {
        /*padding: 30px;*/
    }

    .s-ceil {
        flex-direction: row;
        display: flex;
        align-items: center;
        padding-bottom: 6px;
        color: hsla(0, 0%, 100%, .3);

    }

    .se-text {
        margin-left: 20px;
    }

    .se-keyword {
        width: 750px;
        height: 800px;
        display: flex;
        /*width: 150px;*/
        margin-left: 20px;
    }

</style>
