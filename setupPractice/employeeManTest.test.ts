import { EmObject } from "./employeeManagerPage";

const eMObject = new EmObject()

describe(('this is a test'), ()=>{
    afterAll(async () => {
        await eMObject.driver.quit();
    });
  
    test('test', async ()=>{
        await eMObject.navigate();
    })
});