/**
 * 适配器模式
 *    什么是适配器，就是将数据转化了一下，防止出错或者数据改变
 * Created by slipkinem on 8/17/2017 at 3:56 PM.
 */
'use strict'
// 假设引入了JQ，而JQ和自己的代码库重叠了，怎么办？
// window.my$ = jQuery 就是这么粗暴
// 比如你要的数据是[{},{}]这样的，后台给了你{}，你怎么办
// 写个适配器，转化一下。 噗！吐血
