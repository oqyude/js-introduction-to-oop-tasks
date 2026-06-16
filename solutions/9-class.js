// BEGIN
export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    let cost = 0;

    for (const { item, count } of this.items) {
      cost += item.price * count;
    }

    return cost;
  }

  getCount() {
    let result = 0;

    for (const { count } of this.items) {
      result += count;
    }

    return result;
  }
}
// END
