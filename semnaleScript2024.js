class Polynomial {
    constructor(x2, x1, x0) {
        this.x2 = x2;
        this.x1 = x1;
        this.x0 = x0;
    }
    toString() {
        let result = "";
        if (this.x2)
            result = this.x2 + "x^2 + ";
        if (this.x1)
            result += this.x1 + "x + ";
        if(this.x0)
            result += this.x0;

        return result;
    }

    getIntegral() {
        return new Polynomial(this.x1 / 2, this.x0, 0);
    }

    scalarMultiplication(m) {
        return new Polynomial(m * this.x2, m * this.x1, m * this.x0);
    }

    getDefiniteIntegralValue(upperLimit, lowerLimit) {
        let int = this.getIntegral();
        let line1 = int.x2 + " * (" + upperLimit + "^2 - " + lowerLimit + "^2) + " + int.x1 + " * (" + upperLimit + " - " + lowerLimit + ") = \n";
        let line2 = int.x2 + " * (" + Math.pow(upperLimit, 2) + " - " + Math.pow(lowerLimit, 2) + ") + " + int.x1 + " * " + (upperLimit - lowerLimit) + " = \n";
        let line3 = int.x2 + " * " + (Math.pow(upperLimit, 2) - Math.pow(lowerLimit, 2)) + " + " + (int.x1 * (upperLimit - lowerLimit)) + " = \n";
        let result = int.x2 * (upperLimit * upperLimit - lowerLimit * lowerLimit) + int.x1 * (upperLimit - lowerLimit);
        return line1 + line2 + line3 + result;
    }

    getDefiniteIntegralWithUnknowns(l1, l2) {
        let int = this.getIntegral();
        let line1, line2, line3, line4 = "", line5 = "";
        if(int.x2 == 0) {
            line1 = `1/${period} * (` + int.x1 + " * ((" + l1.toString() + ") - (" + l2.toString() + "))) = \n";
            line2 = `1/${period} * (` + int.x1 + " * (" + l1.subtract(l2).toString() + ")) = \n";
            line3 = `1/${period} * (` + l1.subtract(l2).scalarMultiplication(int.x1).toString() + ")";
        }
        else {
            console.log(int.toString());
            line1 = `1/${period} * (` + int.x2 + " * ((" + l1.toString() + ")^2 - (" + l2.toString() + ")^2) + " + int.x1 + " * ((" + l1.toString() + ") - (" + l2.toString() + "))) = \n";
            line2 = `1/${period} * (` + int.x2 + " * (" + l1.getSquared().toString() + " - (" + l2.getSquared().toString() + ")) + " + int.x1 + " * (" + l1.subtract(l2).toString() + ")) = \n";
            line3 = `1/${period} * (` + int.x2 + " * (" + l1.getSquared().subtract(l2.getSquared()).toString() + ") + " + l1.subtract(l2).scalarMultiplication(int.x1).toString() + ") = \n";
            line4 = `1/${period} * (` + l1.getSquared().subtract(l2.getSquared()).scalarMultiplication(int.x2).toString() + " + " + l1.subtract(l2).scalarMultiplication(int.x1).toString() + ") = \n";
            line5 = `1/${period} * (` + l1.getSquared().subtract(l2.getSquared()).scalarMultiplication(int.x2).add(l1.subtract(l2).scalarMultiplication(int.x1)).toString() + ")";
        }
        return line1 + line2 + line3 + line4 + line5;
    }

    getDefiniteIntegralWithUnknownsPolynomial(l1, l2) {
        return l1.getSquared().subtract(l2.getSquared()).scalarMultiplication(int.x2).add(l1.subtract(l2).scalarMultiplication(int.x1));
    }

    getSquared() {
        return new Polynomial(Math.pow(this.x1, 2), 2*this.x1*this.x0, Math.pow(this.x0, 2));
    }

    add(p) {
        return new Polynomial(this.x2 + p.x2, this.x1 + p.x1, this.x0 + p.x0);
    }

    subtract(p) {
        return new Polynomial(this.x2 - p.x2, this.x1 - p.x1, this.x0 - p.x0);
    }
}

var period = 12;

var p1 = new Polynomial(5, 4, 3);
console.log(p1.toString());
var p2 = new Polynomial(1, 2, 4);
console.log(p2.toString());

console.log(p1.add(p2).toString());

console.log("-----------");
console.log(p1.toString());
console.log(p1.getIntegral().toString());
console.log(p1.getDefiniteIntegralValue(3,2).toString());

console.log("-----------");
console.log(p1.toString());
console.log(p1.scalarMultiplication(3).toString());

console.log("-----------");
var p3 = new Polynomial(0, 2, 0);
console.log(p3.toString());
console.log(p3.getDefiniteIntegralValue(3,2).toString());
var p4 = new Polynomial(0, 0, 3);
console.log(p4.toString());
console.log(p4.getDefiniteIntegralValue(3,2).toString());

console.log("-----------");
console.log(p4.toString());
console.log(p4.getIntegral().toString());
var p5 = new Polynomial(0, 1, 3);
var p6 = new Polynomial(0, 3, 2);
console.log(p5.toString());
console.log(p6.toString());
console.log(p4.getDefiniteIntegralWithUnknowns(p5, p6).toString());

console.log("-----------");
var p7 = new Polynomial(0, -2, 26);
var p8 = new Polynomial(0, 0, 13);
var p9 = new Polynomial(0, 1, -26);
console.log(p7.toString());
console.log(p7.getIntegral().toString());
console.log(p8.toString());
console.log(p9.toString());
console.log(p7.getDefiniteIntegralWithUnknowns(p8, p9).toString());

console.log("-----------");
var p10 = new Polynomial(0, 1, -18);
var p11 = new Polynomial(0, 0, 18);
var p12 = new Polynomial(0, 0, 9);
console.log(p10.toString());
console.log(p10.getIntegral().toString());
console.log(p11.toString());
console.log(p12.toString());
console.log(p10.getDefiniteIntegralWithUnknowns(p11, p12).toString());

class Signal1 {
    constructor(a1, t1, a2, t2, a3, t3) {
        this.a1 = a1;
        this.t1 = t1;
        this.a2 = a2;
        this.t2 = t2;
        this.a3 = a3;
        this.t3 = t3;
        this.h1 = a1;
        this.h2 = a1 + a2;
    }

    getT(index) {
        switch(index) {
            case 1: return this.t3;
            case 2: return this.t2;
            case 3: return this.t1;
        }
    }
    getA(index) {
        switch(index) {
            case 1: return this.a3;
            case 2: return this.a2;
            case 3: return this.a1;
        }
    }
    getH(index) {
        switch(index) {
            case 1: return this.h2;
            case 2: return this.h1;
        }
    }
}
class Signal2 {
    constructor(p, t1, t2) {
        this.p = p;
        this.t1 = t1;
        this.t2 = t2;
    }

    getT(index) {
        switch(index) {
            case 1: return this.t2;
            case 2: return this.t1;
        }
    }
}

//MARK: check later
//      l <= r and r <= l

function findCases(s1, s2) {
    function plr() {
        return p <= l && l <= r
    }
    function lpr() {
        return l < p && p <= r
    }
    function lrp() {
        return l <= r && r <= p && p <= l + r
    }
    function lrP() {
        return l <= r && l + r < p
    }
    function prl() {
        return p <= r && r <= l
    }
    function rpl() {
        return r < p && p <= l
    }
    function rlp() {
        return r <= l && l <= p && p <= l + r
    }
    function rlP() {
        return r <= l && l + r < p
    }

    let currentCase = `Case 1:\n`;
    currentCase += `t - ${s1.t1} < ${s2.t1} => t < ${s2.t1 + s1.t1}\n`;
    currentCase += `y(t) = 0`;
    console.log(currentCase);

    let cc = 1,
        r = s1.t2 - s1.t1, //s1s1 = r
        l = s1.t3 - s1.t2,
        p = s2.t2 - s2.t1
        
    //Ce ochi frumosi ai
    //Asa

    var ts;
    switch(true) {
        case plr(): ts = [
                [s1.t1, s2.t1, s1.t1, s2.t2, true , false, false, 1], // 1112
                [s1.t1, s2.t2, s1.t2, s2.t1, false, false, false, 1], // 1221
                [s1.t2, s2.t1, s1.t2, s2.t2, false, true , false, 3], // 2122
                [s1.t2, s2.t2, s1.t3, s2.t1, false, false, false, 2], // 2231
                [s1.t3, s2.t1, s1.t3, s2.t2, false, false, true , 2], // 3132
            ]; break;
        case lpr(): ts = [
                [s1.t1, s2.t1, s1.t1, s2.t2, true , false, false, 1], // 1112
                [s1.t1, s2.t2, s1.t2, s2.t1, false, false, false, 1], // 1221
                [s1.t2, s2.t1, s1.t3, s2.t1, false, true , false, 3], // 2131
                [s1.t3, s2.t1, s1.t2, s2.t2, false, true , true , 3], // 3122
                [s1.t2, s2.t2, s1.t3, s2.t2, false, false, true , 2], // 2232
            ]; break;
        case lrp(): ts = [
                [s1.t1, s2.t1, s1.t2, s2.t1, true , false, false, 1], // 1121
                [s1.t2, s2.t1, s1.t1, s2.t2, true , true , false, 3], // 2112
                [s1.t1, s2.t2, s1.t3, s2.t1, false, true , false, 3], // 1231
                [s1.t3, s2.t1, s1.t2, s2.t2, false, true , true , 3], // 3122
                [s1.t2, s2.t2, s1.t3, s2.t2, false, false, true , 2], // 2232
            ]; break;
        case lrP(): ts = [
                [s1.t1, s2.t1, s1.t2, s2.t1, true , false, false, 1], // 1121
                [s1.t2, s2.t1, s1.t3, s2.t1, true , true , false, 3], // 2131
                [s1.t3, s2.t1, s1.t1, s2.t2, true , true , true , 3], // 3112
                [s1.t1, s2.t2, s1.t2, s2.t2, false, true , true , 3], // 1222
                [s1.t2, s2.t2, s1.t3, s2.t2, false, false, true , 2], // 2232
            ]; break;
        case prl(): ts = [
                [s1.t1, s2.t1, s1.t1, s2.t2, true , false, false, 1], // 1112
                [s1.t1, s2.t2, s1.t2, s2.t1, false, false, false, 1], // 1221
                [s1.t2, s2.t1, s1.t2, s2.t2, false, true , false, 3], // 2122
                [s1.t2, s2.t2, s1.t3, s2.t1, false, false, false, 2], // 2231
                [s1.t3, s2.t1, s1.t3, s2.t2, false, false, true , 2], // 3132
            ]; break;
        case rpl(): ts = [
                [s1.t1, s2.t1, s1.t2, s2.t1, true , false, false, 1], // 1121
                [s1.t2, s2.t1, s1.t1, s2.t2, true , true , false, 3], // 2112
                [s1.t1, s2.t2, s1.t2, s2.t2, false, true , false, 3], // 1222
                [s1.t2, s2.t2, s1.t3, s2.t1, false, false, false, 2], // 2231
                [s1.t3, s2.t1, s1.t3, s2.t2, false, false, true , 2], // 3132
            ]; break;
        case rlp(): ts = [
                [s1.t1, s2.t1, s1.t2, s2.t1, true , false, false, 1], // 1121
                [s1.t2, s2.t1, s1.t1, s2.t2, true , true , false, 3], // 2112
                [s1.t1, s2.t2, s1.t3, s2.t1, false, true , false, 3], // 1231
                [s1.t3, s2.t1, s1.t2, s2.t2, false, true , true , 3], // 3122
                [s1.t2, s2.t2, s1.t3, s2.t2, false, false, true , 2], // 2232
            ]; break;
        case rlP(): ts = [
                [s1.t1, s2.t1, s1.t2, s2.t1, true , false, false, 1], // 1121
                [s1.t2, s2.t1, s1.t3, s2.t1, true , true , false, 3], // 2131
                [s1.t3, s2.t1, s1.t1, s2.t2, true , true , false, 3], // 3112
                [s1.t1, s2.t2, s1.t2, s2.t2, false, true , true , 3], // 1222
                [s1.t2, s2.t2, s1.t3, s2.t2, false, false, true , 2], // 2232
            ]; break;
    }

    for(let tsIndex = 0; tsIndex < ts.length; ++tsIndex) {
        let t = ts[tsIndex],
            sums = [t[0] + t[1],
                    t[2] + t[3]],
            integral,
            ings = [[0, 3], [false]];
        if(t[6]) integral =  `Integral from t-${s1.t3} to `;
        else     integral =  `Integral from ${s2.t1} to `;
        if(t[5]) integral += `t-${s1.t2} and from t-${s1.t2} to `;
        if(t[4]) integral +=  `t-${s1.t1}`;
        else     integral +=  `${s2.t2}`;
        currentCase = `Case ${++cc}:\n` +
                      `t - ${t[0]} >= ${t[1]} => t >= ${sums[0]}\n` +
                      `t - ${t[2]} < ${t[3]} => t < ${sums[1]}\n` +
                      `t ∈ [${sums[0]}; ${sums[1]})\n` +
                      `${integral}\n`;
        console.log(currentCase);

        if(t[6]) ings[0][1] = new Polynomial(0, 1, -s1.t3);
        else     ings[0][1] = new Polynomial(0, 0, s2.t1);

        if(t[5]) {
            ings[0][0] = new Polynomial(0, 1, -s1.t2);
            ings[1][0] = new Polynomial(0, 1, -s1.t2);
            if(t[4])
            ings[1][1] = new Polynomial(0, 1, -s1.t1);
            else ings[1][1] = new Polynomial(0, 0, s2.t2);
        } else if(t[4]) {
            ings[0][0] = new Polynomial(0, 1, -s1.t1);
        } else ings[0][0] = new Polynomial(0, 0, s2.t2);

        console.log("S2 ======================= " + s2.p);
        switch(t[7]) {
            case 1: console.log(s2.p.scalarMultiplication(s1.h1).getDefiniteIntegralWithUnknowns(ings[0][0], ings[0][1])); break;
            case 2: console.log(s2.p.scalarMultiplication(s1.h2).getDefiniteIntegralWithUnknowns(ings[0][0], ings[0][1])); break;
            case 3: console.log(s2.p.scalarMultiplication(s1.h2).getDefiniteIntegralWithUnknowns(ings[0][0], ings[0][1]) + '\n\n' +
                                s2.p.scalarMultiplication(s1.h1).getDefiniteIntegralWithUnknowns(ings[1][0], ings[1][1])/* + '\n\n' +
                                "result = " + s2.p.scalarMultiplication(s1.h1).getDefiniteIntegralWithUnknownsPolynomial(ings[0][0], ings[0][1]).add(
                                    s2.p.scalarMultiplication(s1.h2).getDefiniteIntegralWithUnknownsPolynomial(ings[1][0], ings[1][1])
                                )*/); break;
        }
        
    }

    currentCase = `Case ${++cc}:\n` +
                  `t - ${s1.t3} >= ${s2.t2} => t >= ${s1.t3 + s2.t2}\n` +
                  `y(t) = 0`;
    console.log(currentCase);

    /*
    currentCase = `Case 2:\n`;
    currentCase += `t - ${s1.t1} >= ${s2.t2} => t >= ${s1.t1 + s2.t2}\n`;
    currentCase += `t - ${s1.t2} < ${s2.t1} => t < ${s1.t2 + s2.t1}\n`;
    currentCase += `t ∈ [${s1.t1 + s2.t2}; ${s1.t2 + s2.t1})`;
    console.log(currentCase);
    */
}

var s1 = new Signal1(1, 8, 1, 19, -2, 26);
var s2 = new Signal2(new Polynomial(0, -1, 13), 1, 13);
period = s2.t2-s2.t1;
findCases(s1, s2);

console.log("---------------------");

s1 = new Signal1(2, 3, -3, 13, 1, 21);
s2 = new Signal2(new Polynomial(0, -1, 18), 9, 18);
period = s2.t2-s2.t1;
findCases(s1, s2);

console.log("---------------------");

s1 = new Signal1(2, 4, -1, 19, -1, 21);
s2 = new Signal2(new Polynomial(0, -2, 5), 5, 13);
period = s2.t2-s2.t1;
findCases(s1, s2);