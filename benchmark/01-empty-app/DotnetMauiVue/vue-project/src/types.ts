/// <reference path="../node_modules/@dotnet/jsinterop/dist/Microsoft.JSInterop.d.ts" />
 
export {}

declare global{
    interface Window{
        postBar: (data: string) => void;
    }
}