(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _filters = _interopRequireWildcard(require("./filters"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
        var filterObj = _filters["default"][filter];
        if (!filterObj) {
          console.error("".concat(filter, "\u4E0D\u5B58\u5728"));
          return;
        }
        filter = filterObj.create(option || filterObj.option);
        return this.add(filter);
      }
      if (filter.name) {
        var existsFilter = this.get(filter.name);
        if (existsFilter) {
          console.error("".concat(filter.name, "\u5DF2\u7ECF\u5B58\u5728\u6EE4\u955C\u96C6\u5408\u4E2D\uFF0C\u4E0D\u80FD\u91CD\u590D"));
          return;
        }
      }
      if (filter instanceof _filters.Filter) {
        this.filters.push(filter);
        this.apply();
        return;
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
 * 亮度滤镜 value: 0-100
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
 * 饱和度滤镜  value: 3
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
   * 亮度
   */
  blur: new BlurFilter(),
  /**
   * 亮度
   */
  brightness: new BrightnessFilter(),
  /**
   * 灰度
   */
  grayscale: new GrayscaleFilter(),
  /**
   * 复古
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
   * 饱和度
   */
  saturate: new SaturateFilter()
};
var _default = exports["default"] = filters;

},{"./filterTypes":2}],4:[function(require,module,exports){
"use strict";

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
var _filters = _interopRequireDefault(require("./filters"));
var _filterManager = _interopRequireDefault(require("./filterManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _filterManager["default"];

},{"./filterManager":1,"./filterTypes":2,"./filters":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlck1hbmFnZXIuanMiLCJkaXN0L2ZpbHRlclR5cGVzLmpzIiwiZGlzdC9maWx0ZXJzLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUEsUUFBQSxHQUFBLHVCQUFBLENBQUEsT0FBQTtBQUErQyxTQUFBLHlCQUFBLENBQUEsNkJBQUEsT0FBQSxtQkFBQSxDQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsT0FBQSxPQUFBLFlBQUEsd0JBQUEsWUFBQSx5QkFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUEsd0JBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxzQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxVQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxJQUFBLE1BQUEsQ0FBQSx3QkFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLG9CQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFB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QSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxzQ0FBQSxPQUFBLHdCQUFBLE1BQUEsdUJBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxDQUFBLGtCQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxj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T0FBQSxZQUFBLENBQUEsR0FBQTtJQUFBO0VBQUE7QUFBQTtBQUNBLElBQUEsUUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsY0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUF3QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxJQUFBLFFBQUEsR0FBQSxPQUFBLGNBRXpCLHlCQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGNzc0ZpbHRlcnMsIHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXJzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENTU0ZpbHRlcnMge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgZmlsdGVycykge1xuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChmaWx0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmiYDmnInmlK/mjIHnmoTmu6TplZxcbiAgICBmaWx0ZXJzID0gbmV3IEFycmF5KCk7XG4gICAgLyoqXG4gICAgICog57uR5a6a55qEZG9t5ZCm5YWD57Sg5a+56LGhXG4gICAgICovXG4gICAgdGFyZ2V0O1xuICAgIC8qKlxuICAgICAqIOW9k+WJjea7pOmVnOS4quaVsFxuICAgICAqL1xuICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOagueaNrua7pOmVnOWQjeiOt+WPlua7pOmVnOWvueixoVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAoZi5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKDAsIHRoaXMuZmlsdGVycy5sZW5ndGgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDmu6TplZxcbiAgICAgKiBAcGFyYW0gZmlsdGVyXG4gICAgICovXG4gICAgYWRkKGZpbHRlciwgb3B0aW9uKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChmLCBvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJPYmogPSBjc3NGaWx0ZXJzW2ZpbHRlcl07XG4gICAgICAgICAgICBpZiAoIWZpbHRlck9iaikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZmlsdGVyfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRlck9iai5jcmVhdGUob3B0aW9uIHx8IGZpbHRlck9iai5vcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlci5uYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdHNGaWx0ZXIgPSB0aGlzLmdldChmaWx0ZXIubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtmaWx0ZXIubmFtZX3lt7Lnu4/lrZjlnKjmu6TplZzpm4blkIjkuK3vvIzkuI3og73ph43lpI1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlciBpbnN0YW5jZW9mIEZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWx0ZXIubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGZpbHRlci5uYW1lLCBmaWx0ZXIub3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnp7vpmaTmu6TplZxcbiAgICAgKiBAcGFyYW0gZmlsdGVyXG4gICAgICovXG4gICAgcmVtb3ZlKGZpbHRlcikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmlsdGVyKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZmlsdGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycgJiYgdGhpcy5maWx0ZXJzW2ldLm5hbWUgPT09IGZpbHRlcikgfHwgdGhpcy5maWx0ZXJzW2ldID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseSgpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jb3VudCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGYudG9KU09OKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgY29uc3QgciA9IGYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChyKVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qb2luKCcgJyk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICog55Sf5pWIXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5KHRhcmdldCA9IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlKVxuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmZpbHRlciA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIOa7pOmVnOaVsOaNrlxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyRGF0YSB7XG4gICAgLyoqXG4gICAgICog5ZCN56ewXG4gICAgICovXG4gICAgbmFtZTtcbiAgICAvKipcbiAgICAgKiDkuK3mloflkI1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZTtcbiAgICAvKipcbiAgICAgKiDphY3nva7lgLxcbiAgICAgKi9cbiAgICBvcHRpb247XG59XG5leHBvcnQgY2xhc3MgQmFzZUZpbHRlck9wdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb3B0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhbHVlO1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IEJhc2VGaWx0ZXJPcHRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmNsb25lKVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gdGhpcy52YWx1ZS5jbG9uZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy54ID0gZGF0YS54O1xuICAgICAgICAgICAgdGhpcy55ID0gZGF0YS55O1xuICAgICAgICAgICAgdGhpcy5ibHVyID0gZGF0YS5ibHVyO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgeDtcbiAgICB5O1xuICAgIGJsdXI7XG4gICAgY29sb3I7XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgICAgYmx1cjogdGhpcy5ibHVyIHx8ICcnLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IgfHwgJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fSAke3RoaXMuYmx1ciB8fCAwfSAke3RoaXMuY29sb3IgfHwgJyMwMDAnfWA7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlKHRoaXMpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFkb3dGaWx0ZXJPcHRpb24gZXh0ZW5kcyBCYXNlRmlsdGVyT3B0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIFNoYWRvd0ZpbHRlck9wdGlvbiB8fCBvcHRpb24udmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGaWx0ZXJEYXRhLCBCYXNlRmlsdGVyT3B0aW9uLCBTaGFkb3dGaWx0ZXJPcHRpb24sIFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlIH0gZnJvbSAnLi9maWx0ZXJUeXBlcyc7XG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIEZpbHRlckRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gb3B0aW9uLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbi5vcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgQmFzZUZpbHRlck9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbiA9IG5ldyBCYXNlRmlsdGVyT3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmFtZTtcbiAgICBkaXNwbGF5TmFtZTtcbiAgICAvKipcbiAgICAqIOmFjee9ruWAvFxuICAgICovXG4gICAgb3B0aW9uO1xuICAgIC8qKlxuICAgICAqIOWIm+W7uuWQjOexu+Wei+eahOa7pOmVnFxuICAgICAqIEBwYXJhbSBvcHRpb24g5ruk6ZWc5Y+C5pWwXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBjcmVhdGUob3B0aW9uID0gdGhpcy5vcHRpb24sIG5hbWUgPSB0aGlzLm5hbWUsIGRpc3BsYXlOYW1lID0gdGhpcy5kaXNwbGF5TmFtZSwgZmlsdGVyVHlwZSA9IEZpbHRlcikge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZpbHRlckRhdGEoKTtcbiAgICAgICAgZGF0YS5uYW1lID0gbmFtZTtcbiAgICAgICAgZGF0YS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRhdGEub3B0aW9uID0gb3B0aW9uLmNsb25lID8gb3B0aW9uLmNsb25lKCkgOiBvcHRpb247XG4gICAgICAgIGNvbnN0IG9iaiA9IG5ldyBmaWx0ZXJUeXBlKGRhdGEpO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICAvLyDovazmiJBqc29uXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lIHx8ICcnLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUgfHwgJycsXG4gICAgICAgICAgICBvcHRpb246IHRoaXMub3B0aW9uLnRvSlNPTigpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMubmFtZSlcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0oJHt0aGlzLm9wdGlvbi50b1N0cmluZygpfSlgO1xuICAgIH1cbn1cbi8qKlxuICog5Y+N6Imy5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZlcnRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDEgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdpbnZlcnQnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+WPjeiJsic7XG59XG4vKipcbiAqIOaooeeziua7pOmVnCB2YWx1ZTogNHB4XG4gKi9cbmV4cG9ydCBjbGFzcyBCbHVyRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnNHB4JyB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2JsdXInO1xuICAgIGRpc3BsYXlOYW1lID0gJ+aooeeziic7XG59XG4vKipcbiAqIOS6ruW6pua7pOmVnCB2YWx1ZTogMC0xMDBcbiAqL1xuZXhwb3J0IGNsYXNzIEJyaWdodG5lc3NGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDIgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdicmlnaHRuZXNzJztcbiAgICBkaXNwbGF5TmFtZSA9ICfkuq7luqYnO1xufVxuLyoqXG4gKiDngbDluqbmu6TplZwgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgR3JheXNjYWxlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAxIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnZ3JheXNjYWxlJztcbiAgICBkaXNwbGF5TmFtZSA9ICfngbDluqYnO1xufVxuLyoqXG4gKiDlpI3lj6Tmu6TplZwgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgU2VwaWFGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDEgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdzZXBpYSc7XG4gICAgZGlzcGxheU5hbWUgPSAn5aSN5Y+kJztcbn1cbi8qKlxuICog5peL6L2s5ruk6ZWcIHZhbHVlOiAwLTM2MGRlZyDop5LluqYg5oiWIOW8p+W6piAwLTIqTWF0aC5QSSByYWRcbiAqL1xuZXhwb3J0IGNsYXNzIEh1ZVJvdGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzI0MGRlZycgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdodWUtcm90YXRlJztcbiAgICBkaXNwbGF5TmFtZSA9ICfml4vovawnO1xufVxuLyoqXG4gKiDpgI/mmI7luqYgdmFsdWU6IDAtMVxuICovXG5leHBvcnQgY2xhc3MgT3BhY2l0eUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMC44IH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnb3BhY2l0eSc7XG4gICAgZGlzcGxheU5hbWUgPSAn6YCP5piO5bqmJztcbn1cbi8qKlxuICog6Zi05b2x5ruk6ZWcXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wU2hhZG93RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKCFvcHRpb24pXG4gICAgICAgICAgICBvcHRpb24gPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uKCk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZShvcHRpb24udmFsdWUgfHwge1xuICAgICAgICAgICAgeDogJzAnLFxuICAgICAgICAgICAgeTogJzAnLFxuICAgICAgICAgICAgYmx1cjogJzRweCcsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnXG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2Ryb3Atc2hhZG93JztcbiAgICBkaXNwbGF5TmFtZSA9ICfpmLTlvbEnO1xuICAgIC8qKlxuICAgICAgKiDliJvlu7rlkIznsbvlnovnmoTmu6TplZxcbiAgICAgICogQHBhcmFtIG9wdGlvbiDmu6TplZzlj4LmlbBcbiAgICAgICogQHJldHVybnNcbiAgICAgICovXG4gICAgY3JlYXRlKG9wdGlvbiA9IHRoaXMub3B0aW9uLCBuYW1lID0gdGhpcy5uYW1lLCBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IERyb3BTaGFkb3dGaWx0ZXIoZGF0YSk7XG4gICAgICAgIG9iai5uYW1lID0gbmFtZTtcbiAgICAgICAgb2JqLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuLyoqXG4gKiDlr7nmr5Tluqbmu6TplZwgIHZhbHVlOiAyXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250cmFzdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMiB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2NvbnRyYXN0JztcbiAgICBkaXNwbGF5TmFtZSA9ICflr7nmr5TluqYnO1xufVxuLyoqXG4gKiDppbHlkozluqbmu6TplZwgIHZhbHVlOiAzXG4gKi9cbmV4cG9ydCBjbGFzcyBTYXR1cmF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMyB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ3NhdHVyYXRlJztcbiAgICBkaXNwbGF5TmFtZSA9ICfppbHlkozluqYnO1xufVxuY29uc3QgZmlsdGVycyA9IHtcbiAgICAvKipcbiAgICAgKiDlj43oibLmu6TplZxcbiAgICAgKi9cbiAgICBpbnZlcnQ6IG5ldyBJbnZlcnRGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDkuq7luqZcbiAgICAgKi9cbiAgICBibHVyOiBuZXcgQmx1ckZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOS6ruW6plxuICAgICAqL1xuICAgIGJyaWdodG5lc3M6IG5ldyBCcmlnaHRuZXNzRmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog54Gw5bqmXG4gICAgICovXG4gICAgZ3JheXNjYWxlOiBuZXcgR3JheXNjYWxlRmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5aSN5Y+kXG4gICAgICovXG4gICAgc2VwaWE6IG5ldyBTZXBpYUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOaXi+i9rOa7pOmVnFxuICAgICAqL1xuICAgIGh1ZVJvdGF0ZTogbmV3IEh1ZVJvdGF0ZUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOmYtOW9sVxuICAgICAqL1xuICAgIGRyb3BTaGFkb3c6IG5ldyBEcm9wU2hhZG93RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog6YCP5piO5bqmXG4gICAgICovXG4gICAgb3BhY2l0eTogbmV3IE9wYWNpdHlGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDlr7nmr5TluqZcbiAgICAgKi9cbiAgICBjb250cmFzdDogbmV3IENvbnRyYXN0RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog6aWx5ZKM5bqmXG4gICAgICovXG4gICAgc2F0dXJhdGU6IG5ldyBTYXR1cmF0ZUZpbHRlcigpLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZpbHRlcnM7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZpbHRlclR5cGVzJztcbmltcG9ydCBmaWx0ZXJzIGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgQ1NTRmlsdGVyIGZyb20gJy4vZmlsdGVyTWFuYWdlcic7XG5leHBvcnQgeyBmaWx0ZXJzIH07XG5leHBvcnQgZGVmYXVsdCBDU1NGaWx0ZXI7XG4iXX0=
