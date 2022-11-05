import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {
    // Setup and Teardown
    beforeEach(async () => {
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
    });
    afterAll(async () => {
        await driver.quit();
    });
    
    // Tests start here 
    
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
        /* This test is as follows:
            1. Opens Bernice Ortiz
            2. Edit name to be 'Test Name'
            3. Hit cancel
            4. Check to see if Bernice Ortiz is displayed now
        */

        await driver.findElement(By.name('employee1')).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(By.name('nameEntry')))
        );
        await driver.findElement(By.name('nameEntry')).clear();
        await driver.findElement(By.name('nameEntry')).sendKeys("Test Name");
        await driver.findElement(By.name('cancel')).click();
        await driver.wait(
            until.elementTextContains(await driver.findElement(By.id("employeeTitle")), "Bernice" )
        );
        expect(await driver.findElement(By.name("nameEntry")).getAttribute("value")).toContain("Bernice")
        
        /* This test is as follows:
            1. Opens Bernice Ortiz
            2. Edit name to be 'Test Name'
            3. Open another employee (Marnie Barnett)
            3. Open Barnice Ortiz again
            4. Check to see if Bernice Ortiz name is still displayed
        */
        await driver.findElement(By.name("employee1")).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(By.name('nameEntry')))
        );
        await driver.findElement(By.name('nameEntry')).clear();
        await driver.findElement(By.name('nameEntry')).sendKeys("Test Name");
        await driver.findElement(By.name("employee2")).click();
        await driver.sleep(1000)
        await driver.findElement(By.name("employee1")).click();
        await driver.wait(
            until.elementTextContains(await driver.findElement(By.id("employeeTitle")), "Bernice" )
        );
        expect(await driver.findElement(By.name("nameEntry")).getAttribute("value")).toContain("Bernice")
        expect(await driver.findElement(By.name("nameEntry")).getAttribute("value")).not.toContain("Marnie")
        });
        

//         test("A canceled change doesn't persist", async () => {
//             /*
//             This test follows these steps:
//             1. Open Phillip Weaver
//             2. Edit the name input
//             3. Click cancel
//             5. Verify the name field is the original name
//             */
//             await driver.findElement().click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement())
//             );
//             await driver.findElement().clear();
//             await driver.findElement().sendKeys("Test Name");
//             await driver.findElement().click();
//             expect(
//                 await (await driver.findElement()).getAttribute("")
//             ).toBe("");
//         });

//         test("A saved change persists", async () => {
//             /*
//             This test follows these steps:
//             1. Open Bernice Ortiz
//             2. Edit the name input
//             3. Save the change
//             4. Open Phillip Weaver
//             5. Open Bernice Ortiz's old record
//             5. Verify the name field is the edited name
//             */
//             await driver.findElement().click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement())
//             );
//             await driver.findElement().clear();
//             await driver.findElement().sendKeys("Test Name");
//             await driver.findElement().click();
//             await driver.findElement().click();
//             await driver.wait(
//                 until.elementTextContains(
//                 await driver.findElement(),
//                 "Phillip"
//                 )
//             );
//             await driver.findElement().click();
//             expect(
//                 await (await driver.findElement()).getAttribute("value")
//             ).toBe("Bernice Ortiz");
//     });
// });

//     describe("handles error messages correctly", () => {
//         test("shows an error message for an empty name field", async () => {
//             /*
//             This test follows these steps:
//             1. Open Bernice Ortiz
//             2. Clear the name input
//             3. Save the change
//             4. Verify the error is present
//             */
//             await driver.findElement().click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement())
//             );
//             await driver.findElement().clear();
//             await driver.findElement().sendKeys(Key.SPACE, Key.BACK_SPACE);
//             await driver.findElement().click();
//             await driver.wait(until.elementLocated());
//             expect(await (await driver.findElement()).getText()).toBe(
//                 "The name field must be between 1 and 30 characters long."
//             );
//         });
//         test("lets you cancel out of an error message", async () => {
//             /*
//             This test follows these steps:
//             1. Open Bernice Ortiz
//             2. Clear the name input
//             3. Save the change
//             4. Verify the error is present
//             5. Cancel the change
//             6. Verify the error is gone
//             */
//             await driver.findElement().click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement())
//             );
//             await driver.findElement().clear();
//             await driver.findElement().sendKeys(Key.SPACE, Key.BACK_SPACE);
//             await driver.findElement().click();
//             await driver.wait(until.elementLocated());
//             expect(await (await driver.findElement()).getText()).toBe(
//                 "The name field must be between 1 and 30 characters long."
//             );
//             await driver.findElement().sendKeys(Key.SPACE);
//             await driver.findElement().click();
//             driver.wait(() => true, 500);
//             expect(await driver.findElements()).toHaveLength(0);
//         });
    });
});