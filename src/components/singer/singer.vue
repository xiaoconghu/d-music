<template>
        <div class="container">
            <wxc-indexlist :normal-list="singerData"
                           :hot-list-config="hotListConfig"
                           :city-location-config="cityLocationConfig"
                           @wxcIndexlistItemClicked="wxcIndexlistItemClicked"
                           :show-index="showIndex"></wxc-indexlist>
        </div>
</template>
<style lang="css" type="text/css" rel="stylesheet/css" scoped>
    .container{
        width: 750px;
        height: 1400px;
    }

</style>
<script>
    const modal = weex.requireModule('modal');
    // import {CommonUtil} from '../../core/utils/common-util';
    import { WxcIndexlist } from 'weex-ui';
    export default {
        components: { WxcIndexlist },
        data() {
            return {
                msg: 'hello vue',
                singerData: [],
                showIndex: true,
                cityLocationConfig: {

                },
                hotListConfig:{}
            }
        },
        created() {
            this.getSingerList();
        },
        methods: {
            getSingerList() {
                let data, arr = [];
                // let generateBig = CommonUtil.generateBig_1();
                // let generateBig = [];
                this.$singerService.getSingerList().then(success => {
                    data = success.data.list;
                    console.log(data);
                    data.forEach((_item, index) => {
                        _item._Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`
                        if (index < 5) {
                            arr.push(_item);
                        }
                        let obj = {name: _item.Fsinger_name, desc: _item.Fother_name, pinYin: _item.Findex, py: 'ql'};
                        this.singerData.push(obj)
                    });

                    // this.singerData.push({index: '热', childNode: arr});
                    // generateBig.forEach(item => {
                    //     let arr = data.filter((_item, index) => {
                    //         if (item === _item.Findex) {
                    //             return _item
                    //         }
                    //     });
                    //     let obj;
                    //     if (data.length > 0) {
                    //         obj = {index: item, childNode: arr};
                    //     }
                    //     this.singerData.push(obj)
                    // })
                });
            },
            selectItem(id){
                this.$router.push({
                    path: `/singer/detail/${id}`,
                })
            },
            wxcIndexlistItemClicked (e) {
                console.log(e)
            }
        }

    }
</script>
