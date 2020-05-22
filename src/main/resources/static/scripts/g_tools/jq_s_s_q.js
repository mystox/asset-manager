'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
    默认中国省-市-区-联动

    思路, 根据默认值存在与否，分为新增与编辑，编辑页面也可能存在新增地址

    默认应展示 省tag； 因为业务需求 默认 省tag 与 市tag 展示

    A.  
        1.省tab按钮 click 省result show ; 

        2.省resule span click：
            - 清空 市-区内容，显示市内tag 隐藏区tag
            - 获取该省的全部市，更新市result
            - 市tag trigger('click'); 
            - 调用callback 这个时候回调obj参数 shi qu 皆为{id:'',name:''}

    B. 
        1.市内tab按钮 click 市result show ; 

        2.市内resule span click：
            - 清空 区内容，隐藏区tag
            - 获取该市的全部区，更新区result
            - 区tag trigger('click'); 
            - 调用callback 这个时候回调obj参数 仅 qu 为{id:'',name:''}

    C. 
        1.市内tab按钮 click 市result show ; 

        2.区内resule span click：
            - 调用callback 这个时候回调obj参数 省市区 值不会丢失
            - 关闭弹窗
    ======================================================================

    行为定义，点击注册这个dom 显示整个选择器

    **点击 x 或则 任意非选择器时 关闭选择器
        
        关注点：（未开启）

            选择器展示时， document 注册一个 click 具名函数，通过 e.target 判断是否点击到了选择者

            如果没有再选择器上操作， 关机选择器，注销这个具名函数。

            区span、x点击的时候也要注销掉这个点击事件
 */
;
(function ($) {
    $.fn.shengShiQu = function (options) {
        var _defaults2;

        //默认参数
        var _defaults = (_defaults2 = {

            ajaxUrl: '/colla/region', //省市区联动ajax接口

            select_country: '100000', //默认中国

            select_sheng: '', //获取省, 根据国家，获取全部省

            select_shi: '', //获取市，根据select_sheng，获取市

            select_qu: '' }, _defineProperty(_defaults2, 'select_qu', ''), _defineProperty(_defaults2, 'only_to_sheng', ''), _defineProperty(_defaults2, 'text', '请选择地址'), _defineProperty(_defaults2, 'callback', function callback(obj) {
            //每次选择变动之后都会返回一个对象 

            console.warn('不用回调，我看你怎么开发！');
            /*  obj:{
                  sheng: {
                      id:123,
                      name: '浙江省'
                  },
                  shi: {
                      id: 123,
                      name: '绍兴市'
                  },
                  qu: {
                      id: 123,
                      name:'越城区'
                  }
              }*/
        }), _defaults2);

        //注入默认值
        var _sets = $.extend(_defaults, options || {});

        //缓存本体
        var _dom_this = $(this);

        //缓存载体
        var _this = $(this).parent();

        // 定位
        if (_this.css('position') !== 'relative' || _this.css('position') !== 'absolute') {

            _this.css('position', 'relative');
        };

        //是否打开过
        var _flag_never_open = true;

        //默认
        var _empty_option = '请选择';

        //回调参数
        var _cb_obj = {
            sheng: {
                id: '',
                name: ''
            },
            shi: {
                id: '',
                name: ''
            },
            qu: {
                id: '',
                name: ''
            }

            //设置主体元素id值
        };var _id = 'ssq_' + new Date().getTime();

        var _main_dom, //选择器主体，用来控制显示隐藏
        _tags, _results, _close_icon, _open_icon, _tags_sheng, _tags_shi, _tags_qu, _result_sheng, _result_shi, _result_qu;

        //span选择题模板
        var _tpl = '<p><span data-key="{#id#}" title="{#name#}">{#name#}</span></p>';

        //dom主体
        var _main_dom_html = ['<div class="ssq-div" id="' + _id + '">', '<ul>', '<li class="ssq-choose">' + _sets.text + '</li>', '<li class="ssq-choose" style="display:none;">' + _sets.text + '</li>', '<li class="ssq-choose" style="display:none;">' + _sets.text + '</li>', '</ul>', '<div class="ssq-result-box">', '<div class="ssq-result"></div>', '<div class="ssq-result"></div>', '<div class="ssq-result"></div>', '</div>', '<i class="i-icon i-close-icon"></i>', '</div>', '<i class="i-icon i-city-choose-icon"></i>'].join('');

        //讲选择器载入
        _this.append(_main_dom_html);

        //拿取对应的dom节点
        _main_dom = $('#' + _id);

        _tags = _main_dom.find('ul .ssq-choose');

        _results = _main_dom.find('.ssq-result-box .ssq-result');

        _close_icon = _main_dom.find('.i-close-icon');

        _open_icon = _this.find('.i-city-choose-icon');

        _tags_sheng = _tags.eq(0);
        _tags_shi = _tags.eq(1);
        _tags_qu = _tags.eq(2);

        _result_sheng = _results.eq(0);
        _result_shi = _results.eq(1);
        _result_qu = _results.eq(2);

        /**
         * [_change_select 改变回调参数 并执行回调]
         * @param  {[number]} index [所处的模块 省0 市1 区2]
         * @param  {[string]} key   [该地区的id]
         * @param  {[string]} name  [该地区的name]
         */
        function _change_select(index, key, name) {
            switch (+index) {
                case 0:
                    _cb_obj.sheng.id = key;
                    _cb_obj.sheng.name = name;

                    _cb_obj.shi.id = '';
                    _cb_obj.shi.name = '';

                    _cb_obj.qu.id = '';
                    _cb_obj.qu.name = '';

                    _tags_sheng.text(name).attr('title', name);

                    _clear_tags_result(1);
                    _clear_tags_result(2);

                    _sets.callback(_cb_obj);
                    break;
                case 1:
                    _cb_obj.shi.id = key;
                    _cb_obj.shi.name = name;

                    _cb_obj.qu.id = '';
                    _cb_obj.qu.name = '';

                    _tags_shi.text(name).attr('title', name);

                    _clear_tags_result(2);

                    _sets.callback(_cb_obj);
                    break;
                case 2:
                    _cb_obj.qu.id = key;
                    _cb_obj.qu.name = name;

                    _tags_qu.text(name).attr('title', name);

                    _sets.callback(_cb_obj);
                    break;
                default:
                    g_msgAlert('出现异常,请重新选择~');
            }
        }

        //控制显示与选中
        function _show_selecting(index) {

            _tags.removeClass('active').eq(index).addClass('active');
            _results.hide().eq(index).show();
        }

        //清空文字与内容
        function _clear_tags_result(index) {

            _tags.eq(index).text(_sets.text).attr('title', _sets.text);
            _results.eq(index).html('');
        }

        //省市区调用，以及简单备忘录模式
        var _loadSsq = function () {
            var _cache = {};

            var _ssq_options = {
                url: _sets.ajaxUrl,
                type: 'GET',
                sendAuth: false,
                data: {
                    parentId: ''
                }
            };
            var _ssq_callback = {};

            function _in_to_box(data, box) {
                var _html = '';

                data.forEach(function (item) {
                    _html += g_formateString(_tpl, item);
                });

                box.html(_html);
            }

            return function ajaxSsq(parentId, insetBox, cb) {

                if (_cache[parentId]) {

                    _in_to_box(_cache[parentId], insetBox);

                    cb && cb(_cache[parentId]);
                    return;
                }

                _ssq_options.data.parentId = parentId;

                _ssq_callback.success = function (data) {

                    var _code = +data.code;

                    if (_code === 200) {

                        //如果出现错误没有拿到数据
                        if (data.regions.length === 0) {
                            return;
                        }

                        //这一组的parentId 都是同一个，就取第一个为准
                        _cache[data.regions[0].parentId] = data.regions;

                        _in_to_box(data.regions, insetBox);

                        cb && cb(data.regions);
                    } else {
                        responseNo200(_code, data.message);
                    }
                };

                sendAjax(_ssq_options, _ssq_callback);
            };
        }();

        //默认值处理
        function _default_load() {
            // 省 既编辑模式，
            _loadSsq(_sets.select_country, _result_sheng, function (data) {

                //这里在ajax回调之后才设置flag ，防止第一次数据请求失败
                _flag_never_open = false;

                if (!_sets.select_sheng) {
                    _show_selecting(0);
                    return;
                }

                data.some(function (item) {

                    if (+item.id === +_sets.select_sheng) {

                        _cb_obj.sheng.id = item.id;
                        _cb_obj.sheng.name = item.name;

                        _tags_sheng.text(item.name).attr('title', item.name);

                        return true;
                    }
                });
            });

            //市 既编辑模式，
            //如果默认省不存在 那么久停留在省选择
            if (!_sets.select_sheng) {
                return;
            }

            //打开市tag
            _tags_shi.show();

            //加载该省拥有的市
            _loadSsq(_sets.select_sheng, _result_shi, function (data) {

                //如果没有市默认值 那就仅仅展示好了
                if (!_sets.select_shi) {
                    _show_selecting(1);
                    return;
                }

                //如果不存在区 那么默认在市tag
                if (!_sets.select_qu) {
                    _show_selecting(1);
                }

                //处理选中值 市
                data.some(function (item) {

                    if (+item.id === +_sets.select_shi) {

                        _cb_obj.shi.id = item.id;
                        _cb_obj.shi.name = item.name;

                        _tags_shi.text(item.name).attr('title', item.name);
                        return true;
                    }
                });
            });

            // 区 既编辑模式
            // 如果不存在 市 那么区就不要显示了
            if (!_sets.select_shi) {
                return;
            }

            //打开区 tag
            _tags_qu.show();

            //加载该市拥有的 区
            _loadSsq(_sets.select_shi, _result_qu, function (data) {

                // 能够到这里 那么肯定打开区 tag
                _show_selecting(2);

                //如果没有 区 默认值 那就不用处理选中值了
                if (!_sets.select_qu) {

                    return;
                }

                data.some(function (item) {

                    if (+item.id === +_sets.select_qu) {

                        _cb_obj.qu.id = item.id;
                        _cb_obj.qu.name = item.name;

                        _tags_qu.text(item.name).attr('title', item.name);
                        return true;
                    }
                });
            });
        }

        //先调用，优化
        _default_load();

        //显示
        _open_icon.on('click', function () {

            _dom_this.trigger('click');
        });
        _dom_this.on('click', function () {

            _main_dom.show();

            if (_flag_never_open) {

                _default_load();
            }
            //$(document).on('click',_hideMain);
        });
        //开始绑定click事件 

        //tags 的绑定事件
        _tags.on('click', function () {

            var _this = $(this);

            if (_this.hasClass('active')) {
                return;
            }

            _show_selecting(_this.index());
        });

        //每个result中的
        _result_sheng.on('click', 'span', function () {

            var _pId = $(this).attr('data-key');
            var _name = $(this).text();

            if (Number(_sets.only_to_sheng)) {

                _change_select(0, _pId, _name);
            } else {

                _tags_shi.show().trigger('click');

                _tags_qu.hide();

                _change_select(0, _pId, _name);

                _loadSsq(_pId, _result_shi);
            }
        });

        _result_shi.on('click', 'span', function () {

            var _pId = $(this).attr('data-key');
            var _name = $(this).text();

            _tags_qu.show().trigger('click');

            _change_select(1, _pId, _name);

            _loadSsq(_pId, _result_qu);
        });

        _result_qu.on('click', 'span', function () {

            var _pId = $(this).attr('data-key');
            var _name = $(this).text();

            _change_select(2, _pId, _name);

            _main_dom.hide();

            //$(document).off('click',_hideMain);
        });

        //关闭事件绑定
        _close_icon.on('click', function () {

            _main_dom.hide();

            //$(document).off('click',_hideMain);

            return false;
        });
    };
})(jQuery);