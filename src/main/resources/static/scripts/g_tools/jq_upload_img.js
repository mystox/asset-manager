'use strict';

/*
    H5 支持下的图片上传  未做去重处理

    不推荐 img input 自闭和的作为代理元素

    只做长度校验  声明 存放img的父亲元素 listenImgBox 的选择器

    img 需要有一个 class = 'call-upload-length' 作为检测标识符

    行为为 $(listenImgBox).find('img.call-upload-lenght').length 获得的确展示给用户的上传图片长度
 */
;
(function ($) {
            $.fn.initUploadImg = function (options) {

                        //代理按钮
                        var _this = $(this);

                        //默认参数
                        var _defaults = {

                                    uploadUrl: '/upload/pic', //默认图片上传路径

                                    multiple: true, //是否允许多选

                                    drag: false, //是否允许拖拽上传

                                    dragBox: _this, //默认拖拽接收区域为按钮

                                    totalLen: 99, //能够上传的图片总长度

                                    chooseLen: 9, //单词多图上传长度限制

                                    maxSize: 10, //默认单张图片上传大小，单位（M）

                                    name: 'files', //默认上传接时，所用的key值

                                    listenImgBox: '', //上传查找已经上传的长度，不给默认值得原因是，如果存在多个上传器，长度不能确定

                                    type: 'image/gif,image/jpg,image/png,image/jpeg,image/tiff', //默认上传类型

                                    moreData: {}, //该上传接口需要附加的值 格式为 obj 列 { companyId: $.cookie('company_id')}

                                    before: function before() {}, //上传之前执行的数据不关联的函数

                                    complete: function complete() {}, //上传之后执行的数据不关联的函数，不管上传有没有成功

                                    callback: function callback(response) {
                                                //上传成功后的回调 ，失败的话默认处理了，不需要关注太多

                                                //response的为files数组
                                                console.warn(' 你忘记上传图片后的回调了，那么上传有什么意义呢？');
                                    }
                        };

                        //注入默认值
                        var _sets = $.extend(_defaults, options || {});

                        //判断是否添加了listenImgBox
                        if (!_sets.listenImgBox) {

                                    console.warn(' 为了严禁，你需要添加 如果你拿到img key值之后需要的放在一个 父亲元素 \n 告诉我 如何找到它就是了 #xxx .xxx 我都乐意');
                                    return;
                        }

                        //当前时间戳，针对一个页面有多个上传入口
                        var _now = Date.now();

                        //上传input id
                        var _file_id = 'file_' + _now;

                        //已经上传图片的长度
                        var _had_up_length = 0;

                        //准备上传
                        var _file_arr = [];

                        //生成file input
                        var _file_input = ['<input type="file" style="display:none" ', 'name="', _sets.name, '" ', _sets.multiple ? ' multiple ' : ' ', ' accept="', _sets.type, '" id="', _file_id, '" >'].join('');

                        //插入为同胞元素
                        _this.parent().append(_file_input);

                        //loading
                        var _loading_id = 'loading_' + _now;

                        var _loading = ['<img id="', _loading_id, '" src="/images/loading.gif" class="upload-loading">'].join('');

                        //定位
                        if (_this.css('position') !== 'relative' || _this.css('position') !== 'absolute') {

                                    _this.css('position', 'relative');
                        };
                        //代理元素插入loading 如果是自闭和元素 将失效
                        _this.append(_loading);

                        //代理点击
                        _this.on('click', function () {

                                    if (g_is_phone) {

                                                location.href = '../modelweix.html';

                                                return;
                                    }

                                    $('#' + _file_id).trigger('click');
                        });

                        //监听file change事件
                        $('#' + _file_id).on('change', function () {

                                    if (this.files.length === 0) {

                                                return;
                                    }

                                    var _files = this.files;

                                    var _return_val = filesCheckAndReturn(_files);

                                    if (_return_val === false) {
                                                return false;
                                    }

                                    //没有出错 继续执行上传
                                    _uploadFiles(_return_val, _sets.moreData, _sets.callback);
                        });

                        if (_sets.drag) {

                                    //执行浏览器对拖拽进来的内容进行打开，绑定整个document的原因是
                                    //防止用户没有拖拽到指定目标导致 当前页面打开文件，丢失内容
                                    $(document).on({
                                                dragleave: function dragleave(e) {
                                                            //拖离
                                                            e.preventDefault();
                                                },
                                                drop: function drop(e) {
                                                            //拖后放
                                                            e.preventDefault();
                                                },
                                                dragenter: function dragenter(e) {
                                                            //拖进
                                                            e.preventDefault();
                                                },
                                                dragover: function dragover(e) {
                                                            //拖来拖去
                                                            e.preventDefault();
                                                }
                                    });

                                    /* _sets.dragBox[0].addEventListener('drop',function(e) {*/
                                    _sets.dragBox.on('drop', function (e) {
                                                e.preventDefault();

                                                var _files = e.originalEvent.dataTransfer.files;

                                                //检测是否是拖拽文件到页面的操作
                                                if (_files.length == 0) {
                                                            return false;
                                                };

                                                var _return_val = filesCheckAndReturn(_files);

                                                if (_return_val === false) {
                                                            return false;
                                                }

                                                //没有出错 继续执行上传
                                                _uploadFiles(_return_val, _sets.moreData, _sets.callback);
                                    });
                        }
                        /**
                         * [filesCheckAndReturn 检查上传文件s是否满足要求]
                         * @param  {array} files [文件数组]
                         * @return {array}       [如果返回数组，通过校验能够使用]
                         * @return {boolean}     [false,未通过校验]
                         */
                        function filesCheckAndReturn(files) {

                                    var _flag_type = false;

                                    var _flag_size = false;

                                    //清空准备上传队列
                                    var _file_arr = [];

                                    //每次上传都要更新，避免移动，删除操作对限制长度的影响
                                    _had_up_length = $(_sets.listenImgBox).find('.call-upload-length').length;

                                    //单词上传的长度限制
                                    if (files.length > _sets.chooseLen) {

                                                g_msgAlert('单次上传图片，请控制在' + _sets.chooseLen + '张以内哟~');

                                                //清空所选内容
                                                $('#' + _file_id).val('');

                                                return false;
                                    }

                                    //总长度
                                    if (_had_up_length + files.length > _sets.totalLen) {

                                                g_msgAlert('达到' + _sets.totalLen + '张上限，请重新选择或删除！');

                                                //清空所选内容
                                                $('#' + _file_id).val('');

                                                return false;
                                    }

                                    [].some.call(files, function (file, i) {

                                                //这两个if顺序决定了 在大小与类型错误的同时，提示类型

                                                //accept做了图片限制，以防万一
                                                if (!/^image\//.test(file.type)) {

                                                            _flag_type = true;

                                                            return true;
                                                }

                                                //大小验证
                                                if (file.size / 1024 / 1024 > _sets.maxSize) {

                                                            _flag_size = true;

                                                            return true;
                                                }

                                                _file_arr.push(file);
                                    });

                                    //出现错误
                                    if (_flag_type) {

                                                g_msgAlert('请上传正确的文件类型！');

                                                //清空所选内容
                                                $('#' + _file_id).val('');

                                                return false;
                                    }

                                    if (_flag_size) {

                                                g_msgAlert('请重新选择图片，单张图片大小不应超过' + _sets.maxSize + 'M！');

                                                //清空所选内容
                                                $('#' + _file_id).val('');

                                                return false;
                                    }

                                    return _file_arr;
                        }
                        /**
                         * [_uploadFiles 拿到用户上传的files上传数据库 ]
                         * @param  {[array]} files    [用户选择的file文件信息]
                         * @param  {[type]} moreData [上传所需要附加的内容]
                         *
                         */
                        function _uploadFiles(files, moreData, callback) {

                                    //清空所选内容
                                    $('#' + _file_id).val('');

                                    //声明一个FormData格式的数据对象
                                    var _form_data = new FormData();

                                    var _return_data = [];

                                    //添加这个图片上传接口的需要的附加值
                                    Object.keys(moreData).forEach(function (key) {

                                                //也不会有人传入可枚举的原型属性吧。。。
                                                _form_data.append(key, moreData[key]);
                                    });

                                    //添加图片
                                    files.forEach(function (item, i) {

                                                //设置返回对象的可访问地址
                                                _return_data[i] = {};

                                                _return_data[i]['url'] = window.URL.createObjectURL(item);

                                                if (_sets.searchImage) {

                                                            var _name = item.name.replace(/\([^\)]*\)/g, '').replace(/[ ]/g, '');

                                                            _form_data.append('files', item, _name);
                                                } else {

                                                            //_sets.name 就是 input name值
                                                            _form_data.append(_sets.name, item);
                                                }
                                    });

                                    //ajax 需要单独设置了
                                    $.ajax({
                                                url: _sets.uploadUrl,
                                                type: 'POST',
                                                data: _form_data,
                                                async: true,
                                                cache: false,
                                                contentType: false,
                                                processData: false,
                                                beforeSend: function beforeSend(request) {
                                                            //request.setRequestHeader('Content-Type', 'application/json');
                                                            request.setRequestHeader('authorization', $.cookie('authorization'));

                                                            $('#' + _loading_id).css('opacity', '1');

                                                            //上传前函数
                                                            _sets.before();
                                                },
                                                success: function success(response) {
                                                            var _code = +response.code;

                                                            if (_code === 200) {

                                                                        if (_sets.searchImage) {

                                                                                    _return_data[0]['dataResult'] = response.dataResult;

                                                                                    callback(_return_data);

                                                                                    return;
                                                                        }

                                                                        if (_return_data.length !== response.picIds.length) {

                                                                                    g_msgAlert('服务器丢失个别图片，请继续上传');
                                                                        }

                                                                        //匹配对应值
                                                                        response.picIds.forEach(function (id, i) {

                                                                                    _return_data[i]['key'] = id;
                                                                                    _return_data[i]['path'] = response.picKeys[i];
                                                                        });

                                                                        callback(_return_data);
                                                            } else {

                                                                        responseNo200(_code, response.message);
                                                            }
                                                },
                                                complete: function complete() {
                                                            $('#' + _loading_id).css('opacity', '0');

                                                            //上传完成
                                                            _sets.complete();
                                                },
                                                error: function error(response) {

                                                            g_msgAlert('与服务器连接出现异常，请重试或者刷新页面');
                                                }
                                    });
                        }
            };
})(jQuery);