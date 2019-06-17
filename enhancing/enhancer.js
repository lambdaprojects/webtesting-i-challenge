module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  console.log(`:: ITEM IN SUCCEED IS ${JSON.stringify(item)}::`);
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log(`::ITEM IN REPAIR IS ${JSON.stringify(item)}::`);
  item = { ...item, durability: 100 };
  console.log(`::REPAIRED ITEM IS ${JSON.stringify(item)}::`);
  return { ...item };
}

function get(item) {
  return { ...item };
}
