import { resolve } from "jsr:@std/path@^0.221.0/resolve";
import { walk } from "jsr:@std/fs@0.221.0/walk";

export function checkCoreFile() {
    const coreFileList: string[] =[
        "deno.json",
    ]
    const fileList: string[] = getFileList()
    const coreFile: string[] = fileList.filter(item => coreFileList.includes(item));
    if (coreFile.length === 0) {
        return "Core file not found"
    }
}

async function getFileList(): Promise<string[]> {
    const files = walk('.')
    const fileList: string[] = []
    for await (const file of files) {
        if (file.isFile) {
            fileList.push(file.name)
        }
    }
    return fileList;
}