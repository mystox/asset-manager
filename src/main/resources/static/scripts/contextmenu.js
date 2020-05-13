"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
!function (e) {
    function n(n, l, c, r) {
        var a = s[n];
        d = e("#" + a.id).find("ul:first").clone(!0), d.css(a.menuStyle).find("li").css(a.itemStyle).hover(function () {
            e(this).css(a.itemHoverStyle)
        }, function () {
            e(this).css(a.itemStyle)
        }).find("img").css({
            verticalAlign: "middle",
            paddingRight: "2px"
        }), t.html(d), a.onShowMenu && (t = a.onShowMenu(c, t)), e.each(a.bindings, function (n, i) {
            e("#" + n, t).bind("click", function (e) {
                o(), i(l, u)
            })
        }), t.css({left: c[a.eventPosX], top: c[a.eventPosY]}).show(), a.shadow && i.css({
            width: t.width(),
            height: t.height(),
            left: c.pageX + 2,
            top: c.pageY + 2
        }).show(), e(document).one("click", o)
    }

    function o() {
        t.hide(), i.hide()
    }

    var t, i, d, s, u, l = {
        menuStyle: {
            listStyle: "none",
            padding: "1px",
            margin: "0px",
            backgroundColor: "#fff",
            border: "1px solid #999",
            width: "100px"
        },
        itemStyle: {
            margin: "0px",
            color: "#000",
            display: "block",
            cursor: "default",
            padding: "3px",
            border: "1px solid #fff",
            backgroundColor: "transparent"
        },
        itemHoverStyle: {border: "1px solid #0a246a", backgroundColor: "#b6bdd2"},
        eventPosX: "pageX",
        eventPosY: "pageY",
        shadow: !0,
        onContextMenu: null,
        onShowMenu: null
    };
    e.fn.contextMenu = function (o, d) {
        t || (t = e('<div id="jqContextMenu"></div>').hide().css({
            position: "absolute",
            zIndex: "500"
        }).appendTo("body").bind("click", function (e) {
            e.stopPropagation()
        })), i || (i = e("<div></div>").css({
            backgroundColor: "#000",
            position: "absolute",
            opacity: .2,
            zIndex: 499
        }).appendTo("body").hide()), s = s || [], s.push({
            id: o,
            menuStyle: e.extend({}, l.menuStyle, d.menuStyle || {}),
            itemStyle: e.extend({}, l.itemStyle, d.itemStyle || {}),
            itemHoverStyle: e.extend({}, l.itemHoverStyle, d.itemHoverStyle || {}),
            bindings: d.bindings || {},
            shadow: d.shadow || d.shadow === !1 ? d.shadow : l.shadow,
            onContextMenu: d.onContextMenu || l.onContextMenu,
            onShowMenu: d.onShowMenu || l.onShowMenu,
            eventPosX: d.eventPosX || l.eventPosX,
            eventPosY: d.eventPosY || l.eventPosY
        });
        var u = s.length - 1;
        return e(this).bind("contextmenu", function (e) {
            var o = !s[u].onContextMenu || s[u].onContextMenu(e);
            return o && n(u, this, e, d), !1
        }), this
    }, e.contextMenu = {
        defaults: function (n) {
            e.each(n, function (n, o) {
                "object" == ("undefined" == typeof o ? "undefined" : _typeof(o)) && l[n] ? e.extend(l[n], o) : l[n] = o
            })
        }
    }
}(jQuery), $(function () {
    $("div.contextMenu").hide()
});