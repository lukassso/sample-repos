"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  return _react.default.createElement("form", {
    // onSubmit={props.submit} 
    className: "appBody"
  }, _react.default.createElement("input", {
    type: "text",
    value: props.value,
    onChange: props.change,
    placeholder: "Write city"
  }));
};

var _default = Form;
exports.default = _default;

//# sourceMappingURL=Form.js.map