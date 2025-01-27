const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

describe("Enhancer.js", () => {
  // TEST CASE FOR REPAIR FUNCTIONALITY
  describe("Repair", () => {
    it.todo("Durability value is between 0 and 100");
    it("Durability restored to 100", () => {
      let item = { name: "Item1", durability: 20, enhancement: 10 };
      expect(repair(item).durability).toBe(100);
      expect(repair(item).name).toBe(item.name);
      expect(repair(item).enhancement).toBe(item.enhancement);
    });
  });

  // TEST CASE FOR SUCCEED FUNCTIONALITY
  describe("Success", () => {
    //CHECK IF ENHANCMENT INCREASES BY 1 IF ITS LESS THAN 20
    it.todo("Enhancement value is between 0 and 20");
    it("The item's enhancement increases to 1 if it is less than 20", () => {
      let item = { name: "Item2", durability: 34, enhancement: 12 };
      let newEnhancement = item.enhancement + 1;
      console.log(`:: NEW ENHANCEMENT SHOULD BE ${newEnhancement + 1}`);
      expect(succeed(item).enhancement).toBe(newEnhancement);
      expect(succeed(item).durability).toBe(item.durability);
    });

    //CHECK IF THE ENHANCEMENT REMAINS THE SAME IF ITS EQUAL TO 20
    it("The item's enhancement remains unchanged if it is equal to 20", () => {
      let item = { name: "Item3", durability: 34, enahancement: 20 };
      expect(succeed(item).enhancement).toBe(item.enhancement);
      expect(succeed(item).durability).toBe(item.durability);
    });

    //CHECK IF THE DURABILITY REMAINS THE SAME
    it("Durability of the item remains unchanged", () => {
      let item = { name: "Item4", durability: 34, enahancement: 20 };
      expect(succeed(item).durability).toBe(item.durability);
    });
  });

  //TEST CASE FOR FAILURE FUNCTIONALITY
  describe("Fail", () => {
    it("Item's enhancement is less than 15, durability is decreased by 5", () => {
      let item = { name: "Item5", durability: 45, enhancement: 12 };
      expect(fail(item).durability).toBe(40);
    });
    it("Item's enhancement is more than 15, durability is decreased by 10", () => {
      let item = { name: "Item6", durability: 76, enhancement: 17 };
      expect(fail(item).durability).toBe(66);
    });
    it("Item's enhancement is more than 16, enhancement is decreased by 1", () => {
      let item = { name: "Item7", durability: 76, enhancement: 17 };
      expect(fail(item).enhancement).toBe(16);
    });
  });

  //TEST CASE FOR GET FUNCTIONALITY
  describe("Get", () => {
    it("Name is unaltered if enahancement level is 0", () => {
      let item = { name: "Item8", durability: 23, enhancement: 0 };
      expect(get(item).name).toBe(item.name);
    });

    it("Name is changed to [+durability]Name if enahancement level is greater than 0", () => {
      let item = { name: "Item8", durability: 23, enhancement: 25 };
      let newName = `[+${item.durability}] ${item.name}`;
      //expect(enhancer.get(item).name).toBe(newName);
      expect(get(item).name).toBe(newName);
    });
  });
});
