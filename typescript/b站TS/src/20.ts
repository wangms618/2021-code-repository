import { camelCase } from "lodash";
import qs from "query-string";
qs.parse("?key=value&key2=value2");
// 此时camelCase没有做出明确的声明
// declare function camelCase(input: string): string; // 类型声明，给camelCase明确声明
// 存在原因，考虑兼容一些普通JS模块
const res = camelCase("hello typed");

// 在TS中去引用第三方模块，如果这个模块当中不包含所对应的类型声明文件，就去安装一个对应的类型声明模块，如果没有对应的类型声明模块，我们就用declare语句去声明