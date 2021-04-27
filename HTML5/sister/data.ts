// 提供数据源
// 对象字面量
interface movie{
    id:number;
    thumb:string;
    name:string;
    star:number
}
const movies:movie[] = [
    {
        id:1,
        thumb:'syh.webp',
        name:'第十一回',
        star:7.5,
    },
    {
        id:2,
        thumb:'jiejie.jpg',
        name:"我的姐姐",
        star:7.2,
    }
]

document
    .querySelector('.movie-list>ul')
    .innerHTML= movies.map(movie =>`
        <li>
        <div class="pic">
                    <a href="https://movie.douban.com/subject/30279836/">
                        <img src="${movie.thumb}" alt="">
                    </a>
                </div>
                <div class="title">
                    <a href="https://baike.baidu.com/item/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%9B%9E/23392866?fr=aladdin">${movie.name}</a>
                </div>
                <a href="" class="btn-link btn-ticket">选座购标</a
        </li>
    `).join('')