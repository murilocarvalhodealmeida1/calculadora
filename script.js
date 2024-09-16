function bask(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let delta = (b*b)-(4*a*c);
    let rdelta = Math.sqrt (delta);

    if (delta == 0){
        alert('sem resolução quando delta é igual a 0');
    }else if (delta < 0){
        let x1 = (-b)/(2*a);
        document.getElementById('res').innerText = 'Resultado: ' + x1;
    }else{
        let x1 = (-b+rdelta)/(2*a);
        let x2 = (-b-rdelta)/(2*a);
        document.getElementById('res').innerText = 'Resultado: ' + x1 + ' e ' + x2;
    }
}
