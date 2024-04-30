(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _filters = require("./filters");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CSSFilters = exports["default"] = /*#__PURE__*/function () {
  function CSSFilters(target, filters) {
    _classCallCheck(this, CSSFilters);
    // 所有支持的滤镜
    _defineProperty(this, "filters", new Array());
    /**
     * 绑定的dom否元素对象
     */
    _defineProperty(this, "target", void 0);
    if (target) this.target = target;
    if (filters && filters.length) {
      this.add(filters);
    }
  }
  _createClass(CSSFilters, [{
    key: "count",
    get:
    /**
     * 当前滤镜个数
     */
    function get() {
      return this.filters.length;
    }
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
  }, {
    key: "get",
    value: function get(name) {
      var _iterator = _createForOfIteratorHelper(this.filters),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var f = _step.value;
          if (f.name === name) return f;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.filters.splice(0, this.filters.length);
    }
    /**
     * 添加滤镜
     * @param filter
     */
  }, {
    key: "add",
    value: function add(filter, option) {
      if (Array.isArray(filter)) {
        var _iterator2 = _createForOfIteratorHelper(filter),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var f = _step2.value;
            this.add(f, option);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return;
      } else if (typeof filter === 'string') {
        var filterObj = (0, _filters.get)(filter);
        if (!filterObj) {
          console.error("".concat(filter, "\u4E0D\u5B58\u5728"));
          return;
        }
        filter = filterObj.create(option || filterObj.option);
        return this.add(filter);
      }
      /*if(filter.name) {
          const existsFilter = this.get(filter.name);
          if(existsFilter) {
              console.error(`${filter.displayName || filter.name}已经存在滤镜集合中，不能重复`);
              return existsFilter;
          }
      }*/
      if (filter instanceof _filters.Filter) {
        this.filters.push(filter);
        this.apply();
        return filter;
      } else if (filter.name) {
        return this.add(filter.name, filter.option);
      }
    }
    /**
     * 移除滤镜
     * @param filter
     */
  }, {
    key: "remove",
    value: function remove(filter) {
      if (Array.isArray(filter)) {
        var _iterator3 = _createForOfIteratorHelper(filter),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var f = _step3.value;
            this.remove(f);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        for (var i = this.filters.length - 1; i >= 0; i--) {
          if (typeof filter === 'string' && this.filters[i].name === filter || this.filters[i] === filter) {
            this.filters.splice(i, 1);
          }
        }
      }
      this.apply();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var res = [];
      if (this.count) {
        var _iterator4 = _createForOfIteratorHelper(this.filters),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var f = _step4.value;
            res.push(f.toJSON());
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return res;
    }
  }, {
    key: "toString",
    value: function toString() {
      var res = [];
      var _iterator5 = _createForOfIteratorHelper(this.filters),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var f = _step5.value;
          var r = f.toString();
          if (r) res.push(r);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (res.length) return res.join(' ');
      return '';
    }
    /**
     * 生效
     * @param target
     */
  }, {
    key: "apply",
    value: function apply() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target;
      if (target && target.style) target.style.filter = this.toString();
    }
  }]);
  return CSSFilters;
}();

},{"./filters":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowFilterOptionValue = exports.ShadowFilterOption = exports.FilterData = exports.BaseFilterOption = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 滤镜数据
 */
var FilterData = exports.FilterData = /*#__PURE__*/_createClass(function FilterData() {
  _classCallCheck(this, FilterData);
  /**
   * 名称
   */
  _defineProperty(this, "name", void 0);
  /**
   * 中文名
   */
  _defineProperty(this, "displayName", void 0);
  /**
   * 配置值
   */
  _defineProperty(this, "option", void 0);
});
var BaseFilterOption = exports.BaseFilterOption = /*#__PURE__*/function () {
  function BaseFilterOption(option) {
    _classCallCheck(this, BaseFilterOption);
    _defineProperty(this, "value", void 0);
    if (option) {
      if (typeof option === 'string' || typeof option === 'number') {
        this.value = option;
      } else {
        this.value = option.value;
      }
    }
  }
  _createClass(BaseFilterOption, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        value: this.value
      };
    }
  }, {
    key: "clone",
    value: function clone() {
      var obj = new BaseFilterOption();
      // @ts-ignore
      if (this.value && this.value.clone) obj.value = this.value.clone();else obj.value = this.value;
      return obj;
    }
  }]);
  return BaseFilterOption;
}();
var ShadowFilterOptionValue = exports.ShadowFilterOptionValue = /*#__PURE__*/function () {
  function ShadowFilterOptionValue(data) {
    _classCallCheck(this, ShadowFilterOptionValue);
    _defineProperty(this, "x", void 0);
    _defineProperty(this, "y", void 0);
    _defineProperty(this, "blur", void 0);
    _defineProperty(this, "color", void 0);
    if (data) {
      this.x = data.x;
      this.y = data.y;
      this.blur = data.blur;
      this.color = data.color;
    }
  }
  _createClass(ShadowFilterOptionValue, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        x: this.x,
        y: this.y,
        blur: this.blur || '',
        color: this.color || ''
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, " ").concat(this.y, " ").concat(this.blur || 0, " ").concat(this.color || '#000');
    }
  }, {
    key: "clone",
    value: function clone() {
      return new ShadowFilterOptionValue(this);
    }
  }]);
  return ShadowFilterOptionValue;
}();
var ShadowFilterOption = exports.ShadowFilterOption = /*#__PURE__*/function (_BaseFilterOption2) {
  _inherits(ShadowFilterOption, _BaseFilterOption2);
  function ShadowFilterOption(option) {
    var _this;
    _classCallCheck(this, ShadowFilterOption);
    _this = _callSuper(this, ShadowFilterOption);
    if (option) {
      // @ts-ignore
      if (option instanceof ShadowFilterOption || option.value) _this.value = new ShadowFilterOptionValue(option.value);else _this.value = new ShadowFilterOptionValue(option);
    }
    return _this;
  }
  _createClass(ShadowFilterOption, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }]);
  return ShadowFilterOption;
}(BaseFilterOption);

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SepiaFilter = exports.SaturateFilter = exports.OpacityFilter = exports.InvertFilter = exports.HueRotateFilter = exports.GrayscaleFilter = exports.Filter = exports.DropShadowFilter = exports.ContrastFilter = exports.BrightnessFilter = exports.BlurFilter = void 0;
exports.get = get;
var _filterTypes = require("./filterTypes");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Filter = exports.Filter = /*#__PURE__*/function () {
  function Filter(option) {
    _classCallCheck(this, Filter);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "displayName", void 0);
    /**
    * 配置值
    */
    _defineProperty(this, "option", void 0);
    if (option) {
      if (option instanceof _filterTypes.FilterData) {
        this.name = option.name;
        this.displayName = option.displayName;
        option = option.option;
      }
      if (option instanceof _filterTypes.BaseFilterOption) {
        this.option = option;
      } else if (_typeof(option) === 'object') {
        this.option = new _filterTypes.BaseFilterOption(option);
      }
    }
  }
  _createClass(Filter, [{
    key: "create",
    value:
    /**
     * 创建同类型的滤镜
     * @param option 滤镜参数
     * @returns
     */
    function create() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option;
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.name;
      var displayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.displayName;
      var filterType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Filter;
      var data = new _filterTypes.FilterData();
      data.name = name;
      data.displayName = displayName;
      // @ts-ignore
      data.option = option.clone ? option.clone() : option;
      var obj = new filterType(data);
      return obj;
    }
    // 转成json
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name || '',
        displayName: this.displayName || '',
        option: this.option.toJSON()
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      if (!this.name) return '';
      return "".concat(this.name, "(").concat(this.option.toString(), ")");
    }
  }]);
  return Filter;
}();
/**
 * 反色滤镜
 */
var InvertFilter = exports.InvertFilter = /*#__PURE__*/function (_Filter2) {
  _inherits(InvertFilter, _Filter2);
  function InvertFilter(option) {
    var _this;
    _classCallCheck(this, InvertFilter);
    option = Object.assign({
      value: 1
    }, option);
    _this = _callSuper(this, InvertFilter, [option]);
    _defineProperty(_assertThisInitialized(_this), "name", 'invert');
    _defineProperty(_assertThisInitialized(_this), "displayName", '反色');
    return _this;
  }
  return _createClass(InvertFilter);
}(Filter);
/**
 * 模糊滤镜 value: 4px
 */
var BlurFilter = exports.BlurFilter = /*#__PURE__*/function (_Filter3) {
  _inherits(BlurFilter, _Filter3);
  function BlurFilter(option) {
    var _this2;
    _classCallCheck(this, BlurFilter);
    option = Object.assign({
      value: '4px'
    }, option);
    _this2 = _callSuper(this, BlurFilter, [option]);
    _defineProperty(_assertThisInitialized(_this2), "name", 'blur');
    _defineProperty(_assertThisInitialized(_this2), "displayName", '模糊');
    return _this2;
  }
  return _createClass(BlurFilter);
}(Filter);
/**
 * 亮度滤镜 value: 0-1
 */
var BrightnessFilter = exports.BrightnessFilter = /*#__PURE__*/function (_Filter4) {
  _inherits(BrightnessFilter, _Filter4);
  function BrightnessFilter(option) {
    var _this3;
    _classCallCheck(this, BrightnessFilter);
    option = Object.assign({
      value: 2
    }, option);
    _this3 = _callSuper(this, BrightnessFilter, [option]);
    _defineProperty(_assertThisInitialized(_this3), "name", 'brightness');
    _defineProperty(_assertThisInitialized(_this3), "displayName", '亮度');
    return _this3;
  }
  return _createClass(BrightnessFilter);
}(Filter);
/**
 * 灰度滤镜 value: 0-1
 */
var GrayscaleFilter = exports.GrayscaleFilter = /*#__PURE__*/function (_Filter5) {
  _inherits(GrayscaleFilter, _Filter5);
  function GrayscaleFilter(option) {
    var _this4;
    _classCallCheck(this, GrayscaleFilter);
    option = Object.assign({
      value: 1
    }, option);
    _this4 = _callSuper(this, GrayscaleFilter, [option]);
    _defineProperty(_assertThisInitialized(_this4), "name", 'grayscale');
    _defineProperty(_assertThisInitialized(_this4), "displayName", '灰度');
    return _this4;
  }
  return _createClass(GrayscaleFilter);
}(Filter);
/**
 * 复古滤镜 value: 0-1
 */
var SepiaFilter = exports.SepiaFilter = /*#__PURE__*/function (_Filter6) {
  _inherits(SepiaFilter, _Filter6);
  function SepiaFilter(option) {
    var _this5;
    _classCallCheck(this, SepiaFilter);
    option = Object.assign({
      value: 1
    }, option);
    _this5 = _callSuper(this, SepiaFilter, [option]);
    _defineProperty(_assertThisInitialized(_this5), "name", 'sepia');
    _defineProperty(_assertThisInitialized(_this5), "displayName", '复古');
    return _this5;
  }
  return _createClass(SepiaFilter);
}(Filter);
/**
 * 旋转滤镜 value: 0-360deg 角度 或 弧度 0-2*Math.PI rad
 */
var HueRotateFilter = exports.HueRotateFilter = /*#__PURE__*/function (_Filter7) {
  _inherits(HueRotateFilter, _Filter7);
  function HueRotateFilter(option) {
    var _this6;
    _classCallCheck(this, HueRotateFilter);
    option = Object.assign({
      value: '240deg'
    }, option);
    _this6 = _callSuper(this, HueRotateFilter, [option]);
    _defineProperty(_assertThisInitialized(_this6), "name", 'hue-rotate');
    _defineProperty(_assertThisInitialized(_this6), "displayName", '旋转');
    return _this6;
  }
  return _createClass(HueRotateFilter);
}(Filter);
/**
 * 透明度 value: 0-1
 */
var OpacityFilter = exports.OpacityFilter = /*#__PURE__*/function (_Filter8) {
  _inherits(OpacityFilter, _Filter8);
  function OpacityFilter(option) {
    var _this7;
    _classCallCheck(this, OpacityFilter);
    option = Object.assign({
      value: 0.8
    }, option);
    _this7 = _callSuper(this, OpacityFilter, [option]);
    _defineProperty(_assertThisInitialized(_this7), "name", 'opacity');
    _defineProperty(_assertThisInitialized(_this7), "displayName", '透明度');
    return _this7;
  }
  return _createClass(OpacityFilter);
}(Filter);
/**
 * 阴影滤镜
 */
var DropShadowFilter = exports.DropShadowFilter = /*#__PURE__*/function (_Filter9) {
  _inherits(DropShadowFilter, _Filter9);
  function DropShadowFilter(option) {
    var _this8;
    _classCallCheck(this, DropShadowFilter);
    if (!option) option = new _filterTypes.ShadowFilterOption();
    option.value = new _filterTypes.ShadowFilterOptionValue(option.value || {
      x: '0',
      y: '0',
      blur: '4px',
      color: '#000'
    });
    _this8 = _callSuper(this, DropShadowFilter, [option]);
    _defineProperty(_assertThisInitialized(_this8), "name", 'drop-shadow');
    _defineProperty(_assertThisInitialized(_this8), "displayName", '阴影');
    return _this8;
  }
  _createClass(DropShadowFilter, [{
    key: "create",
    value:
    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns
      */
    function create() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option;
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.name;
      var displayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.displayName;
      var data = new _filterTypes.ShadowFilterOption(option);
      var obj = new DropShadowFilter(data);
      obj.name = name;
      obj.displayName = displayName;
      return obj;
    }
  }]);
  return DropShadowFilter;
}(Filter);
/**
 * 对比度滤镜  value: 2
 */
var ContrastFilter = exports.ContrastFilter = /*#__PURE__*/function (_Filter10) {
  _inherits(ContrastFilter, _Filter10);
  function ContrastFilter(option) {
    var _this9;
    _classCallCheck(this, ContrastFilter);
    option = Object.assign({
      value: 2
    }, option);
    _this9 = _callSuper(this, ContrastFilter, [option]);
    _defineProperty(_assertThisInitialized(_this9), "name", 'contrast');
    _defineProperty(_assertThisInitialized(_this9), "displayName", '对比度');
    return _this9;
  }
  return _createClass(ContrastFilter);
}(Filter);
/**
 * 饱和度 0-无穷 ,一般取0-1
 */
var SaturateFilter = exports.SaturateFilter = /*#__PURE__*/function (_Filter11) {
  _inherits(SaturateFilter, _Filter11);
  function SaturateFilter(option) {
    var _this10;
    _classCallCheck(this, SaturateFilter);
    option = Object.assign({
      value: 3
    }, option);
    _this10 = _callSuper(this, SaturateFilter, [option]);
    _defineProperty(_assertThisInitialized(_this10), "name", 'saturate');
    _defineProperty(_assertThisInitialized(_this10), "displayName", '饱和度');
    return _this10;
  }
  return _createClass(SaturateFilter);
}(Filter);
var filters = {
  /**
   * 反色滤镜
   */
  invert: new InvertFilter(),
  /**
   * 模糊滤镜 value: 4px
   */
  blur: new BlurFilter(),
  /**
   * 亮度滤镜 value: 0-1
   */
  brightness: new BrightnessFilter(),
  /**
   * 灰度滤镜 value: 0-1
   */
  grayscale: new GrayscaleFilter(),
  /**
   * 复古滤镜 value: 0-1
   */
  sepia: new SepiaFilter(),
  /**
   * 旋转滤镜
   */
  hueRotate: new HueRotateFilter(),
  /**
   * 阴影
   */
  dropShadow: new DropShadowFilter(),
  /**
   * 透明度
   */
  opacity: new OpacityFilter(),
  /**
   * 对比度
   */
  contrast: new ContrastFilter(),
  /**
   * 饱和度 0-无穷 ,一般取0-1
   */
  saturate: new SaturateFilter()
};
// 获取fiter实例对象
function get(name) {
  if (!name) return null;
  if (filters[name]) return filters[name];
  for (var key in filters) {
    var filter = filters[key];
    if (filter instanceof Filter && filter.name === name) {
      return filter;
    }
  }
  return null;
}
var _default = exports["default"] = filters;

},{"./filterTypes":2}],4:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  filters: true
};
exports["default"] = void 0;
Object.defineProperty(exports, "filters", {
  enumerable: true,
  get: function get() {
    return _filters["default"];
  }
});
var _filterTypes = require("./filterTypes");
Object.keys(_filterTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _filterTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filterTypes[key];
    }
  });
});
var _filters = _interopRequireWildcard(require("./filters"));
Object.keys(_filters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _filters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filters[key];
    }
  });
});
var _filterManager = _interopRequireDefault(require("./filterManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var _default = exports["default"] = _filterManager["default"];

},{"./filterManager":1,"./filterTypes":2,"./filters":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlck1hbmFnZXIuanMiLCJkaXN0L2ZpbHRlclR5cGVzLmpzIiwiZGlzdC9maWx0ZXJzLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUEsUUFBQSxHQUFBLE9BQUE7QUFBcUQsU0FBQSxRQUFBLENBQUEsc0NBQUEsT0FBQSx3QkFBQSxNQUFBLHVCQUFBLE1BQUEsQ0FBQSxRQUFBLGFBQUEsQ0FBQSxrQkFBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLHlCQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLE1BQUEsSUFBQSxDQUFBLEtBQUEsTUFBQSxDQUFBLFNBQUEscUJBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsY0FBQSxRQUFBLEVBQUEsVUFBQSxNQUFBLG9CQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsRUFBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxjQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLHFCQUFBLEVBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxJQUFBLG1CQUFBLElBQUEsU0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFB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QUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFB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QUFBLE9BQUEsV0FBQSxHQUFBO0VBQUEsSUFBQSxHQUFBLGtCQUFBLEdBQUE7RUFBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxJQUFBLE9BQUEsSUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLFlBQUEsQ0FBQSxHQUFBO0VBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsR0FBQTtJQUFBLFVBQUE7SUFBQSxHQUFBLFdBQUEsSUFBQTtNQUFBLE9BQUEsWUFBQSxDQUFBLEdBQUE7SUFBQTtFQUFBO0FBQUE7QUFDQSxJQUFBLFFBQUEsR0FBQSx1QkFBQSxDQUFBLE9BQUE7QUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsRUFBQSxPQUFBLFdBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxrQkFBQSxHQUFBO0VBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsWUFBQSxFQUFBLEdBQUE7RUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLElBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxRQUFBLENBQUEsR0FBQTtFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsR0FBQSxXQUFBLElBQUE7TUFBQSxPQUFBLFFBQUEsQ0FBQSxHQUFBO0lBQUE7RUFBQTtBQUFBO0FBRUEsSUFBQSxjQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQXdDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLFNBQUEseUJBQUEsQ0FBQSw2QkFBQSxPQUFBLG1CQUFBLENBQUEsT0FBQSxPQUFBLElBQUEsQ0FBQSxPQUFBLE9BQUEsWUFBQSx3QkFBQSxZQUFBLHlCQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBO0FBQUEsU0FBQSx3QkFBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxDQUFBLGVBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLHNCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsd0JBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxTQUFBLFVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLElBQUEsTUFBQSxDQUFBLHdCQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsb0JBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsSUFBQSxRQUFBLEdBQUEsT0FBQSxjQUV6Qix5QkFBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IEZpbHRlciwgZ2V0IGFzIGdldEZpbHRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NGaWx0ZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGZpbHRlcnMpIHtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGQoZmlsdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5omA5pyJ5pSv5oyB55qE5ruk6ZWcXG4gICAgZmlsdGVycyA9IG5ldyBBcnJheSgpO1xuICAgIC8qKlxuICAgICAqIOe7keWumueahGRvbeWQpuWFg+e0oOWvueixoVxuICAgICAqL1xuICAgIHRhcmdldDtcbiAgICAvKipcbiAgICAgKiDlvZPliY3mu6TplZzkuKrmlbBcbiAgICAgKi9cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7mu6TplZzlkI3ojrflj5bmu6TplZzlr7nosaFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgaWYgKGYubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZSgwLCB0aGlzLmZpbHRlcnMubGVuZ3RoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5ruk6ZWcXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIGFkZChmaWx0ZXIsIG9wdGlvbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZiwgb3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyT2JqID0gZ2V0RmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICBpZiAoIWZpbHRlck9iaikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZmlsdGVyfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRlck9iai5jcmVhdGUob3B0aW9uIHx8IGZpbHRlck9iai5vcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgLyppZihmaWx0ZXIubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RzRmlsdGVyID0gdGhpcy5nZXQoZmlsdGVyLm5hbWUpO1xuICAgICAgICAgICAgaWYoZXhpc3RzRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtmaWx0ZXIuZGlzcGxheU5hbWUgfHwgZmlsdGVyLm5hbWV95bey57uP5a2Y5Zyo5ruk6ZWc6ZuG5ZCI5Lit77yM5LiN6IO96YeN5aSNYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c0ZpbHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgICAgIGlmIChmaWx0ZXIgaW5zdGFuY2VvZiBGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgICAgICB0aGlzLmFwcGx5KCk7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpbHRlci5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoZmlsdGVyLm5hbWUsIGZpbHRlci5vcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpOa7pOmVnFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICByZW1vdmUoZmlsdGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5maWx0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiB0aGlzLmZpbHRlcnNbaV0ubmFtZSA9PT0gZmlsdGVyKSB8fCB0aGlzLmZpbHRlcnNbaV0gPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5KCk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGlmICh0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goZi50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZi50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKHIpXG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnlJ/mlYhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHkodGFyZ2V0ID0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuc3R5bGUpXG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuZmlsdGVyID0gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbn1cbiIsIi8qKlxuICog5ruk6ZWc5pWw5o2uXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWx0ZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiDlkI3np7BcbiAgICAgKi9cbiAgICBuYW1lO1xuICAgIC8qKlxuICAgICAqIOS4reaWh+WQjVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lO1xuICAgIC8qKlxuICAgICAqIOmFjee9ruWAvFxuICAgICAqL1xuICAgIG9wdGlvbjtcbn1cbmV4cG9ydCBjbGFzcyBCYXNlRmlsdGVyT3B0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgQmFzZUZpbHRlck9wdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuY2xvbmUpXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLnZhbHVlLmNsb25lKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBkYXRhLng7XG4gICAgICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XG4gICAgICAgICAgICB0aGlzLmJsdXIgPSBkYXRhLmJsdXI7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB4O1xuICAgIHk7XG4gICAgYmx1cjtcbiAgICBjb2xvcjtcbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgICBibHVyOiB0aGlzLmJsdXIgfHwgJycsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvciB8fCAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9ICR7dGhpcy5ibHVyIHx8IDB9ICR7dGhpcy5jb2xvciB8fCAnIzAwMCd9YDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUodGhpcyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYWRvd0ZpbHRlck9wdGlvbiBleHRlbmRzIEJhc2VGaWx0ZXJPcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgU2hhZG93RmlsdGVyT3B0aW9uIHx8IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpbHRlckRhdGEsIEJhc2VGaWx0ZXJPcHRpb24sIFNoYWRvd0ZpbHRlck9wdGlvbiwgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUgfSBmcm9tICcuL2ZpbHRlclR5cGVzJztcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRmlsdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBvcHRpb24uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uLm9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb24gaW5zdGFuY2VvZiBCYXNlRmlsdGVyT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uID0gbmV3IEJhc2VGaWx0ZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuYW1lO1xuICAgIGRpc3BsYXlOYW1lO1xuICAgIC8qKlxuICAgICog6YWN572u5YC8XG4gICAgKi9cbiAgICBvcHRpb247XG4gICAgLyoqXG4gICAgICog5Yib5bu65ZCM57G75Z6L55qE5ruk6ZWcXG4gICAgICogQHBhcmFtIG9wdGlvbiDmu6TplZzlj4LmlbBcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb24gPSB0aGlzLm9wdGlvbiwgbmFtZSA9IHRoaXMubmFtZSwgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCBmaWx0ZXJUeXBlID0gRmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmlsdGVyRGF0YSgpO1xuICAgICAgICBkYXRhLm5hbWUgPSBuYW1lO1xuICAgICAgICBkYXRhLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGF0YS5vcHRpb24gPSBvcHRpb24uY2xvbmUgPyBvcHRpb24uY2xvbmUoKSA6IG9wdGlvbjtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IGZpbHRlclR5cGUoZGF0YSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIC8vIOi9rOaIkGpzb25cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUgfHwgJycsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSB8fCAnJyxcbiAgICAgICAgICAgIG9wdGlvbjogdGhpcy5vcHRpb24udG9KU09OKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke3RoaXMub3B0aW9uLnRvU3RyaW5nKCl9KWA7XG4gICAgfVxufVxuLyoqXG4gKiDlj43oibLmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIEludmVydEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMSB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2ludmVydCc7XG4gICAgZGlzcGxheU5hbWUgPSAn5Y+N6ImyJztcbn1cbi8qKlxuICog5qih57OK5ruk6ZWcIHZhbHVlOiA0cHhcbiAqL1xuZXhwb3J0IGNsYXNzIEJsdXJGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICc0cHgnIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnYmx1cic7XG4gICAgZGlzcGxheU5hbWUgPSAn5qih57OKJztcbn1cbi8qKlxuICog5Lqu5bqm5ruk6ZWcIHZhbHVlOiAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIEJyaWdodG5lc3NGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDIgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdicmlnaHRuZXNzJztcbiAgICBkaXNwbGF5TmFtZSA9ICfkuq7luqYnO1xufVxuLyoqXG4gKiDngbDluqbmu6TplZwgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgR3JheXNjYWxlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAxIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnZ3JheXNjYWxlJztcbiAgICBkaXNwbGF5TmFtZSA9ICfngbDluqYnO1xufVxuLyoqXG4gKiDlpI3lj6Tmu6TplZwgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgU2VwaWFGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDEgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdzZXBpYSc7XG4gICAgZGlzcGxheU5hbWUgPSAn5aSN5Y+kJztcbn1cbi8qKlxuICog5peL6L2s5ruk6ZWcIHZhbHVlOiAwLTM2MGRlZyDop5LluqYg5oiWIOW8p+W6piAwLTIqTWF0aC5QSSByYWRcbiAqL1xuZXhwb3J0IGNsYXNzIEh1ZVJvdGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzI0MGRlZycgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdodWUtcm90YXRlJztcbiAgICBkaXNwbGF5TmFtZSA9ICfml4vovawnO1xufVxuLyoqXG4gKiDpgI/mmI7luqYgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgT3BhY2l0eUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMC44IH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnb3BhY2l0eSc7XG4gICAgZGlzcGxheU5hbWUgPSAn6YCP5piO5bqmJztcbn1cbi8qKlxuICog6Zi05b2x5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wU2hhZG93RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKCFvcHRpb24pXG4gICAgICAgICAgICBvcHRpb24gPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uKCk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZShvcHRpb24udmFsdWUgfHwge1xuICAgICAgICAgICAgeDogJzAnLFxuICAgICAgICAgICAgeTogJzAnLFxuICAgICAgICAgICAgYmx1cjogJzRweCcsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnXG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2Ryb3Atc2hhZG93JztcbiAgICBkaXNwbGF5TmFtZSA9ICfpmLTlvbEnO1xuICAgIC8qKlxuICAgICAgKiDliJvlu7rlkIznsbvlnovnmoTmu6TplZxcbiAgICAgICogQHBhcmFtIG9wdGlvbiDmu6TplZzlj4LmlbBcbiAgICAgICogQHJldHVybnNcbiAgICAgICovXG4gICAgY3JlYXRlKG9wdGlvbiA9IHRoaXMub3B0aW9uLCBuYW1lID0gdGhpcy5uYW1lLCBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IERyb3BTaGFkb3dGaWx0ZXIoZGF0YSk7XG4gICAgICAgIG9iai5uYW1lID0gbmFtZTtcbiAgICAgICAgb2JqLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuLyoqXG4gKiDlr7nmr5Tluqbmu6TplZwgIHZhbHVlOiAyXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250cmFzdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMiB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2NvbnRyYXN0JztcbiAgICBkaXNwbGF5TmFtZSA9ICflr7nmr5TluqYnO1xufVxuLyoqXG4gKiDppbHlkozluqYgMC3ml6DnqbcgLOS4gOiIrOWPljAtMVxuICovXG5leHBvcnQgY2xhc3MgU2F0dXJhdGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDMgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdzYXR1cmF0ZSc7XG4gICAgZGlzcGxheU5hbWUgPSAn6aWx5ZKM5bqmJztcbn1cbmNvbnN0IGZpbHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICog5Y+N6Imy5ruk6ZWcXG4gICAgICovXG4gICAgaW52ZXJ0OiBuZXcgSW52ZXJ0RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5qih57OK5ruk6ZWcIHZhbHVlOiA0cHhcbiAgICAgKi9cbiAgICBibHVyOiBuZXcgQmx1ckZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOS6ruW6pua7pOmVnCB2YWx1ZTogMC0xXG4gICAgICovXG4gICAgYnJpZ2h0bmVzczogbmV3IEJyaWdodG5lc3NGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDngbDluqbmu6TplZwgdmFsdWU6IDAtMVxuICAgICAqL1xuICAgIGdyYXlzY2FsZTogbmV3IEdyYXlzY2FsZUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOWkjeWPpOa7pOmVnCB2YWx1ZTogMC0xXG4gICAgICovXG4gICAgc2VwaWE6IG5ldyBTZXBpYUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOaXi+i9rOa7pOmVnFxuICAgICAqL1xuICAgIGh1ZVJvdGF0ZTogbmV3IEh1ZVJvdGF0ZUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOmYtOW9sVxuICAgICAqL1xuICAgIGRyb3BTaGFkb3c6IG5ldyBEcm9wU2hhZG93RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog6YCP5piO5bqmXG4gICAgICovXG4gICAgb3BhY2l0eTogbmV3IE9wYWNpdHlGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDlr7nmr5TluqZcbiAgICAgKi9cbiAgICBjb250cmFzdDogbmV3IENvbnRyYXN0RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog6aWx5ZKM5bqmIDAt5peg56m3ICzkuIDoiKzlj5YwLTFcbiAgICAgKi9cbiAgICBzYXR1cmF0ZTogbmV3IFNhdHVyYXRlRmlsdGVyKCksXG59O1xuLy8g6I635Y+WZml0ZXLlrp7kvovlr7nosaFcbmV4cG9ydCBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKGZpbHRlcnNbbmFtZV0pXG4gICAgICAgIHJldHVybiBmaWx0ZXJzW25hbWVdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZpbHRlcnMpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1trZXldO1xuICAgICAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgRmlsdGVyICYmIGZpbHRlci5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGRlZmF1bHQgZmlsdGVycztcbiIsImV4cG9ydCAqIGZyb20gJy4vZmlsdGVyVHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCBmaWx0ZXJzIGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgQ1NTRmlsdGVyIGZyb20gJy4vZmlsdGVyTWFuYWdlcic7XG5leHBvcnQgeyBmaWx0ZXJzIH07XG5leHBvcnQgZGVmYXVsdCBDU1NGaWx0ZXI7XG4iXX0=
