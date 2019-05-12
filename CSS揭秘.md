[TOC]
# CSS 揭秘
## 15. 单侧投影

### 难题
> 如何只在元素的一侧（偶尔是两侧）设置投影

### 关键代码

```css
.shadow-top {
    box-shadow: 0px -5px 4px -4px black;
}

.shadow-bottom {
    box-shadow: 0 5px 4px -4px black
}
.shadow-left {
    box-shadow: -5px 0px 4px -4px black;
}
.shadow-right {
    box-shadow: 5px 0px 4px -4px black;
}
.shadow-right-bottom {
    box-shadow: 3px 3px 6px -3px black;
}
.shadow-left-right {
    box-shadow: -5px 0px 4px -4px black,
    5px 0px 4px -4px black;
}
```
### 相关

### 示例
- <a href="demo\15shadow-one-side.html">单侧投影</a>

## 36. 自适应内部元素

### 难点
> 众所周知，如果不给元素指定一个具体的 height，它就会自动适应其内容的高度。
> 假如我们希望 width 也具有类似的行为，该怎么做呢？

### 关键代码

```css
.Intrinsic-sizing {
    max-width: 300px;
    max-width: min-content;
    margin: auto;
}
```

### 相关
- max-content
- fit-content
- min-content

### 示例
- <a href="demo/36intrinsic-sizing.html">自适应内部元素</a>
> 点击图片可以看到效果。


## 38. 根据兄弟元素的数量来设置样式

### 难题

### 关键代码

### 相关

### 示例

## 40. 垂直居中

### 难题
> 多年以来，垂直居中已经成为了CSS 领域的圣杯。

### 关键代码

- 基于绝对定位的解决方案
> <a href="demo/40vertical-centering-abs.html">示例</a>

```css
.main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em 1.5em;
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}
```

- 基于视口单位的解决方案
> <a href="demo/40vertical-centering-vh.html">示例</a>

```css
.main {
    width: 18em;
    padding: 1em 1.5em;
    margin: 50vh auto 0;
    transform: translateY(-50%);
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}
```

- 基于 Flexbox的解决方案
> <a href="demo/40vertical-centering-.html">示例</a>

```css
body {
    display: flex;
    min-height: 100vh;
}

main {
    padding: 1em 2em;
    margin: auto;
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}

```

### 相关

### 示例

## 38. 根据兄弟元素的数量来设置样式

### 难题

### 关键代码

### 相关

### 示例
