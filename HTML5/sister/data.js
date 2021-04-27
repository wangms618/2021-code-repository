var movies = [
    {
        id: 1,
        thumb: 'syh.webp',
        name: '第十一回',
        star: 7.5
    },
    {
        id: 2,
        thumb: 'jiejie.jpg',
        name: "我的姐姐",
        star: 7.2
    }
];
document
    .querySelector('.movie-list>ul')
    .innerHTML = movies.map(function (movie) { return "\n        <li>\n        <div class=\"pic\">\n                    <a href=\"https://movie.douban.com/subject/30279836/\">\n                        <img src=\"" + movie.thumb + "\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"title\">\n                    <a href=\"https://baike.baidu.com/item/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%9B%9E/23392866?fr=aladdin\">" + movie.name + "</a>\n                </div>\n                <a href=\"\" class=\"btn-link btn-ticket\">\u9009\u5EA7\u8D2D\u6807</a\n        </li>\n    "; }).join('');
