/* variable que determina el año actual */
const today = new Date();
const year = today.getFullYear();


/* variable de entrada de caracteres */
nombre = prompt("ingrese su nombre")
/* variables con una entrada numerica */
dia = Number( prompt("ingrese su dia de nacimiento"))
mes = Number(prompt("ingrese su mes de nacimiento "))
ano = Number(prompt("ingrese su año de nacimiento"))

edad = year-ano

/* función para determinar si es mayor de edad */
function checkAcceptation() {
    if (edad >= 18){
        return proceso()
    }else {
        alert("usted es menor de edad para entrar a esta pagina")
        history.go(-1);
    }
}
checkAcceptation();


/* función para realizar los procesos restantes */
function proceso() {
    switch (mes) {
        case 2:
            if (((ano%100)+(ano%400)) === 0){
                if ((dia >= 1) && (dia <= 29)) {
                    alert("Hola "+nombre+" tu edad es "+(year-ano)+" años y naciste "+dia+"/"+mes+"/"+ano)
                } else {
                    alert("rango de días incorrectos")
                    history.go(-1)
                }
            }else {
                if ((dia>=1)&&(dia<=28)){
                    alert("Hola "+nombre+" tu edad es "+(year-ano)+" años y naciste "+dia+"/"+mes+"/"+ano)
                }else {
                    alert("rango de días incorrectos")
                    history.go(-1)
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if ((dia >= 1) && (dia <= 30)) {
                alert("Hola "+nombre+" tu edad es "+(year-ano)+" años y naciste "+dia+"/"+mes+"/"+ano)
            } else {
                alert("rango de días incorrectos")
                history.go(-1)
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if ((dia >= 1) && (dia <= 31)) {
                alert("Hola "+nombre+" tu edad es "+(year-ano)+" años y naciste "+dia+"/"+mes+"/"+ano)
            } else {
                alert("rango de días incorrectos")
                history.go(-1)
            }
            break;
        default:
            alert("rango de mes incorrectos")
            history.go(-1)
    }
}












