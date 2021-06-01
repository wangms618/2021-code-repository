const circleArea = r => 3.14 * (r ** 2)
const squareArea = s => s * s
export { circleArea, squareArea } // 暴露这两个函数，让其他文件使用,只有被导出的成员才对其他模块或文件可见
