class Sorter {
  constructor() {
    this.array = []
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    this.array[index]
    return this.array[index]
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array
  }

  sort(indices) {
    this.array.sort(indices)
    return this.array

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
