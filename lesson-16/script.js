const Rectangle = {
    length: 12,
    breadth: 14,
    get area(){
        return (this.length*this.breadth)
    }
}

console.log("rectangle area:", Rectangle.area)