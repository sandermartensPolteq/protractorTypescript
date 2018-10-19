import * as fs from 'fs';

export class FileUtils {
    static readJSONFileAndReturnObject(filePath, filename): any {
        const jsonObject = JSON.parse(fs.readFileSync(filePath + filename + '.json', 'utf8'));
        return jsonObject;
    }

    static writeJSONFile(filePath, filename, input): void {
        fs.writeFile(filePath+filename+'.json', input, (err) => {
            if(err) throw err;
        });
    }
}