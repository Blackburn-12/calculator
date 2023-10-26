function getValues(num) {
    let valueEntered= document.getElementById("display")
    valueEntered.value += num
}

function result (){
    let valueEntered= document.getElementById("display")
    let answer = eval(valueEntered.value)
    document.getElementById("display").value = answer
}

function allClear(){
    let display = "";
    document.getElementById("display").value = display
}

function deletebtn(){
    let valueEntered = document.getElementById("display").value
    let splicedVal = valueEntered.slice(0 , -1)
    document.getElementById("display").value = splicedVal;
}