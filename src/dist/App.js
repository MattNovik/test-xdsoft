"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Link_1 = require("@mui/material/Link");
require("./App.css");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(Link_1["default"], { variant: "body2", onClick: function () {
                } }, "Button Link"))));
}
exports["default"] = App;
