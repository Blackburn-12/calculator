function getValues(num) {
    let display = document.getElementById("display");
    if (num === '%' && display.value.includes('%')) return;
    display.value += num;
}

function result() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('%', '*0.01').replace('X', '*'));
    } catch {
        display.value = "Error";
    }
}

function allClear() {
    document.getElementById("display").value = "";
}

function deletebtn() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
