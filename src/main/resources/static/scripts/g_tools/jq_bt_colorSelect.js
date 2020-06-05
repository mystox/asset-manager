'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
    if (!$.initUploadImg) {
        var _script = document.createElement('script');
        _script.type = 'text/JavaScript';
        _script.charset = 'UTF-8';
        _script.async = true;
        _script.src = '/scripts/g_tools/jq_upload_img.js?v=20170710';
        document.getElementsByTagName('head')[0].appendChild(_script);
    }
});

var color_type = 'company_color';
var search_system = '';
var search_company = '';

var defaultColor = [{
    pic: '#ffffff',
    mark: '#ffffff',
    name: '纯白'
}, {
    pic: '#000000',
    mark: '#000000',
    name: '纯黑'
}, {
    pic: '#ff0000',
    mark: '#ff0000',
    name: '纯红'
}, {
    pic: '#008000',
    mark: '#008000',
    name: '纯绿'
}, {
    pic: '#ffff00',
    mark: '#ffff00',
    name: '纯黄'
}, {
    pic: '#ffd700',
    mark: '#ffd700',
    name: '金'
}, {
    pic: '#4b0082',
    mark: '#4b0082',
    name: '靛青'
}, {
    pic: '#0000ff',
    mark: '#0000ff',
    name: '纯蓝'
}, {
    pic: '#00008b',
    mark: '#00008b',
    name: '深蓝'
}, {
    pic: '#ffc0cb',
    mark: '#ffc0cb',
    name: '粉红'
}, {
    pic: '#ff1493',
    mark: '#ff1493',
    name: '深粉红'
}, {
    pic: '#dc143c',
    mark: '#dc143c',
    name: '猩红'
}, {
    pic: '#7b68ee',
    mark: '#7b68ee',
    name: '蓝灰色'
}, {
    pic: '#8a2be2',
    mark: '#8a2be2',
    name: '紫罗兰'
}, {
    pic: '#4169e1',
    mark: '#4169e1',
    name: '皇家蓝'
}, {
    pic: '#87ceeb',
    mark: '#87ceeb',
    name: '天蓝色'
}, {
    pic: '#00ffff',
    mark: '#00ffff',
    name: '青色'
}, {
    pic: '#40e0d0',
    mark: '#40e0d0',
    name: '绿宝石'
}, {
    pic: '#90ee90',
    mark: '#90ee90',
    name: '淡绿色'
}, {
    pic: '#7cfc00',
    mark: '#7cfc00',
    name: '草绿色'
}, {
    pic: '#9acb32',
    mark: '#9acb32',
    name: '黄绿色'
}, {
    pic: '#ffa500',
    mark: '#ffa500',
    name: '橙色'
}, {
    pic: '#d2691e',
    mark: '#d2691e',
    name: '巧克力'
}, {
    pic: '#8b4513',
    mark: '#8b4513',
    name: '马鞍棕色'
}, {
    pic: '#a52a2a',
    mark: '#a52a2a',
    name: '棕色'
}, {
    pic: '#8b0000',
    mark: '#8b0000',
    name: '深红色'
}, {
    pic: '#800000',
    mark: '#800000',
    name: '栗色'
}, {
    pic: '#d3d3d3',
    mark: '#d3d3d3',
    name: '浅灰色'
}, {
    pic: '#a9a9a9',
    mark: '#a9a9a9',
    name: '深灰色'
}, {
    pic: '#696969',
    mark: '#696969',
    name: '暗灰色'
}];

var companyColor = [{
    pic: '#ffffff',
    mark: '#ffffff',
    name: '公司'
}, {
    pic: '#000000',
    mark: '#000000',
    name: '公司'
}, {
    pic: '#ff0000',
    mark: '#ff0000',
    name: '公司'
}, {
    pic: '#008000',
    mark: '#008000',
    name: '纯绿'
}];
var tpl = '\n  {{#each colors}}\n    <div class="sample-color-item" data-pic="{{pic}}" data-name="{{name}}" data-mark="{{mark}}">\n      {{#isColorValue pic}}\n      <div class="color-show" style="background-color: {{pic}};"></div>\n      {{else}}\n      <img src="{{#if pic}}{{pic}}?x-oss-process=image/resize,m_fill,h_125,w_125{{else}}../images/empty_color.png{{/if}}">\n      {{/isColorValue}}\n      <p>{{name}} </p>\n    </div>\n  {{/each}}\n';
var colorSelectModel = '\n  <div class="modal fade modal2" id="select_color_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n      <div class="modal-dialog" >\n          <div class="modal-content">\n              <div class="modal-header">\n                  <h3 class="color-modal-title">\u65B0\u589E\u989C\u8272</h3>\n                  <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n              </div>\n              <div class="modal-body row color-modal-box" style="height: 180px;">\n                <div class="form-box" style="width:auto">\n                  <div class="color-upload-box" style="margin: 0 30px;">\n                    <img name="" id="update_color_img" src="../images/upload.png">\n                    <div class="color-bg-value"></div>\n                    <span>\u70B9\u51FB\u4E0A\u4F20\u989C\u8272\u56FE\u7247</span>\n                  </div>\n                  <div class="color-input-box">\n                    <div class="input-group">\n                      <span class="input-group-btn">\n                        <button class="btn btn-default" type="button" tabindex="999">\u8272\u53F7</button>\n                      </span>\n                      <input type="text" class="form-control" placeholder="\u8BF7\u8F93\u5165\u8272\u53F7">\n                        <span class="input-group-addon">#</span>\n                    </div>\n                    <div class="input-group">\n                      <span class="input-group-btn">\n                        <button class="btn btn-default" type="button" tabindex="999">\u8272\u540D</button>\n                      </span>\n                      <input type="text"  class="form-control" placeholder="\u8BF7\u8F93\u5165\u8272\u540D">\n                      <span class="input-group-addon chance_btn"><h3 class="color-helper-btn">\u9009\u62E9</h3></span>\n                    </div>\n                    <div class="input-group">\n                      <span class="input-group-btn">\n                        <button class="btn btn-default" type="button" tabindex="999">\u5907\u6CE8</button>\n                      </span>\n                      <input type="text"  class="form-control" placeholder="\u8BF7\u8F93\u5165\u5907\u6CE8">\n                    </div>\n                  </div>\n                </div>\n                <div class="color-add-helper">\n                  <div class="color-helper-box" style="display: none;">\n                  <div class="color_tabs">\n                    <div class="color_tab active" id="company_color">\u516C\u53F8\u8272\u540D</div>\n                    <div class="color_tab" id="system_color">\u7CFB\u7EDF\u8272\u540D</div>\n                  </div>\n                    <div class="input-group">\n                      <span class="input-group-btn">\n                        <button class="btn btn-default" type="button" tabindex="999">\u8272\u540D</button>\n                      </span>\n                      <input type="text"  class="form-control serch_input" placeholder="\u8BF7\u8F93\u5165\u8272\u540D">\n                    </div>\n                    <div class="color-all">\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class="modal-footer">\n                <div class="btn-group" role="group">\n                  <button class="btn btn-primary">\u4FDD\u5B58</button>\n                  <button class="btn" style="margin-left:30px" data-dismiss="modal">\u53D6\u6D88</button>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>';

/*

 修改的时候不要搞错了！！！！！！！！

 有样品后给样品添加颜色管理 ColorMaker


 新增样品颜色管理 静态的  ColorMakerStaticState 。
 */

var ColorMaker = function () {
    function ColorMaker(companyId) {
        var isGreyFabricColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, ColorMaker);

        this.companyId = companyId;
        this.isGreyFabricColor = isGreyFabricColor;
        this.data = {};
        this.callback = function () {};

        this.init();
    }

    _createClass(ColorMaker, [{
        key: 'init',
        value: function init() {
            var _this = this;

            $('body').append(colorSelectModel);

            this.showBtn = $(this);
            this.model = $('#select_color_model');
            this.title = this.model.find('.color-modal-title');
            this.img = this.model.find('#update_color_img');
            this.bg = this.model.find('.color-bg-value');
            this.input = this.model.find('input');
            this.name = this.input.eq(1);
            this.mark = this.input.eq(0);
            this.remark = this.input.eq(2);
            this.submit = this.model.find('.modal-footer .btn-primary');
            this.isLoading = false;

            this.helper = this.model.find('.color-add-helper');
            this.helperBox = this.helper.find('.color-helper-box');
            this.group = this.model.find('.input-group-addon');
            this.colorBox = this.model.find('.color-all');
            this.serch = this.model.find('.serch_input');
            this.tabs = this.model.find('.color_tabs');
            this.tab = this.model.find('.color_tab');

            //  this.colorBox.html(Handlebars.compile(tpl)({
            //    colors: defaultColor
            //  }))
            this.getCompanyColor();
            this.initUpload();
            // 因为我要用 $(this)
            var that = this;

            // 确定 编辑 或则新增
            this.submit.on('click', function () {

                if (!_this.name.val() && !_this.mark.val()) {
                    g_msgAlert('颜色名称和色号二者至少填写一个！');
                    return;
                }

                if (_this.isGreyFabricColor != 0) {

                    //默认不进这个方法

                    _this.sendGreyFabricColorAjax();
                } else {

                    _this.sendAjax();
                }
            });

            //tab切换
            this.tab.on('click', function () {
                var color = $(this);
                color_type = color.attr('id'); //tab标签类型
                color.siblings().removeClass('active');
                color.addClass('active');
                if (color_type == 'company_color') {
                    that.searchInput(search_company);
                    that.getCompanyColor();
                } else {
                    that.searchInput(search_system);
                    that.indexSelect(search_system);
                }
            });

            //选中某一个颜色
            this.helperBox.on('click', '.sample-color-item', function () {
                var color = $(this);
                that.data.pic = color.attr('data-pic');
                that.data.name = color.attr('data-name');
                that.data.mark = color.attr('data-mark');

                that.changeInput();
                that.mark.focus();
            });

            // 搜索输入框判定回车
            this.serch.keyup(function (e) {
                var con = $(this);
                if (color_type == 'company_color') {
                    search_company = con.val();
                } else if (color_type == 'system_color') {
                    search_system = con.val();
                }
                that.indexSelect(con.val());
                // if(e.which == 13) {

                // }
            });

            //打开选择选择面板
            //  this.helper.find('.color-helper-btn').on('click', () => {

            //    this.helperBox.show()
            //  })
            this.group.find('.color-helper-btn').on('click', function () {
                _this.helperBox.show();
            });

            //失去焦点隐藏搜索结果
            $('body').click(function (e) {
                if (!$(e.target).closest('.color-add-helper').length) {
                    //  that.helperBox.hide()
                }
            });
        }

        // 不引入 cmd 的代价

    }, {
        key: 'initUpload',
        value: function initUpload() {
            var _this2 = this;

            if ($.fn.initUploadImg) {

                this.img.initUploadImg({

                    uploadUrl: '/api/upload/pic',
                    totalLen: 1,
                    multiple: false,
                    listenImgBox: '#panel_color_box',
                    moreData: {
                        bizType: 16,
                        bizId: this.companyId
                    },

                    callback: function callback(data) {
                        _this2.img.attr('src', data[0].path).attr('data-pic', data[0].path);
                        _this2.bg.css('background', 'none');
                    }
                });
            } else {
                setTimeout(function () {
                    _this2.initUpload();
                }, 100);
            }
        }
    }, {
        key: 'openInit',
        value: function openInit() {
            this.title.text(this.data.id ? '编辑颜色' : '新增颜色');
            this.helper.find('.color-helper-box').hide();
            this.tab.removeClass('active');
            this.tab.eq(0).addClass('active');
            this.bg.css('background', 'none');
            if (this.data.pic) {
                this.img.attr('data-pic', this.data.pic);
                if (this.data.pic.length > 20) {
                    this.img.attr('src', this.data.pic);
                } else {
                    this.img.attr('src', '../images/upload.png');
                    this.bg.css('background', this.data.pic);
                }
            } else {
                this.img.attr('src', '../images/upload.png').attr('data-pic', '');
                this.bg.css('background', 'none');
            }
            //  console.log(this.data)
            this.name.val(this.data.name);
            this.mark.val(this.data.mark);
            this.remark.val(this.data.remark);
            this.getCompanyColor();
            this.submit.prop('disabled', false);
        }
        //选中颜色后执行这条，避免死循环····

    }, {
        key: 'changeInput',
        value: function changeInput() {
            this.bg.css('background', 'none');
            if (this.data.pic) {
                this.img.attr('data-pic', this.data.pic);
                if (this.data.pic.length > 20) {
                    this.img.attr('src', this.data.pic);
                } else {
                    this.img.attr('src', '../images/upload.png');
                    this.bg.css('background', this.data.pic);
                }
            } else {
                this.img.attr('src', '../images/upload.png').attr('data-pic', '');
                this.bg.css('background', 'none');
            }
            // console.log(this.data)

            this.name.val(this.data.name);
            // this.remark.val(this.data.remark)
            if (this.data.id) {
                //编辑
                // console.log('编辑')

                // this.mark.val(this.data.mark)
            } else {
                //新增
                // console.log('新增')
                if (this.mark.val == '') {
                    this.mark.val(this.data.mark);
                }
            }

            //  this.getCompanyColor()
            this.submit.prop('disabled', false);
        }
        // 重置系统色名

    }, {
        key: 'getSystemColor',
        value: function getSystemColor() {
            this.colorBox.html(Handlebars.compile(tpl)({
                colors: defaultColor
            }));
        }

        //搜索框重置

    }, {
        key: 'searchInput',
        value: function searchInput(data) {
            this.serch.val(data);
        }

        //获取公司色名

    }, {
        key: 'getCompanyColor',
        value: function getCompanyColor() {
            var _this3 = this;

            //测试用
            // this.colorBox.html(Handlebars.compile(tpl)({
            //   colors: companyColor
            // }))
            var AEOpt = {
                url: '/api/samples/colorByCompanyId',
                type: 'POST',
                data: {
                    companyId: JSON.parse(this.companyId),
                    key: search_company
                }
            };

            var AECb = g_return200CbObj(function (data) {
                // g_autoCloseTip('添加成功', 300)
                // console.log(data)
                _this3.colorBox.html(Handlebars.compile(tpl)({
                    colors: data.colors
                }));
            });

            AECb.beforeSend = function () {
                _this3.isLoading = true;
            };

            AECb.complete = function () {
                _this3.isLoading = false;
            };

            sendAjax(AEOpt, AECb);
        }
    }, {
        key: 'sendGreyFabricColorAjax',
        value: function sendGreyFabricColorAjax() {
            var _this4 = this;

            if (this.isLoading) {
                return;
            }

            var AEOpt = {
                url: '/api/samples/color',
                type: 'POST',
                data: {
                    companyId: this.companyId,
                    name: this.name.val(),
                    mark: this.mark.val(),
                    remark: this.remark.val(),
                    pic: this.img.attr('data-pic')
                }
            };

            var AECb = g_return200CbObj(function (data) {
                g_autoCloseTip('添加成功', 300);
                _this4.callback(AEOpt.data);
                _this4.model.modal('hide');
            });

            AECb.beforeSend = function () {
                _this4.isLoading = true;
            };

            AECb.complete = function () {
                _this4.isLoading = false;
            };

            sendAjax(AEOpt, AECb);
        }

        // 先上传 公司图片库， 在绑定这个样品

    }, {
        key: 'sendAjax',
        value: function (_sendAjax) {
            function sendAjax() {
                return _sendAjax.apply(this, arguments);
            }

            sendAjax.toString = function () {
                return _sendAjax.toString();
            };

            return sendAjax;
        }(function () {
            var _this5 = this;

            if (this.isLoading) {
                return;
            }
            //  console.log(this.name.val())
            //  console.log(this.img.attr('data-pic'))

            if (Number(this.data.isdirectlyEnter)) {

                this.data.name = this.name.val();
                this.data.mark = this.mark.val();
                this.data.pic = this.img.attr('data-pic');

                this.callback(this.data);
                this.model.modal('hide');
                return;
            }

            var AEOpt = {
                url: '/api/samples/' + (this.data.id ? '/color/' + this.data.id : this.data.sampleId + '/color'),
                type: this.data.id ? 'PUT' : 'POST',
                data: {
                    name: this.name.val(),
                    mark: this.mark.val(),
                    remark: this.remark.val(),
                    pic: this.img.attr('data-pic')
                }
            };

            var AECb = g_return200CbObj(function (data) {
                _this5.data.name = AEOpt.data.name;
                _this5.data.mark = AEOpt.data.mark;
                _this5.data.remark = AEOpt.data.remark;
                _this5.data.pic = AEOpt.data.pic;

                if (_this5.data.id) {
                    g_autoCloseTip('编辑成功', 300);
                } else {
                    g_autoCloseTip('新增成功', 300);
                    _this5.data.id = data.id;
                }

                _this5.callback(_this5.data);
                _this5.model.modal('hide');
            });

            AECb.beforeSend = function () {
                _this5.isLoading = true;
            };

            AECb.complete = function () {
                _this5.isLoading = false;
            };

            sendAjax(AEOpt, AECb);
        })
    }, {
        key: 'getGreyFabricColor',
        value: function getGreyFabricColor(name, mark, callback) {
            this.greyFabricColorname = name;
            this.greyFabricColormark = mark;
            this.callback = callback;
        }

        //搜索

    }, {
        key: 'indexSelect',
        value: function indexSelect(index) {
            var arr = defaultColor;

            if (color_type == 'system_color') {
                //前端json搜索
                if (index == '' || index == null) {
                    arr = eval(arr); //json是你的json变量名
                    // console.log(arr)
                    this.colorBox.html(Handlebars.compile(tpl)({
                        colors: arr
                    }));
                    return arr;
                } else {
                    var newJson = [];
                    arr = eval(arr);

                    for (var i = 0; i < defaultColor.length; i++) {
                        if (defaultColor[i].name.indexOf(index) > -1) {
                            //name为你需要遍历的变量
                            // console.log('有')
                            var tempJson = { //一下id和name是json中需要输出的变量
                                pic: arr[i].pic,
                                name: arr[i].name
                            };
                            newJson.push(tempJson);
                        }
                    }
                    // console.log(newJson)
                    this.colorBox.html(Handlebars.compile(tpl)({
                        colors: newJson
                    }));
                    return newJson;
                }
            } else if (color_type == 'company_color') {
                this.getCompanyColor();
            }
        }
    }, {
        key: 'open',
        value: function open(data, callback) {
            this.data = data;
            this.callback = callback;
            this.openInit();
            this.model.modal('show');
        }
    }]);

    return ColorMaker;
}();

var ColorMakerStaticState = function () {
    function ColorMakerStaticState(companyId) {
        _classCallCheck(this, ColorMakerStaticState);

        this.companyId = companyId;
        this.data = {};
        this.callback = function () {};
        this.init();
    }

    _createClass(ColorMakerStaticState, [{
        key: 'init',
        value: function init() {
            var _this6 = this;

            $('body').append(colorSelectModel);

            this.showBtn = $(this);
            this.model = $('#select_color_model');
            this.title = this.model.find('.color-modal-title');
            this.img = this.model.find('#update_color_img');
            this.bg = this.model.find('.color-bg-value');
            this.input = this.model.find('input');
            this.name = this.input.eq(1);
            this.mark = this.input.eq(0);
            this.remark = this.input.eq(2);
            this.submit = this.model.find('.modal-footer .btn-primary');
            this.isLoading = false;

            this.helper = this.model.find('.color-add-helper');
            this.helperBox = this.model.find('.color-helper-box');
            this.group = this.model.find('.input-group-addon');
            this.colorBox = this.model.find('.color-all');
            this.serch = this.model.find('.serch_input');
            this.tabs = this.model.find('.color_tabs');
            this.tab = this.model.find('.color_tab');

            this.colorBox.html(Handlebars.compile(tpl)({
                colors: defaultColor
            }));
            this.initUpload();

            // 因为我要用 $(this)
            var that = this;

            // 确定 编辑 或则新增
            this.submit.on('click', function () {

                if (!_this6.name.val() && !_this6.mark.val()) {
                    g_msgAlert('颜色名称和色号二者至少填写一个！');
                    return;
                }

                _this6.sendAjax();
            });

            //tab切换
            this.tab.on('click', function () {
                var color = $(this);
                color_type = color.attr('id'); //tab标签类型
                color.siblings().removeClass('active');
                color.addClass('active');
                if (color_type == 'company_color') {
                    that.searchInput(search_company);
                    that.getCompanyColor();
                } else {
                    that.searchInput(search_system);
                    that.indexSelect(search_system);
                }
            });

            // 搜索输入框判定回车
            this.serch.keyup(function (e) {
                var con = $(this);
                if (color_type == 'company_color') {
                    search_company = con.val();
                } else if (color_type == 'system_color') {
                    search_system = con.val();
                }
                that.indexSelect(con.val());
                if (e.which == 13) {}
            });

            //选中某一个颜色
            this.helperBox.on('click', '.sample-color-item', function () {
                var color = $(this);
                //  console.log(color.attr('data-pic'))
                that.data.pic = color.attr('data-pic');
                that.data.name = color.attr('data-name');
                that.data.mark = color.attr('data-mark');

                that.changeInput();
                that.mark.focus();
            });

            //打开选择选择面板
            this.group.find('.color-helper-btn').on('click', function () {

                _this6.helperBox.show();
                //  this.helperBox.addClass('ssss')
            });

            //失去焦点隐藏搜索结果
            $('body').click(function (e) {
                if (!$(e.target).closest('.input-group-addon').length) {
                    //  that.helperBox.hide()
                }
            });
        }

        // 不引入 cmd 的代价

    }, {
        key: 'initUpload',
        value: function initUpload() {
            var _this7 = this;

            if ($.fn.initUploadImg) {

                this.img.initUploadImg({

                    uploadUrl: '/api/upload/pic',
                    totalLen: 1,
                    multiple: false,
                    listenImgBox: '#panel_color_box',
                    moreData: {
                        bizType: 16,
                        bizId: this.companyId
                    },

                    callback: function callback(data) {
                        _this7.img.attr('src', data[0].path).attr('data-pic', data[0].path);
                        _this7.bg.css('background', 'none');
                    }
                });
            } else {
                setTimeout(function () {
                    _this7.initUpload();
                }, 100);
            }
        }
    }, {
        key: 'openInit',
        value: function openInit() {

            this.title.text(this.data.id ? '编辑颜色' : '新增颜色');
            this.helper.find('.color-helper-box').hide();
            this.tab.removeClass('active');
            this.tab.eq(0).addClass('active');
            this.bg.css('background', 'none');
            if (this.data.pic) {
                this.img.attr('data-pic', this.data.pic);
                if (this.data.pic.length > 20) {
                    this.img.attr('src', this.data.pic);
                } else {
                    this.img.attr('src', '../images/upload.png');
                    this.bg.css('background', this.data.pic);
                }
            } else {
                this.img.attr('src', '../images/upload.png').attr('data-pic', '');
                this.bg.css('background', 'none');
            }

            this.name.val(this.data.name);
            this.mark.val(this.data.mark);
            this.remark.val(this.data.remark);
            this.getCompanyColor();
            this.submit.prop('disabled', false);
        }

        //选中颜色后执行这条，避免死循环····

    }, {
        key: 'changeInput',
        value: function changeInput() {
            this.bg.css('background', 'none');
            if (this.data.pic) {
                this.img.attr('data-pic', this.data.pic);
                if (this.data.pic.length > 20) {
                    this.img.attr('src', this.data.pic);
                } else {
                    this.img.attr('src', '../images/upload.png');
                    this.bg.css('background', this.data.pic);
                }
            } else {
                this.img.attr('src', '../images/upload.png').attr('data-pic', '');
                this.bg.css('background', 'none');
            }
            // console.log(this.data)

            this.name.val(this.data.name);
            this.remark.val(this.data.remark);
            if (this.data.id) {
                //编辑
                // console.log('编辑')
                this.mark.val(this.data.mark);
            } else {
                //新增
                //  console.log('新增')
                if (this.mark.val == '') {
                    this.mark.val(this.data.mark);
                }
            }

            this.submit.prop('disabled', false);
        }

        // 重置系统色名

    }, {
        key: 'getSystemColor',
        value: function getSystemColor() {
            this.colorBox.html(Handlebars.compile(tpl)({
                colors: defaultColor
            }));
        }

        //搜索框重置

    }, {
        key: 'searchInput',
        value: function searchInput(data) {
            this.serch.val(data);
        }

        //获取公司色名

    }, {
        key: 'getCompanyColor',
        value: function getCompanyColor() {
            var _this8 = this;

            var AEOpt = {
                url: '/api/samples/colorByCompanyId',
                type: 'POST',
                data: {
                    companyId: JSON.parse(this.companyId),
                    key: search_company
                }
            };

            var AECb = g_return200CbObj(function (data) {
                // g_autoCloseTip('添加成功', 300)
                // console.log(data)
                _this8.colorBox.html(Handlebars.compile(tpl)({
                    colors: data.colors
                }));
            });

            AECb.beforeSend = function () {
                _this8.isLoading = true;
            };

            AECb.complete = function () {
                _this8.isLoading = false;
            };

            sendAjax(AEOpt, AECb);
        }

        // 先上传 公司图片库， 在绑定这个样品

    }, {
        key: 'sendAjax',
        value: function sendAjax() {

            if (this.isLoading) {
                return;
            }

            var AEOpt = {
                name: this.name.val(),
                mark: this.mark.val(),
                remark: this.remark.val(),
                pic: this.img.attr('data-pic')
            };

            var isRepeat = 0;

            $('#panel_color_box').find('.sample-color-item').each(function () {

                var _that = $(this);

                _that.attr('data-name') === AEOpt.name && _that.attr('data-mark') === AEOpt.mark && (isRepeat = 1);
            });

            if (Number(isRepeat)) {

                g_autoCloseTip('颜色重复！');

                return;
            }

            this.callback(AEOpt);

            this.model.modal('hide');
        }
        //搜索

    }, {
        key: 'indexSelect',
        value: function indexSelect(index) {
            var arr = defaultColor;

            if (color_type == 'system_color') {
                //前端json搜索
                if (index == '' || index == null) {
                    arr = eval(arr); //json是你的json变量名
                    // console.log(arr)
                    this.colorBox.html(Handlebars.compile(tpl)({
                        colors: arr
                    }));
                    return arr;
                } else {
                    var newJson = [];
                    arr = eval(arr);

                    for (var i = 0; i < defaultColor.length; i++) {
                        if (defaultColor[i].name.indexOf(index) > -1) {
                            //name为你需要遍历的变量
                            // console.log('有')
                            var tempJson = { //一下id和name是json中需要输出的变量
                                pic: arr[i].pic,
                                name: arr[i].name
                            };
                            newJson.push(tempJson);
                        }
                    }
                    // console.log(newJson)
                    this.colorBox.html(Handlebars.compile(tpl)({
                        colors: newJson
                    }));
                    return newJson;
                }
            } else if (color_type == 'company_color') {
                this.getCompanyColor();
            }
        }
    }, {
        key: 'open',
        value: function open(data, callback) {
            this.data = data;
            this.callback = callback;
            this.openInit();
            this.model.modal('show');
        }
    }]);

    return ColorMakerStaticState;
}();