import { Google } from "./googleModel";
const google = new Google()

describe(('this is a test'), ()=>{
  
    test('test', async ()=>{
        await google.navigate();
        await google.search("this is a string")
        await google.driver.sleep(5000)
        await google.driver.quit();
    })
});