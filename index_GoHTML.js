//---variables
let SlideSelected_By_User = 1;
const btnlink = document.querySelectorAll(".Btn-redirectLink");

//---Function to get the slide selected by user from HTML
function get_CurrentSlide(CurrentSlide){
  SlideSelected_By_User = CurrentSlide;
  return SlideSelected_By_User;
}

//---Function for redirecting to the slide selected by user 
function btn_redirectHTML(){
  if (SlideSelected_By_User==1){
    window.location.href = "derivates.html";
  }
  else if (SlideSelected_By_User==2){
    window.location.href = "ohmLaw.html";
  }
  else if (SlideSelected_By_User==3){
    //------------------------
  }
}

