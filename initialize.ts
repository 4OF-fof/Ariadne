import $ from "jsr:@david/dax@0.40.0";

init();

export async function init(){
    const prjTypeList: string[] = [
        "CLI (with Deno)",
        "TUI (with Go)",
    ];
    const prjType: string = await $`gum choose ${prjTypeList}`.text();
    const listIndex: number = prjTypeList.findIndex(item => item === prjType);
    switch (listIndex) {
        case 0:
            await $`deno init`;
            break;
        case 1:
            await $`go mod init github.com/${await $`gh api user --jq '.login'`.text()}/${Deno.cwd().split(/[/|\\]/).pop() as string}`;
            break;
    }
    console.log("Project initialized");
}