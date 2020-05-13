'use strict';

/*
         高级搜索
       */

function AdvancedSearch(attributes) {

  var _innerHTML = '<div class="modal fade modal2 not-last-model" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content modal-advanced-search">\n      <div class="modal-header">\n        <span>\u9AD8\u7EA7\u641C\u7D22</span>\n        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n      </div>\n      <div class="modal-body">\n      <div class="row" role="form" style="max-height: 500px;overflow-y: hidden;overflow-x: hidden;overflow-y: scroll;">\n      <form id="advanced_form_box" autocomplete="off">\n      ';

  attributes.forEach(function (item) {

    var _options_html = '',
        _options = item.options.split(',');

    item.attributeId == 1 ? item.accurateSearch = '精准搜索' : item.accurateSearch = '';

    if (_options[0] != '') {

      _options.forEach(function (itemy) {

        _options_html += '<div class="input_help_tag">' + itemy + '</div>';
      });
    }

    if (item.attributeId === 4 || item.attributeId === 5) {

      _innerHTML += ' <div class="row form-group">\n            <label for="attributes_' + item.attributeId + '" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">' + item.prettyName + '</label>\n            <div class="col-sm-8 col-md-7 col-lg-7">\n              <input class="form-control form-half space" data-help="' + (item.valueType === 1 ? 1 : 0) + '" name=' + (item.attributeId === 4 ? 'widthMin' : 'weightMin') + ' id="inputAttribute_' + item.attributeId + '" >\n                <span>-</span>\n              <input class=" form-control form-half space" data-help="' + (item.valueType === 1 ? 1 : 0) + '" name=' + (item.attributeId === 4 ? 'widthMax' : 'weightMax') + ' id="inputAttribute_' + item.attributeId + '" >\n              ' + (item.valueType === 1 ? '<div class="input_help attributes-help-box" id="inputHelp_' + item.attributeId + '" style="display: none;">\n              ' + _options_html + '\n            </div>' : '') + '\n            </div>\n          </div>';
    } else {
      _innerHTML += '<div class="row form-group">\n            <label for="attributes_' + item.attributeId + '" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">' + item.prettyName + '</label>\n            <div class="col-sm-8 col-md-7 col-lg-7">\n              <input class="form-control space" data-help="' + (item.valueType === 1 ? 1 : 0) + '" name=\'' + item.attributeId + '\' id="inputAttribute_' + item.attributeId + '" >\n              ' + (item.valueType === 1 ? '<div class="input_help attributes-help-box" id="inputHelp_' + item.attributeId + '" style="display: none;">\n              ' + _options_html + '\n            </div>' : '') + '\n            </div>\n            <div class="label-exhibition">\n            <input type="checkbox" id="accurate_search_img_' + item.attributeId + '">\n            <label for="accurate_search_img_' + item.attributeId + '">\n              <i class="i-icon i-checkbox-icon accurate_search_' + item.attributeId + ' hint--right" aria-label="\u7CBE\u51C6\u641C\u7D22"></i>\n              \n            </label>\n            </div>\n          </div> ';
    }
  });

  /**
   *    <div class="input_help attributes-help-box" id="inputHelp_3" style="display: block;">
       <div class="input_help_tag">T: 65% C:35%</div>
     </div>
   */

  _innerHTML += '<div class="row form-group">\n            <label for="attributes_2" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">\u6837\u54C1\u56FE\u7247</label>\n            <div class="col-sm-8 col-md-7 col-lg-7 col-xs-9 label-exhibition" style="height: 30px;">\n               <input type="checkbox" id="advanced_has_img" >\n            <label for="advanced_has_img">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u6709\u56FE\n            </label>\n            <input type="checkbox" id="advanced_no_img" >\n            <label for="advanced_no_img">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u65E0\u56FE\n            </label>\n            </div>\n          </div>\n          <div class="row form-group">\n            <label for="attributes_3" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">\u5C55\u5385\u5C55\u793A</label>\n            <div class="col-sm-8 col-md-6 col-lg-6 col-xs-9 label-exhibition" style="height: 30px;">\n               <input type="checkbox" id="advanced_has_isPublished" >\n            <label for="advanced_has_isPublished">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u662F\n            </label>\n            <input type="checkbox" id="advanced_no_isPublished" >\n            <label for="advanced_no_isPublished">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u5426\n            </label>\n            </div>\n          </div>\n          <div class="row form-group">\n            <label for="attributes_3" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">\u7F6E\u9876</label>\n            <div class="col-sm-8 col-md-6 col-lg-6 col-xs-9 label-exhibition" style="height: 30px;">\n               <input type="checkbox" id="advanced_has_isTop" >\n            <label for="advanced_has_isTop">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u662F\n            </label>\n            <input type="checkbox" id="advanced_no_isTop" >\n            <label for="advanced_no_isTop">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u5426\n            </label>\n            </div>\n          </div>\n          <div class="row form-group">\n            <label for="attributes_3" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">\u70ED\u95E8</label>\n            <div class="col-sm-8 col-md-6 col-lg-6 col-xs-9 label-exhibition" style="height: 30px;">\n               <input type="checkbox" id="advanced_has_isHot" >\n            <label for="advanced_has_isHot">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u662F\n            </label>\n            <input type="checkbox" id="advanced_no_isHot" >\n            <label for="advanced_no_isHot">\n              <i class="i-icon i-checkbox-icon"></i>\n              \u5426\n            </label>\n            </div>\n          </div>\n        </div>\n        </form>\n      </div>\n       <div class="modal-footer">\n       <div class="row form-group" style="margin-bottom: 10px;">\n            <label class="col-sm-3 col-md-3 col-lg-3"></label>\n            <div class="col-sm-6 col-md-6 col-lg-6 footer-btn">\n            <div class="btn btn-sm btn_sample up-img-btn" style="padding: 6px 12px;" id="search_by_image_btn">\n            <img src="/images/sample_new.png" style="margin-right: 4px;">\u4EE5\u56FE\u641C\u6837\u54C1\n            \n          </div>\n            </div>\n        </div>\n        <div class="row form-group">\n            <label class="col-sm-3 col-md-3 col-lg-3"></label>\n            <div class="col-sm-6 col-md-6 col-lg-6 footer-btn">\n               <button type="button" class="btn btn-primary" id="advanced_search_begin">\u9AD8\u7EA7\u641C\u7D22</button>\n               <button type="button" class="btn btn-warning" id="advanced_search_reset">\u91CD\u7F6E</button>\n               <button type="button" class="btn btn-default" data-dismiss="modal">\u53D6\u6D88</button>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>';

  //以图搜图搜索界面
  var _innerHTMLIMG = '<div class="modal fade modal2 not-last-model" id="searchImgModal" tabindex="-1" role="dialog" aria-labelledby="searchImgModal" data-backdrop="static" data-keyboard="false"  aria-hidden="true">\n<div class="modal-dialog">\n  <div class="modal-content modal-advanced-search">\n    <div class="modal-header">\n      <span style="font-size:16px;">\u56FE\u7247\u4E0A\u4F20</span> \n      <button type="button" class="close" data-dismiss="modal"><span title="\u53D6\u6D88\u641C\u7D22" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n      </div>\n    <div class="modal-body">\n    <div class="row" role="form" style="height: 100px;">\n    <div class="row form-group">\n    <div class="col-sm-3 col-md-3 col-lg-3">\n    <img src="/images/sample_new.png" style="height:100px;width:100px;" id="search_pictures">\n    </div>\n    <div class="col-sm-9 col-md-9 col-lg-9">\n    <div class="list">\n        <div class="cc rowup">\n            <div class="s">\n                <div class="item">\u56FE\u7247\u6B63\u5728\u4E0A\u4F20\uFF0C\u8BF7\u7A0D\u540E...</div>\n                <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u7C7B\u578B...</div>\n                <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u989C\u8272...</div>\n                <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u7EB9\u8DEF...</div>\n            </div>\n            <div class="s">\n                    <div class="item">\u56FE\u7247\u6B63\u5728\u4E0A\u4F20\uFF0C\u8BF7\u7A0D\u540E...</div>\n                    <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u7C7B\u578B...</div>\n                    <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u989C\u8272...</div>\n                    <div class="item">\u6B63\u5728\u8BC6\u522B\u9762\u6599\u7EB9\u8DEF...</div>\n            </div>\n        </div>\n    </div>\n    <div class="progress">\n  <div class="progress-bar progress-bar-striped active" role="progressbar" id="progress_bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">\n    <span class="sr-only">60% Complete</span>\n  </div>\n</div>\n    </div>\n  </div>\n    </div>\n     <div class="modal-footer">\n      <div class="row form-group">\n          <div class="col-sm-12 col-md-12 col-lg-12 footer-btn">\n            <span style="font-size:12px;color:rgba(74,74,74,1);">\u6CE8\uFF1A\u65B0\u4E0A\u4F20\u7684\u56FE\u7247\uFF0C\u7CFB\u7EDF\u5C06\u572824\u5C0F\u65F6\u5185\u81EA\u52A8\u7D22\u5F15\uFF0C\u7D22\u5F15\u540E\u7684\u56FE\u7247\u53EF\u8FDB\u884C\u56FE\u50CF\u8BC6\u522B\u641C\u7D22\u3002</span>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>';

  var _company_id = $.cookie('company_id');

  var createSingleSearchByImage = '',
      _search_img = null,
      _Progress = null,
      _pro_value = 0,
      _dataResult = '';

  var createAdvancedSearch = function createAdvancedSearch() {
    var div = document.createElement('div');
    div.innerHTML = _innerHTML;
    document.body.appendChild(div);
    return div;
  };

  //单利模式 getSingle from main.js
  var createSingleAdvancedSearch = getSingle(createAdvancedSearch);

  //绘制批量搜索弹框
  $('#advanced_search_btn').on('click', function (event) {

    var loginLayer = createSingleAdvancedSearch();
  });

  var G_AJAXDATA_SEARCH = {
    url: '/api/samples/search',
    type: 'POST',
    data: {
      companyId: _company_id,
      searchMap: '',
      pageNo: 1,
      pageSize: 10
    }
    //点击事件
  };judgeClick();

  function judgeClick() {

    //searchByImage

    var createSearchByImage = function createSearchByImage() {
      var div = document.createElement('div');
      div.innerHTML = _innerHTMLIMG;
      document.body.appendChild(div);
      return div;
    };

    //单利模式 getSingle from main.js
    createSingleSearchByImage = getSingle(createSearchByImage);

    var _body = $('body'),
        _once_flie_init = 0;

    //高级搜索
    _body.on('click', '#advanced_search_begin', function (event, sortdata) {

      //将form表单里面设置了name值的表单元素 每个以{key:value}的形式 返回数组
      var _data = {};
      var _advanced_has_img = $('#advanced_has_img').is(':checked');
      var _advanced_no_img = $('#advanced_no_img').is(':checked');
      var _advanced_has_isPublished = $('#advanced_has_isPublished').is(':checked');
      var _advanced_no_isPublished = $('#advanced_no_isPublished').is(':checked');
      var _advanced_has_isTop = $('#advanced_has_isTop').is(':checked');
      var _advanced_no_isTop = $('#advanced_no_isTop').is(':checked');
      var _advanced_has_isHot = $('#advanced_has_isHot').is(':checked');
      var _advanced_no_isHot = $('#advanced_no_isHot').is(':checked');
      $('#advanced_form_box').serializeArray().forEach(function (item) {

        if (item.value) {
          $('#accurate_search_img_' + item.name).is(':checked') == true ? _data['(preciseMatch)' + item.name] = item.value : _data['' + item.name] = item.value;
          // _data['' + item.name] = item.value;
        }
      });

      //有图 无图

      if (_advanced_has_img && !_advanced_no_img) {

        _data.havePics = '1';
      } else if (!_advanced_has_img && _advanced_no_img) {

        _data.havePics = '0';
      }

      //展厅 展示

      if (_advanced_has_isPublished && !_advanced_no_isPublished) {

        _data.isPublished = '1';
      } else if (!_advanced_has_isPublished && _advanced_no_isPublished) {

        _data.isPublished = '0';
      }

      //置顶

      if (_advanced_has_isTop && !_advanced_no_isTop) {

        _data.topType = '1';
      } else if (!_advanced_has_isTop && _advanced_no_isTop) {

        _data.topType = '0';
      }

      //热门

      if (_advanced_has_isHot && !_advanced_no_isHot) {

        _data.hot = '1';
      } else if (!_advanced_has_isHot && _advanced_no_isHot) {

        _data.hot = '0';
      }

      Object.keys(_data).length === 0 ? G_AJAXDATA_SEARCH.data = {
        companyId: $.cookie('company_id'),
        pageNo: 1,
        pageSize: 10
      } : G_AJAXDATA_SEARCH.data.searchMap = _data;

      //加入排序

      //console.log(sortdata);

      sortdata && (G_AJAXDATA_SEARCH.data.orderByType = sortdata);

      var search_cb = g_return200CbObj(function (data) {

        //高级搜索也可以排序

        if (G_AJAXDATA_SEARCH.data.searchMap) {

          $('#search_map').attr('data-searchMap', 1);
        }

        //旧分页 在高级搜索下 始终隐藏  新分页 显示
        $('.pagination_container').css('display', 'none');

        $('.panel-page').css('display', 'block');

        g_autoCloseTip('查询成功！', 2000);
        //关闭模态框
        $('#searchModal').modal('hide');

        //载入样品列表 

        addSamplesList(data);

        //控制分页布局
        change_page(data.pageNo, data.pageCount, data.recordCount);
      });

      //分页时间绑定
      var change_page = $('.panel-page').pageInit({

        callback: function callback(pageNum) {

          G_AJAXDATA_SEARCH.data.pageNo = pageNum;

          sendAjax(G_AJAXDATA_SEARCH, search_cb);
        }

      });

      sendAjax(G_AJAXDATA_SEARCH, search_cb);
    });

    //高级搜索下  删除样品
    $('#sample_list').on('click', '.delete_advanced_type', function (e) {

      e.stopPropagation();

      var _val = $(e.target).attr('value');

      g_confirmAlert('确认删除样品？', function () {

        var del_options = {
          type: 'delete',
          url: '/api/samples/' + _val
        };

        var del_callback = g_return200CbObj(function (data) {

          G_AJAXDATA_SEARCH.data.pageNo = 1;

          $('body #advanced_search_begin').trigger('click');
        });

        sendAjax(del_options, del_callback);
      });
    });

    //高级搜索下的 多选的显示和隐藏

    _body.on('focus', '#advanced_form_box input.form-control', function () {

      var _this = $(this);

      $('.input_help').hide();

      $('body #advanced_form_box input.form-control').removeAttr('data-focus');

      if (_this.attr('data-help') == 1) {

        _this.attr('data-focus', 1);

        _this.parent('div').find('.input_help').show();
      }
    });

    _body.on('click', '.attributes-help-box .input_help_tag', function () {

      var _this = $(this);

      var _val = _this.text().trim();

      var _tags_bar = _this.parent('.attributes-help-box').parent('div');

      _tags_bar.find('input[data-focus=\'1\']').val(_val);
    });

    _body.on('shown.bs.modal', '#searchModal', function (e) {
      // do something...


      //加载图片

      if (Number(sessionStorage.getItem('imageSearch' + _company_id))) {
        !Number(_once_flie_init) && upLoadImg(_company_id);
      }

      _once_flie_init = 1;
    });

    //高级搜索关闭时  重置
    _body.on('click', '#advanced_search_reset', function (e) {
      // do something...

      $('#advanced_form_box')[0].reset();
    });

    _body.on('click', '#search_by_image_btn', function () {

      if (!Number(sessionStorage.getItem('imageSearch' + _company_id))) {
        g_msgAlert('请联系销售开通！');
      }
    });

    //关闭搜索时关闭请求
    _body.on('hidden.bs.modal', '#searchImgModal', function (e) {
      // do something...


      clearTimeout(_search_img);

      clearTimeout(_Progress);
    });
  }

  // 企业资料图片上传
  function upLoadImg(companyId) {

    //图片上传插件
    $('.up-img-btn').initUploadImg({

      uploadUrl: '/api/image/search',

      listenImgBox: '.no-img-box',

      totalLen: 1,

      multiple: false,

      searchImage: true,

      moreData: {
        companyId: companyId
      },

      callback: function callback(data) {

        var loginLayer = createSingleSearchByImage();

        //  console.log(data);

        _pro_value = 0;

        $('#progress_bar').css('width', 0 + '%');

        _dataResult = data[0].dataResult;

        $('#search_pictures').attr('src', data[0].url);

        //  //关闭高级搜索 modal 打开上传过程的modal
        //  //开始调图片查询接口。


        $('#searchImgModal').modal('show');

        getSearchImg(companyId, _dataResult);

        _search_img = setInterval(function () {
          getSearchImg(companyId, _dataResult);
        }, 5000);

        _Progress = setInterval(setProgress, 500);
      }
    });
  }

  //开始调图片查询接口
  function getSearchImg(companyId, _dataResult) {
    // _body
    var _list_options = {

      url: '/api/image/search/' + companyId + '/' + _dataResult,
      type: 'GET',
      data: {}
    };

    var _list_cb = g_return200CbObj(function (data) {

      //  console.log(data);

      if (!data.message) {

        clearTimeout(_search_img);

        clearTimeout(_Progress);

        //载入样品列表 
        //关闭模态框
        $('#searchImgModal').modal('hide');

        $('#searchModal').modal('hide');

        $('.pagination_container').css('display', 'none');

        $('.panel-page').css('display', 'none');

        addSamplesList(data);
      } else if (data.message === 'processing') {} else {

        g_msgAlert(data.message, function () {

          $('#searchImgModal').modal('hide');
        });
      }
    }, function (data) {}, function (data) {

      $('#searchImgModal').modal('hide');
    });

    sendAjax(_list_options, _list_cb);
  }

  function setProgress(companyId) {

    _pro_value += 1;

    Number(_pro_value) > 99 && (_pro_value = 99);

    $('#progress_bar').css('width', _pro_value + '%');
  }

  function addSamplesList(data) {

    if (data.samples.length == 0) {

      $('.samplesRow').css('display', 'block');

      $('.noSample').css('display', 'block');
    } else {
      $('.noSample').css('display', 'none');
    }

    $('#companyName').text($.cookie('company_name'));
    $('#sample_list').empty();

    //注入样品
    for (var i = 0, j = 0; i < data.samples.length; i += 1) {
      $('.samplesRow').show();
      if (/sample_list.html/.test(location.href) || /tag_cloud.html/.test(location.href)) {
        html = '<tr value=' + data.samples[i].sampleId + '>';
        html += '    <td class="label hidden-xs">';
        html += '        <label>';
        html += '            <input type="checkbox" class="sampleCheck" value=' + data.samples[i].sampleId + '>';
        html += '        </label>';
        html += '    </td>';
        html += '    <td class="goSampleInfo td_fixed img is-published-img" value="' + data.samples[i].sampleId + '" id="sampleParamsImg">';
        data.samples[i].isPublished === 1 && (html += '        <span class="published-img" value="' + data.samples[i].sampleId + '" alt="" data-toggle="modal" data-target="sampleInfo"></span>');
        html += '        <img class="img_sample img-responsive" src="' + data.samples[i].samplePicKey + '?x-oss-process=image/resize,m_fixed,h_48,w_48" value="' + data.samples[i].sampleId + '" alt="" data-toggle="modal" data-target="sampleInfo">';
        html += '    </td>';
        for (j = 0; j < data.sampleListParams.length; j++) {
          var paramKey = data.sampleListParams[j].attrId;
          if (data.samples[i][paramKey] !== undefined) {

            if (paramKey === 'isPublished') {
              data.samples[i][paramKey] = data.samples[i][paramKey] === 1 ? '已发布' : '未发布';
            }
            html += '<td class="goSampleInfo hidden-xs sample_params_default" value="' + data.samples[i].sampleId + '">' + (data.samples[i][paramKey] || '') + '</td>';
          } else {

            if (data.samples[i].attributes) {
              if (data.samples[i].attributes[paramKey]) {
                html += '<td class="goSampleInfo hidden-xs sample_params_default" value="' + data.samples[i].sampleId + '">' + data.samples[i].attributes[paramKey] + '</td>';
              } else {
                html += '<td class="goSampleInfo hidden-xs sample_params_default" value="' + data.samples[i].sampleId + '"></td>';
              }
            } else {
              html += '<td class="goSampleInfo hidden-xs sample_params_default" value="' + data.samples[i].sampleId + '"></td>';
            }
          }
        }
        html += '    <td class="hidden-sm hidden-md hidden-lg">';
        html += '        <div class="sample_info_at_mobile_line">';
        html += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_1" value="' + data.samples[i].sampleId + '">' + data.samples[i].itemNo + '</span>';
        html += '            <span class="goSampleInfo sample_info_at_mobile" value="' + data.samples[i].sampleId + '">&nbsp;/&nbsp;</span>';
        html += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_2" value="' + data.samples[i].sampleId + '">' + data.samples[i].name + '</span>';
        html += '        </div>';
        html += '        <div class="sample_info_at_mobile_line">';
        html += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_3" value="' + data.samples[i].sampleId + '">成分:' + data.samples[i].component + '</span>';
        html += '        </div>';
        html += '        <div class="sample_info_at_mobile_line">';
        html += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_4" value="' + data.samples[i].sampleId + '">门幅:' + data.samples[i].width + '</span>';
        html += '            <span class="goSampleInfo sample_info_at_mobile" value="' + data.samples[i].sampleId + '">&nbsp;/&nbsp;</span>';
        html += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_5" value="' + data.samples[i].sampleId + '">克重:' + data.samples[i].weight + '</span>';
        html += '        </div>';
        html += '        <div style="position:absolute;top:0;right:0;heigh:50%;width:80px;text-align:center;padding:15% 0;"value="' + data.samples[i].sampleId + '" class="moreAtMobile"><img src="/images/more.png" value="' + data.samples[i].sampleId + '"></div>';
        html += '    </td>';
        html += '    <td class="hidden-xs">';
        html += '        <div class="edit_box display-none">';
        html += '            <div class="operation edit_icon display-none auth_edit_sample" value="' + data.samples[i].sampleId + '">';
        html += '                <div class="img_icon hint--top-right" value="' + data.samples[i].sampleId + '" aria-label="编辑">';
        html += '                    <img src="/images/edit_black.png" alt="" value="' + data.samples[i].sampleId + '">';
        html += '                </div>';
        html += '                <!-- <div class="text_icon" value="' + data.samples[i].sampleId + '"></div> -->';
        html += '            </div>';
        html += '            <div class="operation copy_icon display-none auth_add_sample" value="' + data.samples[i].sampleId + '">';
        html += '                <div class="img_icon hint--top-right" value="' + data.samples[i].sampleId + '" aria-label="复制">';
        html += '                    <img src="/images/copy_black.png" alt="" value="' + data.samples[i].sampleId + '" >';
        html += '                </div>';
        html += '                <!-- <div class="text_icon copy_sample" value="' + data.samples[i].sampleId + '" id="copy_sample"></div> -->';
        html += '            </div>';
        html += '            <div class="operation print_icon auth_print display-none" value="' + data.samples[i].sampleId + '">';
        html += '                <div class="img_icon hint--top-right" value="' + data.samples[i].sampleId + '" aria-label="打印">';
        html += '                    <img src="/images/print_black.png" alt="" value="' + data.samples[i].sampleId + '" >';
        html += '                </div>';
        html += '                <!-- <div class="text_icon" value="' + data.samples[i].sampleId + '"></div> -->';
        html += '            </div>';
        html += '            <div class="dropdown operation display-none">';
        html += '                <div class=" more_icon dropdown-toggle" data-toggle="dropdown">';
        html += '                    <div class="img_icon hint--top-right"  aria-label="更多操作">';
        html += '                        <img src="/images/more_black.png" alt="">';
        html += '                    </div>';
        html += '                    <div class="text_icon"></div>';
        html += '                </div>';
        html += '                <ul class="dropdown-menu dropdown_menu" role="menu">';
        html += '                    <li class="share_icon display-none auth_share" value="' + data.samples[i].sampleId + '" data-item="' + data.samples[i].itemNo + '" data-toggle="modal" data-target="#2Dcode"><a  value="' + data.samples[i].sampleId + '">分享</a></li>';
        data.samples[i].topType ? html += '<li class="top_sample_box auth_top" value="' + data.samples[i].sampleId + '"><a class="top_sample" data-topStatic="0" value="' + data.samples[i].sampleId + '">取消置顶</a></li>' : html += '<li class="top_sample_box auth_top" value="' + data.samples[i].sampleId + '"><a class="top_sample" data-topStatic="1" value="' + data.samples[i].sampleId + '">置顶</a></li>';
        data.samples[i].hot ? html += '<li class="top_sample_box auth_top" value="' + data.samples[i].sampleId + '"><a class="hot_sample" data-topStatic="0" value="' + data.samples[i].sampleId + '">取消热门</a></li>' : html += '<li class="top_sample_box auth_top" value="' + data.samples[i].sampleId + '"><a class="hot_sample" data-topStatic="1" value="' + data.samples[i].sampleId + '">热门</a></li>';
        html += '                    <li class="delete_sample delete_advanced_type display-none auth_del" value="' + data.samples[i].sampleId + '"><a class="delete_sample" value="' + data.samples[i].sampleId + '">删除</a></li>';
        html += '                </ul>';
        html += '            </div>';
        html += '        </div>';
        html += '    </td>';
        html += '</tr>';
      } else {
        html = template(data.samples[i]);
      }

      $('#sample_list').append(html);

      if (data.samples[i].samplePicKey) {
        $('.img_sample[value=\'' + data.samples[i].sampleId + '\']').prop('src', data.samples[i].samplePicKey + '?x-oss-process=image/resize,m_fixed,h_48,w_48');
      } else {
        $('.img_sample[value=\'' + data.samples[i].sampleId + '\']').attr('src', '/images/sampleImg.png');
      }
    }

    //权限控制补丁=============================================
    if (typeof authControlAjaxBtn !== 'undefined') {

      authControlAjaxBtn(AUTHDATA);
    }

    //检测是否全选
    input_arr = $('input[class="sampleCheck"]');
    for (var i = 0; i < input_arr.length; i += 1) {
      if (!input_arr[i].checked) {
        $('#checkAll').prop('checked', false);

        break;
      }
      if (i == input_arr.length - 1) {
        $('#checkAll').prop('checked', true);
      }
    }
  }
}