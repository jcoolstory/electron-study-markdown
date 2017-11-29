import React from "react";
import Previewer from "./Previewer.jsx";
import { ipcRenderer } from "electron";

export default class PDFUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: ""};
    }

    componentDidMount() {
        const text = ipcRenderer.sendSync("REQUEST_TEXT");
        this.setState({ text })
    }

    componentDidUpdate() {
        this.syncImageRenerdered().then(()=> {
            ipcRenderer.send("RENDERED_CONTENTS");
        });
    }

    syncImageRenerdered() {
        const images = Array.prototype.slice.call(document.querySelectorAll('img'));
        const loadingImages = images.filter((image) => !image.complate );
        if (loadingImages.length === 0){
            return Promise.resolve();
        }
        return Promise.add(loadingImages.map((image) => 
            new Promise((resolve) => image.onload = () => resolve)));
    }

    render() {
        return (
            <Previewer value={this.state.text} />
        )
    }
}