import Vaisius from "./Vaisius.js"

class Krepsys {
    static vaisiai = []

    static pripildyti(){
        Krepsys.vaisiai = [...Array(20).keys()].map(()=> new Vaisius())
        Krepsys.vaisiai.sort((a, b) => b.dydis - a.dydis)
    }

    static isimti(){
        const vaisiai = Krepsys.vaisiai
        const didziausias = Krepsys.vaisiai[0];
        vaisiai.splice (0, 1);
        Krepsys.vaisiai = vaisiai;
        return didziausias;
    }

    static papildyti(upto = 20){
        if(Krepsys.vaisiai.length < upto){
            let count = Krepsys.vaisiai.length
            let gap = Array(upto - count).fill(new Vaisius())
            Krepsys.vaisiai = Krepsys.vaisiai.concat(gap)
        }
    }
}

export default Krepsys