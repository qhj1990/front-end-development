/** 
 *  选择排序
 *  select sort
 *  每次选出最小的数字， 比较时记录最小的数字的数组下标，一次循环结束后，替换该数组
 *  从第一对比较到最后一对比较，每次都会把最大的一个数字放到最后一位
*/

function selectSort(arr) {
    var length = arr.length;
    var min;
    for (var i = 0; i < length - 1; i++) {
        min = i;
        for(var j = 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}


/** 
 *  冒泡排序
 *  Bubble sort
 *  相邻两个数字，如果前一个比后一个大，就交换两者位置
 *  从第一对比较到最后一对比较，每次都会把最大的一个数字放到最后一位
*/

function bubbleSort(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - j; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


/** 
 * 快速排序
 * quick sort
 * @description
 * 分治法将数组氛围两个数组
 * 
*/

function quickSort() {

}
