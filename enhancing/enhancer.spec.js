const enhancer = require("./enhancer.js");
// test away!

describe("Enhancer.js", () => {
  // TEST CASE FOR REPAIR FUNCTIONALITY
  describe("Repair", () => {
    it("Durability restored to 100", () => {
      let item = { name: "Item1", durability: 120, enhancement: 10 };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });

  // TEST CASE FOR SUCCEED FUNCTIONALITY
  describe("Success", () => {
    //CHECK IF ENHANCMENT INCREASES BY 1 IF ITS LESS THAN 20
    it("The item's enhancement increases to 1 if it is less than 20", () => {
      let item = { name: "Item2", durability: 34, enhancement: 12 };
      let newEnhancement = item.enhancement + 1;
      console.log(`:: NEW ENHANCEMENT SHOULD BE ${newEnhancement}`);
      expect(enhancer.succeed(item).enhancement).toBe(newEnhancement);
      expect(enhancer.succeed(item).durability).toBe(item.durability);
    });

    //CHECK IF THE ENHANCEMENT REMAINS THE SAME IF ITS EQUAL TO 20
    it("The item's enhancement remains unchanged if it is equal to 20", () => {
      let item = { name: "Item3", durability: 34, enahancement: 20 };
      expect(enhancer.succeed(item).enhancement).toBe(item.enhancement);
      expect(enhancer.succeed(item).durability).toBe(item.durability);
    });

    //CHECK IF THE DURABILITY REMAINS THE SAME
    it("Durability of the item remains unchanged", () => {
      let item = { name: "Item4", durability: 34, enahancement: 20 };
      expect(enhancer.succeed(item).durability).toBe(item.durability);
    });
  });

  //TEST CASE FOR FAILURE FUNCTIONALITY
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
