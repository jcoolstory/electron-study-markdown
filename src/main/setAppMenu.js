import { app, Menu, BrowserWindow } from "electron";

function setAppMenu(options) {
    const template = [
        {
            label : "File",
            submenu : [
                { label : "Open", accelerator: "CmdOrCtrl+O", click: () => 
                        options.openFile() },
                { label : "Save", accelerator: "CmdOrCtrl+O", click: () => 
                        options.openFile() },
                { label : "Save as", accelerator: "CmdOrCtrl+O", click: () => 
                        options.openFile() },
                { label : "Export PDF ", accelerator: "CmdOrCtrl+O", click: () => 
                        options.openFile() },
            ]
        }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

export default setAppMenu;