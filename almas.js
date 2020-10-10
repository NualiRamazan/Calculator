function insert(num) {
    if (num === '.' && document.getElementById("output").value.includes('.')) return
    document.getElementById("output").value = document.getElementById("output").value + num;
    if (num === '+') {
        document.getElementById("input").value = operation() + "+";
        document.getElementById("output").value = "";
    }
    else if (num === '-'){
        document.getElementById("input").value = operation() + "-";
        document.getElementById("output").value = "";
    }
    else if (num === '*'){
        document.getElementById("input").value = operation() + "*";
        document.getElementById("output").value = "";
    }
    else if (num === '/'){
        document.getElementById("input").value = operation() + "/";
        document.getElementById("output").value = "";
    }
    else if (num === '!'){
        document.getElementById("input").value = operation() + "!";
        document.getElementById("output").value = "";
    }
    else if (num === "√"){
        document.getElementById("output").value = Math.sqrt(parseFloat(document.getElementById("output").value));
    }
    else if (num === '='){
        document.getElementById("output").value = operation();
        document.getElementById("input").value = "";
    }
}

function clean() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

function back() {
    var exp = document.getElementById("output").value;
    document.getElementById("output").value = exp.substring(0, exp.length-1);
}
