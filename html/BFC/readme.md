# BFC(Block Formatting Context) 块级格式化上下文
1. 计算BFC容器的高度时，浮动元素也参与计算
2. BFC就是页面上的一个隔离的独立容器
3. BFC用于解决margin重叠问题
4. BFC包含创建上下文元素的所有子元素，但是不包含新创建BFC的子元素的内部元素

# 创建条件
1. overflow的值为 auto hidden overlay scroll
2. 浮动（元素float的值不为none）
3. 绝对定位（absolute、fixed）
4. 行内块级（inline-block）
5. 表格单元 (display: table-cell)
6. 弹性盒子 (flex、inline-flex)
