import { Google } from "./googleSearch";
const google = new Google();
const fs = require('fs');

test('do a search', async ()=>{
    await google.navigate()
    await google.search('Mint Chip Ice Cream');
    let text = await google.getResults();
    expect(text).toContain('Mint Chip Ice Cream');
    
    await fs.writeFile(`${__dirname}/test.txt`, text, (e)=>{
        if (e) console.log(e);
        else console.log("Save Successful")
    })
    await fs.writeFile(`${__dirname}/googleScreenshots.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e)
        else console.log("Screenshot saved");
    })
    await google.driver.quit();
})