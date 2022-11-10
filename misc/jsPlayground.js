const FizzBuzz = () => {
     for (let i = 0; i < 100; i++){
         if (i % 3 == 0) return "Fizz";
         if (i % 5 == 0) return "Buzz";
         if (i % 5 == 0 && num % 3 == 0) return "FizzBuzz";
         else return i
     }
}

console.log(FizzBuzz())
