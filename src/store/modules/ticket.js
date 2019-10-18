import Mock from "mockjs";
const Random = Mock.Random;
const ticketlist = {
    state: {
        ticketdate: [{
                id: Random.guid(),
                img: require("@/assets/movie-imgs/myorder/movie.png"),
                filmname: "星空",
                cinema:'万达影城',
                //   评分
                ticketNum:'1',
                status:1,
                date: "12月1日",
                time:'17:00',
                positon:'5号厅',
                seat:'5排14座',
                price:"100"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/myorder/movie2.png"),
                filmname: "帕丁顿熊",
                cinema:'万达影城',
                //   评分
                ticketNum:'1',
                status:2,
                date: "12月1日17:00",
                time:'17:00',
                positon:'5号厅',
                seat:'5排14座',
                price:"100"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/myorder/movie3.png"),
                filmname: "大鱼海棠",
                cinema:'万达影城',
                //   评分
                ticketNum:'1',
                status:4,
                date: "12月1日17:00",
                time:'17:00',
                positon:'5号厅',
                seat:'5排14座',
                price:"100"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/myorder/movie3.png"),
                filmname: "后来的我们",
                cinema:'万达影城',
                //   评分
                ticketNum:'1',
                status:3,
                date: "12月1日17:00",
                time:'17:00',
                positon:'5号厅',
                seat:'5排14座',
                price:"100"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/myorder/movie3.png"),
                filmname: "后来的我们",
                cinema:'万达影城',
                //   评分
                ticketNum:'1',
                status:2,
                date: "12月1日17:00",
                time:'17:00',
                positon:'5号厅',
                seat:'5排14座',
                price:"100"
            }
        ],

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}
export default ticketlist