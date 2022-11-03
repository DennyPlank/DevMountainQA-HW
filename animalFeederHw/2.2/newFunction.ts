export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true'
    } else if((myNum <= 4) && (myNum >= 0)) {
        return 'false'
    }else if (myNum >= 6){
        return 'big'
    }else {
        return 'negative'
    }
}