function operation() {
    a = document.getElementById("input").value;
    b = document.getElementById("output").value;
    opr = a.substring(a.length-1, a.length);
    if (a === "") {
        a = 0;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (opr === "+" || opr === "") {
        return a+b;
    }
    else if (opr === "-") {
        return a-b;
    }
    else if (opr === "*") {
        return a*b;
    }
    else if (opr === "/") {
        return a/b;
    }
    else if (opr === "!") {
        c = 1;
        for (let i = 2; i <= a; i++) {
            c *= i;
        }
        return c;
    }
    else {
        return a;
    }
}