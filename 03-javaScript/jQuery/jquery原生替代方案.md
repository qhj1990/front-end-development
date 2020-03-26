# jquery原生替代方案

## 选择器

document.querySelector() 或者 document.querySelectorAll() 代替

## 手写ajax

```javascript
/*
1.创建异步对象
2.设置请求行
3.设置请求头
4.设置请求体
5.设置监视异步对象状态
*/

var $ = {
  // 创建一个名为convert方法，把对象转换成拼接字符串的方法
  convertTostring: function(obj){
    var str = '';
    for(var key in obj){
      str += key + '=' + obj[key] + '&';
      console.log(str);
    }
    console.log(str.slice(0,-1));
    return str.slice(0,-1);
  },

  // 代码没问题
  // 创建一个名为ajax方法，进行使用异步对象发送请求
  ajax: function(params) { // 传入的参数是一个对象
    // 这个parmas对象里面应该包括：type，url，data，callback
    // 定义变量获取数据, 短路运算
    var type = params.type || 'get';  // 获取请求的方式
    var url = params.url || location.pathname;  //location.href也可以;  获取要发送的目标地址
    var data = this.convertTostring(params.data || {}); // 获取要发送的数据
    var success = params.success;
    var dataType = params.dataType || 'text/plain';   // 什么都没有就以纯字符串
    // 1. 声明一步对象
    let xhr;
    //2.创建XMLHttpRequest
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        //IE5和IE6那群SB的Window对象没有XMLHttpRequest
        xhr = ActiveXObject("Microsoft.XMLHTTP");
    }

    if(type == 'get') {
      url = url + "?" + data; //http://baidu.com:3002/submit?userName=jack&passPWd=jack1234
      data = null;
    }
    // 设置请求行
    xhr.open(type, url);
    // 设置请求头
    if(type == 'post'){
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    // get请求可以省略这一步
    // 设置请求体
    xhr.send(data);   // 这里的data就是通过convertTostring方法拼接的字符串
    // 监听异步对象状态
    xhr.onreadystatechange = function () {
      // 判断数据是否全部接收完成
      if (xhr.status == 200 && xhr.readyState == 4) {
        var res;
        // 把服务器响应回来的数据进行判断然后保存起来
        if(dataType == 'json'){
          res = JSON.parse(xhr.responseText)
        } else if (dataType == 'xml'){
          res = xhr.responseXML;
        } else {
          res = xhr.responseText;   // 当成纯文本字符串接收
        }
          success(res);
      }
    }
  }
}
```

## DOM操作

createElement
cloneNode
appendChild
insertBefore
insertAfter
parentNode
children
innerHTML

## class

```javascript
$('.ele').addClass('foo')
$('.ele').removeClass('foo')
$('.ele').hasClass('foo')


ele.classsList.add('foo')
ele.classsList.remove('foo')
ele.classsList.contains('foo')

```

## 事件

click onClick

### 事件委托

在父件中委托事件，子元素动态创建删除都不会影响事件。

addEventListener，attachEvent（IE8）， jquery on

removeEventListener

## data

```javascript
$('.ele').data('foo', '34')

ele.dataset.foo = 34
```
