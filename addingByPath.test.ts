import { Builder, By, Capabilities, WebDriver} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe("practicing XPath selectors", ()=>{
    beforeEach(async () =>{
        await driver.get("https://www.amazon.com/")
    });
    afterAll(async ()=>{
        await driver.quit()
    });

    test("")
}) 
