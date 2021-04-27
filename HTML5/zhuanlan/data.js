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
    }
];
document
    .querySelector('.zl-list>ul')
    .innerHTML = books.map(function (book) { return "\n        <li>\n            <div class=\"pic\">\n                <a href=\"" + book.address + "\">\n                    <img src=\"" + book.jpg + "\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"title\">\n                <a href=\"" + book.address + "\">" + book.name + "</a>\n            </div>\n            <div class=\"zhuanlan\">\n                <a>\u97F3\u9891\u4E13\u680F</a>\n            </div>\n        </li>\n    "; }).join('');
