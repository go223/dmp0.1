$(function(){
    //mock数据
    Mock.mock(
        'http://mockjs',{
            
            'number|1000-2000': 1,
            'number1|1000-2000': 1,
            'number2|1000-2000': 1,
            'number3|1000-2000': 1,
            'total|1000-2000':1
        }
    );
    //数据流动清洗
    setInterval(function(){
        $('.dataClear-canvas').barrager(
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
        );
    },2000); 
    //横向数字流动
    //$('.dataStatistics').dataStatistics({})
    
    
    
    $('.dataStatistics').ybCount({url:"http://mockjs"});
});