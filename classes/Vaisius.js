class Vaisius{
    constructor(){
        this.dydis = Math.floor(Math.random() * (25 - 5 + 1) + 5);
        this.id = Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);
        this.prakastas = false
    }

    prakasti(){
        return this.prakastas = true
    }

}

export default Vaisius