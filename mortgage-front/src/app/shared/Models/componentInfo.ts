export class IComponentInfo {
   public name: string = "home";
   public path: string = "/home";
   public icon?: string;

    constructor(name:string,path:string,icon:string) {
        this.name=name;
        this.path=path;
        this.icon=icon;        
    }
}
