import React, { useState } from "react";
import classNames from "classnames";
export var Dragger = function (_a) {
    var onFile = _a.onFile, children = _a.children;
    var _b = useState(false), dragOver = _b[0], setDragOver = _b[1];
    var classes = classNames("lv-uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (React.createElement("div", { className: classes, onDragOver: function (e) {
            handleDrag(e, true);
        }, onDragLeave: function (e) {
            handleDrag(e, false);
        }, onDrop: handleDrop }, children));
};
export default Dragger;
