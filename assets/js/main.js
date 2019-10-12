function clean() {
    document.getElementById("view").value = "";
}

function input(sym) {
    document.getElementById("view").value += sym;
}

function equal() {
    var val = document.getElementById("view").value
  
    val = eval(val)
    if (val == undefined)
        val = "0"

    document.getElementById("view").value = eval(val)
}

function del() {
    var val = document.getElementById("view").value
    document.getElementById("view").value = val.slice(0, val.length-1)
}

function minusPlus() {
    var val = document.getElementById("view").value
    if (val[0] == "-") {
        document.getElementById("view").value = val.slice(1, val.length);
    } else {
        document.getElementById("view").value = "-" + val;
    }
}