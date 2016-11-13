'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextFieldUnderline = require('material-ui/TextField/TextFieldUnderline');

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _TextFieldHint = require('material-ui/TextField/TextFieldHint');

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = require('material-ui/TextField/TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _AutoComplete = require('material-ui/AutoComplete/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _transitions = require('material-ui/styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _colors = require('material-ui/styles/colors');

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Notice: Some code was adapted from Material-UI's text field.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      hintColor = _context$muiTheme$tex.hintColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: 'text'
    },
    input: {
      padding: 0,
      marginTop: 0,
      marginBottom: 24,
      lineHeight: '32px',
      height: 32,
      position: 'relative',
      display: 'inline-block',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: props.disabled ? 'not-allowed' : 'initial',
      font: 'inherit',
      appearance: 'textfield', // Improve type search style.
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated style).
      float: 'left'
    },
    error: {
      position: 'absolute',
      bottom: -10,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: hintColor,
      pointerEvents: 'none',
      top: 28
    },
    floatingLabelFocusStyle: {
      transform: 'scale(0.75) translate(0, -36px)'
    }
  };

  var hasValue = (props.value || state.chips).length > 0 || state.inputValue.length > 0;
  if (hasValue) {
    styles.floatingLabel.color = (0, _colorManipulator.fade)(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
  }

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

var defaultChipRenderer = function defaultChipRenderer(_ref, key) {
  var value = _ref.value,
      text = _ref.text,
      isFocused = _ref.isFocused,
      isDisabled = _ref.isDisabled,
      handleClick = _ref.handleClick,
      handleRequestDelete = _ref.handleRequestDelete;
  return _react2.default.createElement(
    _Chip2.default,
    {
      key: key,
      style: { margin: '8px 8px 0 0', float: 'left', pointerEvents: isDisabled ? 'none' : undefined },
      backgroundColor: isFocused ? _colors.blue300 : null,
      onTouchTap: handleClick,
      onRequestDelete: handleRequestDelete
    },
    text
  );
};

var ChipInput = function (_React$Component) {
  _inherits(ChipInput, _React$Component);

  function ChipInput(props) {
    _classCallCheck(this, ChipInput);

    var _this = _possibleConstructorReturn(this, (ChipInput.__proto__ || Object.getPrototypeOf(ChipInput)).call(this, props));

    _this.state = {
      isFocused: false,
      errorText: undefined,
      isClean: true,
      chips: [],
      focusedChip: null,
      inputValue: ''
    };

    _this.handleInputBlur = function (event) {
      if (!_this.autoComplete || !_this.autoComplete.refs.menu) {
        if (_this.props.clearOnBlur) {
          _this.setState({ inputValue: '' });
        }

        _this.setState({ isFocused: false });

        if (_this.props.onBlur) _this.props.onBlur(event);
      }
    };

    _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    _this.handleKeyDown = function (event) {
      if (_this.props.newChipKeyCodes.indexOf(event.keyCode) >= 0) {
        _this.handleAddChip(event.target.value);
      } else if (event.keyCode === 8 || event.keyCode === 46) {
        if (event.target.value === '') {
          var chips = _this.props.value || _this.state.chips;
          if (_this.state.focusedChip == null && event.keyCode === 8) {
            _this.setState({ focusedChip: chips[chips.length - 1] });
          } else if (_this.state.focusedChip) {
            var index = chips.indexOf(_this.state.focusedChip);
            _this.handleDeleteChip(_this.state.focusedChip);
            if (event.keyCode === 8 && index > 0) {
              _this.setState({ focusedChip: chips[index - 1] });
            } else if (event.keyCode === 46 && index < chips.length - 1) {
              _this.setState({ focusedChip: chips[index + 1] });
            }
          }
        }
      } else if (event.keyCode === 37) {
        var _chips = _this.props.value || _this.state.chips;
        var _index = _chips.indexOf(_this.state.focusedChip);
        if (_index > 0) {
          _this.setState({ focusedChip: _chips[_index - 1] });
        }
      } else if (event.keyCode === 39) {
        var _chips2 = _this.props.value || _this.state.chips;
        var _index2 = _chips2.indexOf(_this.state.focusedChip);
        if (_index2 >= 0 && _index2 < _chips2.length - 1) {
          _this.setState({ focusedChip: _chips2[_index2 + 1] });
        } else {
          _this.setState({ focusedChip: null });
        }
      } else {
        _this.setState({ focusedChip: null });
      }
    };

    _this.handleKeyUp = function (event) {
      if (_this.props.newChipKeyCodes.indexOf(event.keyCode) < 0) {
        _this.setState({ inputValue: event.target.value });
      } else {
        _this.setState({ inputValue: '' });
      }
    };

    if (props.defaultValue) {
      _this.state.chips = props.defaultValue;
    }
    return _this;
  }

  _createClass(ChipInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText;


      this.setState({
        errorText: this.props.errorText
      });

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var handleKeyDown = this.autoComplete.handleKeyDown;
      this.autoComplete.handleKeyDown = function (event) {
        if (_this2.props.newChipKeyCodes.indexOf(event.keyCode) >= 0) {
          _this2.handleAddChip(event.target.value);
          _this2.autoComplete.setState({ searchText: '' });
          _this2.autoComplete.forceUpdate();
        } else {
          handleKeyDown(event);
        }
      };

      this.autoComplete.handleItemTouchTap = function (event, child) {
        var dataSource = _this2.autoComplete.props.dataSource;

        var index = parseInt(child.key, 10);
        var chosenRequest = dataSource[index];
        //this.handleAddChip(chosenRequest)

        _this2.autoComplete.setState({
          searchText: ''
        });
        _this2.autoComplete.forceUpdate();
        _this2.autoComplete.close();

        setTimeout(function () {
          return _this2.focus();
        }, 1);
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ focusedChip: null });
      }
      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) this.getInputNode().blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.autoComplete) this.getInputNode().focus();
      if (this.state.focusedChip) {
        this.setState({ focusedChip: null });
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) this.getInputNode().select();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.autoComplete.refs.searchTextField.getInputNode();
    }
  }, {
    key: 'handleAddChip',
    value: function handleAddChip(chip) {
      var _this3 = this;

      this.autoComplete.setState({ searchText: '' });
      var chips = this.props.value || this.state.chips;

      if (this.props.dataSourceConfig) {
        if (typeof chip === 'string') {
          var _chip;

          chip = (_chip = {}, _defineProperty(_chip, this.props.dataSourceConfig.text, chip), _defineProperty(_chip, this.props.dataSourceConfig.value, chip), _chip);
        }

        if (!chips.find(function (c) {
          return c[_this3.props.dataSourceConfig.value] === chip[_this3.props.dataSourceConfig.value];
        })) {
          if (this.props.value) {
            if (this.props.onRequestAdd) {
              this.props.onRequestAdd(chip);
            }
          } else {
            this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
            if (this.props.onChange) {
              this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
            }
          }
        }
      } else {
        if (chip.trim().length > 0) {
          if (chips.indexOf(chip) === -1) {
            if (this.props.value) {
              if (this.props.onRequestAdd) {
                this.props.onRequestAdd(chip);
              }
            } else {
              this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
              if (this.props.onChange) {
                this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
              }
            }
          }
        }
      }
    }
  }, {
    key: 'handleDeleteChip',
    value: function handleDeleteChip(chip) {
      var _this4 = this;

      if (this.props.value) {
        if (this.props.onRequestDelete) {
          this.props.onRequestDelete(chip);
        }
      } else {
        if (this.props.dataSourceConfig) {
          var chips = this.state.chips.filter(function (c) {
            return c[_this4.props.dataSourceConfig.value] !== chip;
          });
          if (chips.length !== this.state.chips.length) {
            this.setState({
              chips: chips,
              focusedChip: this.state.focusedChip && this.state.focusedChip[this.props.dataSourceConfig.value] === chip ? null : this.state.focusedChip
            });
            if (this.props.onChange) {
              this.props.onChange(chips);
            }
          }
        } else {
          var _chips3 = this.state.chips.filter(function (c) {
            return c !== chip;
          });
          if (_chips3.length !== this.state.chips.length) {
            this.setState({
              chips: _chips3,
              focusedChip: this.state.focusedChip === chip ? null : this.state.focusedChip
            });
            if (this.props.onChange) {
              this.props.onChange(_chips3);
            }
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          dataSourceConfig = _props2.dataSourceConfig,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          inputStyle = _props2.inputStyle,
          clearOnBlur = _props2.clearOnBlur,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          _props2$defaultValue = _props2.defaultValue,
          defaultValue = _props2$defaultValue === undefined ? [] : _props2$defaultValue,
          filter = _props2.filter,
          value = _props2.value,
          dataSource = _props2.dataSource,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          onRequestAdd = _props2.onRequestAdd,
          onRequestDelete = _props2.onRequestDelete,
          _props2$chipRenderer = _props2.chipRenderer,
          chipRenderer = _props2$chipRenderer === undefined ? defaultChipRenderer : _props2$chipRenderer,
          newChipKeyCodes = _props2.newChipKeyCodes,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'dataSourceConfig', 'disabled', 'errorStyle', 'errorText', 'fullWidth', 'hintText', 'hintStyle', 'inputStyle', 'clearOnBlur', 'onBlur', 'onChange', 'onFocus', 'style', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'defaultValue', 'filter', 'value', 'dataSource', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelStyle', 'floatingLabelText', 'onRequestAdd', 'onRequestDelete', 'chipRenderer', 'newChipKeyCodes']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = this.uniqueId;

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this5.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        onKeyDown: this.handleKeyDown
      };

      var inputStyleMerged = Object.assign(styles.input, inputStyle);

      var hasInput = (this.props.value || this.state.chips).length > 0 || this.state.inputValue.length > 0;
      var showHintText = hintText && !hasInput;
      var shrinkFloatingLabel = floatingLabelText && (hasInput || this.state.isFocused || floatingLabelFixed);

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.error) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: Object.assign(styles.floatingLabel, this.props.floatingLabelStyle),
          shrinkStyle: Object.assign(styles.floatingLabelFocusStyle, this.props.floatingLabelFocusStyle),
          htmlFor: inputId,
          shrink: shrinkFloatingLabel,
          disabled: disabled
        },
        floatingLabelText
      );

      var overrideRootStyles = {};
      if (floatingLabelText) {
        overrideRootStyles.marginTop = 14;
      }
      if (fullWidth) {
        overrideRootStyles.width = '100%';
      }
      if (disabled) {
        overrideRootStyles.cursor = 'not-allowed';
      }

      var chips = this.props.value || this.state.chips;
      var autoCompleteData = dataSourceConfig ? (dataSource || []).filter(function (value) {
        return !chips.some(function (c) {
          return c[dataSourceConfig.value] === value[dataSourceConfig.value];
        });
      }) : (dataSource || []).filter(function (value) {
        return chips.indexOf(value) < 0;
      });

      var actualFilter = other.openOnFocus ? function (search, key) {
        return search === '' || filter(search, key);
      } : filter;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: prepareStyles(Object.assign(styles.root, style, overrideRootStyles)),
          onTouchTap: function onTouchTap() {
            return _this5.focus();
          }
        },
        _react2.default.createElement(
          'div',
          null,
          floatingLabelTextElement,
          _react2.default.createElement(
            'div',
            { style: { marginTop: floatingLabelText ? 12 : 0 } },
            chips.map(function (tag, i) {
              var value = dataSourceConfig ? tag[dataSourceConfig.value] : tag;
              return chipRenderer({
                value: value,
                text: dataSourceConfig ? tag[dataSourceConfig.text] : tag,
                isDisabled: disabled,
                isFocused: _this5.state.focusedChip === value,
                handleClick: function handleClick() {
                  return _this5.setState({ focusedChip: value });
                },
                handleRequestDelete: function handleRequestDelete() {
                  return _this5.handleDeleteChip(value);
                }
              }, i);
            })
          )
        ),
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: showHintText && !(floatingLabelText && !floatingLabelFixed && !this.state.isFocused),
          style: Object.assign({ bottom: 20, pointerEvents: 'none' }, hintStyle),
          text: hintText
        }) : null,
        _react2.default.createElement(_AutoComplete2.default, _extends({}, other, inputProps, {
          filter: actualFilter,
          style: inputStyleMerged,
          dataSource: autoCompleteData,
          dataSourceConfig: dataSourceConfig,
          menuProps: {
            onChange: function onChange(event, input) {
              return _this5.handleAddChip(input);
            }
          },
          searchText: this.state.inputValue,
          underlineShow: false,
          onKeyUp: this.handleKeyUp,
          ref: function ref(_ref2) {
            return _this5.autoComplete = _ref2;
          }
        })),
        _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }),
        errorTextElement
      );
    }
  }]);

  return ChipInput;
}(_react2.default.Component);

ChipInput.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};


ChipInput.propTypes = {
  style: _react.PropTypes.object,
  floatingLabelText: _react.PropTypes.node,
  hintText: _react.PropTypes.node,
  dataSourceConfig: _react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string.isRequired
  }),
  disabled: _react.PropTypes.bool,
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
  onRequestAdd: _react.PropTypes.func,
  onRequestDelete: _react.PropTypes.func,
  dataSource: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
  onUpdateInput: _react.PropTypes.func,
  openOnFocus: _react.PropTypes.bool,
  chipRenderer: _react.PropTypes.func,
  newChipKeyCodes: _react.PropTypes.arrayOf(_react.PropTypes.number),
  clearOnBlur: _react.PropTypes.bool
};

ChipInput.defaultProps = {
  filter: _AutoComplete2.default.caseInsensitiveFilter,
  newChipKeyCodes: [13],
  clearOnBlur: true
};

exports.default = ChipInput;