/*!
 *jquery.barrager.js
 */
(function ($) {
    function Barrager(dom) {
        this.canvas = dom.get(0);
        this.ctx = this.canvas.getContext("2d");
        //缓冲池，长度越大，屏幕上显示的就越多
        this.msgs = new Array(300);
        this.width = 400;
        this.height = 300;
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        this.font = "30px 黑体";
        this.ctx.font=this.font;
        this.colorArr=["Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue"];
        this.interval = "";
        this.draw = function () {
            if (this.interval != "")return;
            var _this=this;
            this.interval = setInterval(function () {
                //1，清除屏幕
                _this.ctx.clearRect(0, 0, _this.width, _this.height);
                _this.ctx.save();
                //2，循环缓冲区域，把没有设置Left，Top，Speed，Color先赋值，赋值的就改变left值（产生移动效果），left值小于200就会从缓冲区移除
                for (var i = 0; i < _this.msgs.length; i++) {
                    if (!(_this.msgs[i] == null || _this.msgs[i] == "" || typeof(_this.msgs[i]) == "undefined")) {
                        if(_this.msgs[i].L==null || typeof(_this.msgs[i].L)=="undefined" || _this.msgs[i].T == null){
                            _this.msgs[i].L=0;
                            _this.msgs[i].T=parseInt(Math.random() * 300);
                            _this.msgs[i].S=parseInt(Math.random() * (10 - 1) + 1);
                            _this.msgs[i].C=_this.colorArr[Math.floor(Math.random() * _this.colorArr.length)];
                        }else{
                            if(_this.msgs[i].L>400 || _this.msgs[i].T == 150){
                                _this.msgs[i]=null;
                            }else {
                                _this.msgs[i].L=parseInt(_this.msgs[i].L+_this.msgs[i].S);
                                if (_this.msgs[i].T > 150) {
                                    _this.msgs[i].T = _this.msgs[i].T - parseInt(Math.random()*(10-9)+1);
                                } else {
                                    _this.msgs[i].T = _this.msgs[i].T + parseInt(Math.random()*(10-9)+1);
                                }
                                _this.ctx.fillStyle =_this.msgs[i].C;
                                _this.ctx.fillText(_this.msgs[i].msg,_this.msgs[i].L,_this.msgs[i].T);
                                _this.ctx.restore();
                            }
                        }
                    }
                }
            }, 20);
        };
        this.putMsg = function (datas) {
            for (var j = 0; j < datas.length; j++) {
                for (var i = 0; i < this.msgs.length; i++) {
                    if (this.msgs[i] == null || this.msgs[i] == "" || typeof(this.msgs[i]) == "undefined") {
                        this.msgs[i] = datas[j];
                        break;
                    }
                }
            }
            this.draw();
        };
        this.clear = function () {
            clearInterval(this.interval);
            this.interval="";
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.save();
            for(var i=0;i<this.msgs.length;i++){
                this.msgs[i]=null;
            }
        };
    }

    $.fn.barrager = function (para) {
        if (typeof(para)=="string") {
            try{
                var api = $(this).data('barrager_api');
                api[para].apply(api);
            }catch (e){}
        } else if (typeof para == 'object' || !para) {
            $this = $(this);
            if ($this.data('barrager_api') != null && $this.data('barrager_api') != ''){
                var api = $this.data('barrager_api');
                api.putMsg(para);
            }else{
                var api = new Barrager($this);
                $this.data('barrager_api', api);
                api.putMsg(para);
            }
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.barrager');
        }
        return this;
    }
})(jQuery);

$(function(){
    var oldData = [
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
    ];
    setInterval(function(){
        $('canvas').barrager(
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
})
