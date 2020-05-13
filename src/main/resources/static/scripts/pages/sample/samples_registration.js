'use strict';

//来样登记初始

function samplesRegistrationInit(options) {

      var _option_data = options; //过来数据
      var _page_data = ''; //当前页数数据
      var _form_registration = $('#registration_add_form');

      var _delete = window.REGISTER_DELETE;
      // let _print= window.REGISTER_PRINT;


      //缓存变量，先初始化再调用
      var Registration = void 0;
      //注册一个G标识的全局AJAX数据对象，仅供当前页面使用
      var G_AJAXDATA = {
            url: '/api/samples/register',
            data: {
                  pageNo: 1,
                  pageSize: 10,
                  patternItemNo: '',
                  patternName: '',
                  sampleId: _option_data.data.itemId
            }

            //获取列表
      };Registration = initAjaxList(_option_data.data.companyId);

      //请求默认值
      Registration(G_AJAXDATA);

      hoverImg();

      //获取打印标签
      getLabels();

      //初始化事件
      judgeRegistrationClick(_option_data.data.companyId, _option_data.data.itemId);

      //加载图片
      RegistrationUpLoadImg(_option_data.data.companyId);

      //搜索控制
      RegistrationsearchSometh(_option_data.data.companyId);

      //搜索
      RegistrationChooseSearchInit(_option_data.data.companyId);

      function judgeRegistrationClick(companyId, sampleId) {

            var _add_registration_modal = $('#add_registration_modal'),
                _register_sample_itemno = $('#register_sample_itemno'),
                _register_date = $('#register_date'),
                _groups_id = $('#groups_id'),
                _register_sample_source = $('#register_sample_source'),
                _customer_id = $('#customer_id'),
                _register_pattern_itemno = $('#register_pattern_itemno'),
                _register_pattern_name = $('#register_pattern_name'),
                _register_color_name = $('#register_color_name'),
                _register_color_mark = $('#register_color_mark'),
                _register_remark = $('#register_remark'),
                _group_text = $('.group-text'),
                _customer_text = $('.customer-text'),
                _set_contract_new = $('#set_contract_new'),
                _img_list = $('#img_list'),
                _table_list = $('#table_list'),
                isEdit = 0,
                isEditObj = {},
                _body = $('body'),
                _contract_modal_title = $('#contract_modal_title');

            //图片在此box中展示
            var _img_box = $('.up-img-box');

            var _labelPrint = $('#labelPrint');

            //关闭model时清空
            _add_registration_modal.on('hidden.bs.modal', function (e) {

                  _form_registration[0].reset();
                  _group_text.text('选择部门');
                  _customer_text.text('选择客户');
                  _groups_id.val('');
                  _customer_id.val('');
                  _img_box.html('');

                  isEdit = 0;
            });

            //打开model时写入
            _add_registration_modal.on('show.bs.modal', function (e) {

                  if (Number(isEdit)) {

                        var _img_id = [];
                        var _html = '';

                        _register_sample_itemno.val(isEditObj.sampleItemNo);

                        _register_date.val(isEditObj.date);
                        _groups_id.val(isEditObj.groupId);
                        _register_sample_source.val(isEditObj.sampleSource);
                        _customer_id.val(isEditObj.customerId);
                        _register_pattern_itemno.val(isEditObj.patternItemNo);
                        _register_pattern_name.val(isEditObj.patternName);
                        _register_color_name.val(isEditObj.colorName);
                        _register_color_mark.val(isEditObj.colorMark);
                        _register_remark.val(isEditObj.remark);
                        _group_text.text(isEditObj.groupName);
                        _customer_text.text(isEditObj.customerName);

                        isEditObj.pics.forEach(function (item) {

                              _img_id.push(item.picId);

                              _html += ['<a href="', item.picKey, '" target="_blank" style="overflow: hidden;width: 94px;height: 94px;margin: 5px;" data-key="', item.picId, '">', '<img src="', item.picKey, '" class="call-upload-length" style="width: 198px;height: 98px" onload="centerImg(this.parentNode)">', '<i class="i-icon i-close-icon"></i>', '</a>'].join('');
                        });

                        _img_box.html('');

                        _img_box.append(_html);

                        _img_list.val(_img_id.join(','));

                        _contract_modal_title.text('编辑来样登记');
                  } else {

                        _contract_modal_title.text('新增来样登记');

                        $('#register_date').val(new Date().Format('yyyy-MM-dd'));
                  }
            });

            //保存来样登记

            _set_contract_new.on('click', function (event) {

                  var _this = $(this),
                      saveOpt = void 0,
                      _data = {};

                  var _data_type = Number(_this.attr('data-type'));

                  _form_registration.serializeArray().forEach(function (item) {

                        _data[item.name] = item.value;
                  });

                  if (_data_type) {
                        saveOpt = {
                              url: '/api/samples/register',
                              type: 'POST',
                              data: {}
                        };

                        saveOpt.data = _data;

                        saveOpt.data.companyId = companyId;

                        saveOpt.data.sampleId = sampleId;
                  } else {

                        saveOpt = {
                              url: '/api/samples/register/' + isEditObj.id,
                              type: 'PUT',
                              data: {}
                        };

                        saveOpt.data = _data;

                        saveOpt.data.companyId = companyId;
                  }

                  if (!saveOpt.data.patternItemNo) {

                        g_msgAlert('请填写花型编号！');

                        return;
                  }

                  var saveCb = g_return200CbObj(function (data) {

                        if (!_data_type) {

                              g_autoCloseTip('修改成功！');
                        } else {

                              G_AJAXDATA.data.pageNo = 1;
                              G_AJAXDATA.data.pageSize = 10;

                              g_autoCloseTip('新增成功！');
                        }

                        Registration(G_AJAXDATA);

                        _add_registration_modal.modal('hide');
                  });

                  // console.log(saveOpt.data);

                  sendAjax(saveOpt, saveCb);
            });

            //编辑来样登记

            _body.on('click', '.edit_icon', function (event) {

                  var _this = $(this).parents('tr');

                  var _key = _this.attr('data-key');

                  isEditObj = {};

                  isEditObj = _page_data[_key];

                  isEdit = 1;

                  _set_contract_new.attr('data-type', 0);

                  _add_registration_modal.modal('show');
            });

            //新增来样登记

            _body.on('click', '#contract_list_list_add', function (event) {

                  isEdit = 0;

                  _set_contract_new.attr('data-type', 1);

                  _add_registration_modal.modal('show');
            });

            //删除来样登记
            _table_list.on('click', '.delete_registrationsample', function () {

                  if (!_delete) {

                        g_autoCloseTip('暂无权限！');

                        return;
                  }

                  var _this = $(this);

                  var registerId = _this.parents('tr').attr('data-id');

                  var delOpt = {
                        url: '/api/samples/register/' + registerId,
                        type: 'DELETE',
                        data: {}
                  };

                  var delCb = g_return200CbObj(function (data) {

                        g_autoCloseTip('删除成功');

                        Registration(G_AJAXDATA);
                  });

                  g_confirmAlert('确定删除该来样信息？', function () {

                        sendAjax(delOpt, delCb);
                  });
            });

            //打印来样登记
            _table_list.on('click', '.print_registrationsample', function () {

                  var _id = $(this).parents('tr').attr('data-id');

                  _labelPrint.attr('data-id', _id);

                  sessionStorage.setItem('regitration_info_print_part', _id);

                  $('#print_select').modal();

                  // g_msgAlert('该功能在开发中...');

            });

            //点击打印
            $('#print_select_btn').on('click', function () {

                  var _type = _labelPrint.attr('value');

                  $.cookie('select_sample_type', _type, {
                        path: '/'
                  });

                  window.open('/sample/select_print.html?type=1');
            });

            //单独一列的全选


            _body.on('click', 'thead input[type=\'checkbox\']', function () {

                  var _this = $(this);

                  var _is_checked = _this.is(':checked');

                  var thisTable = _this.parents('table');

                  if (_is_checked) {

                        thisTable.find('tbody tr').each(function (index, el) {
                              var _this = $(this);
                              _this.find('input[type=\'checkbox\']').prop('checked', true);
                        });
                  } else {

                        thisTable.find('tbody tr').each(function (index, el) {
                              var _this = $(this);
                              _this.find('input[type=\'checkbox\']').prop('checked', false);
                        });
                  }
            });

            sessionStorage.setItem('regitration_info_print_part', 0);

            $('#registration_info_print_part').on('click', function () {

                  var _this = $(this);

                  var _table = _this.attr('data-table');

                  var _data_arr = [];

                  $('#' + _table).find('tbody tr').each(function (index, el) {

                        var _that = $(this);

                        var _is_checked = _that.find('input[type=\'checkbox\']').is(':checked');

                        if (_is_checked) {

                              _data_arr.push(_that.attr('data-id'));
                        }
                  });

                  if (_data_arr.length === 0) {

                        g_msgAlert('请先选择来样！');

                        return;
                  }

                  $('#print_select').modal();

                  sessionStorage.setItem('regitration_info_print_part', _data_arr.join(','));
            });
      }

      function initAjaxList(companyId) {

            //初始化
            var list_options = {
                  url: '',
                  type: 'get',
                  data: {}
            };

            //数据dom模板
            var tpl_fn = Handlebars.compile($('#registration_list_tpl').html());

            Handlebars.registerHelper('typeText', function (a) {

                  return ['未完工', '已完工', '作废'][Number(a)];
            });

            Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
                  if (operator) {
                        return v1 == v2 ? options.fn(this) : options.inverse(this);
                  } else {
                        return options.inverse(this);
                  }
            });

            //where inset dom
            var list_table = $('#table_list'),
                noth_search_div = $('#noth_search_div');

            //ajax callback
            var list_callback = g_return200CbObj(function (data) {

                  _option_data.callback();

                  _page_data = data.sampleRegisters;

                  var html = '';
                  //coding
                  data.sampleRegisters.forEach(function (item, index) {

                        item.index = index;

                        html += tpl_fn(item);
                  });

                  list_table.html(html);

                  //控制分页布局
                  // change_page(data.pageNo, data.pageCount, data.recordCount);

                  if (data.recordCount > 0) {

                        list_table.show();

                        noth_search_div.hide();
                  } else {

                        list_table.hide();

                        noth_search_div.show();
                  }
            });

            // //分页事件绑定
            // var change_page = $('#table_page').pageInit({

            //   callback: function (pageNum) {

            //     G_AJAXDATA.data.pageNo = pageNum;

            //     Registration(G_AJAXDATA)
            //   }
            // });

            return function (ajaxData) {

                  list_options.url = ajaxData.url;
                  list_options.data = ajaxData.data;

                  sendAjax(list_options, list_callback);
            };
      };

      function RegistrationsearchSometh(company_id) {

            var _form = $('#registration_list_hd_form');

            // time select


            // make search
            $('#make_search').on('click', function () {

                  var _data = {};

                  _form.serializeArray().forEach(function (item) {

                        _data[item.name] = item.value;
                  });

                  G_AJAXDATA.data = _data;
                  G_AJAXDATA.data.pageNo = 1;
                  G_AJAXDATA.data.pageSize = 10;
                  G_AJAXDATA.data.sampleId = _option_data.data.itemId;

                  Registration(G_AJAXDATA);
            });

            // make reset
            $('#reset_search').on('click', function () {

                  _form[0].reset();

                  var _data = {};

                  _form.serializeArray().forEach(function (item) {

                        _data[item.name] = item.value;
                  });

                  G_AJAXDATA.data = _data;
                  G_AJAXDATA.data.pageNo = 1;
                  G_AJAXDATA.data.pageSize = 10;
                  G_AJAXDATA.data.sampleId = _option_data.data.itemId;

                  Registration(G_AJAXDATA);
            });
      }

      function RegistrationUpLoadImg(companyId) {

            //最后对应上传的
            var _pics_input = $('#img_list');

            //图片在此box中展示
            var _img_box = $('.up-img-box');

            //图片上传插件
            $('.up-img-btn').initUploadImg({

                  uploadUrl: '/api/upload/pic',

                  listenImgBox: '.up-img-box',

                  totalLen: 9,

                  multiple: false,

                  moreData: {
                        bizType: 10,
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

                              _html += ['<a href="', item.url, '" target="_blank" style="overflow: hidden;width: 94px;height: 94px;margin: 5px;" data-key="', item.key, '">', '<img src="', item.url, '" class="call-upload-length" style="width: 198px;height: 98px" onload="centerImg(this.parentNode)">', '<i class="i-icon i-close-icon"></i>', '</a>'].join('');
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

      function RegistrationChooseSearchInit(companyId) {

            $('body .choose-search-plugin-customer').initChooseSearch({
                  listUrl: '/api/contact/company',
                  listBox: '.choose-search-plugin-customer',
                  fastCreate: 0,
                  searchField: 'key',
                  dataAssignment: ['contactCompanys', 'name', 'id'],
                  moreData: {
                        nature: 2,
                        orderByType: 6,
                        searchType: 1
                  },
                  callback: function callback(_this, data) {

                        $('#customer_id').val(data.id);
                  }
            });

            $('body .choose-search-plugin-groups').initChooseSearch({
                  listUrl: '/api/companys/' + companyId + '/users/groups',
                  listBox: '.choose-search-plugin-groups',
                  fastCreate: 0,
                  searchField: 'orderNo',
                  dataAssignment: ['groups', 'name', 'groupId'],
                  moreData: {},
                  callback: function callback(_this, data) {

                        $('#groups_id').val(data.groupId);
                  }
            });
      }
}