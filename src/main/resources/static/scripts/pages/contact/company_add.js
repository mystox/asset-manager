'use strict';

$(document).ready(function () {

     var _cookie_company_type = Number($.cookie('company_type'));

     var G_id_company = $.cookie('company_id');

     Main_js(_cookie_company_type);

     ssqChoose();

     judgeClick();

     helpCompany(_cookie_company_type);

     upLoadImg(G_id_company);

     sendFormInfo(G_id_company, _cookie_company_type);

     getDefaultJurisdiction(G_id_company, _cookie_company_type);

     getCurrencyList(G_id_company);

     //定制必填

     if ([3019, 33069, 34249].includes(Number(G_id_company))) {

          $('.custom-required').removeClass('display-none');

          getCustomCode(G_id_company);
     }

     var _famosi_name_code = $('#famosi_name_code');

     //法摩斯定制
     if ([3004, 34249, 3019].includes(Number(G_id_company)) && Number(_cookie_company_type) === 2) {

          _famosi_name_code.removeClass('display-none');
     } else {

          _famosi_name_code.remove();
     }

     //修改 文字 1:供应商 2:客户 3: 其他

     var _company_type_name = $('.company_type_name');
     var _company_must = $('.company_must');
     var _saleman_name = $('.saleman_name');
     var _select_saleman = $('#choose_user_div');
     var _company_must_key = $('#company_must_key');

     switch (_cookie_company_type) {
          case 1:
               $(document).attr('title', '新增供应商');

               _company_type_name.text('供应商');
               _select_saleman.text('请选择采购员');
               _saleman_name.text('采购员');
               _company_must.text('*');
               _company_must_key.text('*');

               break;
          case 2:
               $(document).attr('title', '新增客户');

               _company_type_name.text('客户');
               _select_saleman.text('请选择业务员');
               _saleman_name.text('业务员');
               _company_must.text('*');
               break;
          case 4:
               $(document).attr('title', '新增加工厂');

               _company_type_name.text('加工厂');
               _select_saleman.text('请选择业务员');
               _saleman_name.text('跟单员');
               _company_must.text('*');
               break;
          default:

               $(document).attr('title', '新增其他往来单位');
               _company_type_name.text('其他往来单位');
     }
});

//跟mainjs挂钩的
function Main_js(_cookie_company_type) {

     manager_check();

     //message更新
     mes_check();

     //设置默认选中

     //  $(`#company_qLevel_${_cookie_company_type}`).prop({
     //    'checked': true,
     //    'disabled': true
     //  }).addClass('bgj-cursor-not-allowed');

     //  $(`#company_qLevel_${_cookie_company_type}`).next('label').find('b').addClass('bgj-cursor-not-allowed');
}

//图片上传
function upLoadImg(companyId) {

     //最后对应上传的
     var _pics_input = $('#img_list');

     //图片在此box中展示
     var _img_box = $('.up-img-box');

     //图片上传插件
     $('.up-img-btn').initUploadImg({

          uploadUrl: '/api/upload/pic',

          listenImgBox: '.up-img-box',

          totalLen: 9,

          moreData: {
               bizType: 21,
               bizId: companyId
          },

          callback: function callback(data) {

               var _pics = _pics_input.val();

               //修正数组
               if (_pics.length === 0) {
                    _pics = [];
               } else {
                    _pics = _pics.split(',');
               }

               var _html = '';

               data.forEach(function (item, i) {

                    _pics.push(item.key);

                    _html += ['<a href="', item.url, '" target="_blank" data-key="', item.key, '">', '<img src="', item.url, '" class="call-upload-length" >', '<i class="i-icon i-close-icon"></i>', '</a>'].join('');
               });

               _pics_input.val(_pics.join(','));

               _img_box.append(_html);
          }
     });

     //删除绑定
     _img_box.on('click', '.i-close-icon', function () {

          var _a = $(this).parents('a');

          var _key = _a.attr('data-key');

          var _keys = _pics_input.val().split(',');

          //splice 是破坏原有数组，return值位被处理的元素，切不可 var 赋值
          _keys.splice(_keys.indexOf(_key), 1);

          _a.remove();

          _pics_input.val(_keys.join(','));

          return false;
     });
}

//省市区选择
function ssqChoose() {
     var _text_show_box = $('#ssq_show_text');
     var _input_sheng = $('#ssq_sheng');
     var _input_shi = $('#ssq_shi');
     var _input_qu = $('#ssq_qu');

     $('#ssq_show_text').shengShiQu({
          ajaxUrl: '/api/colla/region',
          select_sheng: '330000',
          select_shi: '',
          select_qu: '',
          callback: function callback(data) {

               var _html = '';

               _input_sheng.val(data.sheng.id);
               _input_shi.val(data.shi.id);
               _input_qu.val(data.qu.id);

               _html = data.sheng.name;

               if (data.shi.name) {

                    _html += '/' + data.shi.name;

                    if (data.qu.name) {
                         _html += '/' + data.qu.name;
                    }
               }
               _text_show_box.html(_html);
          }
     });
}

//表单提交  未做xss处理 编辑页面的信息通过 handlebar 处理
function sendFormInfo(companyId, company_type) {

     var _form = $('#ajax_send_form');
     var _submit = $('.ok-send-form');
     var _body = $('body');
     var _must_name = $('#must_name');
     var _must_cuerrency = $('#choose_currency_id');
     var _must_user = $('#choose_user_id');
     var _data_type = 0;

     var _form_options = {
          url: '/api/contact/company/saveContact',
          data: {}
     };

     var _form_callback = g_return200CbObj(function (data) {

          if (_data_type) {

               location.reload();
          } else {

               var _newly_build_return = $.cookie('newly_build_return');

               $.removeCookie('newly_build_return', {
                    path: '/'
               });

               _newly_build_return ? location.href = _newly_build_return : location.href = '/contact/company_list.html';
          }
     });
     _form_callback.beforeSend = function () {
          _begin_send();
     };

     _form_callback.complete = function () {
          _end_send();
     };

     //设置 disabled 防止 多次点击
     function _begin_send() {

          if (_data_type) {
               $('#ok_send_form_again').prop('disabled', true).text('正在提交...');
          } else {
               $('#ok_send_form').prop('disabled', true).text('正在提交...');
          }
     }

     function _end_send() {

          if (_data_type) {

               $('#ok_send_form_again').prop('disabled', false).text('保存并继续添加');
          } else {

               $('#ok_send_form').prop('disabled', false).text('保存');
          }
     }

     _body.on('click', '.ok-send-form', function () {

          var _this = $(this);
          var _data = {};
          var auth_data = [];
          _data_type = Number(_this.attr('data-type'));

          if ($.trim(_must_name.val()).length === 0) {

               g_msgAlert('请填写联系公司名称！');

               return false;
          }

          if (!_must_cuerrency.val()) {

               g_msgAlert('请填写币别！');

               return false;
          }

          if (!_must_user.val()) {

               g_msgAlert('\u8BF7\u586B\u5199' + (Number(company_type) === 1 ? '采购员!' : '业务员！'));

               return false;
          }

          //将form表单里面设置了name值的表单元素 每个以{name：''; value:''}的形式 返回数组
          _form.serializeArray().forEach(function (item) {
               _data['' + item.name] = item.value;
          });
          _form_options.data = _data;
          _form_options.data.companyId = companyId;
          _form_options.data.nature = company_type;

          if ([3019, 33069].includes(Number(companyId))) {

               if (!_form_options.data.address) {

                    g_msgAlert('请填写详细地址！');

                    return false;
               }

               if (!_form_options.data.manager) {

                    g_msgAlert('请填写联系人！');

                    return false;
               }

               if (!_form_options.data.telephone) {

                    g_msgAlert('请填写联系电话！');

                    return false;
               }
          }

          //法摩斯定制
          if ([3004, 34249, 3019].includes(Number(companyId)) && Number(company_type) === 2) {

               if (!_form_options.data.customerCode) {

                    g_msgAlert('请填写客户代码！');

                    return false;
               }
          }

          if ($('.choose-div-new').find('span').eq(0).attr('data-id') !== 'all') {

               if ($('#choose_edit_default').attr('data-default') !== '') {

                    auth_data.push($('#choose_edit_default').attr('data-default'));
               }

               if ($('.choose-div-new').find('span').length !== 0) {

                    $('.choose-div-new').find('span').each(function () {

                         auth_data.push(this.getAttribute('data-id'));
                    });
               }
          } else {

               auth_data = ['all'];
          }

          _form_options.data.participants = auth_data.join(',');

          //  console.log(_form_options.data);

          sendAjax(_form_options, _form_callback);
     });
}

//处理点击操作
function judgeClick() {

     //公司列表
     $('#goCompanyList').on('click', function () {
          location.href = '../contact/company_list.html';
     });

     //面包屑导航的公司
     $('#addCompanyLink').on('click', function () {

          location.reload();
     });

     // 新选的员工展示盒子
     var checkedBox = $('.choose-div-new');
     var checkUl = $('#choose_list_user_edit_company');

     //编辑权限-添加权限人员
     checkUl.on('click', 'li', function (event) {

          var _this = $(this);
          var _id = _this.attr('data-id');
          var html = '';

          // 全部员工已选了
          if (_id === 'hasAll') {

               return;
          }

          // 取消行为
          if (_this.hasClass('active')) {

               checkedBox.find('span[data-id="' + _id + '"]').remove();

               if (_id === 'all') {

                    checkUl.find('li').removeClass('active');
                    checkedBox.html('');
               } else {

                    _this.removeClass('active');

                    // 判断是否是全选员工时 取消了某一个员工
                    if (checkedBox.find('span').eq(0).attr('data-id') === 'all') {

                         checkUl.find('li:last-child').removeClass('active');

                         checkUl.find('li.active').each(function () {

                              html += '<span class="choose-div-span" data-id="' + $(this).attr('data-id') + '" >' + $(this).text() + '</span>';
                         });

                         checkedBox.html(html);
                    }
               }

               return;
          }

          // 选择行为
          _this.addClass('active');

          if (_id === 'all') {

               checkUl.find('li').addClass('active');
               checkedBox.html('<span class="choose-div-span" data-id="all" >所有员工</span>');
          } else {

               // 如果员工选完了
               if (checkUl.find('li.active').length + 1 >= checkUl.find('li').length) {

                    checkedBox.html('<span class="choose-div-span" data-id="all" >所有员工</span>');
                    checkUl.find('li').addClass('active');
               } else {

                    checkedBox.append('<span class="choose-div-span" data-id="' + _id + '" >' + _this.text() + '</span>');
               }
          }
     });

     //删除权限人员
     checkedBox.on('click', '.choose-div-span', function (event) {

          var _this = $(this);
          var _id = _this.attr('data-id');

          _this.remove();

          if (_id === 'all') {

               checkUl.find('li').removeClass('active');
               return;
          }

          checkUl.find('li[data-id="' + _id + '"]').removeClass('active');
     });

     //编辑
     $('#edit_jurisdiction_company').on('click', '.add-jurisdiction', function (event) {

          $('.choose-result-jurisdiction').toggle();
     });

     //点击显示公司员工
     $('#choose_user_div').on('click', function (event) {

          var _this = $(this);

          _this.parents('.form-group').find('.choose-result').css('display', 'block');
     });

     //点击选择负责人
     $('#companySelect').on('click', 'li', function (event) {

          var _this = $(this);

          $('#choose_user_div').text(_this.attr('name'));

          $('#choose_user_id').val(_this.attr('data-id'));

          $('.choose-result').css('display', 'none');
     });

     //失去焦点隐藏搜索结果
     $('body').click(function (e) {

          if (!$(e.target).closest('#edit_jurisdiction_company').length) {

               $('.choose-result-edit-jurisdiction').css('display', 'none');
          }
     });

     //失去焦点隐藏搜索结果
     $('body').click(function (e) {

          if (!$(e.target).closest('#choose_user_group').length) {

               $('.choose-saleman-result').css('display', 'none');
          }

          if (!$(e.target).closest('#choose_currency_group').length) {

               $('.choose-currency-result').css('display', 'none');
          }
     });
}

//公司输入提示
function helpCompany(_cookie_company_type) {

     var _input = $('#must_name');
     var _helpBox = $('#company_help');

     var name_opts = {
          url: '/api/contact/company',
          type: 'GET',
          data: {
               companyId: COMPANYID,
               searchType: '1',
               key: '',
               nature: _cookie_company_type,
               pageNo: 1,
               pageSize: 99
          }
     };

     var name_cb = g_return200CbObj(function (data) {

          var html = '';

          if (data.recordCount === 0) {

               _helpBox.hide();
               return;
          } else {

               html = data.contactCompanys.reduce(function (total, item) {

                    return total += '<li>' + item.name + '</li>';
               }, '');

               _helpBox.find('ul').html(html);
               _helpBox.show();
          }
     });

     _input.on('input', g_throttle(function (e) {

          var _val = Trim(this.value);

          if (_val === '') {

               _helpBox.hide();
               return;
          }

          name_opts.data.key = _val;

          sendAjax(name_opts, name_cb);
     }, 500));
}

//获取默认联系人权限者
function getDefaultJurisdiction(companyId, _cookie_company_type) {

     var _tpl_fn = Handlebars.compile($('#default_users_tpl').html());
     var _choose_edit_default = $('#choose_edit_default_company');
     var _add_jurisdiction = $('.add-jurisdiction');

     // 权限已选员工
     var _selected_edit = [];

     var get_opts = {
          type: 'get',
          url: '/api/contact/company/participants',
          data: {
               companyId: companyId,
               nature: _cookie_company_type ? _cookie_company_type : 2
          }
     };

     var _get_cb = g_return200CbObj(function (data) {

          var _html_edit = '';

          // 用来判断我在不在里面，默认显示自己
          var logedData = {
               userId: Number($.cookie('user_id')),
               userName: $.cookie('name')
          };
          var inDefault = false;

          data.participants.forEach(function (item) {

               _html_edit += _tpl_fn(item);
               _selected_edit.push(item.userId);

               if (item.userId === logedData.userId) {

                    inDefault = true;
               }
          });

          if (!inDefault) {

               _html_edit += _tpl_fn(logedData);
               _selected_edit.push(logedData.userId);
          }

          _choose_edit_default.html(_html_edit);
          _choose_edit_default.attr('data-default', _selected_edit.join());

          //先获取获取默认联系人权限者,在获取员工列表
          getUsersList(companyId, _selected_edit);
     });

     sendAjax(get_opts, _get_cb);
}

//获取员工列表
function getUsersList(companyId, defaultArr) {

     // 是否包含可编辑员工
     var has_edit_users = false;

     var _tpl_fn = Handlebars.compile($('#list_users_tpl').html());

     var _choose_list_user_edit = $('#choose_list_user_edit_company');

     var _companySelect = $('#companySelect'); //负责人

     var _html_no_user = '<li data-id="hasAll" style="color: #20A0FF;">所有员工已在列表中</li>';
     var _list_user_lasts = '<li  data-id="all" name="所有员工"  class="" style="color: #20A0FF;">所有员工 <img src="/images/Shape.png" alt="" class="edit-img"></li>';

     var get_users = {
          type: 'get',
          url: '/api/companys/' + companyId + '/users',
          data: {
               pageNo: 1,
               pageSize: 100
          }
     };

     var _get_cb = g_return200CbObj(function (data) {

          var _html_edit = '',
              _html_user = '';
          data.companyUsers.forEach(function (item) {

               if ($.inArray(item.userId, defaultArr) == -1) {

                    has_edit_users = true;
                    _html_edit += _tpl_fn(item);
               }

               _html_user += _tpl_fn(item);
          });

          _companySelect.html(_html_user);

          has_edit_users ? _html_edit += _list_user_lasts : _html_edit += _html_no_user;

          _choose_list_user_edit.html(_html_edit);
     });

     sendAjax(get_users, _get_cb);
}

function getCurrencyList(company_id) {

     var _list_ul = $('#currencySelect'),
         _choose_currency_div = $('#choose_currency_div'),
         _choose_currency_result = $('.choose-currency-result'),
         _choose_currency_id = $('#choose_currency_id'),
         _isforeignCurrency = 0;

     isEnableAccountingUnitPublic(function (data) {

          _isforeignCurrency = data.foreignCurrency;

          getCurrencySend(company_id);
     });

     function getCurrencySend(company_id) {

          var list_options = {
               url: '/api/companys/' + company_id + '/currency',
               type: 'get'
          };
          //调用ajax
          var list_callback = g_return200CbObj(function (data) {

               var html = '';

               data.currencies.forEach(function (item) {

                    if (Number(item.currencyId) === 11) {

                         _choose_currency_div.text(item.currencyName);
                         _choose_currency_id.val(item.companyCurrencyId);
                    }

                    html += '<li data-id=' + item.companyCurrencyId + ' name="' + item.currencyName + '" class="drop-down-li">' + item.currencyName + '<img src="/images/Shape.png" alt="" class="edit-img"></li>';
               });

               _list_ul.html(html);
          });

          sendAjax(list_options, list_callback);
     }

     //显示
     _choose_currency_div.on('click', function (event) {

          Number(_isforeignCurrency) && _choose_currency_result.toggle();
     });

     //点击结果
     _list_ul.on('click', 'li', function (event) {

          var _this = $(this);

          _choose_currency_div.text(_this.attr('name'));

          _choose_currency_id.val(_this.attr('data-id'));

          _choose_currency_result.css('display', 'none');
     });
}

function getCustomCode(company_id) {

     var info_options = {
          type: 'GET',
          url: '/api/contact/company/' + company_id + '/customCode'
     };

     var info_callback = g_return200CbObj(function (data) {

          $('#must_code').val(data.dataResult);
     });

     sendAjax(info_options, info_callback);
}