// Створити абстрактний клас Figeure3D з \
// властивостю ім'я (string не пуста) і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, * циліндр.
// Написати сеттери для властивостей.

// Створити функцію getVolume3DFigure, яка п
// риймає будь яку 3d фігуру і повертає її об'єм.

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a number");
    }
    this._name = name;
  }

  getVolume() {}
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("sphere");
    this.radius = radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("Radius must be a number");
    }
    if (radius < 0) {
      throw new RangeError("Radius must be more than zero");
    }
    this._radius = radius;
  }
  getVolume() {
    return Math.round((4 / 3) * Math.PI * Math.pow(this._radius, 3));
  }
}
class Cube extends Figure3D {
  constructor(cubeEdge) {
    super("Cube");
    this.cubeEdge = cubeEdge;
  }
  set cubeEdge(cubeEdge) {
    if (typeof cubeEdge !== "number") {
      throw new TypeError("cubeEdge must be a number");
    }
    if (cubeEdge < 0) {
      throw new RangeError("cubeEdge must be more than zero");
    }
    this._cubeEdge = cubeEdge;
  }
  getVolume() {
    return Math.round(Math.pow(this._cubeEdge, 3));
  }
}
class Сylinder extends Figure3D {
  constructor(height, radius) {
    super("Сylinder");
    this.height = height;
    this.radius = radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("Radius must be a number");
    }
    if (radius < 0) {
      throw new RangeError("Radius must be more than zero");
    }
    this._radius = radius;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("height must be a number");
    }
    if (height < 0) {
      throw new RangeError("Height must be more than zero");
    }
    this._height = height;
  }
  getVolume() {
    return Math.round(Math.PI * Math.pow(this._radius, 2) * this._height);
  }
}

function showVolume(Object) {
  if (Object instanceof Figure3D) {
    return Object.getVolume();
  }
  throw new TypeError("Object must be figure3d");
}


try {
  const sphere = new Sphere(3);
  const cube = new Cube(2);
  const cylinder = new Сylinder(3, 10);
  console.log(showVolume(sphere));
  console.log(showVolume(cube));
  console.log(showVolume(cylinder));
} catch (error) {
  console.log(error);
}

