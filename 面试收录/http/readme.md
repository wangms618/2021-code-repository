了解过http3.0吗
http和https的区别
http2.0对比http有哪些新特性
cookie和sessionStorage，localstoreage区别
进程和线程的区别
如果一个页面加载很慢，你觉得是什么原因

# http2.0有哪些改进
1. 内容安全，使用http2.0可以避免单纯使用https的性能下降
2. 二进制格式，之前的http解析是基于文本的，http2.0将所有的传输信息分割为更小的消息和帧，对他们采用二进制格式编码
4. 多路复用
5. 头部压缩
6. 设置请求优先级
7. 服务器推送

# http和https的区别
1. http是明文传输，不安全，https是加密传输，更加安全，https就是在http加入ssl层
2. http的标准端口号是80，https的标准端口号是443
3. http不用认证，https有认证
4. http连接是无状态的，https协议是有状态的

# https优点
1. 内容加密
2. 需要身份认证，保证用户访问正确

# http3.0的特点
1. 在传输层使用udp替代了tcp
2. 实现了一套新的拥塞控制算法，彻底解决TCP中队头阻塞的问题
3. 实现了快速握手功能。由于QUIC是基于UDP的，所以QUIC可以实现使用0-RTT或者1-RTT来建立连接，这意味着QUIC可以用最快的速度来发送和接收数据。
4. 集成了TLS加密功能。目前QUIC使用的是TLS1.3