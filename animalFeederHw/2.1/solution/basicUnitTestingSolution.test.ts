describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculatorr.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculatorr.add(2,22)).toBe(24);
    });
    test("Subtraction works", () => {
      expect(calculatorr.subtract(20,2)).toBe(18);
    });
    test("Multiplication works", () => {
      expect(calculatorr.multiply(2,10)).toBe(20);
    });
    test("Division works", () => {
      expect(calculatorr.divide(10,2)).toBe(5);
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
        //this one is extra and you'll have to figure it out.
      });
    });
  });
  
  const calculatorr = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };