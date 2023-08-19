function bin2dec(input) {
    var dec = 0;
    let power = 1;
    for (i = input.length - 1; i >= 0; i--) {
        if(input.charAt(i) === "0" || input.charAt(i) === "1") {
            dec = dec + (input.charAt(i) * power);
            power = power * 2;
            console.log(power)
        } else {
            return "Invalid input"
        }
    }
    
    return dec
}

function updateResult() {
    result = bin2dec(document.getElementById("input").value.toString())
    document.getElementById("result").innerHTML = `Result: ${result}`;
}

