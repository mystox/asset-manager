'use strict';

/**
 * @author makebanana
 * @version 1.0
 * @github: https://github.com/makebanana/center-the-picture
 * @email: 530547479@qq.com
 */
var centerImg = function () {
	/**
  * [support_css3 判断某个CSS3属性是否被支持]
  * @return {string} [可用的css3属性名称]
  */
	var support_css3 = function () {
		var div = document.createElement('div'),
		    vendors = 'Ms O Moz Webkit'.split(' '),
		    len = vendors.length;

		return function (prop) {
			if (prop in div.style) {
				return prop;
			}

			prop = prop.replace(/^[a-z]/, function (val) {
				return val.toUpperCase();
			});

			while (len--) {
				if (vendors[len] + prop in div.style) {
					return vendors[len] + prop;
				}
			}
			return false;
		};
	}();

	var s_transform = support_css3('transform');
	var s_transition = support_css3('transition');

	/**
  * [getImgNaturalDimensions 获取图片真实尺寸]
  * @param  {DOM}   img      [图片对象]
  * @param  {Function} callback [获取尺寸之后的处理]
  */
	var getImgNaturalDimensions = function getImgNaturalDimensions(img, callback) {

		if (img.naturalWidth !== undefined && img.naturalWidth > 0) {

			callback(img.naturalWidth, img.naturalHeight);
		} else {

			var image = new Image();
			image.src = img.src;
			image.onload = function () {
				callback(image.width, image.height);
			};
		}
	};

	/**
  * [setCss 简单设置行内样式]
  * @param {dom} dom    [description]
  * @param {object} cssObj [是以对象的形式，通过键值对设置]
  * @return {dom}           [返回dom元素对象]
  */
	var setCss = function setCss(dom, cssObj, isCss3) {

		if (!dom) {
			return;
		}

		for (var x in cssObj) {

			if (cssObj.hasOwnProperty(x)) {

				dom.style[x] = cssObj[x];
			}
		}

		return dom;
	};

	/**
  * [getCss 获取元素真实CSS值]
  * @return {function}           [返回一个该浏览器版本下可用的获取样式值函数]
  */
	var getCss = function () {

		if (window.getComputedStyle) {

			return function (dom, styleName) {
				return window.getComputedStyle(dom, '').getPropertyValue(styleName);
			};
		} else {

			return function (dom, styleName) {

				if (styleName.indexOf('-') > -1) {
					styleName = styleName.replace(/\-(\w)/g, function (all, letter) {
						return letter.toUpperCase();
					});
				}

				return dom.currentStyle[styleName];
			};
		}
	}();
	/**
  * [最终暴露函数]
  * @param  {dom} imgBox         [这个包裹这img元素的父亲元素]
  * @param  {number} cssDuration [css3过度动画执行时间]
  * @return {[type]}             [nothing need to return]
  */
	return function (imgBox, cssDuration) {

		var _img = imgBox.getElementsByTagName('img')[0];

		if (cssDuration === undefined) {
			cssDuration = 1;
		}

		if (getCss(imgBox, 'overflow') !== 'hidden') {
			imgBox.style.overflow = 'hidden';
		}

		var _boxW = parseInt(getCss(imgBox, 'width'));
		var _boxH = parseInt(getCss(imgBox, 'height'));
		var _ratio = Math.floor(_boxW / _boxH * 10000) / 10000;

		getImgNaturalDimensions(_img, function (a, b) {

			var _imgRatio = Math.floor(a / b * 10000) / 10000;

			var _reW, _reH, cssObj;

			if (_imgRatio > _ratio) {

				_reW = Math.floor(_boxH / b * a);

				cssObj = {
					'height': '100%',
					'width': 'auto'
				};

				if (s_transform && s_transition) {

					cssObj['' + s_transform] = 'translateX(' + (_boxW - _reW) / 2 + 'px' + ')';

					cssObj['' + s_transition] = s_transform + ' ' + cssDuration + 's';
				} else {

					cssObj.marginLeft = (_boxW - _reW) / 2 + 'px';
				}

				setCss(_img, cssObj);

				cssObj = null;

				return;
			}

			if (_imgRatio < _ratio) {

				_reH = Math.floor(_boxW / a * b);

				cssObj = {
					'height': 'auto',
					'width': '100%'
				};

				if (s_transform && s_transition) {

					cssObj['' + s_transform] = 'translateY(' + (_boxH - _reH) / 2 + 'px' + ')';

					cssObj['' + s_transition] = s_transform + ' ' + cssDuration + 's';
				} else {

					cssObj.marginTop = (_boxH - _reH) / 2 + 'px';
				}

				setCss(_img, cssObj);

				cssObj = null;

				return;
			}
		});
	};
}();