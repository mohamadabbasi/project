// "use strict"



// class Car {
//     constructor(name, model, year){
//         this.name = name
//         this.model = model
//         this.year = year
//     }
//     run(){
//         return "speed "+200
//     }
// }


// class IranCar extends Car {
//     constructor(name, model, year, color="black"){
//         super(name, model, year)
//         this.color = color
//     }
//     run(){
//         return "speed "+40
//     }
//     go(){
//         return super.run() +" ," +this.run()
//     }
// }


// class USACar extends IranCar {
//     constructor(name, model, year, color){
//         super(name, model, year, color)
//         // this.color = color
//     }
//     run(){
//         return "speed "+5
//     }
//     go(){
//         return super.run() +" ," +this.run()
//     }
// }


// let car1 = new USACar("benz", "S500", 2018,)

// console.log(car1)
// console.log(car1.go())










// class AdvanceArray extends Array{
//     find() {
//         return this
//     }

// }

// let list = new AdvanceArray("mohamad", "amir", "ali")
// console.log(list.find())










// // =============================== getter and setter
// class Foo {
//     constructor(){
//         this.log = []
//     }

//     set current(value) {
//         this.log.push(value)
//     }
//     get latest() {
//         if(this.log.length == 0){
//             return "ERROR"
//         }
//         return this.log[this.log.length - 1]
//     }
// }


// let bar = new Foo()
// bar.current = "A"
// bar.current = "B"
// // bar.current = "C"

// console.log(bar.log)

// console.log(bar.latest)

















// let name = "mohamad"
// let keyname = "fullname"

// let obj = {
//     name,
//     [keyname]: "mohamad abbasi",
//     "say ok"() {
//         return "ok sir abbasi"
//     }
// }

// console.log(obj[keyname])














// let symbol1 = Symbol.for("fullname")

// let obj = {
//     name: "mohamad",
//     [symbol1]: 22
// }


// let symbolN = Symbol.for("fullname")
// console.log(obj[symbolN])
