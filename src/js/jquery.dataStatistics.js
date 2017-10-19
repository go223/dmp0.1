
	
	
$.fn.dataStatistics = function(options) {
		options = $.extend({
			second:3000
		},options || {});

	var _this = this;
	var arr = [];
	
		var el = _this.find('.set_last');
		var html ='<div class="digit">' +
						'  <div class="digit_top">' +
						'    <span class="digit_wrap"></span>' +
						'  </div>' +
						'  <div class="shadow_top"></div>' +
						'  <div class="digit_bottom">' +
						'    <span class="digit_wrap"></span>' +
						'  </div>' +
						'  <div class="shadow_bottom"></div>' +
						'</div>';
	
		_this.find('.digit_set').each(function(){
			for (var i = 0; i <= 9 ;i++) {
				$(this).append(html);
				currentDigit = $(this).find('.digit')[i];
				$(currentDigit).find('.digit_wrap').append(i);
			};
		})
	
	
//初始化数据格式补零
			function ofill (n) {
				var n = n.toString();
				var e = "0000000000";
				if (n.length < 10) {
					var result = e.substring(0,(9-n.length))+n;
					arr = result.split("");
					return result.split("");
				}
			};
//初始化值
			function render (n) {
				$.each(n,function(index,val) {
					var set = _this.find('.digit_set').eq(index);
					var i = parseInt(val);

					var prev = parseInt(arr[index]) + 1;

					set.find('.digit').removeClass('active');
					set.find('.digit').eq(arr[index]).addClass('active');
					set.find('.digit').removeClass('previous');
					set.find('.digit').eq(prev).addClass('previous');
					
				})
			}

	

			function init () {
				$.ajax({
					url:options.url,
					dataType: "json",
					type:'get'
				}).done(function(req){
					console.log(req.total)
					render(ofill(req.total));
					//increase()
				})
			};
			init ()
			clearInterval(timer);
			var timer = setInterval(function(){
				init();
			},options.second)
			
}

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
			'total|1000-9000':8710
	}
);
var initnumber = 0;

//setInterval(function(){
	$('.dataStatistics').dataStatistics({url:"http://mockjs"})
//},3000);