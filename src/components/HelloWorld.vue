<template>
    <div class="overall">
        <!-- 拖拽 -->
        <SlickList
            :lockToContainerEdges="true"
            axis="x"
            lockAxis="x"
            v-model="items"
            class="SortableList"
            @input="getChangeLists"
        >
            <SlickItem v-for="(item, index) in items" class="SortableItem" :index="index" :key="index">
                <div class="title">{{ item.name }}</div>
                <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.itemArr" @input="getChangeList">
                    <SlickItem
                        class="list-item"
                        v-for="(item, index) in item.itemArr"
                        :index="index"
                        :key="index"
                    >{{ item }}
                    </SlickItem>
                </SlickList>
            </SlickItem>
        </SlickList>
    </div>
</template>

<script>
    import {SlickList, SlickItem} from 'vue-slicksort'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        components: {
            SlickItem,
            SlickList,
        },
        data() {
            return {
                flag: true,
                items: [
                    {
                        name: '拖拽',
                        itemArr: ['上', '中', '下'],
                    },
                    {
                        name: "Tab-2",
                        itemArr: ["2-1", "2-2", "2-3"]
                    },
                    {
                        name: "Tab-3",
                        itemArr: ["3-1", "3-2", "3-3"]
                    }
                ],
            };
        },
        methods: {
            getChangeList(val) {
                // eslint-disable-next-line no-console
                console.log(val, '二级');
            },
            getChangeLists(vals) {
                //  拖拽完成后返回被打乱后的顺序
                // eslint-disable-next-line no-console
                console.log(vals, '一级');
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list {
        width: 100%;
        max-height: 80vh;
        margin: 0 auto;
        padding: 0;
        overflow: auto;
        background-color: #f3f3f3;
    }

    .list-item {
        width: 100%;
        /*   padding: 20px;*/
        background-color: #fff;
        box-sizing: border-box;
        color: #333;
        font-weight: 400;
        text-align: center;
        padding: 20px;
        box-shadow: 0 1px 2px #ccc;
    }

    .SortableList {
        display: flex;
        width: 600px;
        max-height: 90vh;
        margin: 0 auto;
        background-color: #dfdbdb;

    }

    .SortableItem {
        text-align: center;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        /*不允许用户选中文字*/
        user-select: none;
        color: #333;
        font-weight: 400;
        position: relative;
        box-shadow: 0 1px 2px #ccc;
    }

    .title {
        height: 50px;
        width: 100%;
        background: rgba(11, 145, 71, 0.658);
        color: white;
        font-weight: bold;
        line-height: 50px;
    }


</style>
