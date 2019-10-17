export default ({
    namespaced: true,
    state: {
      map:{
        cityName:'',
        pointLat:'',
        pointLng:''
      },
      cinemaInfo:[ 
        {
          name:'华士达影城(郑东店)',
          maney:'39元',
          address:'广场北路正大乐城3层',
          tel:'(0371)60227909',
          id:'1',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C0%2C730%2C486%3Bw%3D470%3Bq%3D99%3Bc%3Dnuomi%2C95%2C95/sign=db29c23d374e251ff6b8beb89ab6e527/faedab64034f78f06d2bfaf47e310a55b3191c90.jpg'
        },
        {
          name:'奥斯卡又一城影城(又一城店)',
          maney:'29元',
          address:'郑州市高新区科学大道89号升龙又一城广场3层',
          tel:'(0371)56184444',
          id:'2',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/lbsugc/pic/item/c2cec3fdfc039245dc5c62238a94a4c27d1e2534.jpg'
        },
        {
          name:'郑州比高电影城(东站店)',
          maney:'34元',
          address:'郑州市管城回族区心怡路永和宇宙星广场4层',
          tel:'(0371)56184444',
          id:'3',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/lbsugc/pic/item/4e4a20a4462309f7d3de738d7c0e0cf3d6cad6f8.jpg'
        },
        {
          name:'大地影院(郑州市五一影城升龙店)',
          maney:'35元',
          address:'河南省郑州市郑东新区东风南路与商鼎路交叉口东北角升龙广场3号楼B座4楼',
          tel:'(0371)69069977',
          id:'4',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/d009b3de9c82d158f296311f8d0a19d8bc3e4203.jpg'
        },
        {
          name:'奥斯卡德化电影城(德化影城店)',
          maney:'31元',
          address:'郑州市二七区德化街100号德化风情购物广场三层',
          tel:'(0371)55055508',
          id:'5',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/bainuo/w%3D690%3Bq%3D99%3Bc%3Dnuomi%2C95%2C95/sign=e19285b43a01213fcf334dd564dc47ec/5bafa40f4bfbfbedc7e687127bf0f736afc31f1b.jpg'
        },
        {
          name:'奥斯卡大郑东国际影城(小商品城店)',
          maney:'19元',
          address:'白沙镇恒通路与振兴路交叉口白沙商贸城6号楼5层',
          tel:'(0371)55392196',
          id:'6',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/14ce36d3d539b600d42b5abee450352ac75cb7d6.jpg'
        },
        {
          name:'银兴国际影城(二七店)',
          maney:'27元',
          address:'郑州市二七区郑州华联商厦4至5楼',
          tel:'(0371)53681001',
          id:'7',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/lbsugc/pic/item/91ef76c6a7efce1b62257fe7a351f3deb48f6595.jpg'
        },
        {
          name:'郑州奥斯卡爱家影城(航空港区店)',
          maney:'42元',
          address:'河南省郑州市中牟县郑港七路福都时代广场四楼',
          tel:'(0371)53681001',
          id:'8',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/72f082025aafa40f6ad032aeac64034f78f019aa.jpg'
        },
        {
          name:'中影二七国际影城(郑州华联商厦店)',
          maney:'25元',
          address:'郑州市二七区二七广场北京华联商厦5楼',
          tel:'(0371)55985123',
          id:'9',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/c8177f3e6709c93d2a8d67ca973df8dcd100548b.jpg'
        },
        {
          name:'奥斯卡金成时代影城',
          maney:'33元',
          address:'中州大道黄河路金成时代广场10号2-3层',
          tel:'(0371)55180766',
          id:'10',
          img:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/63d9f2d3572c11df64bac4b96e2762d0f603c2c5.jpg'
        },
      ]
    },
    mutations: {
      initPosition(state) {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        function myFun(result) {
          state.map.pointLat = result.center.lat
          state.map.pointLng = result.center.lng
          var cityName = result.name;
          map.setCenter(cityName);
          state.map.cityName = cityName  
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
      }
    },
    actions: {
      
    }
  })
  