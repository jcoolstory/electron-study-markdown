import { app, Menu, BrowserWindow } from "electron";

function setAppMenu(options) {
    const template = [
        {
            label : "File",
            submenu : [
                { label : "Open", accelerator: "CmdOrCtrl+O", click: () => 
                        options.openFile() },
                { label : "Save", accelerator: "CmdOrCtrl+S", click: () => 
                        options.saveFile() },
                { label : "Save as",  click: () => 
                        options.saveAsNewFile() },
                { label : "Export PDF ",  click: () => 
                        options.exportPDF() },
            ]
        },
        {
            label : "View",
            submenu : [
                {
                    label : "Toogle DevTools",
                    accelerator : "Alt+Command+I",
                    click : ()=> BrowserWindow.getFocusedWindow().toggleDevTools()
                }
            ]
        }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

export default setAppMenu;