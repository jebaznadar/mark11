const dateOfBirth = document.querySelector("#date-of-birth") ;
const LuckyNumber = document.querySelector("#lucky-number");
const CheckButton = document.querySelector("#check-button");
const outPutBox = document.querySelector("#outputbox");

CheckButton.addEventListener('click',checkBirthDateIsLucky )

function checkBirthDateIsLucky(){
   const dob = dateOfBirth.value ;
   const sum = calculateSum(dob)
   if(sum && dob ){
    
    compareValues(sum ,LuckyNumber.value)
    
   }
   else{
    outPutBox.innerText = "please enter both the fields 😤";  
   
    
   }
   

}
function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0 ;
    for ( let index = 0; index<dob.length;index++){
         sum = sum + Number(dob.charAt(index));
    }


    return sum; 
}
function compareValues(sum , LuckyNumber){
    
    if(sum%LuckyNumber==0){
        outPutBox.innerText = "your birthday is Lucky 🥳";
    }
    else{
        outPutBox.innerText = "your birthday is not Lucky 🫤";
    }
}