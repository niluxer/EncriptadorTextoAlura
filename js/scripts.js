const encriptar_click = (event) => {
    event.preventDefault();
    const vocales = 'aeiou';
    let res = '';
    cadena = leer_cadena();
    if (cadena.length == 0)
    {
        alert("Favor de proporcionar una cadena.");
        document.getElementById("cadena").focus();
        return;
    }
    for(let i = 0; i < cadena.length; i++)
    {
        const el = cadena[i];
        if(vocales.includes(el))
        {  
            switch(el)
            {
                case 'a':
                    res += 'ai';
                break;
                case 'e':
                    res += 'enter';
                break;
                case 'i':
                    res += 'imes';
                break;
                case 'o':
                    res += 'ober';
                break;
                case 'u':
                    res += 'ufat';
                break;
            }
        } else
        {
            res += el;
        }
   }
   console.log("The result..." + res);
   resultado.innerHTML = res;
};

const desencriptar_click = (event) => {
    event.preventDefault();
    let res = '';
    res = cadena.replace('ai', 'a');
    res = res.replace('enter', 'e');
    res = res.replace('imes', 'i');
    res = res.replace('ober', 'o');
    res = res.replace('ufat', 'u');
    console.log("The result..." + res);
    resultado.innerHTML = res;
};

const copiar_click = (event) => {
    navigator.clipboard.writeText(resultado.innerHTML).then(() => {
        console.log('Content copied to clipboard');
      },() => {
        console.error('Failed to copy');
    });
}

const pegar_click = (event) => {
    /*navigator.clipboard.readText().then((clipText) => {
        document.getElementById("cadena").innerText = clipText;
      });*/
      navigator.clipboard.readText().then(
        (clipText) => document.getElementById("cadena").innerText = clipText);
      
}

function leer_cadena()
{
    let valor = document.getElementById("cadena").value;
    return valor.trim().toLowerCase();
}

var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");
var btnPegar = document.getElementById("btnPegar");
var cadena = "";
const resultado = document.getElementById("resultado");

btnEncriptar.onclick = encriptar_click;
btnDesencriptar.onclick = desencriptar_click;
btnCopiar.onclick = copiar_click;
btnPegar.onclick = pegar_click;