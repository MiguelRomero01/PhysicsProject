
/*------------------Solve the math Operation--------------------*/ 

// Función para reemplazar "ln(x)" por "log(x)"
function replaceLnForLog(operacion) {
    const regex = /ln\(([^\)]+)\)/g;
    operacion = operacion.replace(regex, 'log($1)');
    return operacion;
}


// Función para calcular la derivada
function Calculate() {
    clear_result() // Clear result field (this function is in index_buttons)

    //---variables
    let UserOperation_Calculate = document.getElementById('User-Operation').value; //get the current operation

    UserOperation_Calculate = replaceLnForLog(UserOperation_Calculate); //If the current operation has a "ln()", it's replace by "log()"
    
    //to calculate the  derivate
    const df_x = math.derivative(UserOperation_Calculate, 'x');
    const df_y = math.derivative(UserOperation_Calculate, 'y');
    const df_z = math.derivative(UserOperation_Calculate, 'z');

    if(Vars_ToDerivate == 0){
        document.getElementById('User-result-Final').innerText = 'Sorry. You must select one option';
    }
    else if(Vars_ToDerivate == 1){
        document.getElementById('User-result-X').innerText = 'La derivada de f(x) es: ' + df_x.toString();

        document.getElementById('User-result-Final').innerText = 'el ∇v es : ' + df_x.toString() + " î[v/m]";
    }
    else if(Vars_ToDerivate == 2){
        document.getElementById('User-result-X').innerText = 'La derivada de f(x) es: ' + df_x.toString();
        document.getElementById('User-result-Y').innerText = 'La derivada de f(y) es: ' + df_y.toString();

        document.getElementById('User-result-Final').innerText = 'el ∇v es : ' + df_x.toString() + " î - " + df_y.toString() + " ĵ[v/m]";
    }
    else if(Vars_ToDerivate == 3){
        document.getElementById('User-result-X').innerText = 'La derivada de f(x) es: ' + df_x.toString();
        document.getElementById('User-result-Y').innerText = 'La derivada de f(y) es: ' + df_y.toString();
        document.getElementById('User-result-Z').innerText = 'La derivada de f(z) es: ' + df_z.toString();
        
        document.getElementById('User-result-Final').innerText = 'el ∇v es : ' + df_x.toString() + " î - " + df_y.toString() + " ĵ -  " + df_z.toString() + " k̂[v/m]";
    }
}
