export const clx = (...args: Array<string| boolean | undefined | null >)=>{
    return args.filter(Boolean).join(" ");
}