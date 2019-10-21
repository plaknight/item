import Mock from "mockjs";
const Random = Mock.Random;
const movielist = {
    state: {
        hotmovie: [{
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆@2x4.png"),
                name: "CRACKS（2018）",
                //   评分
                score: "影火虫评分 9.1",
                //   导演
                director: "导演：赞恩.阿尔.拉菲亚",
                // 演员
                actor: "主演：赞恩.阿尔.拉菲亚",
                status:1,
                labels: [{
                        id: Random.guid(),
                        text: "今日最热",
                        act: "yellow"
                    },
                    {
                        id: Random.guid(),
                        text: "一周最热",
                        act: "red"
                    }
                ],
                ticket: "购票",
                ticketcolor: "pink",
                actorinfo: [{ id: "1", name: "凯拉·奈特莉", play: "饰伊丽莎…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act1.png") },
                    { id: "2", name: "西蒙·伍兹", play: "饰查尔斯…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act3 (2).jpg") },
                    { id: "3", name: "凯拉·奈特莉", play: "饰伊丽莎…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act3.jpg") }
                ],
                content: "伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制 2@2x.png"),
                name: "大鱼海棠",
                //   评分
                score: "16.4万 人想看",
                //   导演
                director: "导演：梁旋 季冠霖",
                // 演员
                actor: "105分钟/动画/奇幻",
                status:2,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "季冠霖", play: "配音", img: require("@/assets/movie-imgs/actorinfo/dy_act1.jpg") },
                    { id: "2", name: "苏尚卿", play: "饰湫", img: require("@/assets/movie-imgs/actorinfo/dy_act2.jpg") },
                    { id: "3", name: "许魏洲", play: "配音", img: require("@/assets/movie-imgs/actorinfo/dy_act3.jpg") }
                ],
                content: "《大鱼海棠》是彼岸天文化有限公司、北京光线影业有限公司、霍尔果斯彩条屋影业有限公司联合出品，由梁旋、张春执导，梁旋编剧，季冠霖、苏尚卿、许魏洲、金士杰等配音的奇幻动画电影。该片讲述了掌管海棠花生长的少女椿为报恩而努力复活人类男孩“鲲”的灵魂，在本是天神的湫帮助下与彼此纠缠的命运斗争的故事。影片于2016年7月8日在中国大陆上映。2017年12月3号，《大鱼海棠》获第15届布达佩斯国际动画电影节最佳 ... "
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x(1).png"),
                name: "现在去见你",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：李俊赫",
                // 演员
                actor: "主演：苏志燮 孙艺珍",
                status:3,
                labels: [{
                    id: Random.guid(),
                    text: "口碑最佳",
                    act: "blue"
                }],
                ticket: "购票",
                ticketcolor: "pink",
                actorinfo: [{ id: "1", name: "苏志燮", play: "饰宇镇", img: require("@/assets/movie-imgs/actorinfo/xz_act1.webp") },
                    { id: "2", name: "孙艺珍", play: "饰秀雅", img: require("@/assets/movie-imgs/actorinfo/xz_act2.webp") },
                    { id: "3", name: "金智焕", play: "饰智浩", img: require("@/assets/movie-imgs/actorinfo/xz_act3.webp") }
                ],
                content: "本片根据市川拓司小说《相约在雨季》改编，苏志燮和孙艺珍主演，讲述男子(苏志燮饰)的妻子秀雅(孙艺珍饰)去世前告诉他，自己将在下一个雨季回来。果不其然，雨季来临之际，妻子如约而至。可奇怪的是，妻子似乎忘记了他和家庭。"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:4,
                labels: [{
                        id: Random.guid(),
                        text: "今日最热",
                        act: "yellow"
                    },
                    {
                        id: Random.guid(),
                        text: "一周最热",
                        act: "red"
                    }
                ],
                ticket: "购票",
                ticketcolor: "pink",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            }
        ],
        datemovie: [{
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆@2x4.png"),
                name: "CRACKS（2018）",
                //   评分
                score: "影火虫评分 9.1",
                //   导演
                director: "导演：赞恩.阿尔.拉菲亚",
                // 演员
                actor: "主演：赞恩.阿尔.拉菲亚",
                status:2,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "凯拉·奈特莉", play: "饰伊丽莎…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act1.png") },
                    { id: "2", name: "西蒙·伍兹", play: "饰查尔斯…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act3 (2).jpg") },
                    { id: "3", name: "凯拉·奈特莉", play: "饰伊丽莎…", img: require("@/assets/movie-imgs/actorinfo/CRACKS_act3.jpg") }
                ],
                date: "12月1日",
                content: "伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制 2@2x.png"),
                name: "大鱼海棠",
                //   评分
                score: "16.4万 人想看",
                //   导演
                director: "导演：梁旋 季冠霖",
                // 演员
                actor: "105分钟/动画/奇幻",
                status:3,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "季冠霖", play: "配音", img: require("@/assets/movie-imgs/actorinfo/dy_act1.jpg") },
                    { id: "2", name: "苏尚卿", play: "饰湫", img: require("@/assets/movie-imgs/actorinfo/dy_act2.jpg") },
                    { id: "3", name: "许魏洲", play: "配音", img: require("@/assets/movie-imgs/actorinfo/dy_act3.jpg") }
                ],
                date: "12月2日",
                content: "《大鱼海棠》是彼岸天文化有限公司、北京光线影业有限公司、霍尔果斯彩条屋影业有限公司联合出品，由梁旋、张春执导，梁旋编剧，季冠霖、苏尚卿、许魏洲、金士杰等配音的奇幻动画电影。该片讲述了掌管海棠花生长的少女椿为报恩而努力复活人类男孩“鲲”的灵魂，在本是天神的湫帮助下与彼此纠缠的命运斗争的故事。影片于2016年7月8日在中国大陆上映。2017年12月3号，《大鱼海棠》获第15届布达佩斯国际动画电影节最佳 ... "
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x(1).png"),
                name: "现在去见你",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：李俊赫",
                // 演员
                actor: "105分钟/动画/奇幻",
                status:4,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "苏志燮", play: "饰宇镇", img: require("@/assets/movie-imgs/actorinfo/xz_act1.webp") },
                    { id: "2", name: "孙艺珍", play: "饰秀雅", img: require("@/assets/movie-imgs/actorinfo/xz_act2.webp") },
                    { id: "3", name: "金智焕", play: "饰智浩", img: require("@/assets/movie-imgs/actorinfo/xz_act3.webp") }
                ],
                date: "12月3日",
                content: "本片根据市川拓司小说《相约在雨季》改编，苏志燮和孙艺珍主演，讲述男子(苏志燮饰)的妻子秀雅(孙艺珍饰)去世前告诉他，自己将在下一个雨季回来。果不其然，雨季来临之际，妻子如约而至。可奇怪的是，妻子似乎忘记了他和家庭。"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:1,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月4日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:2,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月5日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:3,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月6日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:1,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月7日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:1,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月8日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:2,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月9日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            },
            {
                id: Random.guid(),
                img: require("@/assets/movie-imgs/电影正在热映_slices/大表姐CC采集到电影｜海报｜记忆复制@2x.png"),
                name: "RETURN ON THE JEDI",
                //   评分
                score: "15.3万 人想看",
                //   导演
                director: "导演：盖尔.曼库索",
                // 演员
                actor: "主演：贾斯",
                status:2,
                ticket: "预售",
                ticketcolor: "purple",
                actorinfo: [{ id: "1", name: "马克·哈米尔", play: "饰卢克·天行者", img: require("@/assets/movie-imgs/actorinfo/xq_act1.jpg") },
                    { id: "2", name: "哈里森·福特", play: "饰汉·索洛", img: require("@/assets/movie-imgs/actorinfo/xq_act2.jpg") },
                    { id: "3", name: "凯丽·费雪", play: "莱娅公主", img: require("@/assets/movie-imgs/actorinfo/xq_act3.jpg") }
                ],
                date: "12月1日",
                content: "Luke， you’re going to find that many of the truthswe cling to depend greatly on our own point of view.”A long time ago in a galaxy far， far …"
            }
        ],
        heraldmovie: [{
            id: Random.guid(),
            img: require("@/assets/movie-imgs/home/swiper1.png"),
            text: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动画…",
        }, {
            id: Random.guid(),
            img: require("@/assets/movie-imgs/home/电影截图复制.png"),
            text: "这个视频好像没有标题",
        }]

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}
export default movielist