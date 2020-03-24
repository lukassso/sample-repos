"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pricing;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = require("@material-ui/core/styles");

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Copyright() {
  return _react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", _react.default.createElement(_Link.default, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}

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
var tiers = [{
  title: "Free",
  price: "0",
  description: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
  buttonText: "Sign up for free",
  buttonVariant: "outlined"
}, {
  title: "Pro",
  subheader: "Most popular",
  price: "15",
  description: ["20 users included", "10 GB of storage", "Help center access", "Priority email support"],
  buttonText: "Get started",
  buttonVariant: "contained"
}, {
  title: "Enterprise",
  price: "30",
  description: ["50 users included", "30 GB of storage", "Help center access", "Phone & email support"],
  buttonText: "Contact us",
  buttonVariant: "outlined"
}];
var footers = [{
  title: "Company",
  description: ["Team", "History", "Contact us", "Locations"]
}, {
  title: "Features",
  description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"]
}, {
  title: "Resources",
  description: ["Resource", "Resource name", "Another resource", "Final resource"]
}, {
  title: "Legal",
  description: ["Privacy policy", "Terms of use"]
}];

function Pricing() {
  var classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Container.default, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer
  }, _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 4,
    justify: "space-evenly"
  }, footers.map(function (footer) {
    return _react.default.createElement(_Grid.default, {
      item: true,
      xs: 6,
      sm: 3,
      key: footer.title
    }, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true
    }, footer.title), _react.default.createElement("ul", null, footer.description.map(function (item) {
      return _react.default.createElement("li", {
        key: item
      }, _react.default.createElement(_Link.default, {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary"
      }, item));
    })));
  })), _react.default.createElement(_Box.default, {
    mt: 5
  }, _react.default.createElement(Copyright, null))));
}

//# sourceMappingURL=FooterApp.js.map