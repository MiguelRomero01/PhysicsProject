
//clear the user operations and result field
function clear_all(){
     document.getElementById('User-Operation').value='';
     var clear_cbox = document.getElementById('cbox-options');//Select the null element in the combobox
     clear_cbox.selectedIndex = 0
     clear_result();
}

function clear_result(){
     document.getElementById('User-result-X').innerText = '';
     document.getElementById('User-result-Y').innerText = '';
     document.getElementById('User-result-Z').innerText = '';
     document.getElementById('User-result-Final').innerText = '';
}

//Remove la last one letter from the user operation field
function removeLastLetter(){
     var GetText_RemoveLastLetter = document.getElementById('User-Operation').value;
     NoLastLetter_Text = GetText_RemoveLastLetter.slice(0, -1);
     document.getElementById('User-Operation').value = NoLastLetter_Text;
}

//----------------------------Buttons to put into the operation in the field    ----------------//

function addOperation(button){
     document.getElementById('User-Operation').value = document.getElementById('User-Operation').value+button.toString();
}
