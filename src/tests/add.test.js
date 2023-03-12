const add = (a, b) => a + b;
const hellofun = (name) => `hello ${name}`;

test("adding number", () => {
  const result = add(5, 2);
  expect(result).toBe(7);
});

test("name should be khaled", () => {
  const result = hellofun("khaled");
  expect(result).toBe("hello khaled");
});
