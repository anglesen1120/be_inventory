export class ServerConfig {
    private static resServerConfig : any = require ('../config/configServer.json');

    public static GetResServerConfig (){
        return this.resServerConfig;
    }
}