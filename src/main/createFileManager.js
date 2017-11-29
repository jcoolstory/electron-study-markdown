import fs from "fs";

class FileManager {
    saveFile(filePath, text) {
        return new Promise((resolve) => {
            fs.writeFileSync(filepath, text);
            this.filePath = filePath;
            resolve();
        });
    }

    readFile(filepath) {
        return new Promise((resolve) => {
            const  text = fs.readFileSync(filepath,"utf8");
            this.filePath = filepath;
            resolve(text);
        })
    }

    overwriteFile(text) {
        return this.saveFile(this.filePath, text);
    }

    writePdf(filePath, pdf) {
        return new Promise((resolve) => {
            fs.writeFileSync(filePath, pdf);
            resolve();
        })
    }
}

function createFileManager(){
    return new FileManager();
}

export default createFileManager;