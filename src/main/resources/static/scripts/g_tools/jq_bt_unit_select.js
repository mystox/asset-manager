'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  多计量单位
 */
var unitSelectModel = '\n   <div class="modal fade modal2" id="select_unit_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n       <div class="modal-dialog">\n           <div class="modal-content" style=" width: 420px;">\n               <div class="modal-header">\n                   <h3 class="unit-modal-title" style="float: left;text-align: center;padding-left: 140px;font-size: 16px;font-weight: bold;">\u8BA1\u91CF\u5355\u4F4D\u8BBE\u5B9A</h3>\n                   <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n               </div>\n               <div class="modal-body row bgj-unit-modal-box" style="height: 200px;">\n               <form id="unit_ul_form">\n                 <div class="form-box">\n                 \n                   <ul id="unit_ul">\n                   \n                   </ul>\n                   \n                 </div>\n                 </form>\n               </div>\n               <div class="modal-footer">\n                 <div class="btn-group" role="group">\n                   <button class="btn btn-primary">\u63D0\u4EA4</button>\n                   <button class="btn" data-dismiss="modal">\u53D6\u6D88</button>\n                 </div>\n               </div>\n           </div>\n       </div>\n   </div>';

var unit_tpl = '\n   {{#each unitList}}\n   <li data-aa="{{@index}}">\n   <div>\n   \n   <span>{{#if @index}}\u8F85\u52A9\u5355\u4F4D{{@index}}{{else}}\u6838\u7B97\u5355\u4F4D*{{/if}}</span>\n   <select class="bgj-public-select" name={{unitName}} data-val="{{unitnVal}}">\n    <option value="">\u9009\u62E9\u5355\u4F4D</option>\n    {{#if unitnVal}} <option value="{{unitnVal}}" selected="selected">{{unitnVal}}</option>{{/if}}\n   </select>\n   </div>\n   <div>\n   {{#if @index}}<span>\u8F6C\u6362\u7CFB\u6570:</span>\n   <input value="{{unitrVal}}" name={{unitRatio}}>{{else}}{{/if}}\n   </div>\n   {{#if @index}}\n   <i class="i-icon i-help-tip hint--right  hint--large" aria-label="\u4E00\u4E2A\u5355\u4F4D\u7684\u8F85\u52A9\u5355\u4F4D\u7B49\u4E8E\u591A\u5C11\u7684\u6838\u7B97\u5355\u4F4D\uFF0C\u591A\u5C11\u5373\u4E3A\u8F6C\u6362\u7CFB\u6570\u3002\u5047\u8BBE\uFF1A\u8BBE\u7F6E\u6838\u7B97\u5355\u4F4D\u4E3A\u7C73\uFF0C\u8F85\u52A9\u5355\u4F4D\u4E3A\u7801\uFF0C1\u7801\u7B49\u4E8E0.9144\u7C73,09144\u5C31\u662F\u8F6C\u6362\u7CFB\u6570\u3002"></i>\n   {{/if}}\n   </li>\n   {{/each}}\n ';

/*

 
   修改的时候不要搞错了！！！！！！！！
 

   计量单位管理   UnitMaker 。

 */

var UnitMaker = function () {
      function UnitMaker(companyId, type, _html_this) {
            _classCallCheck(this, UnitMaker);

            this.companyId = companyId;
            this.type = type;
            this.data = {};

            this.unitList = [];
            this.callback = function () {};
            this.init();
      }

      _createClass(UnitMaker, [{
            key: 'init',
            value: function init() {
                  var _this2 = this;

                  $('body').append(unitSelectModel);

                  this.model = $('#select_unit_model');

                  this.appendUl = this.model.find('.modal-body ul');

                  this.submit = this.model.find('.modal-footer .btn-primary');

                  // 因为我要用 $(this)
                  var that = this;
                  // select focus
                  this.appendUl.on('mousedown', 'li select', function () {

                        var _select = $(this),
                            _html = '<option value="">选择单位</option>';

                        var _data_list = returnOptions();

                        var _data_val = _select.attr('data-val');

                        if (_data_val) {

                              _html += '<option value="' + _data_val + '" selected="selected">' + _data_val + '</option>';
                        }

                        _data_list.forEach(function (item) {

                              _html += '<option value="' + item.unitName + '">' + item.unitName + '</option>';
                        });

                        _select.html(_html);
                  });

                  // select change
                  this.appendUl.on('change', 'li select', function () {

                        var _select = $(this);

                        _select.removeAttr('data-val');
                  });

                  // input change
                  this.appendUl.on('input', 'li input', function () {

                        var _input = $(this);

                        _input.val(correctNumberInputFourPlace(_input.val()));
                  });

                  // 确定 编辑 或则新增
                  this.submit.on('click', function () {

                        var _unit_ul_form = $('#unit_ul_form'),
                            _data = {},
                            _add_nuit_btn = that.data.htmlThis,
                            _add_nuit_btn_val = that.data.htmlThis.find('input');

                        _unit_ul_form.serializeArray().forEach(function (item) {

                              _data[item.name] = item.value.trim();
                        });

                        if (!_data.accUnit) {

                              g_msgAlert('核算单位未填，不能保存!');

                              _add_nuit_btn_val.val('');

                              return;
                        }

                        if (_data.subUnit1 && !_data.subUnit1Ratio || !_data.subUnit1 && _data.subUnit1Ratio) {

                              g_msgAlert('辅助单位1和转换系数都必填或都不填！');

                              _add_nuit_btn_val.val('');

                              return;
                        }

                        if (_data.subUnit2 && !_data.subUnit2Ratio || !_data.subUnit2 && _data.subUnit2Ratio) {

                              g_msgAlert('辅助单位2和转换系数都必填或都不填！');

                              _add_nuit_btn_val.val('');

                              return;
                        }

                        if (_data.subUnit3 && !_data.subUnit3Ratio || !_data.subUnit3 && _data.subUnit3Ratio) {

                              g_msgAlert('辅助单位3和转换系数都必填或都不填！');

                              _add_nuit_btn_val.val('');

                              return;
                        }

                        if (_data.subUnit1Ratio === '0' || _data.subUnit2Ratio === '0' || _data.subUnit3Ratio === '0') {

                              g_msgAlert('转换系数不能为零！');

                              _add_nuit_btn_val.val('');

                              return;
                        }

                        _add_nuit_btn_val.length === 1 && _add_nuit_btn_val.val('' + _data.accUnit + (_data.subUnit1 && ',' + _data.subUnit1) + (_data.subUnit2 && ',' + _data.subUnit2) + (_data.subUnit3 && ',' + _data.subUnit3));

                        if (!Number(that.type)) {

                              that.setUnit(_data);
                        } else {

                              _add_nuit_btn.data('unit', _data);

                              _this2.model.modal('hide');
                        }
                  });

                  //遍历并返回可选options

                  function returnOptions() {

                        var _data = [],
                            _data_list = [];

                        that.appendUl.find('li').each(function () {

                              var _this = $(this);

                              var _val = _this.find('select').val();

                              if (_val) {
                                    that.unitList.forEach(function (item) {

                                          item.unitName === _val && _data.push(item);
                                    });
                              }
                        });

                        that.unitList.forEach(function (item) {

                              var result = _data.some(function (itemy) {
                                    return item.unitName === itemy.unitName;
                              });

                              !result && _data_list.push(item);
                        });

                        return _data_list;
                  }

                  //载入模板
                  if (Number(that.type)) {

                        //新增

                        that.appendUl.html(Handlebars.compile(unit_tpl)({
                              unitList: [{
                                    unitName: 'accUnit',
                                    unitRatio: ''
                              }, {
                                    unitName: 'subUnit1',
                                    unitRatio: 'subUnit1Ratio'
                              }, {
                                    unitName: 'subUnit2',
                                    unitRatio: 'subUnit2Ratio'
                              }, {
                                    unitName: 'subUnit3',
                                    unitRatio: 'subUnit3Ratio'
                              }]
                        }));
                  }

                  //this.model.modal('show');
            }

            //初始化 先获取获取单位列表 

      }, {
            key: 'openInit',
            value: function openInit() {

                  // 因为我要用 $(this)
                  var that = this;

                  //获取单位
                  unitsPublic(function (data) {

                        that.unitList = data;

                        that.model.modal('show');
                  });
            }

            //修改计量单位

      }, {
            key: 'setUnit',
            value: function setUnit(_data) {

                  // 因为我要用 $(this)
                  var that = this;
                  //初始化
                  var list_options = {
                        url: '/api/samples/' + that.data.sampleId + '/unit',
                        type: 'PUT',
                        data: _data
                  };

                  //ajax callback
                  var list_callback = g_return200CbObj(function (data) {

                        that.data.htmlThis.data('unit', _data);

                        that.callback(_data);

                        that.model.modal('hide');
                  }, function (message) {

                        var _unitList = that.data.htmlThis.data('unit');

                        if (that.data.htmlThis[0].id === 'add_nuit_btn') {

                              that.data.htmlThis.find('input').val('' + _unitList.accUnit + (_unitList.subUnit1 && ',' + _unitList.subUnit1) + (_unitList.subUnit2 && ',' + _unitList.subUnit2) + (_unitList.subUnit3 && ',' + _unitList.subUnit3));
                        }

                        that.appendUl.html(Handlebars.compile(unit_tpl)({
                              unitList: [{
                                    unitName: 'accUnit',
                                    unitRatio: '',
                                    unitnVal: _unitList.accUnit,
                                    unitrVal: ''
                              }, {
                                    unitName: 'subUnit1',
                                    unitRatio: 'subUnit1Ratio',
                                    unitnVal: _unitList.subUnit1,
                                    unitrVal: _unitList.subUnit1Ratio
                              }, {
                                    unitName: 'subUnit2',
                                    unitRatio: 'subUnit2Ratio',
                                    unitnVal: _unitList.subUnit2,
                                    unitrVal: _unitList.subUnit2Ratio
                              }, {
                                    unitName: 'subUnit3',
                                    unitRatio: 'subUnit3Ratio',
                                    unitnVal: _unitList.subUnit3,
                                    unitrVal: _unitList.subUnit3Ratio
                              }]
                        }));
                  });

                  sendAjax(list_options, list_callback);
            }

            //打开model

      }, {
            key: 'open',
            value: function open(data, callback) {

                  this.data = data;
                  this.callback = callback;

                  //获取单位

                  this.openInit();

                  //载入模板  编辑
                  if (!Number(this.type)) {

                        var _add_nuit_btn_unit = this.data.htmlThis.data('unit');

                        var _dataUnit = _add_nuit_btn_unit ? _add_nuit_btn_unit : this.data.dataUnit;

                        this.model = $('#select_unit_model');

                        this.appendUl = this.model.find('.modal-body ul');

                        //编辑

                        this.appendUl.html(Handlebars.compile(unit_tpl)({
                              unitList: [{
                                    unitName: 'accUnit',
                                    unitRatio: '',
                                    unitnVal: _dataUnit.accUnit,
                                    unitrVal: ''
                              }, {
                                    unitName: 'subUnit1',
                                    unitRatio: 'subUnit1Ratio',
                                    unitnVal: _dataUnit.subUnit1,
                                    unitrVal: Number(_dataUnit.subUnit1Ratio) ? _dataUnit.subUnit1Ratio : ''
                              }, {
                                    unitName: 'subUnit2',
                                    unitRatio: 'subUnit2Ratio',
                                    unitnVal: _dataUnit.subUnit2,
                                    unitrVal: Number(_dataUnit.subUnit2Ratio) ? _dataUnit.subUnit2Ratio : ''
                              }, {
                                    unitName: 'subUnit3',
                                    unitRatio: 'subUnit3Ratio',
                                    unitnVal: _dataUnit.subUnit3,
                                    unitrVal: Number(_dataUnit.subUnit3Ratio) ? _dataUnit.subUnit3Ratio : ''
                              }]
                        }));

                        this.model.modal('show');
                  }
            }
      }]);

      return UnitMaker;
}();