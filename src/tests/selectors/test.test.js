add = (a, b) => {
  return a + b;
};

test("adding two number", () => {
  const result = add(5, 2);
  expect(result).toBe(7);
});
