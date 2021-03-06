'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderFab = _this.renderFab.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var node = _props.node;
      var fab = _props.fab;
      var modal = _props.modal;
      var disabled = _props.disabled;
      var waves = _props.waves;

      var props = _objectWithoutProperties(_props, ['className', 'node', 'fab', 'modal', 'disabled', 'waves']);

      var C = node || 'button';
      var classes = {
        btn: true,
        disabled: disabled,
        'waves-effect': waves
      };

      if (_constants2.default.WAVES.indexOf(waves) > -1) {
        classes['waves-' + waves] = true;
      }

      _constants2.default.STYLES.forEach(function (style) {
        classes['btn-' + style] = _this2.props[style];
      });

      if (modal) {
        classes['modal-action'] = true;
        classes['modal-' + modal] = true;
      }
      if (fab) {
        return this.renderFab((0, _classnames2.default)(classes, className));
      } else {
        return _react2.default.createElement(
          C,
          _extends({}, props, { className: (0, _classnames2.default)(classes, className) }),
          this.renderIcon(),
          this.props.children
        );
      }
    }
  }, {
    key: 'renderFab',
    value: function renderFab(className) {
      return _react2.default.createElement(
        'div',
        { className: 'fixed-action-btn' },
        _react2.default.createElement(
          'a',
          { className: className },
          this.renderIcon()
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.createElement(
              'li',
              { key: (0, _idgen2.default)() },
              child
            );
          })
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      if (this.props.icon) {
        return _react2.default.createElement(
          _Icon2.default,
          null,
          this.props.icon
        );
      } else {
        return null;
      }
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  disabled: _react2.default.PropTypes.bool,
  /**
   * Enable the floating style
   */
  floating: _react2.default.PropTypes.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   * @default vertical
   */
  fab: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * The icon to display, if specified it will create a button with the material icon
   */
  icon: _react2.default.PropTypes.string,
  large: _react2.default.PropTypes.bool,
  modal: _react2.default.PropTypes.oneOf(['close', 'confirm']),
  node: _react2.default.PropTypes.node,
  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _react2.default.PropTypes.string,
  waves: _react2.default.PropTypes.oneOf(_constants2.default.WAVES)
};

exports.default = Button;