import { EmObject } from "./employeeManagerPage";

const eMObject = new EmObject()

describe(('this is a test'), ()=>{
  
    test('test', async ()=>{
        await eMObject.navigate();
    })
});