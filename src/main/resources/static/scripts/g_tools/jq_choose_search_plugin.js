'use strict';

/*
    适用于 复合型输入框。

    */
;
(function ($) {
  $.fn.initChooseSearch = function (options) {

    var _company_id = $.cookie('company_id');

    var _body = $('body');

    //代理按钮
    var _this = $(this); //.choose-search-plugin

    //默认参数
    var _defaults = {

      listUrl: '', //获取指定list的url

      listBox: '',

      type: 'GET', //默认get

      Length: 20, //默认结果长度

      addAll: 0, //是否添加全部选择项

      addAllText: '全部', //全部选择项的文案

      fastCreateModel: 0, //弹框类型的快速新增

      fastCreate: 1, //是否添加快速新增

      fastCreateType: 0, //快速新增的类型  1是弹框新增  0是跳转新增

      fastCreateName: '', //类别

      fastCreateText: '', //是否添加快速新增文案

      dataAssignment: [], //获取结果后的字段 例如 例如  字段名contactCompanys 客户creatorName 客户id id

      moreData: {}, //搜索的字段名称 搜索类型 { companyId: $.cookie('company_id')}

      before: function before() {}, //请求之前执行的数据不关联的函数

      complete: function complete() {}, //请求之后执行的数据不关联的函数，不管有没有成功

      callback: function callback(response) {//请求成功后的回调

      },
      fastcallback: function fastcallback(response) {//请求成功后的回调

      }
    };

    //注入默认值
    var _sets = $.extend(_defaults, options || {});

    //判断是否添加了dataAssignment
    if (!_sets.dataAssignment.length && !_sets.moreData.type) {

      console.warn('添加必要参数！');

      return;
    }

    Number(_sets.fastCreateModel) && Number(_sets.fastCreateType) && supplierNewAdd();

    // 缓存最初数据  搜索
    var DEFAULTLINKMANDATA = '';

    // 缓存第一次点击载入的数据html
    var FIRSTDATA = '';

    // 缓存每次请求的结果数据
    var RESULTDATA = '';
    //滚动分页
    var save_search_result = [];
    var g_pageNo_1 = 1; //当前页
    var g_pageNo_2 = 1;
    var g_pageNo_3 = 1;
    var g_pageNo_4 = 1;
    var g_pageNo_5 = 1;
    var g_pageNo_6 = 1;
    var g_pageNo_7 = 1;

    var g_pageCount_1 = 1; //总页数
    var g_pageCount_2 = 1;
    var g_pageCount_3 = 1;
    var g_pageCount_4 = 1;
    var g_pageCount_5 = 1;
    var g_pageCount_6 = 1;
    var g_pageCount_7 = 1;
    var _click_inner_this = '';

    //显示
    _body.on('click', _sets.listBox + ' .choose-and-search-inner', function (event) {
      _click_inner_this = '';
      save_search_result = [];
      //order 判断
      if (_sets.customerOrder && !$('.customer-val').val()) {

        g_msgAlert('请先选择客户，如果该客户下没有销售订单，请新建销售订单');

        return;
      } else {
        _sets.moreData.customerId = $('.customer-val').val();
      }
      _click_inner_this = $(this);
      var _click_this_pr = _click_inner_this.parents('.choose-and-search-g'),
          _list_ul = _click_this_pr.find('.list_ul'); //结果列表


      if (_list_ul[0].id == 'list_ul1') {
        selectClick(1);
      } else if (_list_ul[0].id == 'list_ul2') {
        selectClick(2);
      } else if (_list_ul[0].id == 'list_ul3') {
        selectClick(3);
      } else if (_list_ul[0].id == 'list_ul4') {
        selectClick(4);
      } else if (_list_ul[0].id == 'list_ul5') {
        selectClick(5);
      } else if (_list_ul[0].id == 'list_ul6') {
        selectClick(6);
      } else if (_list_ul[0].id == 'list_ul7') {
        selectClick(7);
      }
    });

    //点击结果

    _body.on('click', _sets.listBox + ' .list_ul li[value]', function (event) {

      var _click_this = $(this),
          _click_this_pr = _click_this.parents('.choose-and-search-g'),
          _click_box = _click_this_pr.find('.choose-and-search-inner'),
          //初始选择click区域
      _click_box_result = _click_this_pr.find('#click_box_result'),
          //结果区域
      _result_val = _click_this_pr.find('#result_val'); //选中的结果


      if (Number(this.value) === Number(_result_val.val())) {

        _click_box.text(_click_this.attr('data-name'));

        _click_box_result.css('display', 'none');

        return;
      }

      //赋值

      _click_box.text(_click_this.attr('data-name'));

      _result_val.val(_click_this.attr('value'));

      _click_box_result.css('display', 'none');

      // console.log(save_search_result)

      _sets.callback && _sets.callback(_click_this, save_search_result[_click_this.attr('data-index')]);
    });

    //下拉搜索框
    function selectClick(type, concatType) {
      // console.log('开始搜索')
      var g_pageNo = 1;
      if (type == 1) {
        g_pageNo = g_pageNo_1;
      } else if (type == 2) {
        g_pageNo = g_pageNo_2;
      } else if (type == 3) {
        g_pageNo = g_pageNo_3;
      } else if (type == 4) {
        g_pageNo = g_pageNo_4;
      } else if (type == 5) {
        g_pageNo = g_pageNo_5;
      } else if (type == 6) {
        g_pageNo = g_pageNo_6;
      } else if (type == 7) {
        g_pageNo = g_pageNo_7;
      }

      var list_options = '',
          _click_this_pr = _click_inner_this.parents('.choose-and-search-g'),
          _click_box_result = _click_this_pr.find('#click_box_result'),
          //结果区域
      _list_ul = _click_this_pr.find('.list_ul'),
          //结果列表
      _search_input = _click_this_pr.find('#search_input'); //选中的结果
      // console.log(_list_ul)
      if (!_sets.noData) {

        list_options = {
          url: _sets.listUrl,
          type: _sets.type,
          data: {
            companyId: _company_id,
            pageNo: Number(concatType) ? g_pageNo : 1,
            pageSize: _sets.Length
            // pageSize: 20
          }
        };
      } else {

        list_options = {
          url: _sets.listUrl,
          type: _sets.type
        };
      }

      //没有分页的接口
      if (_sets.noPage) {

        list_options = {
          url: _sets.listUrl,
          type: _sets.type,
          data: {
            companyId: _company_id
          }
        };

        _sets.hasKey && (list_options.key = _search_input);
      }

      if (_defaults.fastCreateName == '客户' || _defaults.fastCreateName == '仓库' || _defaults.fastCreateName == '有细码仓库' || _defaults.fastCreateName == '无细码仓库') {
        // list_options.data.key = key
      } else if (_defaults.fastCreateName == '业务员') {
        // list_options.data.searchInfo = key
      } else if (_defaults.fastCreateName == '工序模版') {
        // list_options.data.templateName = key
      } else if (_defaults.fastCreateName == '出库单') {
        // list_options.data.storeOutNo = key
        list_options.data.type = 3;
        list_options.data.pageSize = 20;
      } else if (_defaults.fastCreateName == '销售订单') {
        // list_options.data.orderNo = key
        list_options.data.searchType = 0;
        list_options.data.pageSize = 20;
      }

      var _newdata = $.extend(list_options.data, _sets.moreData || {});

      //加入额外搜索条件 需要重置搜索结果； _sets.ResetData=1;
      if (_sets.screeningConditions) {

        for (var key in _sets.screeningConditions) {

          var _d_val = _sets.screeningConditions[key];

          _newdata[key] = $('' + _d_val).val();
        }
      }

      list_options.data = _newdata ? _newdata : '';

      //调用ajax
      var list_callback = g_return200CbObj(function (data) {
        // console.log(data)
        var html = '';
        if (type == 1) {
          g_pageNo_1 = data.pageNo;
          g_pageCount_1 = data.pageCount;
        } else if (type == 2) {
          g_pageNo_2 = data.pageNo;
          g_pageCount_2 = data.pageCount;
        } else if (type == 3) {
          g_pageNo_3 = data.pageNo;
          g_pageCount_3 = data.pageCount;
        } else if (type == 4) {
          g_pageNo_4 = data.pageNo;
          g_pageCount_4 = data.pageCount;
        } else if (type == 5) {
          g_pageNo_5 = data.pageNo;
          g_pageCount_5 = data.pageCount;
        } else if (type == 6) {
          g_pageNo_6 = data.pageNo;
          g_pageCount_6 = data.pageCount;
        } else if (type == 7) {
          g_pageNo_7 = data.pageNo;
          g_pageCount_7 = data.pageCount;
        }
        // g_pageNo = data.pageNo;
        // g_pageCount = data.pageCount;

        if (getHtmlDocName() == 'distribution_list') {
          if (_defaults.fastCreateName == '客户') {
            html = '<li value="" data-name="全部客户" title="全部客户">全部客户</li>';
          } else if (_defaults.fastCreateName == '业务员') {
            html = '<li value="" data-name="全部业务员" title="全部业务员">全部业务员</li>';
          } else if (_defaults.fastCreateName == '仓库') {
            html = '<li value="" data-name="全部仓库" title="全部仓库">全部仓库</li>';
          }
        }
        // console.log(data)
        // console.log(_sets.dataAssignment[0])

        data['' + _sets.dataAssignment[0]].forEach(function (item, index) {
          save_search_result.push(item);

          // if (_defaults.fastCreateName == '有细码仓库') {
          //   if (item.packingListType == 1) {
          //     html += `<li value="${item[_sets.dataAssignment[2]]}" data-index="${index}"  data-name="${item[_sets.dataAssignment[1]]}" title="${item[_sets.dataAssignment[1]]}" >${item[_sets.dataAssignment[1]]}</li>`;
          //   }
          // } else if (_defaults.fastCreateName == '无细码仓库') {
          //   if (item.packingListType == 0) {
          //     html += `<li value="${item[_sets.dataAssignment[2]]}" data-index="${index}"  data-name="${item[_sets.dataAssignment[1]]}" title="${item[_sets.dataAssignment[1]]}" >${item[_sets.dataAssignment[1]]}</li>`;
          //   }
          // } else if (_defaults.fastCreateName == '显示简称加工商') {
          //   if (item.hasOwnProperty('shortName')) {
          //     if (item.shortName != '') {
          //       item['name'] = item.shortName
          //     }
          //   }
          //   html += `<li value="${item[_sets.dataAssignment[2]]}" data-index="${index}"  data-name="${item[_sets.dataAssignment[1]]}" title="${item[_sets.dataAssignment[1]]}" >${item[_sets.dataAssignment[1]]}</li>`;

          // } else {
          //   html += `<li value="${item[_sets.dataAssignment[2]]}" data-index="${index}"  data-name="${item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item}" title="${item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item}" >${item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item}</li>`;

          // }
        });
        // console.log(save_search_result)
        save_search_result.forEach(function (item, index) {

          if (_defaults.fastCreateName == '有细码仓库') {
            if (item.packingListType == 1) {
              html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
            }
          } else if (_defaults.fastCreateName == '无细码仓库') {
            if (item.packingListType == 0) {
              html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
            }
          } else if (_defaults.fastCreateName == '显示简称加工商') {
            if (item.hasOwnProperty('shortName')) {
              if (item.shortName != '') {
                item['name'] = item.shortName;
              }
            }
            html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
          } else {
            html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '" title="' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '" >' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '</li>';
          }
        });

        if (data['' + _sets.dataAssignment[0]].length === 0 && save_search_result.length == 0) {

          html = '<li id="search_no_result_lm">没有任何相关信息</li>';

          FIRSTDATA = html;
        } else {

          RESULTDATA = data['' + _sets.dataAssignment[0]];

          FIRSTDATA = html;
        }

        if (_sets.fastCreate) {

          html += '<li style="color: rgb(32, 160, 255);" class="fast-plugin-add">+\u5FEB\u901F\u65B0\u5EFA' + _sets.fastCreateText + '</li>';

          FIRSTDATA += '<li style="color: rgb(32, 160, 255);" class="fast-plugin-add">+\u5FEB\u901F\u65B0\u5EFA' + _sets.fastCreateText + '</li>';
        }

        if (_sets.fastCreateModel) {

          html += '<li style="color: rgb(32, 160, 255);" class="add-supplier-modal" data-toggle="modal" data-target="#add_supplier_modal">+快速新建</li>';

          FIRSTDATA += '<li style="color: rgb(32, 160, 255);"  class="add-supplier-modal"  data-toggle="modal" data-target="#add_supplier_modal">+快速新建</li>';
        }

        _sets.addAll && (FIRSTDATA = '<li value="" data-name="' + _sets.addAllText + '" title="' + _sets.addAllText + '">' + _sets.addAllText + '</li>' + '' + FIRSTDATA);

        _list_ul.html(html);

        _sets.addAll && _list_ul.prepend('<li value="" data-name="' + _sets.addAllText + '" title="' + _sets.addAllText + '">' + _sets.addAllText + '</li>');

        // _click_box_result.css('display', 'block');
      });

      //是否显示列表
      // $(`${_sets.listBox}`).find('.choose-and-search-result').css('display', 'none');

      //有些需要重新加载如数
      _sets.ResetData && (FIRSTDATA = '');
      _search_input.val('');
      // console.log(_click_box_result)
      _click_box_result.css('display', 'block');
      // FIRSTDATA ? (_list_ul.html(FIRSTDATA), _click_box_result.css('display', 'block'), _search_input.val('')) : sendAjax(list_options, list_callback);
      sendAjax(list_options, list_callback);
    }

    //滚动判断

    document.addEventListener('scroll', function (event) {
      // console.log(event)
      //同一个页面说不定会有多个下拉框，之前是id重复会获取不到滚动的高度，换成类名也不行···
      //所以把上面的换成类名获取，下面的用id的1,2,3,4,5来更替,氧化钙,儒雅随和
      // var scrollTop = '';
      // var scrollHeight = '';
      // var windowHeight = '';
      if (event.target.id === 'list_ul1') {
        var _this2 = $('#list_ul1');
        //  $('#list_ul2').empty()
        //  $('#list_ul3').empty()
        var scrollTop = Math.round(_this2.scrollTop());
        var scrollHeight = _this2[0].scrollHeight;
        var windowHeight = _this2.height();
        //  console.log(scrollTop)
        //滚动到底触发接口
        if (Number(scrollTop) != 0) {
          if (scrollTop + windowHeight == scrollHeight) {
            if (Number(g_pageCount_1) > Number(g_pageNo_1)) {
              // console.log('滚动到底')
              g_pageNo_1 += 1;

              selectClick(1, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul2') {
        var _this3 = $('#list_ul2');
        var _scrollTop = Math.round(_this3.scrollTop());
        var _scrollHeight = _this3[0].scrollHeight;
        var _windowHeight = _this3.height();
        //滚动到底触发接口
        if (Number(_scrollTop) != 0) {
          if (_scrollTop + _windowHeight == _scrollHeight) {
            if (Number(g_pageCount_2) > Number(g_pageNo_2)) {
              // console.log('滚动到底')
              g_pageNo_2 += 1;

              selectClick(2, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul3') {
        var _this4 = $('#list_ul3');
        var _scrollTop2 = Math.round(_this4.scrollTop());
        var _scrollHeight2 = _this4[0].scrollHeight;
        var _windowHeight2 = _this4.height();
        //滚动到底触发接口
        if (Number(_scrollTop2) != 0) {
          if (_scrollTop2 + _windowHeight2 == _scrollHeight2) {
            if (Number(g_pageCount_3) > Number(g_pageNo_3)) {
              // console.log('滚动到底')
              g_pageNo_3 += 1;

              selectClick(3, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul4') {
        var _this5 = $('#list_ul4');
        var _scrollTop3 = Math.round(_this5.scrollTop());
        var _scrollHeight3 = _this5[0].scrollHeight;
        var _windowHeight3 = _this5.height();
        //滚动到底触发接口
        if (Number(_scrollTop3) != 0) {
          if (_scrollTop3 + _windowHeight3 == _scrollHeight3) {
            if (Number(g_pageCount_4) > Number(g_pageNo_4)) {
              // console.log('滚动到底')
              g_pageNo_4 += 1;

              selectClick(4, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul5') {
        var _this6 = $('#list_ul5');
        var _scrollTop4 = Math.round(_this6.scrollTop());
        var _scrollHeight4 = _this6[0].scrollHeight;
        var _windowHeight4 = _this6.height();
        //滚动到底触发接口
        if (Number(_scrollTop4) != 0) {
          if (_scrollTop4 + _windowHeight4 == _scrollHeight4) {
            if (Number(g_pageCount_5) > Number(g_pageNo_5)) {
              // console.log('滚动到底')
              g_pageNo_5 += 1;

              selectClick(5, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul6') {
        var _this7 = $('#list_ul6');
        var _scrollTop5 = Math.round(_this7.scrollTop());
        var _scrollHeight5 = _this7[0].scrollHeight;
        var _windowHeight5 = _this7.height();
        //滚动到底触发接口
        if (Number(_scrollTop5) != 0) {
          if (_scrollTop5 + _windowHeight5 == _scrollHeight5) {
            if (Number(g_pageCount_6) > Number(g_pageNo_6)) {
              // console.log('滚动到底')
              g_pageNo_6 += 1;

              selectClick(6, 1);
            }
          }
        }
      } else if (event.target.id === 'list_ul7') {
        var _this8 = $('#list_ul7');
        var _scrollTop6 = Math.round(_this8.scrollTop());
        var _scrollHeight6 = _this8[0].scrollHeight;
        var _windowHeight6 = _this8.height();
        //滚动到底触发接口
        if (Number(_scrollTop6) != 0) {
          if (_scrollTop6 + _windowHeight6 == _scrollHeight6) {
            if (Number(g_pageCount_7) > Number(g_pageNo_7)) {
              // console.log('滚动到底')
              g_pageNo_7 += 1;

              selectClick(7, 1);
            }
          }
        }
      }
    }, true);

    //关闭搜索结果
    _body.click(function (e) {

      if (!$(e.target).closest('' + _sets.listBox).length) {

        $('' + _sets.listBox).find('#list_ul1').length && (document.getElementById('list_ul1').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul2').length && (document.getElementById('list_ul2').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul3').length && (document.getElementById('list_ul3').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul4').length && (document.getElementById('list_ul4').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul5').length && (document.getElementById('list_ul5').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul6').length && (document.getElementById('list_ul6').scrollTop = 0);
        $('' + _sets.listBox).find('#list_ul7').length && (document.getElementById('list_ul7').scrollTop = 0);

        $('' + _sets.listBox).find('.choose-and-search-result').css('display', 'none');
      }
    });

    //点击去新增

    _body.on('click', _sets.listBox + ' .fast-plugin-add', function (event) {

      if (!Number(_sets.fastCreateType)) {

        var expiresDate = new Date();

        expiresDate.setTime(expiresDate.getTime() + 5 * 60 * 1000);

        var _url = window.location.href;

        $.cookie('newly_build_return_plugin', _url, {
          expires: expiresDate,
          path: '/'
        });

        location.href = _sets.addUrl;
      }
    });

    //搜索
    _body.on('input', _sets.listBox + ' #search_input', g_throttle(function () {

      var _click_this = $(this);

      var _click_this_pr = _click_this.parents('.choose-and-search-g');

      save_search_result = [];

      var _list_ul = _click_this_pr.find('.list_ul'),
          //结果列表
      _loading_img = _click_this_pr.find('#loading_img'); //搜索结果等待图片

      var key = _click_this.val().trim();

      DEFAULTLINKMANDATA = DEFAULTLINKMANDATA ? DEFAULTLINKMANDATA : _list_ul.html();

      if (!key) {

        _list_ul.html(DEFAULTLINKMANDATA);

        return;
      }

      var list_options = {
        url: _sets.listUrl,
        type: _sets.type,
        data: {
          companyId: _company_id,
          pageNo: 1,
          pageSize: _sets.Length
        }
      };

      var _newdata = $.extend(list_options.data, _sets.moreData || {});

      //加入额外搜索条件 需要重置搜索结果； _sets.ResetData=1;
      if (_sets.screeningConditions) {

        for (var _key in _sets.screeningConditions) {

          var _d_val = _sets.screeningConditions[_key];

          _newdata[_key] = $('' + _d_val).val();
        }
      }

      list_options.data = _newdata ? _newdata : '';

      _sets.searchField && (list_options['data']['' + _sets.searchField] = key);

      var list_callback = g_return200CbObj(function (data) {

        g_pageNo_1 = 1; //当前页
        g_pageNo_2 = 1;
        g_pageNo_3 = 1;
        g_pageNo_4 = 1;
        g_pageNo_5 = 1;
        g_pageNo_6 = 1;
        g_pageNo_7 = 1;

        g_pageCount_1 = 1; //总页数
        g_pageCount_2 = 1;
        g_pageCount_3 = 1;
        g_pageCount_4 = 1;
        g_pageCount_5 = 1;
        g_pageCount_6 = 1;
        g_pageCount_7 = 1;

        var html = '';

        data['' + _sets.dataAssignment[0]].forEach(function (item, index) {

          save_search_result.push(item);
          html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '" title="' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '" >' + (item[_sets.dataAssignment[1]] ? item[_sets.dataAssignment[1]] : item) + '</li>';
        });

        if (data['' + _sets.dataAssignment[0]].length === 0) {

          html = '<li id="search_no_result_lm">没有找到相关信息</li>';
        } else {

          RESULTDATA = data['' + _sets.dataAssignment[0]];
        }

        if (_sets.fastCreate) {

          html += '<li style="color: rgb(32, 160, 255);" class="fast-plugin-add">+\u5FEB\u901F\u65B0\u5EFA' + _sets.fastCreateText + '</li>';
        }
        if (_sets.fastCreateModel) {

          html += '<li style="color: rgb(32, 160, 255);"  class="add-supplier-modal" data-toggle="modal" data-target="#add_supplier_modal">+快速新建</li>';
        }

        _list_ul.html(html);
        _sets.addAll && _list_ul.prepend('<li value="" data-name="' + _sets.addAllText + '" title="' + _sets.addAllText + '">' + _sets.addAllText + '</li>');
      });

      list_callback.beforeSend = function () {

        _loading_img.show();
      };

      list_callback.complete = function () {

        _loading_img.hide();
      };

      sendAjax(list_options, list_callback);
    }, 500));

    //自定义搜索
    _body.on('input', _sets.listBox + ' #search_linkman', g_throttle(function () {

      var _click_this = $(this);

      var _click_this_pr = _click_this.parents('.choose-and-search-g');

      save_search_result = [];

      var _list_ul = _click_this_pr.find('.list_ul'),
          //结果列表
      _loading_img = _click_this_pr.find('#loading_img'); //搜索结果等待图片

      var key = _click_this.val().trim();

      DEFAULTLINKMANDATA = DEFAULTLINKMANDATA ? DEFAULTLINKMANDATA : _list_ul.html();

      if (!key) {

        _list_ul.html(DEFAULTLINKMANDATA);

        return;
      }
      var list_options = {
        url: _sets.listUrl,
        type: _sets.type,
        data: {
          companyId: _company_id,
          pageNo: 1,
          pageSize: _sets.Length
        }
      };
      if (_defaults.fastCreateName == '客户' || _defaults.fastCreateName == '仓库' || _defaults.fastCreateName == '有细码仓库' || _defaults.fastCreateName == '无细码仓库') {
        list_options.data.key = key;
      } else if (_defaults.fastCreateName == '业务员') {
        list_options.data.searchInfo = key;
      } else if (_defaults.fastCreateName == '工序模版') {
        list_options.data.templateName = key;
      } else if (_defaults.fastCreateName == '出库单') {
        list_options.data.storeOutNo = key;
        list_options.data.type = 3;
        list_options.data.pageSize = 20;
      } else if (_defaults.fastCreateName == '销售订单') {
        list_options.data.orderNo = key;
        list_options.data.searchType = 0;
        list_options.data.pageSize = 20;
      }

      var _newdata = $.extend(list_options.data, _sets.moreData || {});

      list_options.data = _newdata ? _newdata : '';

      _sets.searchField && (list_options['data']['' + _sets.searchField] = key);

      var list_callback = g_return200CbObj(function (data) {

        g_pageNo_1 = 1; //当前页
        g_pageNo_2 = 1;
        g_pageNo_3 = 1;
        g_pageNo_4 = 1;
        g_pageNo_5 = 1;
        g_pageNo_6 = 1;
        g_pageNo_7 = 1;

        g_pageCount_1 = 1; //总页数
        g_pageCount_2 = 1;
        g_pageCount_3 = 1;
        g_pageCount_4 = 1;
        g_pageCount_5 = 1;
        g_pageCount_6 = 1;
        g_pageCount_7 = 1;

        var html = '';

        data['' + _sets.dataAssignment[0]].forEach(function (item, index) {

          if (_defaults.fastCreateName == '有细码仓库') {
            if (item.packingListType == 1) {
              save_search_result.push(item);
              html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
            }
          } else if (_defaults.fastCreateName == '无细码仓库') {
            if (item.packingListType == 0) {
              save_search_result.push(item);
              html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
            }
          } else if (_defaults.fastCreateName == '显示简称加工商') {
            if (item.hasOwnProperty('shortName')) {
              if (item.shortName != '') {
                item['name'] = item.shortName;
              }
            }
            save_search_result.push(item);
            html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
          } else {
            save_search_result.push(item);
            html += '<li value="' + item[_sets.dataAssignment[2]] + '" data-index="' + index + '"  data-name="' + item[_sets.dataAssignment[1]] + '" title="' + item[_sets.dataAssignment[1]] + '" >' + item[_sets.dataAssignment[1]] + '</li>';
          }
        });

        if (data['' + _sets.dataAssignment[0]].length === 0) {

          html = '<li id="search_no_result_lm">没有找到相关信息</li>';
        } else {

          RESULTDATA = data['' + _sets.dataAssignment[0]];
        }

        if (_sets.fastCreate) {

          html += '<li style="color: rgb(32, 160, 255);" class="fast-plugin-add">+\u5FEB\u901F\u65B0\u5EFA' + _sets.fastCreateText + '</li>';
        }

        _list_ul.html(html);

        _sets.addAll && _list_ul.prepend('<li value="" data-name="' + _sets.addAllText + '" title="' + _sets.addAllText + '">' + _sets.addAllText + '</li>');
      });

      list_callback.beforeSend = function () {

        _loading_img.show();
      };

      list_callback.complete = function () {

        _loading_img.hide();
      };

      sendAjax(list_options, list_callback);
    }, 500));

    /*================暂时只支持新增工厂  ==============*/
    function supplierNewAdd() {

      var _currency_list = [],
          _user_list = [],
          _foreignCurrency = Number(sessionStorage.getItem('foreignCurrency')),
          _model_this = '';

      //获取货币

      if (!_currency_list.length) {

        var listOpt = {
          url: '/api/companys/' + _company_id + '/currency',
          type: 'get'
        };

        var listCb = g_return200CbObj(function (data) {

          data.currencies.forEach(function (item) {

            if (Number(_foreignCurrency)) {

              _currency_list.push(item);
            } else {

              Number(item.currencyId) === 11 && _currency_list.push(item);
            }
          });
        });

        sendAjax(listOpt, listCb);
      }

      //获取员工


      if (!_user_list.length) {

        var _listOpt = {
          url: '/api/companys/' + _company_id + '/users',
          type: 'get'
        };

        var listCb = g_return200CbObj(function (data) {

          _user_list = data.companyUsers;
        });

        sendAjax(_listOpt, listCb);
      }

      var createNewAdd = function createNewAdd() {

        var div = document.createElement('div'),
            _innerHTML = '';

        _innerHTML = '<div class="modal fade modal2 bgj-modal-addsample not-last-model" tabindex="-1" role="dialog" id="add_supplier_modal">\n        <div class="modal-dialog" role="document" style="width: 450px;">\n          <div class="modal-content">\n            <div class="modal-header addsample-modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n              <h4 class="modal-title">\u5FEB\u901F\u65B0\u589E\u5DE5\u5382</h4>\n            </div>\n            <div class="modal-body-addsample" style="min-height: 120px;position: relative;margin:0;padding:0;">\n              <form id="ajax_send_addsample_form">\n              <div class="bgj_head_content_box bgj-select-replace"><tt style="width: 60px;">\u5DE5\u5382\u540D\u79F0<b style="color: red">*</b></tt>\n               <input type="text" placeholder="" name="name"  style="width: 72%;height: 30px;">\n              </div>\n              <div class="bgj_head_content_box bgj-select-replace"><tt style="width: 60px;">\u5E01\u522B<b style="color: red">*</b></tt>\n              <input type="text" id="search_status_text" style="width: 72%;" class="select-head-cont" value="" placeholder="\u9009\u62E9\u8D27\u5E01" readonly="readonly">\n              <input type="hidden" value="-1" id="currency_status" name="companyCurrencyId">\n              <ul class="option" style="display: none;width: 72%;right: 4px;max-height: 195px;overflow-y: auto;overflow-x: hidden;">\n              <li class="option-item" value="" style="text-align: left;">\u9009\u62E9\u8D27\u5E01</li>';

        _currency_list.forEach(function (item) {

          _innerHTML += '<li class="option-item" value="' + item.companyCurrencyId + '" style="text-align: left;">' + item.currencyName + '</li>';
        });

        _innerHTML += '</ul>\n      </div>\n      <div class="bgj_head_content_box bgj-select-replace"><tt style="width: 60px;">\u91C7\u8D2D\u5458<b style="color: red">*</b></tt>\n      <input type="text" id="search_status_text" style="width: 72%;" class="select-head-cont" value="" placeholder="\u9009\u62E9\u4E1A\u52A1\u5458" readonly="readonly">\n      <input type="hidden" value="-1" id="salesman_status" name="salesman" >\n      <ul class="option" style="display: none;width: 72%;right: 4px;max-height: 195px;overflow-y: auto;overflow-x: hidden;">\n        <li class="option-item" value="" style="text-align: left;">\u9009\u62E9\u4E1A\u52A1\u5458</li>';
        _user_list.forEach(function (item) {

          _innerHTML += '<li class="option-item" value="' + item.userId + '" style="text-align: left;">' + item.name + '</li>';
        });

        _innerHTML += '</ul>\n    </div>\n              </form>\n            </div>\n            <div class="modal-footer modal-footer-addsample" style="border:0;padding-left: 0;padding-right: 0; ">\n              <div>\n                <button type="button " class="btn btn-primary" id="send_add_supplier">\u4FDD\u5B58</button>\n              </div>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>';

        div.innerHTML = _innerHTML;

        document.body.appendChild(div);
        return div;
      };

      //单利模式 getSingle from main.js
      var createSingleBatchLayer = getSingle(createNewAdd);

      //绘制新增样品弹框
      _body.on('click', '.add-supplier-modal', function (event) {

        _model_this = $(this);

        createSingleBatchLayer();
      });

      //点击新增
      _body.off('click', '#send_add_supplier').on('click', '#send_add_supplier', function (event) {

        var _data_type = {},
            _ajax_send_addsample_form = $('#ajax_send_addsample_form'),
            valCanISave = true,
            _this = $(this);

        //将form表单里面设置了name值的表单元素 每个以{name：''; value:''}的形式 返回数组
        _ajax_send_addsample_form.serializeArray().forEach(function (item) {

          _data_type['' + item.name] = item.value;
        });

        for (var key in _data_type) {

          if (!_data_type[key]) {

            valCanISave = false;
          }
        }

        if (!valCanISave) {

          g_msgAlert('以下字段为必填：工厂名称、币别、采购员');

          return;
        }

        var list_options = {
          type: 'POST',
          url: '/api/contact/company',
          data: {}
        };

        list_options.data = _data_type;
        list_options.data.companyId = _company_id;
        list_options.data.nature = 1;

        //调用ajax
        var list_callback = g_return200CbObj(function (data) {

          var _data_obj = {
            name: list_options.data.name,
            id: data.contactCompanyId
          };

          _sets.fastcallback && _sets.fastcallback(_model_this, _data_obj);

          $('#add_supplier_modal').modal('hide');
        });

        list_callback.beforeSend = function () {
          _this.prop('disabled', true).text('保存中...');
        };

        list_callback.complete = function () {
          _this.prop('disabled', false).text('保存');
        };

        sendAjax(list_options, list_callback);
      });
    }
  };
})(jQuery);

/**
 * select 自定义样式
 */
function selectStyleInit(cb) {

  var _body = $('body');

  //点击打开结果
  _body.on('click', '.bgj-select-replace input[type=\'text\']', function () {

    var _this = $(this);

    _this.parents('.bgj-select-replace').find('.option').css('display', 'block');
  });

  //点击选中结果
  _body.on('click', '.bgj-select-replace>.option .option-item', function () {

    var _this = $(this);

    _this.parents('.bgj-select-replace').find('input[type=\'hidden\']').val(_this.attr('value'));

    _this.parents('.bgj-select-replace').find('input[type=\'text\']').val(_this.text().trim());

    _this.parents('.bgj-select-replace').find('.option').css('display', 'none');

    cb && cb(_this.attr('value'));
  });

  //关闭结果
  _body.click(function (e) {

    if (!$(e.target).closest('.bgj-select-replace').length) {

      _body.find('.bgj-select-replace .option').css('display', 'none');
    }
  });
}