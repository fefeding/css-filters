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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
    if (filters && filters.length) {
      var _this$filters;
      (_this$filters = this.filters).push.apply(_this$filters, _toConsumableArray(filters));
    }
    if (target) this.target = target;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2ZpbHRlck1hbmFnZXIuanMiLCJkaXN0L2ZpbHRlclR5cGVzLmpzIiwiZGlzdC9maWx0ZXJzLmpzIiwiZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUEsUUFBQSxHQUFBLHVCQUFBLENBQUEsT0FBQTtBQUErQyxTQUFBLHlCQUFBLENBQUEsNkJBQUEsT0FBQSxtQkFBQSxDQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsT0FBQSxPQUFBLFlBQUEsd0JBQUEsWUFBQSx5QkFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUEsd0JBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxzQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxVQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxJQUFBLE1BQUEsQ0FBQSx3QkFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLG9CQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsV0FBQSxrQkFBQSxDQUFBLEdBQUEsS0FBQSxnQkFBQSxDQUFBLEdBQUEsS0FBQSwyQkFBQSxDQUFBLEdBQUEsS0FBQSxrQkFBQTtBQUFBLFNBQUEsbUJBQUEsY0FBQSxTQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGlCQUFBLElBQUEsZUFBQSxNQUFBLG9CQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxhQUFBLElBQUEsK0JBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsaUJBQUEsQ0FBQSxHQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLElBQzFCLFVBQVUsR0FBQSxPQUFBO0VBQzNCLFNBQUEsV0FBWSxNQUFNLEVBQUUsT0FBTyxFQUFFO0lBQUEsZUFBQSxPQUFBLFVBQUE7SUFPN0I7SUFBQSxlQUFBLGtCQUNVLElBQUksS0FBSyxDQUFDLENBQUM7SUFDckI7QUFDSjtBQUNBO0lBRkksZUFBQTtJQVJJLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7TUFBQSxJQUFBLGFBQUE7TUFDM0IsQ0FBQSxhQUFBLE9BQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFBLEtBQUEsQ0FBQSxhQUFBLEVBQUEsa0JBQUEsQ0FBSSxPQUFPLEVBQUM7SUFDakM7SUFDQSxJQUFJLE1BQU0sRUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07RUFDNUI7RUFBQyxZQUFBLENBQUEsVUFBQTtJQUFBLEdBQUE7SUFBQSxHQUFBO0lBT0Q7QUFDSjtBQUNBO0lBQ0ksU0FBQSxJQUFBLEVBQVk7TUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtJQUM5QjtJQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBS0EsU0FBQSxJQUFJLElBQUksRUFBRTtNQUFBLElBQUEsU0FBQSxHQUFBLDBCQUFBLENBQ1UsSUFBSSxDQUFDLE9BQU87UUFBQSxLQUFBO01BQUE7UUFBNUIsS0FBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsR0FBOEI7VUFBQSxJQUFuQixDQUFDLEdBQUEsS0FBQSxDQUFBLEtBQUE7VUFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUNmLE9BQU8sQ0FBQztRQUNoQjtNQUFDLFNBQUEsR0FBQTtRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTtNQUFBO1FBQUEsU0FBQSxDQUFBLENBQUE7TUFBQTtJQUNMO0VBQUM7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUNELFNBQUEsTUFBQSxFQUFRO01BQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9DO0lBQ0E7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBSUEsU0FBQSxJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUU7TUFDaEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUEsSUFBQSxVQUFBLEdBQUEsMEJBQUEsQ0FDUCxNQUFNO1VBQUEsTUFBQTtRQUFBO1VBQXRCLEtBQUEsVUFBQSxDQUFBLENBQUEsTUFBQSxNQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLEdBQXdCO1lBQUEsSUFBYixDQUFDLEdBQUEsTUFBQSxDQUFBLEtBQUE7WUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7VUFDdkI7UUFBQyxTQUFBLEdBQUE7VUFBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE7UUFBQTtVQUFBLFVBQUEsQ0FBQSxDQUFBO1FBQUE7UUFDRDtNQUNKLENBQUMsTUFDSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUNqQyxJQUFNLFNBQVMsR0FBRyxtQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFO1VBQ1osT0FBTyxDQUFDLEtBQUssSUFBQSxNQUFBLENBQUksTUFBTSx1QkFBSyxDQUFDO1VBQzdCO1FBQ0o7UUFDQSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzNCO01BQ0EsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2IsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksWUFBWSxFQUFFO1VBQ2QsT0FBTyxDQUFDLEtBQUssSUFBQSxNQUFBLENBQUksTUFBTSxDQUFDLElBQUkseUZBQWdCLENBQUM7VUFDN0M7UUFDSjtNQUNKO01BQ0EsSUFBSSxNQUFNLFlBQVksZUFBTSxFQUFFO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDWjtNQUNKLENBQUMsTUFDSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUMvQztJQUNKO0lBQ0E7QUFDSjtBQUNBO0FBQ0E7RUFISTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBSUEsU0FBQSxPQUFPLE1BQU0sRUFBRTtNQUNYLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFBLElBQUEsVUFBQSxHQUFBLDBCQUFBLENBQ1AsTUFBTTtVQUFBLE1BQUE7UUFBQTtVQUF0QixLQUFBLFVBQUEsQ0FBQSxDQUFBLE1BQUEsTUFBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxHQUNJO1lBQUEsSUFETyxDQUFDLEdBQUEsTUFBQSxDQUFBLEtBQUE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUFBO1FBQUMsU0FBQSxHQUFBO1VBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBO1FBQUE7VUFBQSxVQUFBLENBQUEsQ0FBQTtRQUFBO01BQ3ZCLENBQUMsTUFDSTtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7VUFDL0MsSUFBSyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQy9GLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDN0I7UUFDSjtNQUNKO01BQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCO0VBQUM7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUNELFNBQUEsT0FBQSxFQUFTO01BQ0wsSUFBTSxHQUFHLEdBQUcsRUFBRTtNQUNkLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUFBLElBQUEsVUFBQSxHQUFBLDBCQUFBLENBQ0ksSUFBSSxDQUFDLE9BQU87VUFBQSxNQUFBO1FBQUE7VUFBNUIsS0FBQSxVQUFBLENBQUEsQ0FBQSxNQUFBLE1BQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsR0FBOEI7WUFBQSxJQUFuQixDQUFDLEdBQUEsTUFBQSxDQUFBLEtBQUE7WUFDUixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1VBQ3hCO1FBQUMsU0FBQSxHQUFBO1VBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBO1FBQUE7VUFBQSxVQUFBLENBQUEsQ0FBQTtRQUFBO01BQ0w7TUFDQSxPQUFPLEdBQUc7SUFDZDtFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFDRCxTQUFBLFNBQUEsRUFBVztNQUNQLElBQU0sR0FBRyxHQUFHLEVBQUU7TUFBQyxJQUFBLFVBQUEsR0FBQSwwQkFBQSxDQUNDLElBQUksQ0FBQyxPQUFPO1FBQUEsTUFBQTtNQUFBO1FBQTVCLEtBQUEsVUFBQSxDQUFBLENBQUEsTUFBQSxNQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLEdBQThCO1VBQUEsSUFBbkIsQ0FBQyxHQUFBLE1BQUEsQ0FBQSxLQUFBO1VBQ1IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBQ3RCLElBQUksQ0FBQyxFQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CO01BQUMsU0FBQSxHQUFBO1FBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBO01BQUE7UUFBQSxVQUFBLENBQUEsQ0FBQTtNQUFBO01BQ0QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUNWLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDeEIsT0FBTyxFQUFFO0lBQ2I7SUFDQTtBQUNKO0FBQ0E7QUFDQTtFQUhJO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFJQSxTQUFBLE1BQUEsRUFBNEI7TUFBQSxJQUF0QixNQUFNLEdBQUEsU0FBQSxDQUFBLE1BQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLFNBQUEsTUFBRyxJQUFJLENBQUMsTUFBTTtNQUN0QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0M7RUFBQztFQUFBLE9BQUEsVUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BITDtBQUNBO0FBQ0E7QUFGQSxJQUdhLFVBQVUsR0FBQSxPQUFBLENBQUEsVUFBQSxnQkFBQSxZQUFBLFVBQUEsV0FBQTtFQUFBLGVBQUEsT0FBQSxVQUFBO0VBQ25CO0FBQ0o7QUFDQTtFQUZJLGVBQUE7RUFJQTtBQUNKO0FBQ0E7RUFGSSxlQUFBO0VBSUE7QUFDSjtBQUNBO0VBRkksZUFBQTtBQUFBO0FBQUEsSUFLUyxnQkFBZ0IsR0FBQSxPQUFBLENBQUEsZ0JBQUE7RUFDekIsU0FBQSxpQkFBWSxNQUFNLEVBQUU7SUFBQSxlQUFBLE9BQUEsZ0JBQUE7SUFBQSxlQUFBO0lBQ2hCLElBQUksTUFBTSxFQUFFO01BQ1IsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTTtNQUN2QixDQUFDLE1BQ0k7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO01BQzdCO0lBQ0o7RUFDSjtFQUFDLFlBQUEsQ0FBQSxnQkFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRUQsU0FBQSxTQUFBLEVBQVc7TUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEM7RUFBQztJQUFBLEdBQUE7SUFBQSxLQUFBLEVBQ0QsU0FBQSxPQUFBLEVBQVM7TUFDTCxPQUFPO1FBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQztNQUNoQixDQUFDO0lBQ0w7RUFBQztJQUFBLEdBQUE7SUFBQSxLQUFBLEVBQ0QsU0FBQSxNQUFBLEVBQVE7TUFDSixJQUFNLEdBQUcsR0FBRyxJQUFJLGdCQUFnQixDQUFDLENBQUM7TUFDbEM7TUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQzlCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBRS9CLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7TUFDMUIsT0FBTyxHQUFHO0lBQ2Q7RUFBQztFQUFBLE9BQUEsZ0JBQUE7QUFBQTtBQUFBLElBRVEsdUJBQXVCLEdBQUEsT0FBQSxDQUFBLHVCQUFBO0VBQ2hDLFNBQUEsd0JBQVksSUFBSSxFQUFFO0lBQUEsZUFBQSxPQUFBLHVCQUFBO0lBQUEsZUFBQTtJQUFBLGVBQUE7SUFBQSxlQUFBO0lBQUEsZUFBQTtJQUNkLElBQUksSUFBSSxFQUFFO01BQ04sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztNQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO01BQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7SUFDM0I7RUFDSjtFQUFDLFlBQUEsQ0FBQSx1QkFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBS0QsU0FBQSxPQUFBLEVBQVM7TUFDTCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSTtNQUN6QixDQUFDO0lBQ0w7RUFBQztJQUFBLEdBQUE7SUFBQSxLQUFBLEVBQ0QsU0FBQSxTQUFBLEVBQVc7TUFDUCxVQUFBLE1BQUEsQ0FBVSxJQUFJLENBQUMsQ0FBQyxPQUFBLE1BQUEsQ0FBSSxJQUFJLENBQUMsQ0FBQyxPQUFBLE1BQUEsQ0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBQSxNQUFBLENBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNO0lBQ3hFO0VBQUM7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUNELFNBQUEsTUFBQSxFQUFRO01BQ0osT0FBTyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQztJQUM1QztFQUFDO0VBQUEsT0FBQSx1QkFBQTtBQUFBO0FBQUEsSUFFUSxrQkFBa0IsR0FBQSxPQUFBLENBQUEsa0JBQUEsMEJBQUEsa0JBQUE7RUFBQSxTQUFBLENBQUEsa0JBQUEsRUFBQSxrQkFBQTtFQUMzQixTQUFBLG1CQUFZLE1BQU0sRUFBRTtJQUFBLElBQUEsS0FBQTtJQUFBLGVBQUEsT0FBQSxrQkFBQTtJQUNoQixLQUFBLEdBQUEsVUFBQSxPQUFBLGtCQUFBO0lBQ0EsSUFBSSxNQUFNLEVBQUU7TUFDUjtNQUNBLElBQUksTUFBTSxZQUFZLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQ3BELEtBQUEsQ0FBSyxLQUFLLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FFdkQsS0FBQSxDQUFLLEtBQUssR0FBRyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztJQUN4RDtJQUFDLE9BQUEsS0FBQTtFQUNMO0VBQUMsWUFBQSxDQUFBLGtCQUFBO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFDRCxTQUFBLFNBQUEsRUFBVztNQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQztFQUFDO0VBQUEsT0FBQSxrQkFBQTtBQUFBLEVBYm1DLGdCQUFnQjs7Ozs7Ozs7O0FDM0V4RCxJQUFBLFlBQUEsR0FBQSxPQUFBO0FBQTBHLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxhQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSx1QkFBQSxJQUFBLFFBQUEsSUFBQSx5QkFBQSxjQUFBLHdFQUFBLElBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsUUFBQSxVQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEsT0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQSxpQkFBQSxRQUFBLG1CQUFBLFdBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsR0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxRQUFBLFlBQUEsUUFBQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsS0FBQSxXQUFBLEdBQUE7QUFBQSxTQUFBLGVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxZQUFBLENBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENB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QztBQUFDLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FDYSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TnRCLElBQUEsWUFBQSxHQUFBLE9BQUE7QUFBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFlBQUEsRUFBQSxPQUFBLFdBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxrQkFBQSxHQUFBO0VBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsWUFBQSxFQUFBLEdBQUE7RUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLElBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxZQUFBLENBQUEsR0FBQTtFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsR0FBQSxXQUFBLElBQUE7TUFBQSxPQUFBLFlBQUEsQ0FBQSxHQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0EsSUFBQSxRQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxjQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQXdDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FFekIseUJBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgY3NzRmlsdGVycywgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1NTRmlsdGVycyB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBmaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCguLi5maWx0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIC8vIOaJgOacieaUr+aMgeeahOa7pOmVnFxuICAgIGZpbHRlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICAvKipcbiAgICAgKiDnu5HlrprnmoRkb23lkKblhYPntKDlr7nosaFcbiAgICAgKi9cbiAgICB0YXJnZXQ7XG4gICAgLyoqXG4gICAgICog5b2T5YmN5ruk6ZWc5Liq5pWwXG4gICAgICovXG4gICAgZ2V0IGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5qC55o2u5ruk6ZWc5ZCN6I635Y+W5ruk6ZWc5a+56LGhXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIGlmIChmLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5zcGxpY2UoMCwgdGhpcy5maWx0ZXJzLmxlbmd0aCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOa7pOmVnFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICBhZGQoZmlsdGVyLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGYsIG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlck9iaiA9IGNzc0ZpbHRlcnNbZmlsdGVyXTtcbiAgICAgICAgICAgIGlmICghZmlsdGVyT2JqKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtmaWx0ZXJ95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyID0gZmlsdGVyT2JqLmNyZWF0ZShvcHRpb24gfHwgZmlsdGVyT2JqLm9wdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyLm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0c0ZpbHRlciA9IHRoaXMuZ2V0KGZpbHRlci5uYW1lKTtcbiAgICAgICAgICAgIGlmIChleGlzdHNGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2ZpbHRlci5uYW1lfeW3sue7j+WtmOWcqOa7pOmVnOmbhuWQiOS4re+8jOS4jeiDvemHjeWkjWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgRmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChmaWx0ZXIpO1xuICAgICAgICAgICAgdGhpcy5hcHBseSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpbHRlci5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoZmlsdGVyLm5hbWUsIGZpbHRlci5vcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpOa7pOmVnFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICByZW1vdmUoZmlsdGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoZik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5maWx0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiB0aGlzLmZpbHRlcnNbaV0ubmFtZSA9PT0gZmlsdGVyKSB8fCB0aGlzLmZpbHRlcnNbaV0gPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5KCk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGlmICh0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goZi50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZi50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKHIpXG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnlJ/mlYhcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHkodGFyZ2V0ID0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuc3R5bGUpXG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuZmlsdGVyID0gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbn1cbiIsIi8qKlxuICog5ruk6ZWc5pWw5o2uXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWx0ZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiDlkI3np7BcbiAgICAgKi9cbiAgICBuYW1lO1xuICAgIC8qKlxuICAgICAqIOS4reaWh+WQjVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lO1xuICAgIC8qKlxuICAgICAqIOmFjee9ruWAvFxuICAgICAqL1xuICAgIG9wdGlvbjtcbn1cbmV4cG9ydCBjbGFzcyBCYXNlRmlsdGVyT3B0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWU7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgQmFzZUZpbHRlck9wdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuY2xvbmUpXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0aGlzLnZhbHVlLmNsb25lKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBkYXRhLng7XG4gICAgICAgICAgICB0aGlzLnkgPSBkYXRhLnk7XG4gICAgICAgICAgICB0aGlzLmJsdXIgPSBkYXRhLmJsdXI7XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB4O1xuICAgIHk7XG4gICAgYmx1cjtcbiAgICBjb2xvcjtcbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgICBibHVyOiB0aGlzLmJsdXIgfHwgJycsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvciB8fCAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9ICR7dGhpcy5ibHVyIHx8IDB9ICR7dGhpcy5jb2xvciB8fCAnIzAwMCd9YDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUodGhpcyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYWRvd0ZpbHRlck9wdGlvbiBleHRlbmRzIEJhc2VGaWx0ZXJPcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgU2hhZG93RmlsdGVyT3B0aW9uIHx8IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpbHRlckRhdGEsIEJhc2VGaWx0ZXJPcHRpb24sIFNoYWRvd0ZpbHRlck9wdGlvbiwgU2hhZG93RmlsdGVyT3B0aW9uVmFsdWUgfSBmcm9tICcuL2ZpbHRlclR5cGVzJztcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRmlsdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBvcHRpb24uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uLm9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb24gaW5zdGFuY2VvZiBCYXNlRmlsdGVyT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uID0gbmV3IEJhc2VGaWx0ZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuYW1lO1xuICAgIGRpc3BsYXlOYW1lO1xuICAgIC8qKlxuICAgICog6YWN572u5YC8XG4gICAgKi9cbiAgICBvcHRpb247XG4gICAgLyoqXG4gICAgICog5Yib5bu65ZCM57G75Z6L55qE5ruk6ZWcXG4gICAgICogQHBhcmFtIG9wdGlvbiDmu6TplZzlj4LmlbBcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb24gPSB0aGlzLm9wdGlvbiwgbmFtZSA9IHRoaXMubmFtZSwgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCBmaWx0ZXJUeXBlID0gRmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmlsdGVyRGF0YSgpO1xuICAgICAgICBkYXRhLm5hbWUgPSBuYW1lO1xuICAgICAgICBkYXRhLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGF0YS5vcHRpb24gPSBvcHRpb24uY2xvbmUgPyBvcHRpb24uY2xvbmUoKSA6IG9wdGlvbjtcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IGZpbHRlclR5cGUoZGF0YSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIC8vIOi9rOaIkGpzb25cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUgfHwgJycsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSB8fCAnJyxcbiAgICAgICAgICAgIG9wdGlvbjogdGhpcy5vcHRpb24udG9KU09OKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5uYW1lKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke3RoaXMub3B0aW9uLnRvU3RyaW5nKCl9KWA7XG4gICAgfVxufVxuLyoqXG4gKiDlj43oibLmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIEludmVydEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMSB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2ludmVydCc7XG4gICAgZGlzcGxheU5hbWUgPSAn5Y+N6ImyJztcbn1cbi8qKlxuICog5qih57OK5ruk6ZWcIHZhbHVlOiA0cHhcbiAqL1xuZXhwb3J0IGNsYXNzIEJsdXJGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6ICc0cHgnIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnYmx1cic7XG4gICAgZGlzcGxheU5hbWUgPSAn5qih57OKJztcbn1cbi8qKlxuICog5Lqu5bqm5ruk6ZWcIHZhbHVlOiAwLTEwMFxuICovXG5leHBvcnQgY2xhc3MgQnJpZ2h0bmVzc0ZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMiB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2JyaWdodG5lc3MnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+S6ruW6pic7XG59XG4vKipcbiAqIOeBsOW6pua7pOmVnCB2YWx1ZTogMC0xXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmF5c2NhbGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBPYmplY3QuYXNzaWduKHsgdmFsdWU6IDEgfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdncmF5c2NhbGUnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+eBsOW6pic7XG59XG4vKipcbiAqIOWkjeWPpOa7pOmVnCB2YWx1ZTogMC0xXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXBpYUZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oeyB2YWx1ZTogMSB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ3NlcGlhJztcbiAgICBkaXNwbGF5TmFtZSA9ICflpI3lj6QnO1xufVxuLyoqXG4gKiDml4vovazmu6TplZwgdmFsdWU6IDAtMzYwZGVnIOinkuW6piDmiJYg5byn5bqmIDAtMipNYXRoLlBJIHJhZFxuICovXG5leHBvcnQgY2xhc3MgSHVlUm90YXRlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAnMjQwZGVnJyB9LCBvcHRpb24pO1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgIH1cbiAgICBuYW1lID0gJ2h1ZS1yb3RhdGUnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+aXi+i9rCc7XG59XG4vKipcbiAqIOmAj+aYjuW6piB2YWx1ZTogMC0xXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGFjaXR5RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAwLjggfSwgb3B0aW9uKTtcbiAgICAgICAgc3VwZXIob3B0aW9uKTtcbiAgICB9XG4gICAgbmFtZSA9ICdvcGFjaXR5JztcbiAgICBkaXNwbGF5TmFtZSA9ICfpgI/mmI7luqYnO1xufVxuLyoqXG4gKiDpmLTlvbHmu6TplZxcbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BTaGFkb3dGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAoIW9wdGlvbilcbiAgICAgICAgICAgIG9wdGlvbiA9IG5ldyBTaGFkb3dGaWx0ZXJPcHRpb24oKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvblZhbHVlKG9wdGlvbi52YWx1ZSB8fCB7XG4gICAgICAgICAgICB4OiAnMCcsXG4gICAgICAgICAgICB5OiAnMCcsXG4gICAgICAgICAgICBibHVyOiAnNHB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCdcbiAgICAgICAgfSk7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnZHJvcC1zaGFkb3cnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+mYtOW9sSc7XG4gICAgLyoqXG4gICAgICAqIOWIm+W7uuWQjOexu+Wei+eahOa7pOmVnFxuICAgICAgKiBAcGFyYW0gb3B0aW9uIOa7pOmVnOWPguaVsFxuICAgICAgKiBAcmV0dXJuc1xuICAgICAgKi9cbiAgICBjcmVhdGUob3B0aW9uID0gdGhpcy5vcHRpb24sIG5hbWUgPSB0aGlzLm5hbWUsIGRpc3BsYXlOYW1lID0gdGhpcy5kaXNwbGF5TmFtZSkge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IFNoYWRvd0ZpbHRlck9wdGlvbihvcHRpb24pO1xuICAgICAgICBjb25zdCBvYmogPSBuZXcgRHJvcFNoYWRvd0ZpbHRlcihkYXRhKTtcbiAgICAgICAgb2JqLm5hbWUgPSBuYW1lO1xuICAgICAgICBvYmouZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG4vKipcbiAqIOWvueavlOW6pua7pOmVnCAgdmFsdWU6IDJcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRyYXN0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAyIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnY29udHJhc3QnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+WvueavlOW6pic7XG59XG4vKipcbiAqIOmlseWSjOW6pua7pOmVnCAgdmFsdWU6IDNcbiAqL1xuZXhwb3J0IGNsYXNzIFNhdHVyYXRlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgb3B0aW9uID0gT2JqZWN0LmFzc2lnbih7IHZhbHVlOiAzIH0sIG9wdGlvbik7XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgfVxuICAgIG5hbWUgPSAnc2F0dXJhdGUnO1xuICAgIGRpc3BsYXlOYW1lID0gJ+mlseWSjOW6pic7XG59XG5jb25zdCBmaWx0ZXJzID0ge1xuICAgIC8qKlxuICAgICAqIOWPjeiJsua7pOmVnFxuICAgICAqL1xuICAgIGludmVydDogbmV3IEludmVydEZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOS6ruW6plxuICAgICAqL1xuICAgIGJsdXI6IG5ldyBCbHVyRmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5Lqu5bqmXG4gICAgICovXG4gICAgYnJpZ2h0bmVzczogbmV3IEJyaWdodG5lc3NGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDngbDluqZcbiAgICAgKi9cbiAgICBncmF5c2NhbGU6IG5ldyBHcmF5c2NhbGVGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDlpI3lj6RcbiAgICAgKi9cbiAgICBzZXBpYTogbmV3IFNlcGlhRmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog5peL6L2s5ruk6ZWcXG4gICAgICovXG4gICAgaHVlUm90YXRlOiBuZXcgSHVlUm90YXRlRmlsdGVyKCksXG4gICAgLyoqXG4gICAgICog6Zi05b2xXG4gICAgICovXG4gICAgZHJvcFNoYWRvdzogbmV3IERyb3BTaGFkb3dGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDpgI/mmI7luqZcbiAgICAgKi9cbiAgICBvcGFjaXR5OiBuZXcgT3BhY2l0eUZpbHRlcigpLFxuICAgIC8qKlxuICAgICAqIOWvueavlOW6plxuICAgICAqL1xuICAgIGNvbnRyYXN0OiBuZXcgQ29udHJhc3RGaWx0ZXIoKSxcbiAgICAvKipcbiAgICAgKiDppbHlkozluqZcbiAgICAgKi9cbiAgICBzYXR1cmF0ZTogbmV3IFNhdHVyYXRlRmlsdGVyKCksXG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVycztcbiIsImV4cG9ydCAqIGZyb20gJy4vZmlsdGVyVHlwZXMnO1xuaW1wb3J0IGZpbHRlcnMgZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCBDU1NGaWx0ZXIgZnJvbSAnLi9maWx0ZXJNYW5hZ2VyJztcbmV4cG9ydCB7IGZpbHRlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IENTU0ZpbHRlcjtcbiJdfQ==
