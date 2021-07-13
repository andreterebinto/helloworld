import DemoContent from '@fuse/core/DemoContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';

var useStyles = makeStyles({
  layoutRoot: {}
});

function SimpleFullWidthSample() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(FusePageSimple, {
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
    }, /*#__PURE__*/React.createElement("h4", null, "Content"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(DemoContent, null))
  });
}

export { SimpleFullWidthSample as Example };
