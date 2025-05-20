function functionControles() {
    let varCadena = "Detalles de los controles:";
    
    // Acceso al Formulario
    let varForm = document.forms["fmControles"];
    
    // Acceso a los controles
    // Radio buttons (single selection)
    let varRadio = varForm.elements["groupRadio"]; 
    varCadena += "\n - Radio: " + varRadio.value;
    
    // Checkboxes (multiple selections)
    let varChecks = varForm.elements["groupCheck"];
    varCadena += "\n - Check: ";
    for(let i = 0; i < varChecks.length; i++) {
        if(varChecks[i].checked) {
            varCadena += varChecks[i].value + " ";
        }
    }
    
    // Select controls
    let varBasic = varForm.elements["selectBasic"]; 
    varCadena += "\n - Basic: " + varBasic.value;
    
    let varMultiple = varForm.elements["selectMultiple"]; 
    varCadena += "\n - Multiple: " + Array.from(varMultiple.selectedOptions).map(o => o.value).join(", ");
    
    // Otros controles
    let varFile = varForm.elements["varFile"]; 
    varCadena += "\n - Archivo: " + (varFile.files.length > 0 ? varFile.files[0].name : "Ningún archivo seleccionado");
    
    let varColor = varForm.elements["varColor"]; 
    varCadena += "\n - Color: " + varColor.value;
    
    let varDate = varForm.elements["varDate"]; 
    varCadena += "\n - Fecha: " + varDate.value;
    
    let varTime = varForm.elements["varTime"]; 
    varCadena += "\n - Tiempo: " + varTime.value;
    
    let varWeek = varForm.elements["varWeek"]; 
    varCadena += "\n - Semana: " + varWeek.value;
    
    let varMonth = varForm.elements["varMonth"]; 
    varCadena += "\n - Mes: " + varMonth.value;
    
    let varNumber = varForm.elements["varNumber"]; 
    varCadena += "\n - Número: " + varNumber.value;
    
    let varRange = varForm.elements["varRange"]; 
    varCadena += "\n - Rango: " + varRange.value;
    
    alert(varCadena);
}