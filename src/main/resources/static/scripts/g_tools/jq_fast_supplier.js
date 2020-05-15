'use strict';

// 变种的快速新增 model
/*
 * config {
 *    return
 * }
 */
//body
var _body = $('body'),
    _company_id = $.cookie('company_id');

function addSupplier(config) {

      var _currency_list = [],
          _saleman_list = [],
          _where_this = '';

      /*================新增供应商==============*/
      function supplierNewAdd() {

            var createNewAdd = function createNewAdd() {

                  var div = document.createElement('div');

                  div.innerHTML = '<div class="modal fade modal2 bgj-modal-addsample not-last-model" tabindex="-1" role="dialog" id="add_supplier_modal">\n        <div class="modal-dialog" role="document" style="width: 480px;">\n          <div class="modal-content">\n            <div class="modal-header addsample-modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n              <h4 class="modal-title">\u5FEB\u901F\u65B0\u589E\u4F9B\u5E94\u5546</h4>\n            </div>\n            <div class="modal-body-addsample" style="min-height: 280px;position: relative;margin:0;padding:0;">\n              <form id="ajax_send_addsupplier_form">\n                <input type="text" placeholder="\u4F9B\u5E94\u5546\u540D\u79F0\uFF08\u5FC5\u586B\uFF09" name="name" >\n                <select class="select-supplier-currency" name="companyCurrencyId">\n                    <option value="">\u8BF7\u9009\u62E9\u8D27\u5E01\uFF08\u5FC5\u586B\uFF09</option>\n                </select>\n                <select class="select-supplier-salesman" name="salesman">\n                    <option value="">\u8BF7\u9009\u62E9\u91C7\u8D2D\u5458\uFF08\u5FC5\u586B\uFF09</option>\n                </select>\n                <input type="text" placeholder="\u8054\u7CFB\u4EBA" name="manager" >\n                <input type="text" placeholder="\u8054\u7CFB\u7535\u8BDD" name="telephone" >\n                <input type="text" placeholder="\u8BE6\u7EC6\u5730\u5740" name="address" >\n              </form>\n            </div>\n            <div class="modal-footer modal-footer-addsample" style="border:0;padding-left: 0;padding-right: 0; ">\n              <div>\n                <button type="button " class="btn btn-primary" id="send_add_supplier">\u65B0\u589E\u4F9B\u5E94\u5546</button>\n              </div>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>';

                  document.body.appendChild(div);

                  return div;
            };

            //单利模式 getSingle from main.js
            var createSingleBatchLayer = getSingle(createNewAdd);

            //绘制新增供应商弹框
            _body.on('click', '.add-supplier-modal', function (event) {

                  _where_this = $(this);

                  var loginLayer = createSingleBatchLayer();
            });

            _body.on('show.bs.modal', '#add_supplier_modal', function (e) {

                  $('#ajax_send_addsupplier_form')[0].reset();

                  if (_currency_list.length || _saleman_list.length) {

                        var _html_c = '<option value="">请选择货币（必填）</option>',
                            _html_s = '<option value="">请选择采购员（必填）</option>';

                        _currency_list.forEach(function (item) {

                              _html_c += '<option value="' + item.companyCurrencyId + '">' + item.currencyName + '</option>';
                        });

                        _saleman_list.forEach(function (item) {

                              _html_s += '<option value="' + item.userId + '">' + item.name + '</option>';
                        });

                        $('.select-supplier-currency').html(_html_c);

                        $('.select-supplier-salesman').html(_html_s);

                        return;
                  }

                  var currency_options = {
                        type: 'get',
                        url: '/api/companys/' + _company_id + '/currency',
                        data: {}
                  };

                  var saleman_options = {
                        type: 'get',
                        url: '/api/companys/' + _company_id + '/users',
                        data: {}
                  };

                  //调用ajax
                  var currency_callback = g_return200CbObj(function (data) {

                        _currency_list = data.currencies;

                        var _html = '<option value="">请选择货币（必填）</option>';

                        data.currencies.forEach(function (item) {

                              _html += '<option value="' + item.companyCurrencyId + '" ' + (Number(item.currencyId) === 11 ? 'selected' : '') + ' >' + item.currencyName + '</option>';
                        });

                        $('.select-supplier-currency').html(_html);
                  });

                  var saleman_callback = g_return200CbObj(function (data) {

                        _saleman_list = data.companyUsers;

                        var _html = '<option value="">请选择采购员（必填）</option>';

                        data.companyUsers.forEach(function (item) {

                              _html += '<option value="' + item.userId + '">' + item.name + '</option>';
                        });

                        $('.select-supplier-salesman').html(_html);
                  });

                  sendAjax(currency_options, currency_callback);

                  sendAjax(saleman_options, saleman_callback);
            });

            //点击新增
            _body.off('click', '#send_add_supplier').on('click', '#send_add_supplier', function (event) {

                  var list_options = {
                        type: 'POST',
                        url: '/api/contact/company'

                  };

                  var _data = {},
                      _ajax_send_addsample_form = $('#ajax_send_addsupplier_form'),
                      valCanISave = true,
                      _key = 1,
                      _this = $(this);

                  //将form表单里面设置了name值的表单元素 每个以{name：''; value:''}的形式 返回数组
                  _ajax_send_addsample_form.serializeArray().forEach(function (item) {
                        _data['' + item.name] = item.value.trim();
                  });

                  for (var key in _data) {

                        if (!_data.name || !_data.companyCurrencyId || !_data.salesman) {

                              valCanISave = false;
                        }
                  }

                  if (!valCanISave) {

                        g_msgAlert('以下字段为必填：名称、币别、采购员！');
                        return;
                  }

                  _data.companyId = _company_id;

                  _data.nature = 1;

                  list_options.data = _data;

                  //调用ajax
                  var list_callback = g_return200CbObj(function (data) {

                        config.addCb(list_options.data.name, data.contactCompanyId, _where_this);

                        $('#add_supplier_modal').modal('hide');

                        g_autoCloseTip('新建供应商成功，去添加数据！');
                  });

                  list_callback.beforeSend = function () {

                        _this.prop('disabled', true).text('保存中...');
                  };

                  list_callback.complete = function () {

                        _this.prop('disabled', false).text('新增供应商');
                  };

                  sendAjax(list_options, list_callback);
            });
      }

      supplierNewAdd();
}