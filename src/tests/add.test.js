const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should return hello with a name", () => {
  const result = generateGreeting("Tom");
  expect(result).toBe("Hello Tom!");
});

test("should return a default value of name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
