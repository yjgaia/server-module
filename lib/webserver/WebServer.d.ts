/// <reference types="node" />
/// <reference types="node" />
import { EventContainer } from "@common-module/ts";
import * as HTTP from "http";
import * as HTTPS from "https";
import HttpContext from "./HttpContext.js";
type SSLInfo = {
    [domain: string]: {
        key: string;
        cert: string;
    };
};
export interface WebServerOptions {
    webServerPort: number;
    webServerSSL?: SSLInfo;
    httpPortForRedirect?: number;
    autoRenewCertbot?: boolean;
}
export default class WebServer extends EventContainer<{
    start: () => void;
}> {
    private secureContextCache;
    rawServer: HTTPS.Server | HTTP.Server | undefined;
    constructor(options: WebServerOptions, listener: (context: HttpContext) => Promise<void>);
    private loadSecureContext;
    private createHTTPSServer;
    private createHTTPServer;
    private renewCertbot;
}
export {};
//# sourceMappingURL=WebServer.d.ts.map