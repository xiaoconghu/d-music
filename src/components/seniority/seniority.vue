<template>
    <div class="seniority">
        <list class="s-list">
            <cell class="s-wrap" v-for="(item,index) in listData" :key="index"  >
                <image  class="w-image" :src="item.picUrl"></image>
                <list class="w-list">
                    <cell class="info" v-for="(title,index) in item.songList" :key="index" @click="goToDetail(item.id)">
                        <text class="text">{{index+1}} {{title.songname}}-{{title.singername}}</text>
                    </cell>
                </list>
            </cell>
        </list>
    </div>
</template>

<style  scoped>
    .seniority{
        width: 750px;
        height: 1400px;
    }
    .s-list {
        /*overflow: hidden;*/

    }

    .s-wrap {
        padding-bottom: 30px;
        background-color: #222222;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

    }
    .w-image{
        width: 220px;
        height:220px;
    }
    .w-list{
        background-color: #333333;
        flex-shrink:1;
        /*flex: 1;*/
        /*overflow: hidden;*/
    }
        
    .info {
        margin-top: 20px;
        margin-left: 10px;
        width: 500px;
        overflow: hidden;
    }
    .text{
        margin-bottom: 10px;
        color: #ffffff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>

<script>
    export default {
        data() {
            return {
                listData: []
            }
        },
        created() {
            this.getTopList();
        },
        methods: {
            getTopList() {
                this.$seniorityService.getTopList().then(success => {
                    console.log(success);
                    this.listData = success.data.topList;
                }, failed => {
                    console.log(failed);
                })
            },
            goToDetail(id){
                this.$router.push({
                    path: `/seniority/detail/${id}`,
                })
            }
        }
    }
</script>
