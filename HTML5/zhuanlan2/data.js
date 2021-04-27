var books = [
    {
        id: 1,
        name: '迷幻的苍穹——科幻世界漫游指南',
        column: '音频专栏',
        jpg: 'https://img1.doubanio.com/dae/niffler/niffler/images/9ed11092-906a-11eb-a1e9-da8cb6702708.jpg',
        address: 'https://m.douban.com/time/column/216/?dt_time_source=douban-web_anonymous'
    },
    {
        id: 2,
        name: '52倍人生——戴锦华大师电影课',
        column: '音频专栏',
        jpg: 'https://img3.doubanio.com/dae/niffler/niffler/images/f90e218a-b8aa-11e7-9cc5-0242ac110021.jpg',
        address: 'https://m.douban.com/time/column/76/?dt_time_source=douban-web_anonymous'
    },
    {
        id: 3,
        name: '如何读透一本书——12堂阅读写作训练课',
        column: '音频专栏',
        jpg: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        address: 'https://m.douban.com/time/column/200/?dt_time_source=douban-web_anonymous'
    },
    {
        id: 4,
        name: '我的姐姐',
        column: '电影专栏',
        jpg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2630463690.webp',
        address: 'https://movie.douban.com/subject/35158160/'
    }
];
// document
//     .querySelector('.zl-list>ul')
//     // books.map方法遍历数组的每一项
//     .innerHTML =books.map(book =>` 
//         <li>
//             <div class="pic">
//                 <a href="${book.address}">
//                     <img src="${book.jpg}" alt="">
//                 </a>
//             </div>
//             <div class="title">
//                 <a href="${book.address}">${book.name}</a>
//             </div>
//             <div class="zhuanlan">
//                 <a>音频专栏</a>
//             </div>
//         </li>
// `).join('')
document
    .querySelector('ul.time-list')
    .innerHTML = books.map(function (book) { return " \n        <li>\n            <a href=\"" + book.address + "\" class=\"cover\" target=\"_blank\">\n                <img src=\"" + book.jpg + "\" alt=\"" + book.name + "\">\n            </a>\n            <a href=\"" + book.address + "\" class=\"title\" target=\"_blank\">" + book.name + "</a>\n            <span class=\"type\">" + book.column + "</span>\n        </li>\n  "; }).join('');
