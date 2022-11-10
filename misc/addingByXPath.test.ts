import { Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe("practicing with xpath selectors", () => {
    beforeEach(async() => {
        await driver.get("https://www.amazon.com");
    });
    afterAll(async() => {
        await driver.quit();
    });

    const searchBar: By = By.xpath('//input[@id="twotabsearchtextbox"]')
    const results: By = By.xpath('//div[@class="s-main-slot s-result-list s-search-results sg-row"]')

    test("searching for an item on amazon", async() => {
        await driver.findElement(searchBar).sendKeys("baby yoda\n");
        let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain("The Child");
    });
});
