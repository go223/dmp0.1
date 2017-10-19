$.fn.ybCount = function (options) {
    options = $.extend({
        second:3000
    },options || {});

    var _this = this;
    var arr = [];

    var el = _this.find('.set_last');
    //构造所需元素
    var html =  '<div class="digit">'+
                    '<div class="digit_top">'+
                        '<span class="digit_wrap"></span>'+
                    '</div>'+
                    '<div class="shadow_top"></div>'+
                    '<div class="digit_bottom">'+
                        '<span class="digit_wrap"></span>'+
                    '</div>'+
                    '<div class="shadow_bottom"></div>'+
                '</div>';

    _this.find('.digit_set').each(function () {
        for (var i = 0; i <= 9; i++) {
            $(this).append(html);
            currentDigit = $(this).find('.digit')[i];
            $(currentDigit).find('.digit_wrap').append(i);
        }
    });

    //初始化数据length
    function ofill (n) {
        var d;
        var e = '0000000000';
        if (typeof n === 'number') {
            d = n.toString();
        } else {
            d = n;
        }
        if (d.length < 10) {
            var result = e.substring(0,(9-d.length))+d;
            arr = result.split("");
            return result.split("");
        } else {
            arr = d.split("");
            return d.split("");
        }
    };

    //添加动画
    function render (n) {
        $.each(n,function (index,val) {
            var set = _this.find('.digit_set').eq(index);
            var i = parseInt(val);
            var active = parseInt(arr[index]);
            var prev = parseInt(arr[index]) + 1;

            set.find('.digit').removeClass('active');
            set.find('.digit').eq(active).addClass('active');
            set.find('.digit').removeClass('previous');
            set.find('.digit').eq(prev).addClass('previous');
        })
    };

    function init () {
        $.ajax({
            url:options.url,
            dataType:'json',
            type:'get'
        }).done(function(req) {
            render(ofill(req.total));
        })
    };

    init();

    clearInterval(timer);
    var timer = setInterval (function () {
        init();
    },options.second);
}