import {Google} from './googleBP'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('Chicago Bears')
    let text = await google.getResults()
    expect(text).toContain('Chicago Bears')
    await fs.writeFile(`${__dirname}/google.png`,
     await google.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     }
     )
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('save Succesful')
    })

})
afterAll(async () => {
    await google.driver.quit()
})