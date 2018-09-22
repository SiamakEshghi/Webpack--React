(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!../node_modules/postcss-loader/src/index.js!./stylesheets/main.scss":
/*!***************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!../node_modules/postcss-loader/src!./stylesheets/main.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: red; }\n\nh1 {\n  color: #7fffd4; }\n", ""]);

// exports


/***/ }),

/***/ "./action/index.js":
/*!*************************!*\
  !*** ./action/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.action1 = undefined;

var _actionType = __webpack_require__(/*! ./actionType */ "./action/actionType.js");

var action1 = exports.action1 = function action1(item) {
    return function (dispatch) {
        dispatch({ type: _actionType.TYPE_1, item: item });
    };
};

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

__webpack_require__(/*! ../stylesheets/main.scss */ "./stylesheets/main.scss");

var _action = __webpack_require__(/*! ../action */ "./action/index.js");

var actions = _interopRequireWildcard(_action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            bitImage: null
        }, _this.componentDidMount = function () {
            //just for test
            _this.props.action1('Hello');
        }, _this.showImage = function () {
            __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./BitcoinImage */ "./components/BitcoinImage.js", 7)).then(function (mod) {
                _this.setState({
                    bitImage: mod.default
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            console.log(this.props.item);
            var BitcoinImage = this.state.bitImage;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Home'
                ),
                BitcoinImage !== null ? _react2.default.createElement(BitcoinImage, null) : _react2.default.createElement(
                    'button',
                    { onClick: this.showImage },
                    'Show Image'
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
    var red = _ref2.red;
    var item = red.item;


    return { item: item };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Home);

/***/ }),

/***/ "./stylesheets/main.scss":
/*!*******************************!*\
  !*** ./stylesheets/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/src!./main.scss */ "../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!../node_modules/postcss-loader/src/index.js!./stylesheets/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXNoZWV0cy9tYWluLnNjc3M/NjljNSJdLCJuYW1lcyI6WyJhY3Rpb24xIiwiaXRlbSIsImRpc3BhdGNoIiwidHlwZSIsIlRZUEVfMSIsImFjdGlvbnMiLCJIb21lIiwic3RhdGUiLCJiaXRJbWFnZSIsImNvbXBvbmVudERpZE1vdW50IiwicHJvcHMiLCJzaG93SW1hZ2UiLCJ0aGVuIiwibW9kIiwic2V0U3RhdGUiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIkJpdGNvaW5JbWFnZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsaUdBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxTQUFTLG9CQUFvQixFQUFFLFFBQVEsbUJBQW1CLEVBQUU7O0FBRW5GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFdBQU8sb0JBQVk7QUFDZkMsaUJBQVMsRUFBRUMsTUFBTUMsa0JBQVIsRUFBZ0JILFVBQWhCLEVBQVQ7QUFDSCxLQUZEO0FBR0gsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlJLE87Ozs7Ozs7Ozs7OztJQUVOQyxJOzs7Ozs7Ozs7Ozs7OztzTEFDRkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBRE4sUyxRQUdSQyxpQixHQUFvQixZQUFNO0FBQ3RCO0FBQ0Esa0JBQUtDLEtBQUwsQ0FBV1YsT0FBWCxDQUFtQixPQUFuQjtBQUNILFMsUUFDRFcsUyxHQUFZLFlBQU07QUFDZCxxSkFDQ0MsSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNYLHNCQUFLQyxRQUFMLENBQWM7QUFDVk4sOEJBQVVLLElBQUlFO0FBREosaUJBQWQ7QUFHSCxhQUxEO0FBTUgsUzs7Ozs7aUNBQ1E7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLUCxLQUFMLENBQVdULElBQXZCO0FBREssZ0JBRWFpQixZQUZiLEdBRThCLEtBQUtYLEtBRm5DLENBRUdDLFFBRkg7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVNVSxpQ0FBaUIsSUFBakIsR0FDQSw4QkFBQyxZQUFELE9BREEsR0FFQTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxLQUFLUCxTQUF0QjtBQUFBO0FBQUE7QUFKTixhQURKO0FBVUg7Ozs7RUE3QmNRLGdCOztBQStCbkIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixRQUFhO0FBQUEsUUFBVkMsR0FBVSxTQUFWQSxHQUFVO0FBQUEsUUFDekJwQixJQUR5QixHQUNoQm9CLEdBRGdCLENBQ3pCcEIsSUFEeUI7OztBQUdqQyxXQUFPLEVBQUVBLFVBQUYsRUFBUDtBQUNILENBSkQ7O2tCQU1lLHlCQUFRbUIsZUFBUixFQUF5QmYsT0FBekIsRUFBbUNDLElBQW5DLEM7Ozs7Ozs7Ozs7OztBQ3pDZixjQUFjLG1CQUFPLENBQUMsd1JBQWtKOztBQUV4Syw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsdUdBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6IjIuMzQ5MzM1MzdhNjQ3NTU1NGI5YjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJlZDsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjN2ZmZmQ0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHsgVFlQRV8xIH0gZnJvbSAnLi9hY3Rpb25UeXBlJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjEgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRV8xLCBpdGVtIH0pXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICcuLi9zdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb24nO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgYml0SW1hZ2U6IG51bGxcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgIC8vanVzdCBmb3IgdGVzdFxuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbjEoJ0hlbGxvJyk7XG4gICAgfVxuICAgIHNob3dJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgaW1wb3J0KCcuL0JpdGNvaW5JbWFnZScpXG4gICAgICAgIC50aGVuKChtb2QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJpdEltYWdlOiBtb2QuZGVmYXVsdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLml0ZW0pO1xuICAgICAgICBjb25zdCB7IGJpdEltYWdlOiBCaXRjb2luSW1hZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgICAgICAgICB7IEJpdGNvaW5JbWFnZSAhPT0gbnVsbCBcbiAgICAgICAgICAgICAgICA/IDxCaXRjb2luSW1hZ2UgLz5cbiAgICAgICAgICAgICAgICA6IDxidXR0b24gb25DbGljaz17dGhpcy5zaG93SW1hZ2V9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgSW1hZ2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHJlZCB9KSA9PiB7XG4gICAgY29uc3QgeyBpdGVtIH0gPSByZWQ7XG5cbiAgICByZXR1cm4geyBpdGVtIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zICkoSG9tZSk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==