import React from "react";
import style from "./Editor.css"

export default function Editor(props) {
    return (
        <textarea rows="40" className={style.editor + ' ' +props.className}
            id="editor"
            value = {props.value}
            onChange={props.onChange}
        />
    );
}