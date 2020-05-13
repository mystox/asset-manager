'use strict';

/*@flow*/

(function ($) {
			/**
    * [pageInit 分页初始化 废除手写HTML代码]
    * @param  {[object]} options [配置参数]
    * @return {[functiong]}      [更新样式]
    */
			$.fn.pageInit = function (options) {

						var _this = $(this);

						var stamp = Date.now();

						var id_total_record = 'total_record_' + stamp;
						var id_total_page = 'total_page_' + stamp;
						var id_now_page = 'page_now_' + stamp;
						var id_pre = 'pre_' + stamp;
						var id_next = 'next_' + stamp;
						var id_input = 'input_' + stamp;
						var id_input_btn = 'btn_' + stamp;

						var css_page_num = 'css_page_num' + stamp;

						var cache_total_record = 0;
						var cache_total_page = 0;
						var cache_current_page = 0;

						var page_html = ['<div class="pagination_container">', '<ul class="pagination">', '<li class="hidden-xs"><span><span data-locale="Thereare">共找到</span><span id="' + id_total_record + '"></span><span data-locale="items">条信息</span>，<span data-locale="page">当前</span><span id="' + id_now_page + '"></span>/<span id="' + id_total_page + '"></span><span data-locale="no">页</span></li>', '<li>', '<a class="page_pre" id="' + id_pre + '">', '<div class="left_icon"></div>', '</a>', '</li>', '<li><a class="page_nums ' + css_page_num + ' active" data-value="1">1</a></li>', '<li><a class="page_nums ' + css_page_num + '"  data-value="2">2</a></li>', '<li><a class="page_nums ' + css_page_num + '"  data-value="3">3</a></li>', '<li><a class="page_nums ' + css_page_num + '"  data-value="4">4</a></li>', '<li><a class="page_nums ' + css_page_num + '"  data-value="5">5</a></li>', '<li>', '<a class="page_next" id="' + id_next + '">', '<div class="right_icon"></div>', '</a>', '</li>', '<li class="hidden-xs"><span data-locale="go">跳转到</span></li>', '<li class="hidden-xs"><span class="input"><input id="' + id_input + '"></span></li>', '<li class="hidden-xs"><span data-locale="page">页</span></li>', '<li class="hidden-xs"><a id="' + id_input_btn + '">GO</a></li>', '</ul>', '</div>'].join('');

						_this.html(page_html);

						var dom_input = $('#' + id_input);
						var dom_now_page = $('#' + id_now_page);
						var dom_total_page = $('#' + id_total_page);
						var dom_total_record = $('#' + id_total_record);
						var dom_pages = $('.' + css_page_num);
						var dom_pre = $('#' + id_pre);
						var dom_next = $('#' + id_next);

						/*开始绑定功能*/

						//上一页
						dom_pre.on('click', function () {

									if (cache_current_page <= 1) {
												cache_current_page = 1;
												return;
									}

									cache_current_page = cache_current_page - 1;

									options.callback(cache_current_page);
						});

						//下一页
						dom_next.on('click', function () {

									if (cache_current_page >= cache_total_page) {
												cache_current_page = cache_total_page;
												return;
									}

									cache_current_page = cache_current_page + 1;

									options.callback(cache_current_page);
						});

						//点击第几页
						dom_pages.on('click', function () {

									var _num = Number($(this).attr('data-value'));

									if (cache_current_page === _num) {

												return;
									}

									cache_current_page = _num;

									options.callback(cache_current_page);
						});

						//点击GO去第几页 
						$('#' + id_input_btn).on('click', function () {

									var _num = Number(dom_input.val());

									if (_num === 0 || isNaN(_num) || _num > cache_total_page) {

												dom_input.val('');

												g_msgAlert('请正确输入需要跳转的页数！');

												return;
									}

									cache_current_page = _num;

									options.callback(cache_current_page);
						});

						//输入完毕后 触发Go
						dom_input.on('keyup', function (e) {

									if (Number(e.keyCode) === 13) {
												$('#' + id_input_btn).trigger('click');
									}
						});

						//声明一个函数 用来控制分页样式的显示 并返回它
						/**
       * @param  {[Number]} page_index   [当前第几页]
       * @param  {[Number]} page_total   [总共有几页]
       * @param  {[Number]} record_total [总共有多少条]
       */
						return function (page_index, page_total, record_total) {

									cache_current_page = Number(page_index);
									cache_total_page = Number(page_total);
									cache_total_record = Number(record_total);

									dom_now_page.text(cache_current_page);
									dom_total_page.text(cache_total_page);
									dom_total_record.text(cache_total_record);

									dom_pre.removeClass('disabled').prop('disabled', false);
									dom_next.removeClass('disabled').prop('disabled', false);
									dom_pages.hide().removeClass('active');

									dom_pages.each(function (i) {
												//i 是从 0 开始的 五个numset 对应 0 1 2 3 4

												var _this = $(this);
												var page_num = 0;
												var tmp_num = 0;

												//显示1 2 3 4 5的情况 
												if (cache_total_page <= 5 || cache_current_page <= 2) {

															//满足条件才显示
															if (i < cache_total_page) {

																		_this.show().text(i + 1).attr('data-value', i + 1);

																		if (i + 1 === cache_current_page) {
																					_this.addClass('active');
																		}
															}
												} else {

															// 正常显示为 1 active 1 1 1;
															// 特殊情况   1 1 1 1 a / 1 1 1 a 1 / 1 1 a 1 1

															//那肯定5个先全部显示
															_this.show();

															//特殊情况 存值
															tmp_num = cache_total_page - cache_current_page;

															//特殊情况
															if (tmp_num < 3) {

																		page_num = cache_total_page - 5 + i + 1;

																		//正常情况
															} else {

																		page_num = i + cache_current_page - 1;
															}

															_this.text(page_num).attr('data-value', page_num);

															//判断选中
															if (page_num === cache_current_page) {
																		_this.addClass('active');
															}
												}
									});

									//如果没有内容隐藏 分页  不在开头设置默认显示 怕显示又隐藏 闪一下
									if (cache_total_record === 0) {
												_this.find('.pagination_container').hide();
									} else {
												_this.find('.pagination_container').show();
									}
									//如果在第一页禁用 pre
									if (cache_current_page === 1) {
												dom_pre.addClass('disabled').prop('disabled', true);
									};

									//如果在最后一页 禁用next
									if (cache_current_page === cache_total_page) {
												dom_next.addClass('disabled').prop('disabled', true);
									}
						};
			};
})(jQuery);