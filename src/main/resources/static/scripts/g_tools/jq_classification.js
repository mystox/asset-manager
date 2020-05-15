'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//平行数组对象 转成tree数据  多级分类


function treeObj(originObj) {
    //对象深拷贝
    var obj = {};

    for (var key in originObj) {
        var val = originObj[key];

        obj[key] = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? arguments.callee(val) : val;
    }

    //对象新增nodes键值，用于存放子树
    obj['nodes'] = [];
    return obj;
}

//data：带转换成树形结构的对象数组
//attributes：对象属性
function toTreeData(data, attributes) {

    var resData = data;
    var tree = [];

    //找寻根节点
    for (var i = 0; i < resData.length; i++) {
        if (resData[i][attributes.parentId] === 0) {
            var obj = treeObj(resData[i]);
            obj.text = obj.name;

            obj.classLevel = 0;

            tree.push(obj);

            resData.splice(i, 1);
            i--;
        }
    }

    run(tree);

    //找寻子树
    function run(chiArr) {

        if (resData.length !== 0) {
            for (var _i = 0; _i < chiArr.length; _i++) {

                for (var j = 0; j < resData.length; j++) {

                    if (chiArr[_i][attributes.id] === resData[j][attributes.parentId]) {

                        var _obj = treeObj(resData[j]);
                        _obj.text = _obj.name;

                        chiArr[_i].nodes.push(_obj);

                        resData.splice(j, 1);
                        j--;
                    }
                }

                run(chiArr[_i].nodes);
            }
        }
    }

    // 递归遍历树  去除nodes为零的 key  为了插件需要

    function traverseTree(node) {

        if (!node) {
            return;
        }

        if (node.nodes.length === 0) {

            delete node.nodes;
        }

        if (node.nodes && node.nodes.length > 0) {
            var i = 0;
            for (i = 0; i < node.nodes.length; i++) {

                traverseTree(node.nodes[i]);
            }
        }
    }

    tree.forEach(function (item) {

        traverseTree(item);
    });

    return tree;
}