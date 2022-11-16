import {Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
        await driver.sleep(5000)
    })

    const hdrInput: By = By.xpath("//input[@name='hdrInput']") //fill in the blank
    const mkeInput: By = By.xpath("//input[@name='mkeInput']") //fill in the blank
    const oaiInput: By = By.xpath("//input[@name='oriInput']") //fill in the blank
    const nameInput: By = By.xpath("//input[@name='namInput']") //fill in the blank
    const clrBtn: By = By.xpath("//button[@id='clearBtn']") //fill in blank 
    const submitBtn: By = By.xpath("//button[@id='saveBtn']") //fill in blank
    const errorMsg: By = By.xpath("//p[@id='validHeader']") // fill in blank 
    
    console.log(errorMsg)
    
    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()

        await driver.findElement(errorMsg) 
        let errorMesg = await driver.findElement(errorMsg).getText()
        expect(errorMesg).toContain("Errors Received")
        await driver.findElement(clrBtn).click()
        
    })
})