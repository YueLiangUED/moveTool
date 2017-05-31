/* 
* @Author: Marte
* @Date:   2017-05-10 00:43:42
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-10 00:44:05
*/

$(document).ready(function(){
    // 判断背景图是否已经加载完成
        var bg_imgs = [
            'images/bg_img/bg_img1.jpg',
            'images/bg_img/bg_img2.jpg',
            'images/bg_img/bg_img3.jpg',
            'images/bg_img/bg_img4.jpg',
            'images/bg_img/bg_img5.jpg',
            'images/bg_img/bg_img6.jpg',
            'images/bg_img/bg_img7.jpg',
            'images/bg_img/bg_img8.jpg',
            'images/bg_img/bg_img9.jpg',
            'images/bg_img/bg_img10.jpg',
            'images/bg_img/bg_img11.jpg',
            'images/bg_img/bg_img12.jpg',
            'images/bg_img/bg_img13.jpg'
        ];
        function isLoad(src) {
            var count = 0;
            $.each(bg_imgs, function (index, value) {
                var img = new Image();
                img.src = value;
                img.onload = function () {
                    count += 1;
                    if (count == src.length) {
                        $('.layout').css('visibility', 'visible');
                    }
                }
                
            });
        }
        isLoad(bg_imgs);

        //动态加载背景图
        var $slide = $('.swiper-slide');
        $slide.each(function (index, ele) {
            $(this).css({
                background: 'url(images/bg_img/bg_img'+ (index+1) +'.jpg) no-repeat center',
                backgroundSize: '100% 100%' 
            });
        });
        //模拟数据
        var isFollowJson = true;
        var cardJson = {
            id: 232323232323,
            pass: 2514552
        };
        var nicknames = ['通讯史二师兄','通讯史孙大圣','通讯史观世音','通讯史斗战神佛'];

        //全局变量
        var count = 0;
        // 初始化Swiper
        $('.swiper-container').Swiper({
            slide: '.swiper-slide',
            swipeBtn: '.swipe-btn',
            callback: function (ele) {
                var w_r = ele.parents('.swiper-slide').next().find('.w_r');
                console.log(w_r)
                if (ele.hasClass('ans_right')) {
                    count ++;
                    if (count>=0&&count<=1) {
                        $('.nickname').html(nicknames[0]);
                    } else if (count>=2&&count<=3) {
                        $('.nickname').html(nicknames[1]);
                    } else if (count==4) {
                        $('.nickname').html(nicknames[2]);
                    } else if (count==5) {
                        $('.nickname').html(nicknames[3]);
                        $('.AllRight').show();
                        $('.noAllRight').hide();
                    }
                } else {
                    w_r.addClass('wrong');
                };
                w_r.addClass('anm');
                $('.count').html(count);
            }
        });
        // 判断用户是否关注
        if (isFollowJson) {
            $('.isFollow').hide();
        }

        //帮助信息
        $('.help img').tap(function () {
            $('.mask').show();
            $('.modal-help').css('top', 0);
        });
        $('.modal-help').tap(function () {
            $('.mask').hide();
            $(this).css('top', -$(this).height()+ 'px');
        });

        // 分享
        $('.share-btn').tap(function () {
            $('.mask').show();
            $('.girl').show();
            $('.mask').tap(function () {
                $('.mask').hide();
                $('.girl').hide();
                $(this).tap(function () {
                    return false;
                });
            });
        });
        //领取奖励
        $('.reward-btn').tap(function () {
            $('.mask').show();
            $('.modal-get').css('top', 0);
            $('.mask').tap(function () {
                $('.mask').hide();
                console.log(-$(this).height())
                $('.modal-get').css('top', -9.35 + 'rem');
                $(this).tap(function () {
                    return false;
                });
            });
        });
});