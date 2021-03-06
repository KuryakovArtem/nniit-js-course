// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
   
   constructor(x,y){
    let [xPoint=0,yPoint=0]=[x,y];
    this.x=xPoint;
    this.y=yPoint;
  }
  getDistance(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x,y,z){
        super(x,y);
        this.z=(z)?z:0;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.queueArr=[];
    }
    get foo(){
        return this.queueArr.shift();
    }
    set foo(s){
        this.queueArr.push(s);
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
