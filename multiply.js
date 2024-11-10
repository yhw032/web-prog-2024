onmessage = function(e) {
    let res = 0;
    let num1 = parseInt(e.data.num1);
    let num2 = parseInt(e.data.num2);

    num1 ? num1 : num1 = 0;
    num2 ? num2 : num2 = 0;

    res = num1 * num2;
    
    postMessage(res);
}