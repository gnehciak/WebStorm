let hasV, hasA, hasU, hasT, hasS;
hasV = hasU = hasA = hasT = hasS = false
let valV, valA, valU, valT, valS;
let missingKey = '';
/*
function calculate1() {
    const U = document.getElementById("ipt_U").value;
    const A = document.getElementById("ipt_A").value;
    const T = document.getElementById("ipt_T").value;

    if(u != '' && a != '' && t != ''){
        console.log(document.getElementById("ipt_U").innerHTML)
        document.getElementById("result").innerHTML =
            document.getElementById("result").innerHTML + (parseFloat(U) + parseFloat(A) * parseFloat(T)) + " ms-1\r\n";
    }
}
*/

function checkIPT(v) {

    eval("val" + v + '=' + "parseFloat(document.getElementById(" + "\"ipt_" + v + "\").value)");
    console.log("The value of " + v + ": " + eval("val" + v));

    if (document.getElementById("ipt_" + v).value === '') {
        document.getElementById("ipt_" + v).className = "input_field"
        eval("has" + v + '=' + false)
        //console log true/false
        console.log(eval("has" + v))
    } else {
        document.getElementById("ipt_" + v).className = "input_field filled"
        eval("has" + v + '=' + true)
        //console log true/false
        console.log(eval("has" + v))
    }

    const arr = [hasV, hasU, hasA, hasT, hasS];
    const count = arr.filter(Boolean).length;
    //console.log(`Amount of true is: ${count}`)
    if(arr.length - count >= 2) {
        //console.log("equation 1 is available.")
        checkEq1();
        checkEq2();
        checkEq3();
        checkEq4();
        checkEq5();
    }
    else {
        alert("Only three inputs allowed each time.")
        document.getElementById("ipt_" + v).className = "input_field"
        document.getElementById("ipt_" + v).value = ''
        eval("has" + v + '=' + false)
    }

    if(document.getElementById("ipt_V").value !== '') document.getElementById("calc_V").value = '';
    if(document.getElementById("ipt_A").value !== '') document.getElementById("calc_A").value = '';
    if(document.getElementById("ipt_U").value !== '') document.getElementById("calc_U").value = '';
    if(document.getElementById("ipt_T").value !== '') document.getElementById("calc_T").value = '';
    if(document.getElementById("ipt_S").value !== '') document.getElementById("calc_S").value = '';
}

function checkEq1() {

    const arr = [hasV, hasU, hasA, hasT];
    const arrdict = {'V':hasV, 'U':hasU, 'A':hasA, 'T':hasT};
    const count = arr.filter(Boolean).length;
    if(arr.length - count === 1){
        checkMissing(arrdict)
        }
        switch (missingKey){
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = valU + valA * valT;
                break;
            case 'U':
                document.getElementById("calc_U").value = valV - valA * valT;
                break;
            case 'A':
                document.getElementById("calc_A").value = (valV - valU) / valT;
                break;
            case 'T':
                document.getElementById("calc_T").value = (valV - valU) / valA;
                break;
            default:
                break;
        }
}
function checkEq2() {

    const arr = [hasV, hasU, hasT, hasS];
    const arrdict = {'V': hasV, 'U': hasU, 'T': hasT, 'S': hasS};
    const count = arr.filter(Boolean).length;
    if (arr.length - count === 1) {
        checkMissing(arrdict)
        switch (missingKey){
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = (2 * valS) / valT - valU;
                break;
            case 'U':
                document.getElementById("calc_U").value = (2 * valS) / valT - valV;
                break;
            case 'T':
                document.getElementById("calc_T").value = (2 * valS) / (valU + valV) ;
                break;
            case 'S':
                document.getElementById("calc_S").value = ((valU + valV) / 2) * valT;
                break;
            default:
                break;
        }
    }
}
function checkEq3() {
    const arr = [hasV, hasU, hasA, hasS];
    const arrdict = {'V': hasV, 'U': hasU, 'A': hasA, 'S': hasS};
    const count = arr.filter(Boolean).length;
    if (arr.length - count === 1) {
        console.log("equation 3 is available.")
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = (valU ** 2 + 2 * valA * valS) ** 0.5;
                break;
            case 'U':
                document.getElementById("calc_U").value = (valV ** 2 - 2 * valA * valS) ** 0.5;
                break;
            case 'A':
                document.getElementById("calc_A").value = (valV ** 2 - valU ** 2) / (2 * valS);
                break;
            case 'S':
                document.getElementById("calc_S").value = (valV ** 2 - valU ** 2) / (2 * valA);
                break;
            default:
                break;
        }
    }
}
function checkEq4() {
    const arr = [hasS, hasU, hasA, hasT];
    const arrdict = {'S': hasS, 'U': hasU, 'A': hasA, 'T': hasT};
    const count = arr.filter(Boolean).length;
    if (arr.length - count === 1) {
        console.log("equation 4 is available.")
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'S':
                document.getElementById("calc_S").value = valU * valT + 0.5 * (valA * (valT) ** 2);
                break;
            case 'U':
                document.getElementById("calc_U").value = (valS - 0.5 * (valA * (valT) ** 2)) / valT;
                break;
            case 'A':
                document.getElementById("calc_A").value = (2 * valS) / (valU (valT) ** 3);
                break;
            case 'T':
                document.getElementById("calc_T").value = (-valU + (2 * valS * valA + (valU) ** 2) ** 0.5) / valA;
                break;
            default:
                break;
        }
    }
}
function checkEq5() {
    //s = vt - 1/2(at^2)
    const arr = [hasV, hasT, hasA, hasS];
    const arrdict = {'V': hasV, 'T': hasT, 'A': hasA, 'S': hasS};
    const count = arr.filter(Boolean).length;
    if (arr.length - count === 1) {
        console.log("equation 5 is available.")
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = (2 * valS + ((valT) ** 2) * valA) / (2 * valT);
                break;
            case 'T':
                document.getElementById("calc_T").value = (valV + ((valV) ** 2 - 2 * valS * valA)) / valA;
                break;
            case 'A':
                document.getElementById("calc_A").value = (-2 * valS + 2 * valV * valT) / ((valT) ** 2);
                break;
            case 'S':
                document.getElementById("calc_S").value = valV * valT - 0.5 * (valA * (valT) ** 2);
                break;
            default:
                break;
        }
    }
}
function checkMissing(arrdict){
    for (let key in arrdict) {
        if (arrdict[key] == false) {
            console.log("Missing variable is: " + key);
            missingKey = key
        }
    }
}

/*
* v	= u + at
* s = (u+v)/2 * t
* v^2 = u^2 + 2as
* s = ut + 1/2(at^2)
* s = vt - 1/2(at^2)
* */