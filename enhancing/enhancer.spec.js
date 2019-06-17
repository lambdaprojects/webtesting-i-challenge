const enhancer = require("./enhancer.js");
// test away!

describe("Enhancer.js", () => {
  describe("Repair", () => {
    it("Durability restored to 100", () => {
      let item = { name: "Item1", durability: 120, enhancement: 10 };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });
  describe("Success", () => {
    it("Modified for enhancement success", () => {
      expect(false).toBe(false);
    });
  });
  describe("Fail", () => {
    it("Modified for enhancement failure", () => {
      expect(false).toBe(false);
    });
  });
  describe("Get", () => {
    it("Stretch problem - working with get", () => {
      expect(false).toBe(false);
    });
  });
});
