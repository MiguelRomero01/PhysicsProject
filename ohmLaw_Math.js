let conductividad_Value = false;
let densCorriente_Value = false;
let campoElectrico_Value = false;

const conductividad = document.querySelector('.material-const');
const campoElectrico = document.querySelector('.elect-camp');
const Dens_Corriente = document.querySelector('.current-density');
const result_msg = document.getElementById('final-result');


function clear_OhmLaw() {
    conductividad.value = '';
    campoElectrico.value = '';
    Dens_Corriente.value = '';
    document.getElementById('cbox-materials').value = '';
    Dens_Corriente.style.color = "black";
    conductividad.style.color = "black";
    campoElectrico.style.color = "black";
}

function multiplyScientificNotation(numberString, multiplier) {
    // Expresión regular para extraer el coeficiente y el exponente
    const regex = /([-+]?\d*\,?\d+)\s*\*\s*10\^([-+]?\d+)/;
    const match = numberString.match(regex);

    if (match) {
        let coefficient = parseFloat(match[1].replace(',', '.')); // Convertir el coeficiente a número
        const exponent = parseInt(match[2]); // Convertir el exponente a número entero

        if(densCorriente_Value==true) {
               // Multiplicar el coeficiente por el multiplicador
               coefficient *= multiplier;
        }
        else if(conductividad_Value==true || campoElectrico_Value==true) {
               // Multiplicar el coeficiente por el multiplicador
               coefficient = multiplier/coefficient;
        }

        // Reformatear el número en notación científica
        let newNumberString = coefficient.toString()+ ' * 10^' + exponent;

        return newNumberString;
    } else {
        // Si el número no está en el formato esperado, devolverlo tal cual
        return numberString;
    }
}

//---Calculate Ohm Law functions---
function calculate_OhmLaw() {
    conductividad_Value = false;
    densCorriente_Value = false;
    campoElectrico_Value = false;

     //condition for knowing what value is null
    if (conductividad.value.trim() !== '' && campoElectrico.value.trim() !== '' && Dens_Corriente.value.trim() !== '' && select_material.value.trim() !== '') {
        alert("No puedes seleccionar todos los campos");
    } 
    else if (conductividad.value.trim() === '') {
        conductividad_Value = true;
        find_conductivity();
    } 
    else if (Dens_Corriente.value.trim() === '') {
        densCorriente_Value = true;
        find_DensCorriente();
    }
    else if (campoElectrico.value.trim() === '') {
        campoElectrico_Value = true;
        find_campoElectrico();
    }
}

//---Find Result functions---
function find_DensCorriente() {

    var conductividadValue = conductividad.value.trim();
    var campoElectricoValue = parseFloat(campoElectrico.value.trim());

    var result = multiplyScientificNotation(conductividadValue, campoElectricoValue);
    Dens_Corriente.style.fontWeight = "bold";
    Dens_Corriente.style.color = "#BD2A2E";
    Dens_Corriente.value = result;
}


function find_conductivity() {
    var DensidadCorrienteValue = Dens_Corriente.value.trim();
    var campoElectricoValue = parseFloat(campoElectrico.value.trim());

    var result = multiplyScientificNotation(DensidadCorrienteValue, campoElectricoValue);
    conductividad.style.fontWeight = "bold";
    conductividad.style.color = "#BD2A2E";
    conductividad.value = result;
}


function find_campoElectrico(){
    var conductividadValue = conductividad.value.trim();
    var DensidadCorrienteValue = Dens_Corriente.value.trim();

    var result = multiplyScientificNotation(conductividadValue, DensidadCorrienteValue);
    campoElectrico.style.fontWeight = "bold";
    campoElectrico.style.color = "#BD2A2E";
    campoElectrico.value = result;
}


