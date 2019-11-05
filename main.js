class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = "vserpa";
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.admin = {
      name: "Vinicius",
      age: "29",
      address: {
        city: "Campinas",
        state: "SP"
      }
    };
  }

  showUser() {
    console.log(this.user);
  }

  showAdmin() {
    const {
      name,
      age,
      address: { city }
    } = this.admin;
    console.log(name, age, city);
  }

  showArray() {
    const newArr = this.arr.map(function(item, index) {
      return item * index;
    });
    console.log(newArr);
  }

  showArrayReduced() {
    const sum = this.arr.reduce(function(total, next) {
      return total + next;
    });
    console.log(sum);
  }

  showArrayFiltered() {
    const filtered = this.arr.filter(function(item) {
      return item % 2 === 0;
    });
    console.log(filtered);
  }

  showArrayFound() {
    const found = this.arr.find(function(item) {
      return item === 4;
    });
    console.log(found);
  }

  showArrayWithArrowFunction() {
    const newArr = this.arr.map(item => item * 2);
    console.log(newArr);
  }

  showWithRest() {
    const { name, ...more } = this.admin;
    console.log(more);
  }

  showWithSpread() {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
  }

  showObjectWithSpread() {
    const admin2 = { ...this.admin, name: "Mestre" };
    console.log(admin2);
  }

  static sum(a, b) {
    console.log("static method called");
    const c = a + b;
    return c;
  }

  static sumDefault(a = 0, b = 0) {
    console.log("static method called");
    return a + b;
  }
}

var MyList = new TodoList();

document.getElementById("newtodo").onclick = function() {
  MyList.add("new todo");
  console.log(TodoList.sum(2, 3));
  console.log(TodoList.sumDefault(1));
  MyList.showUser();
  MyList.showAdmin();
  MyList.showArray();
  MyList.showArrayReduced();
  MyList.showArrayFiltered();
  MyList.showArrayFound();
  MyList.showArrayWithArrowFunction();
  MyList.showWithRest();
  MyList.showWithSpread();
  MyList.showObjectWithSpread();
};
