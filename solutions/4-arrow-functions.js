// BEGIN
const each = (items, callback) => {
  for (const item of items) {
    callback.call(item);
  }
};

export default each;
// END
