export async function GetAll():Promise<string> {
    const data:string= await window['DotNet'].invokeMethodAsync('DotnetMauiVue', 'GetFoo')
    console.log("DotNet method return the value:" + data);
    return data;
}


export async function Add(data:{a:number,b:number}):Promise<number> {
    const res:number =await window['DotNet'].invokeMethodAsync('DotnetMauiVue', 'Add', data)
    console.log("DotNet method return the value:" + res);
    return res
}