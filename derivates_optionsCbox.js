
/*--------------------- Create the comboboxes --------------------*/ 

const select_dfparc = document.getElementById('cbox-options');

// Define las opciones que quieres agregar a la lista desplegable
const options = [' ','(x)', '(x,y)', '(x,y,z)'];

// Itera sobre las opciones y crea un elemento option para cada una
options.forEach(opcion => {
    const option = document.createElement('option'); // Crea un nuevo elemento option
    option.value = opcion; // Asigna el valor de la opción
    option.textContent = opcion; // Asigna el texto visible de la opción
    select_dfparc.appendChild(option); // Agrega la opción al select
});

// Agregar un evento de cambio al combobox
select_dfparc.addEventListener('change', function() {
    const Cbox_SelectedByUser = select_dfparc.value;  // Obtener el valor de la combobox
    
    //It brings the vars to derivate 
    for (let i = 0; i <= Cbox_SelectedByUser.length;i++){
        if(Cbox_SelectedByUser == options[i]){
            Vars_ToDerivate = i;
            break;
        }
}
});

