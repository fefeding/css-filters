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
          console.error("".concat(filter.displayName || filter.name, "\u5DF2\u7ECF\u5B58\u5728\u6EE4\u955C\u96C6\u5408\u4E2D\uFF0C\u4E0D\u80FD\u91CD\u590D"));
          return existsFilter;
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlck1hbmFnZXIuanMiLCJkaXN0L2ZpbHRlclR5cGVzLmpzIiwiZGlzdC9maWx0ZXJzLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUEsUUFBQSxHQUFBLHVCQUFBLENBQUEsT0FBQTtBQUErQyxTQUFBLHlCQUFBLENBQUEsNkJBQUEsT0FBQSxtQkFBQSxDQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsT0FBQSxPQUFBLFlBQUEsd0JBQUEsWUFBQSx5QkFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUEsd0JBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxzQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxVQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxJQUFBLE1BQUEsQ0FBQSx3QkFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLG9CQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFB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QUFBO0FBQUEsU0FBQSxVQUFBLFFBQUEsRUFBQSxVQUFBLGVBQUEsVUFBQSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxzQ0FBQSxPQUFBLHdCQUFBLE1BQUEsdUJBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxDQUFBLGtCQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFB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QUEsR0FBQTtJQUFBLFVBQUE7SUFBQSxHQUFBLFdBQUEsSUFBQTtNQUFBLE9BQUEsWUFBQSxDQUFBLEdBQUE7SUFBQTtFQUFBO0FBQUE7QUFDQSxJQUFBLFFBQUEsR0FBQSx1QkFBQSxDQUFBLE9BQUE7QUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsRUFBQSxPQUFBLFdBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxrQkFBQSxHQUFBO0VBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsWUFBQSxFQUFBLEdBQUE7RUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLElBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxRQUFBLENBQUEsR0FBQTtFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsR0FBQSxXQUFBLElBQUE7TUFBQSxPQUFBLFFBQUEsQ0FBQSxHQUFBO0lBQUE7RUFBQTtBQUFBO0FBRUEsSUFBQSxjQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQXdDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLFNBQUEseUJBQUEsQ0FBQSw2QkFBQSxPQUFBLG1CQUFBLENBQUEsT0FBQSxPQUFBLElBQUEsQ0FBQSxPQUFBLE9BQUEsWUFBQSx3QkFBQSxZQUFBLHlCQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBO0FBQUEsU0FBQSx3QkFBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxDQUFBLGVBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLHNCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsd0JBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxTQUFBLFVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLElBQUEsTUFBQSxDQUFBLHdCQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsb0JBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsSUFBQSxRQUFBLEdBQUEsT0FBQSxjQUV6Qix5QkFBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBjc3NGaWx0ZXJzLCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NGaWx0ZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGZpbHRlcnMpIHtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGQoZmlsdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5omA5pyJ5pSv5oyB55qE5ruk6ZWcXG4gICAgZmlsdGVycyA9IG5ldyBBcnJheSgpO1xuICAgIC8qKlxuICAgICAqIOe7keWumueahGRvbeWQpuWFg+e0oOWvueixoVxuICAgICAqL1xuICAgIHRhcmdldDtcbiAgICAvKipcbiAgICAgKiDlvZPliY3mu6TplZzkuKrmlbBcbiAgICAgKi9cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7mu6TplZzlkI3ojrflj5bmu6TplZzlr7nosaFcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgaWYgKGYubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZSgwLCB0aGlzLmZpbHRlcnMubGVuZ3RoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75Yqg5ruk6ZWcXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIGFkZChmaWx0ZXIsIG9wdGlvbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZiwgb3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyT2JqID0gY3NzRmlsdGVyc1tmaWx0ZXJdO1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJPYmopIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2ZpbHRlcn3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0ZXJPYmouY3JlYXRlKG9wdGlvbiB8fCBmaWx0ZXJPYmoub3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXIubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RzRmlsdGVyID0gdGhpcy5nZXQoZmlsdGVyLm5hbWUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0c0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZmlsdGVyLmRpc3BsYXlOYW1lIHx8IGZpbHRlci5uYW1lfeW3sue7j+WtmOWcqOa7pOmVnOmbhuWQiOS4re+8jOS4jeiDvemHjeWkjWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNGaWx0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlciBpbnN0YW5jZW9mIEZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsdGVyLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChmaWx0ZXIubmFtZSwgZmlsdGVyLm9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog56e76Zmk5ruk6ZWcXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIHJlbW92ZShmaWx0ZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbHRlcilcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShmKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmZpbHRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnICYmIHRoaXMuZmlsdGVyc1tpXS5uYW1lID09PSBmaWx0ZXIpIHx8IHRoaXMuZmlsdGVyc1tpXSA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuY291bnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChmLnRvSlNPTigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAocilcbiAgICAgICAgICAgICAgICByZXMucHVzaChyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiByZXMuam9pbignICcpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeUn+aViFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBhcHBseSh0YXJnZXQgPSB0aGlzLnRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5zdHlsZSlcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5maWx0ZXIgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiDmu6TplZzmlbDmja5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbHRlckRhdGEge1xuICAgIC8qKlxuICAgICAqIOWQjeensFxuICAgICAqL1xuICAgIG5hbWU7XG4gICAgLyoqXG4gICAgICog5Lit5paH5ZCNXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU7XG4gICAgLyoqXG4gICAgICog6YWN572u5YC8XG4gICAgICovXG4gICAgb3B0aW9uO1xufVxuZXhwb3J0IGNsYXNzIEJhc2VGaWx0ZXJPcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9wdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZTtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IG5ldyBCYXNlRmlsdGVyT3B0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5jbG9uZSlcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IHRoaXMudmFsdWUuY2xvbmUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IGRhdGEueDtcbiAgICAgICAgICAgIHRoaXMueSA9IGRhdGEueTtcbiAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRhdGEuYmx1cjtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBkYXRhLmNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHg7XG4gICAgeTtcbiAgICBibHVyO1xuICAgIGNvbG9yO1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgIGJsdXI6IHRoaXMuYmx1ciB8fCAnJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yIHx8ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSAke3RoaXMueX0gJHt0aGlzLmJsdXIgfHwgMH0gJHt0aGlzLmNvbG9yIHx8ICcjMDAwJ31gO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZSh0aGlzKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhZG93RmlsdGVyT3B0aW9uIGV4dGVuZHMgQmFzZUZpbHRlck9wdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChvcHRpb24gaW5zdGFuY2VvZiBTaGFkb3dGaWx0ZXJPcHRpb24gfHwgb3B0aW9uLnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRmlsdGVyRGF0YSwgQmFzZUZpbHRlck9wdGlvbiwgU2hhZG93RmlsdGVyT3B0aW9uLCBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZSB9IGZyb20gJy4vZmlsdGVyVHlwZXMnO1xuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChvcHRpb24gaW5zdGFuY2VvZiBGaWx0ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9uLm5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IG9wdGlvbi5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24ub3B0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIEJhc2VGaWx0ZXJPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBuZXcgQmFzZUZpbHRlck9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5hbWU7XG4gICAgZGlzcGxheU5hbWU7XG4gICAgLyoqXG4gICAgKiDphY3nva7lgLxcbiAgICAqL1xuICAgIG9wdGlvbjtcbiAgICAvKipcbiAgICAgKiDliJvlu7rlkIznsbvlnovnmoTmu6TplZxcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOa7pOmVnOWPguaVsFxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgY3JlYXRlKG9wdGlvbiA9IHRoaXMub3B0aW9uLCBuYW1lID0gdGhpcy5uYW1lLCBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIGZpbHRlclR5cGUgPSBGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGaWx0ZXJEYXRhKCk7XG4gICAgICAgIGRhdGEubmFtZSA9IG5hbWU7XG4gICAgICAgIGRhdGEuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkYXRhLm9wdGlvbiA9IG9wdGlvbi5jbG9uZSA/IG9wdGlvbi5jbG9uZSgpIDogb3B0aW9uO1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgZmlsdGVyVHlwZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgLy8g6L2s5oiQanNvblxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lIHx8ICcnLFxuICAgICAgICAgICAgb3B0aW9uOiB0aGlzLm9wdGlvbi50b0pTT04oKVxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9KCR7dGhpcy5vcHRpb24udG9TdHJpbmcoKX0pYDtcbiAgICB9XG59XG4vKipcbiAqIOWPjeiJsua7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgSW52ZXJ0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAxIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnaW52ZXJ0JztcbiAgICBkaXNwbGF5TmFtZSA9ICflj43oibInO1xufVxuLyoqXG4gKiDmqKHns4rmu6TplZwgdmFsdWU6IDRweFxuICovXG5leHBvcnQgY2xhc3MgQmx1ckZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogJzRweCcgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdibHVyJztcbiAgICBkaXNwbGF5TmFtZSA9ICfmqKHns4onO1xufVxuLyoqXG4gKiDkuq7luqbmu6TplZwgdmFsdWU6IDAtMTAwXG4gKi9cbmV4cG9ydCBjbGFzcyBCcmlnaHRuZXNzRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAyIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnYnJpZ2h0bmVzcyc7XG4gICAgZGlzcGxheU5hbWUgPSAn5Lqu5bqmJztcbn1cbi8qKlxuICog54Gw5bqm5ruk6ZWcIHZhbHVlOiAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIEdyYXlzY2FsZUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMSB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2dyYXlzY2FsZSc7XG4gICAgZGlzcGxheU5hbWUgPSAn54Gw5bqmJztcbn1cbi8qKlxuICog5aSN5Y+k5ruk6ZWcIHZhbHVlOiAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcGlhRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAxIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnc2VwaWEnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+WkjeWPpCc7XG59XG4vKipcbiAqIOaXi+i9rOa7pOmVnCB2YWx1ZTogMC0zNjBkZWcg6KeS5bqmIOaIliDlvKfluqYgMC0yKk1hdGguUEkgcmFkXG4gKi9cbmV4cG9ydCBjbGFzcyBIdWVSb3RhdGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICcyNDBkZWcnIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnaHVlLXJvdGF0ZSc7XG4gICAgZGlzcGxheU5hbWUgPSAn5peL6L2sJztcbn1cbi8qKlxuICog6YCP5piO5bqmIHZhbHVlOiAwLTFcbiAqL1xuZXhwb3J0IGNsYXNzIE9wYWNpdHlGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDAuOCB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ29wYWNpdHknO1xuICAgIGRpc3BsYXlOYW1lID0gJ+mAj+aYjuW6pic7XG59XG4vKipcbiAqIOmYtOW9sea7pOmVnFxuICovXG5leHBvcnQgY2xhc3MgRHJvcFNoYWRvd0ZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIGlmICghb3B0aW9uKVxuICAgICAgICAgICAgb3B0aW9uID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvbigpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUob3B0aW9uLnZhbHVlIHx8IHtcbiAgICAgICAgICAgIHg6ICcwJyxcbiAgICAgICAgICAgIHk6ICcwJyxcbiAgICAgICAgICAgIGJsdXI6ICc0cHgnLFxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJ1xuICAgICAgICB9KTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdkcm9wLXNoYWRvdyc7XG4gICAgZGlzcGxheU5hbWUgPSAn6Zi05b2xJztcbiAgICAvKipcbiAgICAgICog5Yib5bu65ZCM57G75Z6L55qE5ruk6ZWcXG4gICAgICAqIEBwYXJhbSBvcHRpb24g5ruk6ZWc5Y+C5pWwXG4gICAgICAqIEByZXR1cm5zXG4gICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb24gPSB0aGlzLm9wdGlvbiwgbmFtZSA9IHRoaXMubmFtZSwgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgU2hhZG93RmlsdGVyT3B0aW9uKG9wdGlvbik7XG4gICAgICAgIGNvbnN0IG9iaiA9IG5ldyBEcm9wU2hhZG93RmlsdGVyKGRhdGEpO1xuICAgICAgICBvYmoubmFtZSA9IG5hbWU7XG4gICAgICAgIG9iai5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn1cbi8qKlxuICog5a+55q+U5bqm5ruk6ZWcICB2YWx1ZTogMlxuICovXG5leHBvcnQgY2xhc3MgQ29udHJhc3RGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDIgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdjb250cmFzdCc7XG4gICAgZGlzcGxheU5hbWUgPSAn5a+55q+U5bqmJztcbn1cbi8qKlxuICog6aWx5ZKM5bqm5ruk6ZWcICB2YWx1ZTogM1xuICovXG5leHBvcnQgY2xhc3MgU2F0dXJhdGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDMgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdzYXR1cmF0ZSc7XG4gICAgZGlzcGxheU5hbWUgPSAn6aWx5ZKM5bqmJztcbn1cbmNvbnN0IGZpbHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICog5Y+N6Imy5ruk6ZWcXG4gICAgICovXG4gICAgaW52ZXJ0OiBuZXcgSW52ZXJ0RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5Lqu5bqmXG4gICAgICovXG4gICAgYmx1cjogbmV3IEJsdXJGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDkuq7luqZcbiAgICAgKi9cbiAgICBicmlnaHRuZXNzOiBuZXcgQnJpZ2h0bmVzc0ZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOeBsOW6plxuICAgICAqL1xuICAgIGdyYXlzY2FsZTogbmV3IEdyYXlzY2FsZUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOWkjeWPpFxuICAgICAqL1xuICAgIHNlcGlhOiBuZXcgU2VwaWFGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDml4vovazmu6TplZxcbiAgICAgKi9cbiAgICBodWVSb3RhdGU6IG5ldyBIdWVSb3RhdGVGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDpmLTlvbFcbiAgICAgKi9cbiAgICBkcm9wU2hhZG93OiBuZXcgRHJvcFNoYWRvd0ZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOmAj+aYjuW6plxuICAgICAqL1xuICAgIG9wYWNpdHk6IG5ldyBPcGFjaXR5RmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5a+55q+U5bqmXG4gICAgICovXG4gICAgY29udHJhc3Q6IG5ldyBDb250cmFzdEZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOmlseWSjOW6plxuICAgICAqL1xuICAgIHNhdHVyYXRlOiBuZXcgU2F0dXJhdGVGaWx0ZXIoKSxcbn07XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9maWx0ZXJUeXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IGZpbHRlcnMgZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCBDU1NGaWx0ZXIgZnJvbSAnLi9maWx0ZXJNYW5hZ2VyJztcbmV4cG9ydCB7IGZpbHRlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IENTU0ZpbHRlcjtcbiJdfQ==
