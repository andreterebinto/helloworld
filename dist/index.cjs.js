'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DemoContent = require('@fuse/core/DemoContent');
var FusePageSimple = require('@fuse/core/FusePageSimple');
var styles = require('@material-ui/core/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DemoContent__default = /*#__PURE__*/_interopDefaultLegacy(DemoContent);
var FusePageSimple__default = /*#__PURE__*/_interopDefaultLegacy(FusePageSimple);

var useStyles = styles.makeStyles({
  layoutRoot: {}
});

function SimpleFullWidthSample() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(FusePageSimple__default['default'], {
    classes: {
      root: classes.layoutRoot
    },
    header: /*#__PURE__*/React.createElement("div", {
      className: "p-24"
    }, /*#__PURE__*/React.createElement("h4", null, "Header")),
    contentToolbar: /*#__PURE__*/React.createElement("div", {
      className: "px-24"
    }, /*#__PURE__*/React.createElement("h4", null, "Content Toolbar")),
    content: /*#__PURE__*/React.createElement("div", {
      className: "p-24"
    }, /*#__PURE__*/React.createElement("h4", null, "Content"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(DemoContent__default['default'], null))
  });
}

exports.Example = SimpleFullWidthSample;
