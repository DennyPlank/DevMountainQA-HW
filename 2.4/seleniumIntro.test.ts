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

    describe("handles unsaved, canceled, and saved changes correctly for name, phone#, and title", () => {
        test("An unsaved change doesn't persist if you hit cancel", async () => {
        /* Test case:
            1. Opens an employee
            2. Edit each of the feilds
            3. Hit cancel
            4. Check to see if employee data is changed
        */

            //  Setup
        await driver.findElement(By.name('employee1')).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(By.name('nameEntry')))
        );
        await driver.wait(
            until.elementIsVisible(await driver.findElement(By.name('phoneEntry')))
        );
        await driver.wait(
            until.elementIsVisible(await driver.findElement(By.name('titleEntry')))
        );

        // Name entry setup
        let nameCheck = await driver.findElement(By.name("nameEntry")).getAttribute("value")
        await driver.findElement(By.name('nameEntry')).clear();
        await driver.findElement(By.name('nameEntry')).sendKeys("Test Name");

        // Phone entry setup
        let phoneCheck = await driver.findElement(By.name("phoneEntry")).getAttribute("value")
        await driver.findElement(By.name('phoneEntry')).clear();
        await driver.findElement(By.name('phoneEntry')).sendKeys('12345');

        // Title entry setup
        let titleCheck = await driver.findElement(By.name("titleEntry")).getAttribute("value")
        await driver.findElement(By.name('titleEntry')).clear();
        await driver.findElement(By.name('titleEntry')).sendKeys('Test Title');

        await driver.findElement(By.name('cancel')).click();
        await driver.wait(
            until.elementTextContains(await driver.findElement(By.id("employeeTitle")), "Bernice" )
        );
        expect(await driver.findElement(By.name("nameEntry")).getAttribute("value")).toBe(nameCheck)
        expect(await driver.findElement(By.name("phoneEntry")).getAttribute("value")).toBe(phoneCheck)
        expect(await driver.findElement(By.name("titleEntry")).getAttribute("value")).toBe(titleCheck)
        });
        
        test('An unsaved change doesnt persist if you navigate away from the employee to another', async ()=>{
            /* Test case :
            1. Opens an employee
            2. Edit data fields
            3. Open another employee without saving
            3. Open original again
            4. Check to see if employee data is altered
            */

            await driver.findElement(By.name("employee1")).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(By.name('nameEntry')))
            );

                // Name entry setup
            let nameCheck = await driver.findElement(By.name("nameEntry")).getAttribute("value")
            await driver.findElement(By.name('nameEntry')).clear();
            await driver.findElement(By.name('nameEntry')).sendKeys("Test Name");

            // Phone entry setup
            let phoneCheck = await driver.findElement(By.name("phoneEntry")).getAttribute("value")
            await driver.findElement(By.name('phoneEntry')).clear();
            await driver.findElement(By.name('phoneEntry')).sendKeys('12345');

            // Title entry setup
            let titleCheck = await driver.findElement(By.name("titleEntry")).getAttribute("value")
            await driver.findElement(By.name('titleEntry')).clear();
            await driver.findElement(By.name('titleEntry')).sendKeys('Test Title');

            await driver.findElement(By.name("employee2")).click();
            await driver.findElement(By.name("employee1")).click();
            await driver.wait(
                until.elementTextContains(await driver.findElement(By.id("employeeTitle")), "Bernice" )
            );
            expect(await driver.findElement(By.name("nameEntry")).getAttribute("value")).toBe(nameCheck)
            expect(await driver.findElement(By.name("phoneEntry")).getAttribute("value")).toBe(phoneCheck)
            expect(await driver.findElement(By.name("titleEntry")).getAttribute("value")).toBe(titleCheck)
            });
        

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