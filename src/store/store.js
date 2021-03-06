import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import cinema from './modules/cinema.js'
import city from './modules/city.js'
import hotmovie from './modules/movielist.js'
import cinemaInfo from './modules/cinemaInfo.js'
import ticket from './modules/ticket.js'
Vue.use(Vuex)
var HotList = []
for (var i = 0; i < 10; i++) {
    HotList.push(Mock.mock({
        'id': Mock.Random.guid(),
        'name': Mock.Random.ctitle(4),
        'img': Mock.Random.dataImage('90x122'),
    }))
}
var futureList = []
for (var i = 0; i < 10; i++) {
    futureList.push(Mock.mock({
        'id': Mock.Random.guid(),
        'name': Mock.Random.ctitle(4),
        'img': Mock.Random.dataImage('120x162'),
        'date': `12月${i + 2}日`,
    }))
}
var heraldList = []
for (var i = 0; i < 5; i++) {
    heraldList.push(Mock.mock({
        'id': Mock.Random.guid(),

        'img': Mock.Random.dataImage('295x160'),
        'text': Mock.Random.ctitle(30),
    }))
}

var cinemaList = []
for (var i = 0; i < 6; i++) {
    cinemaList.push(Mock.mock({
        'id': Mock.Random.guid(),
        'name': Mock.Random.ctitle(5),
        'position': Mock.Random.ctitle(10),
        'price': '19.9',
    }))
}


export default new Vuex.Store({
    state: {
        hotList: HotList,
        futureList: futureList,
        heraldList: heraldList,
        cinemaList: cinemaList,
        bought: [{
                id: 57,
                row: 5,
                li: 7
            },
            {
                id: 56,
                row: 5,
                li: 6
            }
        ],
    },
    mutations: {
        boughtList(state, val) {
            state.bought = state.bought.concat(val)
            console.log(state.bought)
        }
    },
    actions: {

    },
    modules: {
        cinema,
        city,
        cinemaInfo,
        hotmovie,
        ticketData:ticket
    }
})