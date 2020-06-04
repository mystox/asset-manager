'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * -----
 * 图片预览
 * -----
 */
var index = [1, 1, 1, 1];

var previewImageUrl = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];

var pics = {
  0: '',
  1: '',
  2: '',
  3: ''

  //是否启用计量单位
};var isEnablingMeasurementUnits = 0,
    isEnablingInventoryDeduction = 0;

var pre_img = '#public_';

var selectIndex = document.getElementById('previewOption').selectedIndex;

getAttribute();

manager_check();

var _option1 = $('.option1'),
    _option2 = $('.option2'),
    _option3 = $('.option3'),
    _option4 = $('.option4');

$('#previewOption').change(function () {

  selectIndex = document.getElementById('previewOption').value;
  //console.log(selectIndex);
  if (selectIndex == 0) {
    _option1.css('display', 'block');
    _option2.css('display', 'none');
    _option3.css('display', 'none');
    _option4.css('display', 'none');
  }

  if (selectIndex == 1) {
    _option1.css('display', 'none');
    _option2.css('display', 'block');
    _option3.css('display', 'none');
    _option4.css('display', 'none');
  }

  if (selectIndex == 2) {
    _option1.css('display', 'none');
    _option2.css('display', 'none');
    _option3.css('display', 'block');
    _option4.css('display', 'none');
  }

  if (selectIndex == 3) {
    _option1.css('display', 'none');
    _option2.css('display', 'none');
    _option3.css('display', 'none');
    _option4.css('display', 'block');
  }
});

$('.selectExcel').on('click', function () {

  $('#inputExcel').val('');
});

function inputExcelFile(files) {

  if (files.length === 0) {
    return;
  }

  var formData = new FormData($('#inputExcel')[0]);

  $('#has_cover').is(':checked') ? formData.append('updateWhenSampleExists', 1) : formData.append('updateWhenSampleExists', 0);

  formData.append('companyId', COMPANYID);
  $.ajax({
    url: '/api/samples/io/input',
    type: 'POST',
    data: formData,
    async: true,
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function beforeSend(request) {
      //request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('authorization', $.cookie('authorization'));
      if (!$.cookie('authorization')) {
        request.abort();
      }
    },
    success: function success(response) {
      if (response.code == 200) {
        if (response.errorNum == 0) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: response.message
          });
        } else {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: response.message,
            buttons: {
              confirm: {
                text: '确定',
                action: function action() {
                  location.href = response.resultFileUrl;
                }
              },
              cancel: {
                text: '取消'
              }
            }
          });
        }
      } else {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒!',
          content: response.message
        });
      }
    },
    complete: function complete() {
      $('#inputFile').val('');
    },
    error: function error(response) {
      //console.log(response);
    }
  });
};

function repeatFiles(files) {

  $('#uploadFiles').val('');
}

/*获取结束=========================================*/

function markCheckAndUoload(files) {

  handleFiles(files);
}
//上传图片
function handleFiles(files, markText) {

  if (ifRepeatPic(files) == true) return;

  beginImgLoading();

  //删除按钮隐藏
  $('.imagePreview .close').hide();

  clearTimeout(clk);
  var clk = setTimeout(function () {
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var imageType = /^image\//;
      var fileSize = file.size;
      if (file.size / 1024 / 1024 > 20) {
        if (files.length > 1) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '请重新选择第' + i + '张图片，图片最大为20M'
          });
        } else {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '请重新选择图片，图片最大为20M'
          });
        }
        continue;
      }
      if (!imageType.test(file.type)) {
        continue;
      }
      if (index[selectIndex] > 9) {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒!',
          content: '每个类别最多上传9张图片!'
        });
        break;
      }

      var img = '#imagePreview' + selectIndex + index[selectIndex];
      //console.log(img);
      $(img).css('background', 'url(' + window.URL.createObjectURL(file) + ')');
      $(img).css('background-size', 'cover');
      //$(img).css('display', 'block');
      previewImageUrl[selectIndex][index[selectIndex]] = window.URL.createObjectURL(file).toString();
      //console.log(previewImageUrl[selectIndex][index[selectIndex]]);
      index[selectIndex] += 1;
    }
    //上传到服务器
    uploadPics(files, markText);

    //files = null;
    //console.log($("#uploadFiles").val());
    //$("#uploadFiles").val("");
  }, 100);
}

$('.close').on('click', function (e) {
  if (!$(this).parent().attr('id')) {
    return;
  }
  var selectPics = [];
  //console.log($(this).parent().attr("id").split("").pop());
  var index_second = $(this).parent().attr('id').split('').pop();
  //index_first === selectIndex 之前咋没想到呢
  var index_first = parseInt($(this).parent().attr('id').split('').slice(-2, -1));
  //console.log(index_first);
  //console.log(index_second);
  //console.log("-----");
  for (var i = index_second; i < index[selectIndex]; i++) {}
  //console.log(previewImageUrl[index_first][i]);

  //console.log("-----");

  //更新展示图片
  for (var i = index_second, j = parseInt(index_second) + 1; i < index[selectIndex]; i++, j++) {
    //console.log(previewImageUrl[index_first][i]);
    //console.log(previewImageUrl[index_first][j]);
    previewImageUrl[index_first][i] = previewImageUrl[index_first][j];
    //console.log(previewImageUrl[index_first][i]);
    var img = '#imagePreview' + index_first + i;
    //console.log(img);
    //console.log(previewImageUrl[index_first][i]);
    if (!previewImageUrl[index_first][i]) {
      $(img).css('display', 'none');
      break;
    } else {
      $(img).css('background', 'url(' + previewImageUrl[index_first][i] + ')');
      $(img).css('background-size', 'cover');
    }
  }
  index[selectIndex] -= 1;
  deleteImg(index_second - 1);

  //API删除图片key
  selectPics = pics[index_first].split(',');
  for (var i = index_second - 1; i < selectPics.length - 1; i++) {
    selectPics[i] = selectPics[i + 1];
  }
  selectPics.length = selectPics.length - 1;
  pics[index_first] = selectPics.join(',');
  //console.log(pics);
});

function uploadPics(files, markText) {

  if (files.length != 0) {
    var formData = new FormData($('#uploadPics')[0]);
    formData.append('bizType', 10);
    formData.append('bizId', 1);
    if (markText) {
      formData.append('bizParams', markText);
    }

    $.ajax({
      url: '/api/upload/pic',
      type: 'POST',
      data: formData,
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function beforeSend(request) {
        // request.setRequestHeader('Content-Type', 'application/json');
        // request.setRequestHeader('authorization', $.cookie('authorization'));
        // if (!$.cookie('authorization')) {
        //   request.abort();
        // }
      },
      success: function success(response) {

        var responsePics = [];
        var picsArr = [];
        var imgShowIdArr = [];

        if (response.code == 200) {

          var picIdsLength = response.picIds.length;
          //上传成功后更新对应链接
          if (pics[selectIndex] != '') {
            picsArr = pics[selectIndex].split(',');
          }
          // console.log(picsArr);
          for (var i = 0; i < picsArr.length; i++) {
            responsePics.push(picsArr[i]);
          }
          //console.log(responsePics);
          if (picIdsLength > 9) {
            picIdsLength = 9;
          }
          for (var i = 0; i < picIdsLength; i++) {
            responsePics.push(response.picIds[i]);
            imgShowIdArr.push('#imagePreview' + selectIndex + (picsArr.length + 1 + i));
          }

          $(imgShowIdArr.join(',')).css('display', 'block');

          pics[selectIndex] = responsePics.join(',');
        } else {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: response.message
          });
        }

        //删除按钮显示
        $('.imagePreview .close').show();

        endImgLoading();
      },
      error: function error(response) {
        //console.log(response);
        endImgLoading();

        //删除按钮显示
        $('.imagePreview .close').show();
      }
    });
  } else {
    endImgLoading();
    //删除按钮显示
    $('.imagePreview .close').show();
  }
}

/*
 * -----
 * Ajax接口函数
 * -----
 */

$(document).ready(function () {

  getNewSampleList();
  // var managerCheck = manager_check(managerCheck);
  // getPayInfo(managerCheck);
  var $inputSampleTag = $('#inputSampleTag');
  $('#companyName').text($.cookie('company_name'));
  mes_check();
  var searched = 0;
  var preName = '';
  //tags 交互所用到变量
  var clk;
  var tag_pre_name = [];
  var tag_pre_id = [];

  var tags = [];
  var tagsObj = {};

  var picsArr = [];
  var picsObj = {};

  var tag_ids = [];

  $('body').on('keyup', function (e) {
    //console.log(e);
    if (e.which == 9) {
      $('.input_help').css('display', 'none');
    }
    setTimeout(function () {
      $('#' + $(document.activeElement).attr('id') + 'Help').css('display', 'block');
    }, 100);
  });

  //Main.js 最近浏览记录控制
  g_stepRecord.set({
    pageName: '新增样品'
  }, $('#hostory_add_lists'));
  // 检测公司是否付费且样品的订单列表
  //console.log($.cookie('payStatus'));
  var urlString = encodeURI('/api/samples?companyId=' + COMPANYID + '&pageNo=' + 1 + '&pageSize=10&orderByType=2' + '&searchType=' + 0);
  $.ajax({
    type: 'get',
    url: urlString,
    dataType: 'json',
    beforeSend: function beforeSend(request) {
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('authorization', $.cookie('authorization'));
      if (!$.cookie('authorization')) {
        request.abort();
      }
    },
    success: function success(response) {
      //  console.log(response.code);
      $.cookie('recordCount', response.recordCount);
      //  console.log($.cookie('recordCount', response.recordCount));
    }
  });

  //添加样品
  $('.addSample').on('click', function (e) {
    var _this = $(this);
    if ($('.addSample').attr('disabled') == 'disabled') {
      return;
    }
    if ($.cookie('payStatus') == 0 && $.cookie('recordCount') > 50) {
      $.alert({
        animation: 'bottom',
        closeAnimation: 'scale',
        title: '提醒!',
        content: '试用版样品数不超过50个！去付费？',
        buttons: {
          confirm: {
            text: '确定',
            action: function action() {
              $.cookie('company_page', '3', {
                path: '/'
              });
              location.href = '/my/company.html';
            }
          },
          cancel: {
            text: '取消'
          }
        }
      });
      return;
    }

    var valCanISave = true;
    var lenCanISave = true;
    var treeCanISave = true;
    var valTipName = ' ';
    var lenTipName = ' ';
    // 动态数据 
    var attributesMap = {};

    var _samples_unit = {},
        _add_nuit_btn_data = $('#add_nuit_btn').data('unit');

    //console.log(ATTRIBUTE);
    ATTRIBUTE.forEach(function (item) {

      var val = '',
          _tags_val = [];
      //多级分类
      if (item.optionsScalable) {

        var _classifiction = $('#inputAttribute_' + item.attributeId).parents('.panel1').find('.option-classifiction-' + item.attributeId + ' .options-scalable:last');

        if (_classifiction.length) {
          var lookUpTreeval = function lookUpTreeval(str) {

            for (var _i = 0; _i < item.optionList.length; _i++) {

              Number(item.optionList[_i].id) === 0 && (item.optionList[_i].id = 1);

              if (Number(item.optionList[_i].id) === Number(str)) {

                _tree_up_chain_name.unshift(item.optionList[_i].name);

                lookUpTreeval(item.optionList[_i].upperOptionId);
              }
            }
          };

          // !val ? (treeCanISave = false) : (lookUpTreeval(_data_tree_id));

          var _data_tree_id = '',
              _tree_up_chain_name = [];

          _classifiction.each(function (index, el) {

            var _this = $(this);

            val = _this.val().trim();

            _data_tree_id = _this.find('option:selected').attr('data-option-id');
          });

          lookUpTreeval(_data_tree_id);

          _tree_up_chain_name = _tree_up_chain_name.filter(function (item) {

            return item != '' && item;
          });

          _tree_up_chain_name.length && (val = item.attributeId === 7 ? _tree_up_chain_name.reverse().join('-') : _tree_up_chain_name.join('-'));
        } else {

          val = $('#inputAttribute_' + item.attributeId).val().trim();
        }
      } else {

        if (item.valueType === 1) {
          //文本加选项

          $('#inputAttribute_' + item.attributeId).parent('.need-help-list').find('.tag-valuetype-1').each(function () {

            var _that = $(this);

            var _text_val = _that.find('span').text().trim();

            _text_val && _tags_val.push(_text_val);
          });

          val = _tags_val.join(',');

          !val && (val = $('#inputAttribute_' + item.attributeId).val().trim());
        } else {

          val = $('#inputAttribute_' + item.attributeId).val().trim();
        }
      }

      if (item.valueType === 3) {

        val = ($('#YMD_' + item.attributeId).val() + ' ' + $('#HMS_' + item.attributeId).val()).trim();
      }

      // 加单位
      if (item.attributeId === 4) {
        val = !/^[0-9]+$/.test(val) ? val : val ? val + 'cm' : '';
      }

      if (item.attributeId === 5) {
        val = !/^[0-9]+$/.test(val) ? val : val ? val + 'g/㎡' : '';
      }

      if (item.isRequired === 1 && !val) {

        valCanISave = false;
        valTipName = valTipName + item.prettyName + ' ';
      }

      if (val.length > APP.attributeLength) {

        lenCanISave = false;
        lenTipName = lenTipName + item.prettyName + ' ';
      }

      attributesMap[item.attributeId] = val;
    });

    if (!valCanISave) {

      g_msgAlert('\u4EE5\u4E0B\u5B57\u6BB5\u4E3A\u5FC5\u586B\uFF1A' + valTipName);
      return;
    }

    if (!valCanISave) {

      g_msgAlert('\u4EE5\u4E0B\u5B57\u6BB5\u957F\u5EA6\u8BF7\u63A7\u5236\u5728 ' + APP.attributeLength + ' \u4EE5\u5185 \uFF1A' + valTipName);
      return;
    }

    if (!treeCanISave) {

      g_msgAlert('以下字段为必填：子类');

      return;
    }

    //标记检测
    if ($inputSampleTag.val() && $inputSampleTag.val().length > 32) {
      //console.log("oooops!");
      $inputSampleTag.addClass('input_err');
      $('#mes_of_inputSampleTags').text('标记太长,请简化标记名称');
      return;
    }

    if ($inputSampleTag.val().length > 0) {
      //判断键入标记名是否存在
      var name = $inputSampleTag.val();
      var tag_id;
      if (tag_pre_name.indexOf(name) != -1) {
        tag_id = tag_pre_id[tag_pre_name.indexOf(name)];
      } else {
        tag_id = getTagId(name);
      }
      $('#mes_of_inputSampleTags').text('');
      //console.log(tag_id);
      if (add_tag({
        tagId: tag_id,
        tagName: name
      })) {
        if (searched == 1) {
          searched = 0;
          $('.tag_pre').remove();
          $('input.tags').val('');
        }
      } else {
        $inputSampleTag.val(name);
        $inputSampleTag.addClass('input_err');
        $('#mes_of_inputSampleTags').text('已添加此标记');
        $('#panel1').trigger('click');
        return;
      }
    }

    picsArr.length = 0;
    for (var i = 0; i < 4; i++) {
      if (pics[i]) {
        var ps = pics[i].split(',');

        var psEnd = [];
        for (var j = 0; j < ps.length && j < 9; j++) {
          psEnd.push(ps[j]);
        }
        pics[i] = psEnd.join(',');
        picsArr.push({
          roleType: i,
          picIds: pics[i]
        });
      }
    }
    for (var i = 0; i < picsArr.length; i++) {
      for (var k in picsArr[i]) {
        picsObj[k] = picsArr[i][k];
      }
    }

    for (var i = 0; i < tags.length; i++) {
      for (var k in tags[i]) {
        tagsObj[k] = tags[i][k];
      }
    }

    for (var i = 0; i < tags.length; i++) {
      tag_ids.push(parseInt(tags[i].tagId));
    }

    //新增样品 添加颜色字段

    var _samples_color = [];

    $('#panel_color_box').find('.sample-color-item').each(function () {

      var _that = $(this),
          _data = {};

      _data['name'] = _that.attr('data-name') ? _that.attr('data-name') : '';

      _data['mark'] = _that.attr('data-mark') ? _that.attr('data-mark') : '';

      _data['pic'] = _that.attr('data-pic') ? _that.attr('data-pic') : '';

      _samples_color.push(_data);
    });

    //计量单位 


    if (Number(isEnablingMeasurementUnits) && Number(isEnablingInventoryDeduction)) {

      _samples_unit = _add_nuit_btn_data ? _add_nuit_btn_data : {};
    }

    //console.log(tag_ids);
    if (huahaiTesting(COMPANYID)) {

      var json_data = {
        'companyId': COMPANYID,
        'customAttribute': attributesMap,
        'tagIds': tag_ids.join(','),
        'pics': picsArr,
        'publicRemark': $('#inputSampleNotePublic').val(),
        'protectRemark': $('#inputSampleNoteInside').val(),
        'privateRemark': $('#inputSampleNotePrivate').val(),
        'sampleDocId': $('#haihua_inputFile_name').attr('data-sampleDocId'),
        'topType': Number($('input[name=\'topType\']:checked').val()),
        'hot': Number($('input[name=\'topHot\']:checked').val()),
        'colors': _samples_color
      };

      json_data = $.extend({}, json_data, _samples_unit);
    } else {

      //不是海华   区分新增临时样品
      var _is_tmp = getUrlValue('tmp');

      if (Number(_is_tmp) === 1 || Number(_is_tmp) === 2) {
        var json_data = {
          'companyId': COMPANYID,
          'customAttribute': attributesMap,
          'tagIds': tag_ids.join(','),
          'pics': picsArr,
          'type': 1,
          'publicRemark': $('#inputSampleNotePublic').val(),
          'protectRemark': $('#inputSampleNoteInside').val(),
          'privateRemark': $('#inputSampleNotePrivate').val(),
          'topType': Number($('input[name=\'topType\']:checked').val()),
          'hot': Number($('input[name=\'topHot\']:checked').val()),
          'colors': _samples_color
        };

        json_data = $.extend({}, json_data, _samples_unit);
      } else {
        var json_data = {
          'companyId': COMPANYID,
          'customAttribute': attributesMap,
          'tagIds': tag_ids.join(','),
          'pics': picsArr,
          'publicRemark': $('#inputSampleNotePublic').val(),
          'protectRemark': $('#inputSampleNoteInside').val(),
          'privateRemark': $('#inputSampleNotePrivate').val(),
          'topType': Number($('input[name=\'topType\']:checked').val()),
          'hot': Number($('input[name=\'topHot\']:checked').val()),
          'colors': _samples_color
        };

        json_data = $.extend({}, json_data, _samples_unit);
      }
    }

    // console.log(JSON.stringify(json_data));

    $.ajax({
      type: 'post',
      url: '/api/saveSamples',
      dataType: 'json',
      data: JSON.stringify(json_data),
      beforeSend: function beforeSend(request) {
        request.setRequestHeader('Content-Type', 'application/json');
        // request.setRequestHeader('authorization', $.cookie('authorization'));
        // if (!$.cookie('authorization')) {
        //   request.abort();
        // }
        _this.prop('disabled', true).text('保存中...');
      },
      success: function success(response) {
        if (response.code == 200) {
          //tmp 

          if (_is_tmp) {

            Number(_is_tmp) === 1 ? location.href = '/business/offer_samples.html' : location.href = '/business/sample_quotation.html';

            if ($(e.target).attr('value') == 2) {

              Number(_is_tmp) === 1 ? location.href = '/business/offer_samples.html' : location.href = '/business/sample_quotation.html';
            }
          } else {
            if ($(e.target).attr('value') == 2) {
              location.href = '/sample/add_sample.html';
            } else {
              location.href = '/sample/sample_list.html';
            }
          }
        } else if (response.code == 401) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '登录信息失效,请重新登录!',
            buttons: {
              cnofirm: {
                text: '确定',
                action: function action() {
                  $.cookie('authorization', '', {
                    path: '/'
                  });
                  location.href = '/login.html';
                }
              }
            }
          });
        } else {
          $('#panel1').trigger('click');
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: response.message,
            buttons: {
              cnofirm: {
                text: '确定'
              }
            }
          });
        }
      },
      complete: function complete() {
        _this.attr('disabled', false).text('保存');
      },
      error: function error() {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒!',
          content: '服务器连接失败!',
          buttons: {
            confirm: {
              text: '确定'
            }
          }
        });
      }
    });
  });

  //模糊搜索
  $('input.tags').off().on('keyup', function (e) {

    clearTimeout(clk);
    //初始化标记信息
    $('#mes_of_inputSampleTags').text('');
    $inputSampleTag.removeClass('input_err');

    //如果有输入
    if ($inputSampleTag.val().length > 0) {
      $('.tag_pre').remove();
    }
    if ($inputSampleTag.val() && $inputSampleTag.val().length > 32) {
      //console.log("oooops!");
      $inputSampleTag.addClass('input_err');
      $('#mes_of_inputSampleTags').text('标记太长,请简化标记名称');
      return;
    }
    clk = setTimeout(function () {
      var name = $('input.tags').val();
      var tag_id;

      //当没有输入的情况下按删除键
      if (preName.length == 0 && /^8$/.test(e.which)) {
        //console.log("out for preName");
        var tag_arr = $('.tag');
        var tag_name = $(tag_arr[tag_arr.length - 1]).attr('name');
        remove_tag(tag_name);
        tag_arr[tag_arr.length - 1].remove();
        return;
      }

      //当输入框没有任何输入的时候
      if (name && name.length == 0 && /^8$/.test(e.which)) {
        //console.log("out for name");
        preName = '';
        if (searched == 1) {
          $('.tag_pre').remove();
          searched = 0;
          getTagsSimple();
        }
        return;
      }

      preName = name;
      name = name.split(' ')[0].split(',')[0].split(';')[0].split('，')[0].split('；')[0];
      //console.log(name);


      // if: comma,enter (delimit more keyCodes with | pipe)
      if (/(186|188|^13$)/.test(e.which) && name && name.length > 0) {
        preName = name;
        //判断键入标记名是否存在
        if (tag_pre_name.indexOf(name) != -1) {
          tag_id = tag_pre_id[tag_pre_name.indexOf(name)];
        } else {
          //调用后台获取tag_id
          tag_id = getTagId(name);
          //console.log(tag_id);
        }

        // 新增标记，前台根据后台结果，显示插入状态。
        //!  需要修改完善 增添 删除 标记问题

        //如果添加成功
        if (add_tag({
          tagId: tag_id,
          tagName: name
        })) {
          $('.tag_pre').remove();
          getTagsSimple();
          $('input.tags').val('');
          $inputSampleTag.focus();
        } else {
          //console.log("add_err");
          $inputSampleTag.val(name);
          $inputSampleTag.addClass('input_err');
          $('#mes_of_inputSampleTags').text('已添加此标记');
          searchTagAdd(name);
          return;
        }
      } else {
        if (name && name.length > 0) {
          searchTagAdd(name);
        }
      }
    }, 400);
  }).on('keydown', function () {
    clearTimeout(clk);
  });

  //标记输入获得焦点
  $inputSampleTag.focus(function () {
    //console.log("getTags");
    $('.tags-bar').addClass('tags-bar-focus');
    getTagsSimple();
  });

  //其他输入框获得焦点
  $('input').focus(function (e) {
    var tag_id;
    if ($inputSampleTag.val().length > 0) {
      //判断键入标记名是否存在
      var name = $inputSampleTag.val();
      var tag_id;
      if (tag_pre_name.indexOf(name) != -1) {
        tag_id = tag_pre_id[tag_pre_name.indexOf(name)];
      } else {
        tag_id = getTagId(name);
      }
      $('#mes_of_inputSampleTags').text('');
      //console.log(tag_id);
      if ($inputSampleTag.val() && $inputSampleTag.val().length > 32) {
        //console.log("oooops!");
        $inputSampleTag.addClass('input_err');
        $('#mes_of_inputSampleTags').text('标记太长,请简化标记名称');
        return;
      }
      if (add_tag({
        tagId: tag_id,
        tagName: name
      })) {
        if (searched == 1) {
          searched = 0;
          $('.tag_pre').remove();
          $('input.tags').val('');
          getTagsSimple();
        }
      } else {
        $inputSampleTag.val(name);
        $inputSampleTag.addClass('input_err');
        $('#mes_of_inputSampleTags').text('已添加此标记');
        return;
      }
    }
    if ($(e.target).attr('id') != 'inputSampleTag') {
      setTimeout(function () {
        $('#preTags').empty();
      }, 400);
      $('.tags-bar').removeClass('tags-bar-focus');
    }
  });

  //删除标记
  $('.tags').on('click', '.tag', function (e) {
    $('#mes_of_inputSampleTags').text('');
    var tag_id = $(e.target).attr('value');
    var tag_name = $(e.target).attr('name');
    remove_tag(tag_name);
    $(this).remove();
  });

  //添加标记
  $('#preTags').on('click', '.tag_pre', function (e) {
    $('#mes_of_inputSampleTags').text('');
    //console.log("preTags.add_tag()");
    var tag_id = $(e.target).attr('value');
    var tag_name = $(e.target).attr('name');
    //console.log(tag_id);
    if (add_tag({
      tagId: tag_id,
      tagName: tag_name
    })) {
      if (searched == 1) {
        searched = 0;
        $('.tag_pre').remove();
        $('input.tags').val('');
        $inputSampleTag.focus();
        getTagsSimple();
      }
    } else {
      $('#mes_of_inputSampleTags').text('已添加此标记');
    }
  });
  //显示更多 历史记录
  var show_hidden = true;
  $('#show_hidden_lists').on('click', function (event) {
    if (show_hidden) {
      $(this).text('收起...');
      show_hidden = false;
    } else {
      $(this).text('更多...');
      show_hidden = true;
    }

    $('#hostory_operation_hidden_lists').toggle();
  });

  // var _this_attribute_tree = [];
  //  var _text_data_nodes=[];
  //  var _this_tree_object={};

  //多级分类
  $('body').on('change', '.panel1 .options-scalable', function (event) {

    var _this = $(this);

    var _parent_el = _this.parents('.panel1');

    var _data_attribute_id = _this.attr('data-attribute-id');

    var _selectedIndex = Number(_this.find('option:selected')[0].index) - 1;

    var _data_tree_level = Number(_this.attr('data-tree-level'));

    var _data_tree_id = _this.find('option:selected').attr('data-option-id');

    var _option_classifiction = _parent_el.find('.option-classifiction-' + _data_attribute_id);

    var _data_tree = [];

    //根元素 
    if (!_data_tree_level) {

      ATTRIBUTE.forEach(function (item) {

        item.attributeId === Number(_data_attribute_id) && (_data_tree = item.firstOption);
      });

      //新增分类编号自增，公司设置接口返回classifyItemAutoIncrement判断是否是分类自增

      if (Number(sessionStorage.getItem('classifyItemAutoIncrement'))) {

        var _list_options = {

          url: '/api/company/attribute/classify/item',
          type: 'GET',
          data: {
            companyId: COMPANYID,
            classify: _this.val()
          }
        };

        var _list_cb = g_return200CbObj(function (data) {

          $('#inputAttribute_1').val(data.dataResult);
        });

        if (_this.val()) {

          sendAjax(_list_options, _list_cb);
        }
      }
    } else {

      _data_tree = JSON.parse(_this.attr('data-tree'));
    }

    //是否有children
    if (_selectedIndex != -1 && _data_tree[_selectedIndex].nodes) {

      //只添加 _data_tree_level 下面一级的select


      if (!_data_tree_level) {

        //level === 0 时  清空在加载
        _option_classifiction.html('');
      } else {

        // level ！= 0  清空level下所有子集在加载
        _option_classifiction.find('.options-scalable').each(function () {
          // body... 
          var _this = $(this);

          Number(_this[0].getAttribute('data-tree-level')) > _data_tree_level && _this.parents('.form-group').remove();
        });
      }

      var _select = '<div class="row form-group">\n          <label for="subclass-option" class="col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3">\u5B50\u7C7B</label>\n          <div class="col-sm-8 col-md-6 col-lg-6 col-xs-9">\n          <select class="form-control input-lg input_area space small-text text_input font14 options-scalable" data-tree-level=' + (_data_tree_level + 1) + ' data-tree=' + JSON.stringify(_data_tree[_selectedIndex].nodes) + ' id="subclass-option" data-attribute-id="' + _data_attribute_id + '">\n          <option value="">\u9009\u62E9\u5B50\u7C7B</option>';

      _data_tree[_selectedIndex].nodes.forEach(function (item) {

        _select += '<option value="' + item.name + '" data-option-id="' + item.id + '">' + item.name + '</option>';
      });

      _select += '</select>\n          </div>\n          </div>';

      _option_classifiction.append(_select);
    } else {

      //删除 _data_tree_level 下面的所有select


      _option_classifiction.find('.options-scalable').each(function () {
        // body...
        var _this = $(this);

        Number(_this[0].getAttribute('data-tree-level')) > _data_tree_level && _this.parents('.form-group').remove();
      });
    }
  });

  //的到该等级的tree-data


  // function getTreeData(level,idx) {


  //   // console.log(level);
  //   // console.log(id);
  //   var _this_dddd=(level === 0) ? _this_attribute_tree : _text_data_nodes;


  //   _this_dddd.forEach((item,index) => {


  //      if(index === idx){

  //           if(item.nodes){
  //               _text_data_nodes=item.nodes;
  //           }else{

  //               _text_data_nodes=[];

  //           }

  //      }

  //   })

  //   _this_tree_object['' +level]=_text_data_nodes


  //   console.log(_text_data_nodes);

  //    console.log(_this_tree_object);

  // }


  function getTagsSimple() {
    var tagItem;
    //console.log($("#preTags .tag_pre").length);
    if ($('#preTags .tag_pre').length) {
      return;
    }
    beginLoading();
    $.ajax({
      type: 'get',
      url: '/api/tags/cloud',
      dataType: 'json',
      data: {
        'companyId': COMPANYID,
        'limit': 15
      },
      beforeSend: function beforeSend(request) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authorization', $.cookie('authorization'));
        if (!$.cookie('authorization')) {
          request.abort();
        }
      },
      success: function success(response) {
        if (response.code == 200) {
          //console.log("getTags OK!");
          //重置当前标记信息
          tag_pre_id.length = 0;
          tag_pre_name.length = 0;
          //显示模糊查询标记结果
          $('#preTags').empty();
          for (var i = 0; i < response.tags.length; i++) {
            tagItem = '<span class="tag_pre" value="' + response.tags[i].tagId + '" name="' + response.tags[i].name + '" >' + response.tags[i].name + '</span>';

            tag_pre_id.push(response.tags[i].tagId);
            tag_pre_name.push(response.tags[i].name);
            $('#preTags').append(tagItem);
            //console.log(i);
          }
        } else if (response.code == 401) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '登录信息失效,请重新登录!',
            buttons: {
              confirm: {
                text: '确定',
                action: function action() {
                  $.cookie('authorization', '', {
                    path: '/'
                  });
                  location.href = '/login.html';
                }
              }
            }
          });
        } else {
          //console.log(response);

        }
        endLoading();
      },
      error: function error() {
        endLoading();
        //console.log('*****');
      }
    });
  }

  function searchTagAdd(name) {
    var tagItem;
    $.ajax({
      type: 'get',
      url: '/api/tags',
      dataType: 'json',
      async: false,
      data: {
        'companyId': COMPANYID,
        //"key":encodeURI(name)
        'key': name
      },
      beforeSend: function beforeSend(request) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authorization', $.cookie('authorization'));
        if (!$.cookie('authorization')) {
          request.abort();
        }
      },
      success: function success(response) {
        if (response.code == 200) {
          searched = 1;
          //console.log("searchTags OK!");
          //重置当前标记信息
          tag_pre_id.length = 0;
          tag_pre_name.length = 0;
          //显示模糊查询标记结果
          for (var i = 0; i < response.tags.length; i++) {
            tagItem = '<span class="tag_pre" value="' + response.tags[i].tagId + '" name="' + response.tags[i].name + '" >' + response.tags[i].name + '</span>';
            //console.log(tagItem);
            tag_pre_id.push(response.tags[i].tagId);
            tag_pre_name.push(response.tags[i].name);
            $('#preTags').append(tagItem);
            //console.log(i);
          }
        } else if (response.code == 401) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '登录信息失效,请重新登录!',
            buttons: {
              confirm: {
                text: '确定',
                action: function action() {
                  $.cookie('authorization', '', {
                    path: '/'
                  });
                  location.href = '/login.html';
                }
              }
            }
          });
        } else {
          //console.log(response);
        }
      },
      error: function error() {}
    });
  }

  function add_tag(obj) {
    var tagNames = [];
    var tagItem;
    //console.log(obj);
    for (var i = 0; i < tags.length; i++) {
      tagNames.push(tags[i].tagName);
    }
    if (tagNames.indexOf(obj.tagName) == -1) {
      tags.push(obj);
      tagItem = '<span class="tag" value="' + obj.tagId + '" name="' + obj.tagName + '" >' + obj.tagName + '</span>';
      $('input.tags').before(tagItem);
      return true;
    } else {
      return false;
    }
  }

  function remove_tag(name) {
    for (var i = 0, j = 0; i < tags.length; i++) {
      if (tags[i].tagName != name) {
        tags[j] = tags[i];
        j++;
      }
      if (i == tags.length - 1) {
        tags.length = j;
      }
    }
    //console.log(tags);
  }

  function getTagId(tagName) {
    var tag_id;
    $.ajax({
      type: 'post',
      url: '/api/samples/tags',
      dataType: 'json',
      async: false,
      data: JSON.stringify({
        'tagName': tagName
      }),
      beforeSend: function beforeSend(request) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authorization', $.cookie('authorization'));
        if (!$.cookie('authorization')) {
          request.abort();
        }
      },
      success: function success(response) {
        if (response.code == 200) {
          //console.log(response);
          tag_id = response.tagId;
        } else if (response.code == 401) {
          $.alert({
            animation: 'bottom',
            closeAnimation: 'scale',
            title: '提醒!',
            content: '登录信息失效,请重新登录!',
            buttons: {
              confirm: {
                text: '确定',
                action: function action() {
                  $.cookie('authorization', '', {
                    path: '/'
                  });
                  location.href = '/login.html';
                }
              }
            }
          });
        } else {}
      },
      error: function error() {}
    });
    return tag_id;
  }

  authCheckAndAutoShow();

  getOutputFile(COMPANYID);

  uploadExecl(COMPANYID);
});

//主线程 权限控制
function authCheckAndAutoShow() {
  g_canIUse(_defineProperty({}, AUTH.COMPANY.lookScreat, { //能否查看敏感信息
    HTMLDom: '#op2,'
  }), function (data) {

    //htmldom隐藏

    if (data[AUTH.COMPANY.lookScreat].can === 1) {

      $('#op2').removeClass('display-none');
    } else {

      $('#op2').remove();
    }

    var _haihua_customized = $('#haihua_customized');

    if (huahaiTesting(COMPANYID)) {

      _haihua_customized.removeClass('display-none');
    } else {
      _haihua_customized.remove();
    }
  });
}

var ATTRIBUTE = [];

function getAttribute(cb) {
  var source = $('#attribute-template').html();
  var template = Handlebars.compile(source);
  var list_options = {
    type: 'get',
    url: '/api/company/attribute',
    data: {
      companyId: COMPANYID,
      isUsed: 1
    }
  };
  Handlebars.registerHelper('compare', function (v1, v2, options) {

    if (Number(v1) === Number(v2)) {
      return options.fn(this);
    }

    return options.inverse(this);
  });
  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    if (operator) {
      return v1 == v2 ? options.fn(this) : options.inverse(this);
    } else {
      return options.inverse(this);
    }
  });
  var list_callback = g_return200CbObj(function (data) {

    // data = {"code":"200","message":"","attributes":[{"attributeId":1,"prettyName":"编号","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":1,"isChangeable":0,"valueType":0,"options":"","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":2,"prettyName":"名称","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":0,"options":"","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":3,"prettyName":"成分","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":["P:100%","C:100%","R:100%","T:95% SP:5%","R:95% SP:5%","C:95% SP:5%","T: 50% R:50%","T: 65% R:35%","T: 70% R:30%","T: 50% C:50%","T: 65% C:35%","T: 70% C:30%","T: 85% L:15%","R: 85% L:15%"],"optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":4,"prettyName":"门幅","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":["140CM","145CM","150CM","155CM","160CM","165CM","170CM","175CM","180CM","185CM"],"optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":5,"prettyName":"克重","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":["130g/㎡","140g/㎡","160g/㎡","180g/㎡","200g/㎡","210g/㎡","220g/㎡","240g/㎡","260g/㎡"],"optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":6,"prettyName":"规格","isUsed":1,"source":0,"isShopAttr":0,"isSearchAttr":0,"isListAttr":0,"isCopyAttr":0,"isRequired":0,"isChangeable":1,"valueType":1,"options":[],"optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":7,"prettyName":"分类","isUsed":1,"source":0,"isShopAttr":0,"isSearchAttr":0,"isListAttr":0,"isCopyAttr":0,"isRequired":0,"isChangeable":1,"valueType":2,"options":["针织","梭织","蕾丝"],"optionList":[{"id":0,"upperOptionId":0,"name":"针织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0},{"id":0,"upperOptionId":0,"name":"梭织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0},{"id":0,"upperOptionId":0,"name":"蕾丝","upperName":"","position":0,"itemNoSet":"","itemNoLength":0}],"optionsScalable":1,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[],"firstOption":[{"id":0,"upperOptionId":0,"name":"针织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0,"text":"针织"},{"id":0,"upperOptionId":0,"name":"梭织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0,"text":"梭织"},{"id":0,"upperOptionId":0,"name":"蕾丝","upperName":"","position":0,"itemNoSet":"","itemNoLength":0,"text":"蕾丝"}]}]}
    data = {"code":"200","message":"","attributes":[{"attributeId":1,"prettyName":"编号","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":1,"isChangeable":0,"valueType":0,"options":"","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":2,"prettyName":"名称","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":0,"options":"","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":3,"prettyName":"成分","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":"P:100%,C:100%,R:100%,T:95% SP:5%,R:95% SP:5%,C:95% SP:5%,T: 50% R:50%,T: 65% R:35%,T: 70% R:30%,T: 50% C:50%,T: 65% C:35%,T: 70% C:30%,T: 85% L:15%,R: 85% L:15%","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":4,"prettyName":"门幅","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":"140CM,145CM,150CM,155CM,160CM,165CM,170CM,175CM,180CM,185CM","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":5,"prettyName":"克重","isUsed":1,"source":0,"isShopAttr":1,"isSearchAttr":1,"isListAttr":1,"isCopyAttr":1,"isRequired":0,"isChangeable":1,"valueType":1,"options":"130g/㎡,140g/㎡,160g/㎡,180g/㎡,200g/㎡,210g/㎡,220g/㎡,240g/㎡,260g/㎡","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":6,"prettyName":"规格","isUsed":1,"source":0,"isShopAttr":0,"isSearchAttr":0,"isListAttr":0,"isCopyAttr":0,"isRequired":0,"isChangeable":1,"valueType":1,"options":"","optionList":[],"optionsScalable":0,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]},{"attributeId":7,"prettyName":"分类","isUsed":1,"source":0,"isShopAttr":0,"isSearchAttr":0,"isListAttr":0,"isCopyAttr":0,"isRequired":0,"isChangeable":1,"valueType":2,"options":"针织,梭织,蕾丝","optionList":[{"id":0,"upperOptionId":0,"name":"针织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0},{"id":0,"upperOptionId":0,"name":"梭织","upperName":"","position":0,"itemNoSet":"","itemNoLength":0},{"id":0,"upperOptionId":0,"name":"蕾丝","upperName":"","position":0,"itemNoSet":"","itemNoLength":0}],"optionsScalable":1,"viewers":[{"userId":38737,"userName":"mystox","avatar":"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png","changeable":0}],"groups":[]}]}
    var dateArr = [],
        _mes_of_inputvaluetype1 = $('#mes_of_inputvaluetype1');

    data.attributes.forEach(function (item) {

      if (item.optionsScalable) {

        var _optionList = JSON.parse(JSON.stringify(item.optionList));

        item.firstOption = toTreeData(_optionList, {
          id: 'id',
          parentId: 'upperOptionId'
        });
      }

      //code end


      if ([31404, 3004, 28175].includes(Number(COMPANYID)) && [319, 238, 239].includes(Number(item.attributeId))) {

        item.value = '元/m';
      }

      if (item.valueType === 1 || item.valueType === 2) {

        item.options = item.options ? item.options.split(',') : [];
      }

      if (item.valueType === 3) {
        dateArr.push(item.attributeId);
      }
    });

    // console.log(data.attributes);

    ATTRIBUTE = data.attributes;

    //内部备注
    var userAuthorityItems = JSON.parse(sessionStorage.getItem('userAuthorityItems') || null);

    // var haveRight = userAuthorityItems ? userAuthorityItems.company_screat_view.haveRight : 0;
    var haveRight = 1;
    [3019, 32961].includes(Number(COMPANYID)) && Number(haveRight) && $('label[for=\'inputSampleNoteInside\']').text('成本备注');

    Number(haveRight) && $('#company_screat_view').removeClass('display-none');

    // $('#input_box').prepend(template(data));
      var a = "<div class=\"row form-group\">\n" +
          "    <label for=\"attributes_1\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">编号</label><i style=\"color: red\">*</i>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "      <input class=\"form-control input-lg space\" id=\"inputAttribute_1\" placeholder=\"输入编号(必填)\" value=\"\">\n" +
          "    </div>\n" +
          "  </div>\n" +
          "       \n" +
          "  <div class=\"row form-group\">\n" +
          "      <label for=\"attributes_2\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">名称</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "      <input class=\"form-control input-lg space\"   id=\"inputAttribute_2\" placeholder=\"输入名称\" value=\"\">\n" +
          "\n" +
          "    </div>\n" +
          "  </div>\n" +
          "        \n" +
          "  <div class=\"row form-group\">\n" +
          "    <label for=\"attributes_3\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">成分</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "        <div class=\"tags-bar space\">\n" +
          "            <div class=\"tags need-help-list\" >\n" +
          "              <input class=\"form-control input-sm need-help-input\" style=\"width: 200px;\" id=\"inputAttribute_3\" placeholder=\"输入成分-按回车键添加\">\n" +
          "              \n" +
          "            </div> \n" +
          "          </div>\n" +
          "      <!-- <input class=\"form-control input-lg space need-help-input\" id=\"inputAttribute_3\" placeholder=\"输入成分\"> -->\n" +
          "      <div class=\"input_help attributes-help-box\" id=\"inputHelp_3\">\n" +
          "        <div class=\"input_help_tag\">P:100%</div>\n" +
          "        <div class=\"input_help_tag\">C:100%</div>\n" +
          "        <div class=\"input_help_tag\">R:100%</div>\n" +
          "        <div class=\"input_help_tag\">T:95% SP:5%</div>\n" +
          "        <div class=\"input_help_tag\">R:95% SP:5%</div>\n" +
          "        <div class=\"input_help_tag\">C:95% SP:5%</div>\n" +
          "        <div class=\"input_help_tag\">T: 50% R:50%</div>\n" +
          "        <div class=\"input_help_tag\">T: 65% R:35%</div>\n" +
          "        <div class=\"input_help_tag\">T: 70% R:30%</div>\n" +
          "        <div class=\"input_help_tag\">T: 50% C:50%</div>\n" +
          "        <div class=\"input_help_tag\">T: 65% C:35%</div>\n" +
          "        <div class=\"input_help_tag\">T: 70% C:30%</div>\n" +
          "        <div class=\"input_help_tag\">T: 85% L:15%</div>\n" +
          "        <div class=\"input_help_tag\">R: 85% L:15%</div>\n" +
          "      </div>\n" +
          "    </div> \n" +
          "    <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3 aside_mes hidden-xs font14\">\n" +
          "      </div>\n" +
          "  </div>\n" +
          "       \n" +
          "  <div class=\"row form-group\">\n" +
          "    <label for=\"attributes_4\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">门幅</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "        <div class=\"tags-bar space\">\n" +
          "            <div class=\"tags need-help-list\" >\n" +
          "              <input class=\"form-control input-sm need-help-input\" style=\"width: 200px;\" id=\"inputAttribute_4\" placeholder=\"输入门幅-按回车键添加\">\n" +
          "              \n" +
          "            </div> \n" +
          "          </div>\n" +
          "      <!-- <input class=\"form-control input-lg space need-help-input\" id=\"inputAttribute_4\" placeholder=\"输入门幅\"> -->\n" +
          "      <div class=\"input_help attributes-help-box\" id=\"inputHelp_4\">\n" +
          "        <div class=\"input_help_tag\">140CM</div>\n" +
          "        <div class=\"input_help_tag\">145CM</div>\n" +
          "        <div class=\"input_help_tag\">150CM</div>\n" +
          "        <div class=\"input_help_tag\">155CM</div>\n" +
          "        <div class=\"input_help_tag\">160CM</div>\n" +
          "        <div class=\"input_help_tag\">165CM</div>\n" +
          "        <div class=\"input_help_tag\">170CM</div>\n" +
          "        <div class=\"input_help_tag\">175CM</div>\n" +
          "        <div class=\"input_help_tag\">180CM</div>\n" +
          "        <div class=\"input_help_tag\">185CM</div>\n" +
          "      </div>\n" +
          "    </div> \n" +
          "    <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3 aside_mes hidden-xs font14\">\n" +
          "      </div>\n" +
          "  </div>\n" +
          "       \n" +
          "  <div class=\"row form-group\">\n" +
          "    <label for=\"attributes_5\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">克重</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "        <div class=\"tags-bar space\">\n" +
          "            <div class=\"tags need-help-list\" >\n" +
          "              <input class=\"form-control input-sm need-help-input\" style=\"width: 200px;\" id=\"inputAttribute_5\" placeholder=\"输入克重-按回车键添加\">\n" +
          "              \n" +
          "            </div> \n" +
          "          </div>\n" +
          "      <!-- <input class=\"form-control input-lg space need-help-input\" id=\"inputAttribute_5\" placeholder=\"输入克重\"> -->\n" +
          "      <div class=\"input_help attributes-help-box\" id=\"inputHelp_5\">\n" +
          "        <div class=\"input_help_tag\">130g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">140g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">160g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">180g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">200g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">210g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">220g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">240g/㎡</div>\n" +
          "        <div class=\"input_help_tag\">260g/㎡</div>\n" +
          "      </div>\n" +
          "    </div> \n" +
          "    <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3 aside_mes hidden-xs font14\">\n" +
          "      </div>\n" +
          "  </div>\n" +
          "       \n" +
          "  <div class=\"row form-group\">\n" +
          "    <label for=\"attributes_6\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">规格</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "        <div class=\"tags-bar space\">\n" +
          "            <div class=\"tags need-help-list\" >\n" +
          "              <input class=\"form-control input-sm need-help-input\" style=\"width: 200px;\" id=\"inputAttribute_6\" placeholder=\"输入规格-按回车键添加\">\n" +
          "              \n" +
          "            </div> \n" +
          "          </div>\n" +
          "      <!-- <input class=\"form-control input-lg space need-help-input\" id=\"inputAttribute_6\" placeholder=\"输入规格\"> -->\n" +
          "      <div class=\"input_help attributes-help-box\" id=\"inputHelp_6\">\n" +
          "      </div>\n" +
          "    </div> \n" +
          "    <div class=\"col-xs-12 col-sm-2 col-md-3 col-lg-3 aside_mes hidden-xs font14\">\n" +
          "      </div>\n" +
          "  </div>\n" +
          "        \n" +
          "  <div class=\"row form-group\">\n" +
          "    <label for=\"attributes_7\" class=\"col-sm-2 col-md-3 col-lg-3 control-label space col-xs-3\">分类</label>\n" +
          "    <div class=\"col-sm-8 col-md-6 col-lg-6 col-xs-9\">\n" +
          "      <select class=\"form-control input-lg input_area space small-text text_input font14 options-scalable\" id=\"inputAttribute_7\" data-attribute-id=\"7\" data-tree-level=0>\n" +
          "        <option value=\"\">选择分类</option>\n" +
          "\n" +
          "        <option value=\"针织\" data-option-id=\"0\">针织</option>\n" +
          "        <option value=\"梭织\" data-option-id=\"0\">梭织</option>\n" +
          "        <option value=\"蕾丝\" data-option-id=\"0\">蕾丝</option>\n" +
          "\n" +
          "        \n" +
          "      </select>\n" +
          "    </div>\n" +
          "  </div>\n" +
          "  <div class=\"option-classifiction-7\">\n" +
          "\n" +
          "  </div>";
    $('#input_box').prepend(a);

    // 挂载供应商输入帮助
    getCompanyInputHelp();

    // 执行回调 一般用来赋值
    cb && cb();

    //挂载时间事件
    //输入加选择

    //valueType =1 显示多选
    $('input.form-control').on('focus', function () {

      $('.input_help').hide();

      if ($(this).hasClass('need-help-input')) {

        $(this).parents('.tags-bar').siblings('.input_help').show();
      }
    });

    // 加入多选

    $('.attributes-help-box').on('click', 'div', function () {

      var _this = $(this);

      var _val = _this.text().trim();

      var _tags_bar = _this.parent('.attributes-help-box').siblings('.tags-bar');

      var _aside_mes = _this.parents('.form-group').find('.aside_mes');

      var _is_repeat = 0;

      _tags_bar.find('.need-help-list .tag-valuetype-1').each(function () {

        var _that = $(this);
        var _that_val = _that.find('span').text().trim();

        _that_val == _val && (_is_repeat = 1);
      });

      if (_is_repeat) {

        _aside_mes.text('已添加此标记');
      } else {

        _aside_mes.text('');

        _tags_bar.find('input').before('<span class="bgj-tag tag-valuetype-1" style="padding-right: 30px;"  name="' + _val + '"> <span contenteditable="true">' + _val + '</span><b>x</b></span>');
      }
    });

    //删除多选 

    //删除多选 

    $('.need-help-list').on('click', '.tag-valuetype-1 b', function () {

      var _this = $(this);

      var _aside_mes = _this.parents('.form-group').find('.aside_mes');

      _aside_mes.text('');

      _this.parent('.tag-valuetype-1').remove();
    });

    //回车添加多选


    $('.need-help-input').on('keyup', function (e) {

      if (Number(e.which) === 13) {

        var _this = $(this);

        var _val = _this.val().trim();

        if (!_val) {
          return;
        }

        var _tags_bar = _this.parent('.need-help-list');

        var _aside_mes = _this.parents('.form-group').find('.aside_mes');

        var _is_repeat = 0;

        _tags_bar.find('span').each(function () {

          var _that = $(this);

          var _that_val = _that.text().trim();

          _that_val == _val && (_is_repeat = 1);
        });

        if (_is_repeat) {

          _aside_mes.text('已添加此标记');
        } else {

          _aside_mes.text('');

          _this.before('<span class="bgj-tag tag-valuetype-1" style="padding-right: 30px;"  name="' + _val + '"> <span contenteditable="true">' + _val + '</span><b>x</b></span>');
        }

        _this.val('');
      }
    });

    // 时间选择器
    dateArr.forEach(function (item) {

      $.jeDate('#YMD_' + item, {
        format: 'YYYY-MM-DD'
      });

      $.jeDate('#HMS_' + item, {
        format: 'hh:mm:00'
      });

      $('#clear_' + item).on('click', function () {
        $('#YMD_' + item).val('');
        $('#HMS_' + item).val('');
      });
    });
  });
  sendAjax(list_options, list_callback);
}

//获取数据模板
function getOutputFile(companyId) {

  var trigger_to_down = document.querySelector('#trigger_to_down');
  $('#outputFile').on('click', function () {

    loadXls();
    return false;
  });

  function loadXls() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open('GET', '/api/samples/io/template?companyId=' + companyId, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.setRequestHeader('Accept', 'application/json, text/plain, */*');
    xmlhttp.setRequestHeader('authorization', $.cookie('authorization'));
    xmlhttp.responseType = 'arraybuffer';
    xmlhttp.send(null);

    function state_Change() {

      if (xmlhttp.readyState === 4) {

        if (xmlhttp.status == 200) {

          var blob = new Blob([xmlhttp.response], {
            type: 'application/vnd.ms-excel'
          }),
              fileName = '样品模板.xls';
          downFile(blob, fileName);
        } else {
          g_msgAlert('与服务器链接失败');
        }
      }
    }
  }

  function downFile(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, fileName);
    } else {

      trigger_to_down.href = window.URL.createObjectURL(blob);
      trigger_to_down.download = fileName;
      trigger_to_down.click();
      window.URL.revokeObjectURL(trigger_to_down.href);
    }
  }
}

// 获取供应商输入提示
function getCompanyInputHelp() {

  if (!$('#inputAttribute_21').length) {
    return;
  }

  var companys = [];
  var resultBox = $('#inputHelp_21');
  var oldTips = resultBox.html();

  $('#inputAttribute_21').on('input', function () {

    var key = this.value.trim();

    var list_options = {
      url: '/api/contact/company',
      type: 'GET',
      data: {
        companyId: COMPANYID,
        pageNo: 1,
        pageSize: 50,
        key: key,
        nature: 1,
        searchType: 1
      }
    };

    var list_cb = g_return200CbObj(function (data) {

      var htmls = '';

      data.contactCompanys.forEach(function (item) {

        htmls += '<div class="input_help_tag">' + item.name + '</div>';
      });

      resultBox.html(htmls);
    });

    if (!key) {

      resultBox.html(oldTips);
      return;
    }

    sendAjax(list_options, list_cb);
  });

  //载入快速新增供应商插件

  supplierAddInit();
}

//上传附件
function uploadExecl(companyId) {

  var _inputFile = $('#haihua_inputFile');

  var fileName = '';

  var input_opts = {
    url: '/api/upload/attachment',
    formData: {}
  };

  var input_cb = {};

  input_cb.success = function (data) {

    var code = Number(data.code);

    if (code === 200) {

      //上传附件id attachmentId
      var _haihua_inputFile_name = $('#haihua_inputFile_name');

      _haihua_inputFile_name.val(fileName);

      _haihua_inputFile_name.attr('data-sampleDocId', data.attachmentId);
    } else {

      responseNo(code, data.message);
    }
  };

  //监听改变，上传附件
  _inputFile.on('change', function () {

    if (this.files.length === 0) {
      return;
    }

    fileName = this.files[0].name;

    input_opts.formData = new FormData($('#haihua_inputExcel')[0]);
    input_opts.formData.append('bizType', 15);
    input_opts.formData.append('bizId', 1);

    sendFileAjax(input_opts, input_cb);
  });
}

// 颜色处理
//todo 1 为COMPANY变量
initColorEvent(1);
//
//颜色处理
function initColorEvent(company_id) {

  Handlebars.registerHelper('isColorValue', function (value, options) {
    if (value && value.length < 20) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  var colorMakerStaticState = new ColorMakerStaticState(company_id);

  var panle = $('#panel_color_box');
  var btn = $('#color_manager_btn_new');
  var tpl = Handlebars.compile($('#panel_color_tpl').html());

  $('#panelColor').on('click', function () {
    $('.nav_tab').removeClass('active');
    $(this).addClass('active');

    $('.panel').hide();
    panle.show();
  });

  // add
  btn.on('click', function () {

    colorMakerStaticState.open({
      company_id: company_id,
      name: '',
      mark: '',
      remark: ''
    }, function (color) {

      btn.before(tpl(color));
    });
  });

  // edit
  panle.on('click', '.btn-primary', function () {
    var color = $(this).parents('.sample-color-item');

    colorMakerStaticState.open({
      id: color.attr('data-id'),
      name: color.attr('data-name'),
      mark: color.attr('data-mark'),
      remark: color.attr('data-remark'),
      pic: color.attr('data-pic')
    }, function (colorData) {
      color.before(tpl(colorData));
      color.remove();
    });
  });

  // remove
  panle.on('click', '.btn-danger', function () {

    var color = $(this).parents('.sample-color-item');

    color.remove();
  });
}

//获取是否启用单位
accountingUnit();

function accountingUnit(G_id_company) {

  isEnableAccountingUnitPublic(function (isEnable) {

    if (Number(isEnable.multiUnit) && Number(isEnable.sellInventoryReduce)) {

      isEnablingMeasurementUnits = isEnable.multiUnit;
      isEnablingInventoryDeduction = isEnable.sellInventoryReduce;

      $('#add_nuit_btn_group').show();

      // 计量单位处理

      initUnitEvent(COMPANYID);
    }
  });
}

//计量单位处理 
function initUnitEvent(company_id) {

  var unitMaker = new UnitMaker(company_id, 1); // 区分新增  还是 编辑 1新增 0编辑

  var btn = $('#add_nuit_btn');

  // open init
  btn.on('click', 'b', function () {

    var _this = $(this).parents('#add_nuit_btn');

    unitMaker.open({
      htmlThis: _this
    }, function (color) {});
  });
}

//新增供应商初始化
function supplierAddInit() {

  //添加样品
  function addCb(data) {

    $('#inputAttribute_21').parents('.need-help-list').prepend('<span class="bgj-tag tag-valuetype-1" style="padding-right: 30px;"  name="' + data + '"> <span contenteditable="true">' + data + '</span><b>x</b></span>');
  }

  addSupplier({
    addCb: addCb
  });
}