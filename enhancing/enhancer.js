module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  console.log(`:: ITEM IN SUCCEED IS ${JSON.stringify(item)}::`);
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1;
  }
  console.log(`:: SUCCEEDED ITEM IS ${JSON.stringify(item)}::`);
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    // Enhancement is less than 15 decrease durability by 5
    item.durability = item.durability - 5;
  } else {
    // Enhancement is more than 15 decrease durability by 10
    item.durability = item.durability - 10;
    if (item.enhancement > 16) {
      // Enhancement is more than 16 decrease enhancement by 1
      item.enhancement = item.enhancement - 1;
    }
  }
  console.log(`:: FAILED ITEM IS ${JSON.stringify(item)}::`);
  return { ...item };
}

function repair(item) {
  console.log(`::ITEM IN REPAIR IS ${JSON.stringify(item)}::`);
  item = { ...item, durability: 100 };
  console.log(`::REPAIRED ITEM IS ${JSON.stringify(item)}::`);
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.durability}] ${item.name}`;
  }
  return { ...item };
}
