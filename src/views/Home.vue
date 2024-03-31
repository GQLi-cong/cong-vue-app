<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/redgirl.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2024-3-26</span></p>
                    <p>上次登录地点：<span>丁家庄</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px;">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <!-- <el-table-column
                        prop="name"
                        label="课程">
                    </el-table-column>
                    <el-table-column
                        prop="todayBuy"
                        label="今日购买">
                    </el-table-column>
                    <el-table-column
                        prop="monthBuy"
                        label="本月购买">
                    </el-table-column>
                    <el-table-column
                        prop="totalBuy"
                        label="总购买">
                    </el-table-column> -->
                    <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price"> ￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { getData } from '../api'
export default {
    data() {
        return {
            tableData: [
                {
                    name: '三星',
                    todayBuy: 300,
                    monthBuy: 1200,
                    totalBuy: 23200
                },
                {
                    name: '苹果',
                    todayBuy: 450,
                    monthBuy: 1500,
                    totalBuy: 33200
                },
                {
                    name: '小米',
                    todayBuy: 150,
                    monthBuy: 900,
                    totalBuy: 10100
                },
                {
                    name: '华为',
                    todayBuy: 230,
                    monthBuy: 1100,
                    totalBuy: 16500
                },
                {
                    name: 'OPPO',
                    todayBuy: 440,
                    monthBuy: 2100,
                    totalBuy: 65500
                },
                {
                    name: 'VIVO',
                    todayBuy: 480,
                    monthBuy: 1800,
                    totalBuy: 45500
                }
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买',
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 2333,
                    icon: "success",
                    color: '#2ec7c9'
                },
                {
                    name: "今日收藏订单",
                    value: 1356,
                    icon: "star-on",
                    color: '#ffb980'
                },
                {
                    name: "今日未支付订单",
                    value: 1233,
                    icon: "s-goods",
                    color: '#5ab1ef'
                },
                {
                    name: "本月支付订单",
                    value: 633,
                    icon: "success",
                    color: '#2ec7c9'
                },
                {
                    name: "本月收藏订单",
                    value: 423,
                    icon: "star-on",
                    color: '#ffb980'
                },
                {
                    name: "本月未支付订单",
                    value: 666,
                    icon: "s-goods",
                    color: '#5ab1ef'
                },
            ]

        }
    },
    mounted() {
        getData().then((data) => {
            console.log(data)
        })
    }
}
</script>
<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    img {
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access {
            color: #999999;
        }
    }
}
.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;
        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}
.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }
        .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }
    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}
</style>