/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
*/

;(function ($) {
    var pluginName = 'Swiper',  //定义插件名
    //插件的参数默认值
        defaults = {
            slide: '.swiper-slide',
            swipeBtn: 'input',
            callback: function () {}
        };

    //... 插件主体功能代码 ...
    $.fn[ pluginName ] = function (options) {

        var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting

        //主体代码开始
        // 获取元素
        var $container = $(this),
            $slide = $container.find(settings.slide),
            $swipeBtn = $container.find(settings.swipeBtn);
        //全局变量
        var count = 0;
        var thisW = $(this).width();
            
        //内部方法
        function _init() {
            $slide.each(function (index, ele) {
                // 设置属性用来判断是否增加滑屏事件
                var slidAttr = $(ele).attr('data-swiper');
                if (slidAttr == undefined) {
                    $(ele).attr('data-swiper', true);
                }
                //设置层级
                var sl = $slide.length;
                $(ele).css('z-index', sl-index);
                //指定按钮滑动
                var $btn = $(ele).find(settings.swipeBtn),
                    flag = true;
                $btn.tap(function () {
                    if (flag) {
                        flag = !flag;
                        _swiperLft($(ele), thisW);
                        settings.callback($(this));
                        
                    }
                    
                });
            })
        }
        _init();
        function _isSwiper(ele) {
            var swiperFlag = ele.attr('data-swiper');
            if (swiperFlag === 'true') {
                return true;
            } else {
                return false;
            }
        };
        // 滑动效果
        function _swiperLft(ele, offsetX) {
            ele.css({
                transform: 'translateX(' + -offsetX + 'px)'
            });
        }
        //指定元素滑动
        //左边滑动事件
        $slide.swipeLeft(function () {
            if (_isSwiper($(this))) {
                _swiperLft($(this), thisW);
            }
        });
        
        
    }

})(Zepto);


