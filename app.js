class Transport {
    constructor(name, engine, year) {
        this.name = name
        this.engine = engine
        this.year = year
    }

    startEngine(param){
        console.log(param)
    }
}

class Car extends Transport{
    constructor(name, engine, year,door, wheels, speed, oil) {
        super(name, engine, year);
        this.door = door
        this.wheels = wheels
        this.speed = speed
        this.oil = oil
    }
}
class Lexus extends Car{
    constructor(name, engine, year,door, wheels, speed, oil,model) {
        super(name, engine, year,door, wheels, speed, oil);
        this.model = model
    }

}

const lexus = new Lexus('Lexus','5v','2020','4',4,'380 k/h','A92','570')
lexus.startEngine('машина заводится через ключ')

console.log(lexus)

class Titanik  extends  Transport{
    constructor(name, year, engine,sail, weight, capacity ) {
        super(name, year, engine,);
        this.sail = sail
        this.weight = weight
        this.capacity = capacity
    }


    printTaitanik(){
        console.log('─────▄▄─▄▄─▄▄─────────\n' +
    '──────█──█──█─────────\n' +
    '───▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒────\n' +
    '─▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓─\n' +
    '──▀████████████████▀──')

    }
}

const titanik = new Titanik('titanik','1912','1900','3','23тонны','1178chel')
titanik.printTaitanik()
titanik.startEngine('coal')
console.log(titanik)





