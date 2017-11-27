import {app} from "electron";
import setAppMenu from "./setAppMenu";
import createMainWindow from "./createMainWindow";
import createFileManager from './createFileManager';

let mainWindow = null;
let fileManager = null;

app.on("ready", ()=> {
    mainWindow = createMainWindow();
    setAppMenu({ openFile, saveFile, saveAsNewFile, exportPDF});

});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", (_e, hasVisibleWindows) => {
    if (!hashVisibleWindows) {
        mainWindow = createMainWindow();
        fileManager = createFileManager();
        setAppMenu({ openFile, saveFile, saveAsNewFile, exportPDF });
    }
});


function saveAsNewFile() {
    Promise.all([ showSaveAsNewFileDialog(), mainWindow.requestText() ])
        .then(([filePath, text]) => fileManager.saveFile(filePath, text))
        .catch((error) => {
            console.log(error);
        });
}

function openFile() {
    console.log("openFile");
}

function saveFile() {
    console.log("save");
}

function exportPDF() {
    console.log("exportPDF");
}