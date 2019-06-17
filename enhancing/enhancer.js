module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log(`Item is ${JSON.stringify(item)}`);
  item = { ...item, durability: 100 };
  console.log(`Item is ${JSON.stringify(item)}`);
  return { ...item };
}

function get(item) {
  return { ...item };
}
