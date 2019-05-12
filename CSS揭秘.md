[TOC]
# CSS ����
## 15. ����ͶӰ

### ����
> ���ֻ��Ԫ�ص�һ�ࣨż�������ࣩ����ͶӰ

### �ؼ�����

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
### ���

### ʾ��
- <a href="demo\15shadow-one-side.html">����ͶӰ</a>

## 36. ����Ӧ�ڲ�Ԫ��

### �ѵ�
> ������֪���������Ԫ��ָ��һ������� height�����ͻ��Զ���Ӧ�����ݵĸ߶ȡ�
> ��������ϣ�� width Ҳ�������Ƶ���Ϊ������ô���أ�

### �ؼ�����

```css
.Intrinsic-sizing {
    max-width: 300px;
    max-width: min-content;
    margin: auto;
}
```

### ���
- max-content
- fit-content
- min-content

### ʾ��
- <a href="demo/36intrinsic-sizing.html">����Ӧ�ڲ�Ԫ��</a>
> ���ͼƬ���Կ���Ч����


## 38. �����ֵ�Ԫ�ص�������������ʽ

### ����

### �ؼ�����

### ���

### ʾ��

## 40. ��ֱ����

### ����
> ������������ֱ�����Ѿ���Ϊ��CSS �����ʥ����

### �ؼ�����

- ���ھ��Զ�λ�Ľ������
> <a href="demo/40vertical-centering-abs.html">ʾ��</a>

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

- �����ӿڵ�λ�Ľ������
> <a href="demo/40vertical-centering-vh.html">ʾ��</a>

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

- ���� Flexbox�Ľ������
> <a href="demo/40vertical-centering-.html">ʾ��</a>

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

### ���

### ʾ��

## 38. �����ֵ�Ԫ�ص�������������ʽ

### ����

### �ؼ�����

### ���

### ʾ��
