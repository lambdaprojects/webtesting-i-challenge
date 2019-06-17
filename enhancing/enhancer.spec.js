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
    it("The item's enhancement increases to 1 if it is less than 20", () => {
      let item = { name: "Item2", durability: 34, enahancement: 12 };
      expect(enhancer.succeed(item).enahancement).toBe(item.enahancement + 1);
      expect(enhancer.succeed(item).durability).toBe(item.durability);
    });
    it("The item's enhancement remains unchanged if it is equal to 20", () => {
      let item = { name: "Item3", durability: 34, enahancement: 20 };
      expect(enhancer.succeed(item).enahancement).toBe(item.enahancement);
      expect(enhancer.succeed(item).durability).toBe(item.durability);
    });
    it("Durability of the item remains unchanged", () => {
      let item = { name: "Item4", durability: 34, enahancement: 20 };
      expect(enhancer.succeed(item).durability).toBe(item.durability);
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
