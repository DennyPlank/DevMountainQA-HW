//  put a page object here
import {By} from "selenium-webdriver";
import { BasePageEM } from "./basePageEM";


export class EmObject extends BasePageEM {
    constructor() {
        super({url: "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"})
    }
}