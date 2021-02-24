let hasV, hasA, hasU, hasT, hasS;
hasV = hasU = hasA = hasT = hasS = false
let valV, valA, valU, valT, valS;
let missingKey = '';
let decip = 8
const output_group = document.getElementsByClassName('output_group');


const input_group = document.getElementsByClassName('input_group');
for(let i=0; i<input_group.length; i++) {
    input_group[i].onclick = addLabel;// group listener ends
    const input = input_group[i].getElementsByTagName('input')[0];

    input.onblur = removeLabel;
    input.onfocus = callLabel;
}

function callLabel(){
    addLabel.call(this.parentNode);
}

function addLabel(){

    this.parentElement.getElementsByTagName('label').innerHTML = ''
    const label = this.getElementsByTagName('label')[0];
    const input = this.getElementsByTagName('input')[0];
    if(!label.classList.contains('active')){
        label.classList.add('active');
        input.focus();
    }

}

function removeLabel(){
    //only move label back if input is empty
    if(this.value===""){
        const label = this.parentNode.children[0];
        if(label.classList.contains('active')){
            label.classList.remove('active');
        }
    }
}




function checkIPT(v, element) {


    eval("val" + v + '=' + "parseFloat(element.value)");
    console.log("The value of " + v + ": " + eval("val" + v));

    if (element.value === '') {
        eval("has" + v + '=' + false)
    } else {
        eval("has" + v + '=' + true)
    }

    const arr = [hasS, hasU, hasV, hasA, hasT];
    const arrdict = {'S':hasS, 'U':hasU, 'V':hasV, 'A':hasA, 'T':hasT};
    const count = arr.filter(Boolean).length;
    console.log(arr.length - count)
    if(arr.length - count === 2) {
        checkEq1();
        checkEq2();
        checkEq3();
        checkEq4();
        checkEq5();
    }
    else if (arr.length - count <= 2){
        alert("Only three inputs allowed each time.")
        element.className = "input_field"
        element.value = '';
        for (let bool in arr.values()){
            console.log(bool)
            if(!bool){
                document.getElementById("ipt_" + arr[bool]).disabled = true;
            }
        }
        eval("has" + v + '=' + false)
    }
    else {
        console.log("Hi")
        document.getElementById("calc_S").value = '';
        document.getElementById("calc_U").value = '';
        document.getElementById("calc_V").value = '';
        document.getElementById("calc_A").value = '';
        document.getElementById("calc_T").value = '';
    }



    for(let i=0; i<output_group.length; i++) {
        if(output_group[i].getElementsByTagName('input')[0].value !== ''){
            output_group[i].getElementsByTagName('label')[0].classList.add('active')
        }
        else{
            output_group[i].getElementsByTagName('label')[0].classList.remove('active')
        }
    }

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
                document.getElementById("calc_V").value = +(valU + valA * valT).toFixed(decip);
                break;
            case 'U':
                document.getElementById("calc_U").value = +(valV - valA * valT).toFixed(decip);
                break;
            case 'A':
                document.getElementById("calc_A").value = +((valV - valU) / valT).toFixed(decip);
                break;
            case 'T':
                document.getElementById("calc_T").value = +((valV - valU) / valA).toFixed(decip);
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
                document.getElementById("calc_V").value = +((2 * valS) / valT - valU).toFixed(decip);
                break;
            case 'U':
                document.getElementById("calc_U").value = +((2 * valS) / valT - valV).toFixed(decip);
                break;
            case 'T':
                document.getElementById("calc_T").value = +((2 * valS) / (valU + valV)).toFixed(decip);
                break;
            case 'S':
                document.getElementById("calc_S").value = +(((valU + valV) / 2) * valT).toFixed(decip);
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
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = +((valU ** 2 + 2 * valA * valS) ** 0.5).toFixed(decip);
                break;
            case 'U':
                document.getElementById("calc_U").value = +((valV ** 2 - 2 * valA * valS) ** 0.5).toFixed(decip);
                break;
            case 'A':
                document.getElementById("calc_A").value = +((valV ** 2 - valU ** 2) / (2 * valS)).toFixed(decip);
                break;
            case 'S':
                document.getElementById("calc_S").value = +((valV ** 2 - valU ** 2) / (2 * valA)).toFixed(decip);
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
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'S':
                document.getElementById("calc_S").value = +(valU * valT + 0.5 * (valA * (valT) ** 2)).toFixed(decip);
                break;
            case 'U':
                document.getElementById("calc_U").value = +((valS - 0.5 * (valA * (valT) ** 2)) / valT).toFixed(decip);
                break;
            case 'A':
                document.getElementById("calc_A").value = +((2 * valS) / (valU (valT) ** 3)).toFixed(decip);
                break;
            case 'T':
                document.getElementById("calc_T").value = +((-valU + (2 * valS * valA + (valU) ** 2) ** 0.5) / valA).toFixed(decip);
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
        checkMissing(arrdict);
        switch (missingKey) {
            case "":
                break;
            case 'V':
                document.getElementById("calc_V").value = +((2 * valS + ((valT) ** 2) * valA) / (2 * valT)).toFixed(decip);
                break;
            case 'T':
                document.getElementById("calc_T").value = +((valV + ((valV) ** 2 - 2 * valS * valA)) / valA).toFixed(decip);
                break;
            case 'A':
                document.getElementById("calc_A").value = +((-2 * valS + 2 * valV * valT) / ((valT) ** 2)).toFixed(decip);
                break;
            case 'S':
                document.getElementById("calc_S").value = +(valV * valT - 0.5 * (valA * (valT) ** 2)).toFixed(decip);
                break;
            default:
                break;
        }
    }
}
function checkMissing(arrdict){
    for (let key in arrdict) {
        if (arrdict[key] === false) {
            console.log("Missing variable is: " + key);
            missingKey = key
        }
    }
}


function resetAll(){
    const output_group = document.getElementsByClassName('output_group');
    for(let i=0; i<output_group.length; i++) {
        output_group[i].getElementsByTagName('input')[0].value = ''
        output_group[i].getElementsByTagName('label')[0].classList.remove('active')
    }
    const input_group = document.getElementsByClassName('input_group');
    for(let i=0; i<input_group.length; i++) {
        input_group[i].getElementsByTagName('input')[0].value = ''
        input_group[i].getElementsByTagName('label')[0].classList.remove('active')
    }
    hasV = hasU = hasA = hasT = hasS = false
}

/*
* v	= u + at
* s = (u+v)/2 * t
* v^2 = u^2 + 2as
* s = ut + 1/2(at^2)
* s = vt - 1/2(at^2)
* */

