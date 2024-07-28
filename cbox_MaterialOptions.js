const select_material = document.getElementById('cbox-materials'); // Obtén el elemento select

const materials_Dict = {
    '': '',
    'oro': '45,2 * 10^5',
    'plata': '63,0 * 10^6',
    'hierro': '10 * 10^6',
    'diamante': '1 * 10^-14',
    'madera': '1 * 10^-10',
    'cobre': '58,0 * 10^6',
    'alumino': '37,7 * 10^6',
    'otro': ''
};

//--- Itera sobre las claves del diccionario y crea un elemento option para cada una
Object.keys(materials_Dict).forEach(key => {
    const option = document.createElement('option'); // Crea un nuevo elemento option
    option.value = key; // Asigna la clave del diccionario como valor
    option.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Convierte la primera letra en mayúscula para que se vea más legible
    select_material.appendChild(option); // Agrega la opción al select
});

//---It brings the conductivity from the dictionary depending of selected material 
select_material.addEventListener('change', function() {
    const Material_SelectedByUser = select_material.value;
    const conductivity_field = document.querySelector('.material-const');

    // Obtener la conductividad del material seleccionado directamente del diccionario
    const Value_conductivityMaterial = materials_Dict[Material_SelectedByUser];

    // Asignar el valor al campo de conductividad
    conductivity_field.value = Value_conductivityMaterial;
});
