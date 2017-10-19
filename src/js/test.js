
Mock.mock(
	'http://mockjs',{
			/* "userName": '@name', //模拟名称
			"age|1-100": 100, //模拟年龄(1-100)
			"color": "@color", //模拟色值
			"date": "@date('yyyy-MM-dd')", //模拟时间
			"url": "@url()", //模拟url
			"content": "@cparagraph()", //模拟文本 */
			'number|1000-2000': 1,
			'number1|1000-2000': 1,
			'number2|1000-2000': 1,
			'number3|1000-2000': 1,
			'total|1000-2000':1
	}
);


    !function(n){
        var e=function(){
            function n(){
                d(),
                $(".mobile-numbers").addClass("play")
            }
            var e=null,
            t=null,
            i=[];
            function a (){
                var n=new Date().getTime();
                return $.ajax({
                    url:"http://mockjs",
                    dataType:'json',
                    type:"get"
                })
            }
            function o (n){
                var e="0000000000";
                return n.length<10&&(n=e.substring(0,10-n.length)+""+n),n
            }
            function s (n){
                n=o(n.toString()),i=n.split("");
            }
            function r(n){
                var t=$(".mobile-numbers");
                e=t.find("ul.flip");
                e.each(function(){
                    var n=$(this);
                    e=n.index();
                    t=n.find("li");debugger;
                    a=i[e];
                    t.removeClass("before");
                    t.eq(a-1).addClass("before");
                    t.removeClass("active");
                    t.eq(a).addClass("active");
                });
                d();
            };
            function l (){
                $.ajax({
                    url:"http://mockjs",
                    dataType:'json',
                    type:"get"
                }).done(function(n){
                    console.log(n.total);
                    s(n.total);
                    r(n.total);
                })
            };
            function d () {
                clearTimeout(t);
                t=setTimeout(function(){
                    l()
                },3000)
            };
            return{
                init:n
            }
        }();
        e.init()
    }()

