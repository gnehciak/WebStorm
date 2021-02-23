var hasV, hasA, hasU, hasT = false
var valV, valA, valU, valT = 0
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

function checkIPT(v) {

    eval("var val" + v + '=' + "document.getElementById(" + "\"ipt_" + v + "\").value");

    console.log("The value of " + v + ": " + eval("val" + v));

    const input = document.getElementById("ipt_" + v).value;
    if (input != '') {
        document.getElementById("ipt_" + v).className = "input_field filled"
        eval("has" + v + '=' + true)
        //console log true/false
        console.log(eval("has" + v))
    } else {
        document.getElementById("ipt_" + v).className = "input_field"
        eval("has" + v + '=' + false)
        //console log true/false
        console.log(eval("has" + v))
    }
    checkEq1();
}

function checkEq1() {

    const arr = [hasV, hasU, hasA, hasT];
    const arrdict = {'V':hasV, 'U':hasU, 'A':hasA, 'T':hasT};
    const count = arr.filter(Boolean).length;
    console.log("Amount of true is: " + count)
    if(arr.length - count == 1){
        console.log("equation 1 is available.")

    }
    console.log("mission variable is: " + arr.find(bool => bool == false))
}