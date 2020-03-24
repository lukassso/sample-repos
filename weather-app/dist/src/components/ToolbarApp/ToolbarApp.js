"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pricing;

var _react = _interopRequireDefault(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      }
    },
    appBar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbar: {
      flexWrap: "wrap"
    },
    toolbarTitle: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
      backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[700]
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: theme.spacing(2)
    },
    footer: _defineProperty({
      borderTop: "1px solid ".concat(theme.palette.divider),
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.up("sm"), {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    })
  };
});

function Pricing() {
  var classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_AppBar.default, {
    position: "static",
    color: "default",
    elevation: 0,
    className: classes.appBar
  }, _react.default.createElement(_Toolbar.default, {
    className: classes.toolbar
  }, _react.default.createElement(_Typography.default, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle
  }, "Company name"), _react.default.createElement("nav", null, _react.default.createElement(_Link.default, {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link
  }, "Features"), _react.default.createElement(_Link.default, {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link
  }, "Enterprise"), _react.default.createElement(_Link.default, {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link
  }, "Support")), _react.default.createElement(_Button.default, {
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link
  }, "Login"))));
}

//# sourceMappingURL=ToolbarApp.js.map