// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        // Mock.Random.flot 产生100-8000之间的随机数，保留小数最小0位，最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '苹果',
                        value: 1999
                    },
                    {
                        name: 'vivo',
                        value: 3612
                    },
                    {
                        name: 'oppo',
                        value: 2976
                    },
                    {
                        name: '魅族',
                        value: 1788
                    },
                    {
                        name: '三星',
                        value: 932
                    },
                    {
                        name: '小米',
                        value: 4105
                    }
                ],
                // 柱状图
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        activate: 200
                    },
                    {
                        data: '周二',
                        new: 10,
                        activate: 500
                    },
                    {
                        data: '周三',
                        new: 12,
                        activate: 550
                    },
                    {
                        data: '周四',
                        new: 60,
                        activate: 800
                    },
                    {
                        data: '周五',
                        new: 65,
                        activate: 550
                    },
                    {
                        data: '周六',
                        new: 53,
                        activate: 770
                    },
                    {
                        data: '周日',
                        new: 33,
                        activate: 170
                    },
                ],
                // 折线图
                orderData: {
                    date: ['20240328', '20240329', '20240330', '20240331', '20240401', '20240402', '20240403'],
                    data: List
                },
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
                        name: 'oppo',
                        todayBuy: 440,
                        monthBuy: 2100,
                        totalBuy: 65500
                    },
                    {
                        name: 'vivo',
                        todayBuy: 480,
                        monthBuy: 1800,
                        totalBuy: 45500
                    }
                ]
            }
        }
    }
}