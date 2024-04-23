import { walk } from "jsr:@std/fs@0.221.0/walk";
import { init } from "./initialize.ts";

export async function checkCoreFile(): Promise<string> {
    const coreFileList: string[] =[
        "deno.json",
        "package.json",
    ]
    const fileList: string[] = await getFileList()
    const coreFile: string[] = fileList.filter(item => coreFileList.includes(item));
    if (coreFile.length === 0) {
        fileList.length === 0 ? init() : console.log("Core file not found");
        Deno.exit(1);
    } else if (coreFile.length > 1) {
        console.log("Multiple core files found");
        Deno.exit(1);
    }
    return coreFile[0];
}

async function getFileList(): Promise<string[]> {
    const files = walk('.');
    const fileList: string[] = []
    for await (const file of files) {
        if (file.isFile) {
            fileList.push(file.name);
        }
    }
    return fileList;
}