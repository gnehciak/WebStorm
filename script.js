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

    checkEq1();
    checkEq2();
    if(document.getElementById("ipt_V").value != '') document.getElementById("calc_V").value = '';
    if(document.getElementById("ipt_A").value != '') document.getElementById("calc_A").value = '';
    if(document.getElementById("ipt_U").value != '') document.getElementById("calc_U").value = '';
    if(document.getElementById("ipt_T").value != '') document.getElementById("calc_T").value = '';
    if(document.getElementById("ipt_S").value != '') document.getElementById("calc_S").value = '';
}

function checkEq1() {

    const arr = [hasV, hasU, hasA, hasT];
    const arrdict = {'V':hasV, 'U':hasU, 'A':hasA, 'T':hasT};
    const count = arr.filter(Boolean).length;
    //console.log(`Amount of true is: ${count}`)
    if(arr.length - count == 1){
        //console.log("equation 1 is available.")
        for(let key in arrdict){
            if(arrdict[key] == false){
                //console.log("Missing variable is: " + key);
                missingKey = key
            }
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
}
function checkEq2() {

    const arr = [hasV, hasU, hasT, hasS];
    const arrdict = {'V': hasV, 'U': hasU, 'T': hasT, 'S': hasS};
    const count = arr.filter(Boolean).length;
    console.log(`Amount of true is: ${count}`)
    if (arr.length - count == 1) {
        console.log("equation 2 is available.")
        for (let key in arrdict) {
            if (arrdict[key] == false) {
                console.log("Missing variable is: " + key);
                missingKey = key
            }
        }
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
/*
* v	= u + at
* s = (u+v)/2 * t
* v^2 = u^2 + 2as
* s = ut + 1/2(at^2)
* s = vt - 1/2(at^2)
* */