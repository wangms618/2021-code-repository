# 实现授权的方式
cookie session token OAtuh
cookie只支持存储字符串

# 什么是cookie
是浏览器的一个存储空间，特点是会在浏览器发下一次请求时，一同被携带去到服务器
cookie会绑定单一的域名，cookie不可跨域
cookie用domain来判断他隶属于那个域名
www.test.com www.test.a.com(domain)

maxAge
path


# 什么是session？
服务端存储，提供sessionID，是一个记录机制
session是一种服务端与客户端会话的机制
session是基于cookie实现的
session存在服务器
sessionId存在cookie里 

# 什么是Token(令牌)?

# 什么是JWT？
生成Token