import fs from "fs";

class FileManager {
    saveFile(filePath, text) {
        return new Promise((resolve) => {
            fs.writeFileSync(filepath, text);
            resolve();
        });
    }
}

function createFileManager(){
    return new FileManager();
}

export default createFileManager;