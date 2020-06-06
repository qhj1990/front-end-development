# this apply call bind

## this指向

* 在 ES5 中，this永远指向**最后调用它的那个对象**
* 在严格模式下，没有直接调用者的函数中的this是undefined使用  
* call,apply,bind时this指向的是绑定的对象
* ES6箭头函数没有自己的this，this是继承来的，**默认指向在定义时所在的对象**

## 改变this的指向

* ES6箭头函数
* 内部保留this, _this = this
* apply call bind
* new实例化对象

### apply和call

动态改变this，当一个对象没有某个方法，其他对象有，可以call和apply用其他对象的方法来操作

apply个call接受的参数不同，call是把参数按顺序传递，apply是把参数放在数组里

```js
var func = function(arg1, arg2) {

}

func.call(this, arg1, arg2)
func.apply(this, [arg1, arg2])
```

#### apply的使用

获取数组最大最小项

```js
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 7
console.log(min); // 2
```

### bind

参数和call(obj, arg1, arg2)一样，bind不会立即调用而是会返回函数
