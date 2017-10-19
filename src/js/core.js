/* 调用动画方法
$('选择器').animateCss('动画名')
*/
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationedn animationend';
        this.addClass('animated ' + animationName).one(animationEnd,function(){
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
})
/* 调用时间 $('选择器').showNowTime() */
$.fn.extend({
    showNowTime:function(className){
        var newDate = new Date(),
            year = newDate.getFullYear(),
            month = newDate.getMonth() + 1,
            day = newDate.getDate(),
            hours = newDate.getHours(),
            minutes = newDate.getMinutes(),
            second = newDate.getSeconds();
            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+day : day;
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            second = second < 10 ? '0'+second : second;
        var result = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+second;
        this.addClass('yb-show-now-time').text(result);
    }
});
$(function(){
    //mock数据
    Mock.mock(
        'http://mockjs',{
            
            'ywxt|200-900': 1,
            'sjb|2999-9000': 1,
            'bbiao|1999-4000': 1,
            'zbgs|1080-2000': 1,
            'total|1000-2000':1,
            'array|5-15':[
                {
                    'msg|+1':["爬虫","eHR","OA","IOT","log","现场管理","文旅","租赁","预算","电表","新媒体","销售额","温控","儿童娱乐","商服","客流","物业","商管"]
                }
            ]
        }
    );
    //数据流动清洗
    setInterval(function(){
        /* $('.dataClear-canvas').barrager(
            [
                {"msg":"爬虫"},
                {"msg":"eHR"},
                {"msg":"OA"},
                {"msg":"IOT"},
                {"msg":"log"},
                {"msg":"现场管理"},
                {"msg":"文旅"},
                {"msg":"租赁"},
                {"msg":"预算"},
                {"msg":"电表"},
                {"msg":"新媒体"},
                {"msg":"销售额"},
                {"msg":"温控"},
                {"msg":"儿童娱乐"},
                {"msg":"商服"},
                {"msg":"客流"},
                {"msg":"物业"},
                {"msg":"商管"}
            ]
        ); */
        $.ajax({
            url:'http://mockjs',
            dataType:'json',
            type:'get'
        }).done(function(req){
            $('.dataClear-canvas').barrager(req.array);
            $('.ywxt-num').text(req.ywxt);
            $('.sjb-num').text(req.sjb);
            $('.bbiao-num').text(req.bbiao);
            $('.zbgs-num').text(req.zbgs);
        })
    },2000); 
    //横向数字流动
    //$('.dataStatistics').dataStatistics({})
    
    
    
    $('.dataStatistics').ybCount({url:"http://mockjs"});
    clearInterval(nowtimer);
    var nowtimer = setInterval (function () {
        $('.nowtime').showNowTime();
    },1000);
    
});