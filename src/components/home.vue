<template>
    <div class="container">
        <text class="header">Monica Music</text>
        <text class="logout"
              @click="logout()">注销
        </text>
        <wxc-tab-page ref="wxc-tab-page"
                      :tab-titles="tabTitles"
                      :tab-styles="tabStyles"
                      title-type="text"
                      :tab-page-height="tabPageHeight"
                      @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            <!-- 第一个页面内容-->
            <!--<div class="item-container" :style="tabStyles">-->
                <!---->
            <!--</div>-->
            <recommend></recommend>
            <!-- 第二个页面内容-->
            <!--<div class="item-container" :style="tabStyles">-->
                <singer></singer>
            <!--</div>-->

            <!-- 第三个页面内容-->
            <!--<div class="item-container" :style="tabStyles">-->
                <seniority></seniority>
            <!--</div>-->

            <!-- 第四个页面内容-->
            <!--<div class="item-container" :style="tabStyles">-->
                <search></search>
            <!--</div>-->
        </wxc-tab-page>
    </div>
</template>

<style scoped>
    .container {
        background-color: #222;
        /*position: relative;*/
        width: 750px;
        height: 1400px;
        /*overflow: hidden;*/
    }

    .header {
        text-align: center;
        color: yellow;
        margin-top: 20px;
    }

    .item-container {
        width: 750px;
        height: 1400px;
        background-color: #000;
    }

    .logout {
        position: absolute;
        top: 20px;
        color: yellow;
        line-height: 35px;
        right: 26px;
    }

    .border-cell {
        background-color: #f2f3f4;
        width: 750px;
        height: 24px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }

    .cell {
        background-color: #ffffff;
    }

    .content {
        width: 750px;
        height: 300px;
        border-bottom-width: 1px;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    const dom = weex.requireModule('dom');
    import {BindEnv, Utils, WxcPanItem, WxcTabPage} from 'weex-ui';
    import recommend from '@/components/recommend/recommend';
    import singer from '@/components/singer/singer';
    import seniority from '@/components/seniority/seniority';
    import search from '@/components/search/search';
    import Vue from 'vue'
    import Config from '@/components/config'

    export default {
        components: {WxcTabPage, WxcPanItem, recommend, singer, seniority, search},
        data: () => ({
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            tabList: [],
            demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            tabPageHeight: 1334
        }),
        created() {
            this.tabPageHeight = Utils.env.getPageHeight();
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
            Vue.set(this.tabList, 0, this.demoList);
        },
        methods: {
            wxcTabPageCurrentTabSelected(e) {
                const self = this;
                const index = e.page;
                /* Unloaded tab analog data request */
                if (!Utils.isNonEmptyArray(self.tabList[index])) {
                    setTimeout(() => {
                        Vue.set(self.tabList, index, self.demoList);
                    }, 100);
                }
            },
            wxcPanItemPan(e) {
                if (BindEnv.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            },
            logout() {
                weex.requireModule('storage').removeItem('loginInfo',function (e) {
                    console.log(e);
                })
                this.$router.push('/login')
            }
        }
    };
</script>
