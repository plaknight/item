import cityList from "@/views/home/city/data.json";
const city = {
    namespaced: true,
    state: {
        // cityList: require("@/views/home/city/data.json"),
        address: "",
        // cityListLetter: Object.keys(cityList).filter(el => el !== "hot"),
        // hotCity: cityList["hot"],
        // letter: "A",
        historyCity: []
    },
    mutations: {
        changeAddress(state, val) {
            state.address = val
        },
        //百度地图定位
        initPosition(state) {
            var map = new BMap.Map("allmap");
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(
                function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        var geoc = new BMap.Geocoder();
                        var point = new BMap.Point(r.point.lng, r.point.lat);

                        //地址逆解析
                        geoc.getLocation(point, function (rs) {
                            var addComp = rs.addressComponents;
                            state.address = addComp.city.slice(0, addComp.city.length - 1)
                            if (!state.historyCity.some(el => el === state.address)) {
                                state.historyCity.push(state.address);
                            }
                        });
                    } else {
                        alert("failed" + this.getStatus());
                    }
                },
                { enableHighAccuracy: true }
            );
        },


        //往历史数组里面push
    },
    actions: {

    },
    getters: {
        // getcityList(state) {
        //     return state.cityList
        // },
        getAddress(state) {
            return state.address
        },

        gethistoryCity(state) {
            return state.historyCity
        }
        // getcityListLetter(state) {
        //     return state.cityListLetter
        // },
        // gethotCity(state) {
        //     return state.hotCity
        // }
    }
}
export default city