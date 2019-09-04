// Acessing html input fields by their ids and classnames.
var customerId = document.getElementById('customerId');
var customerName = document.getElementById('name');
var customerState = document.getElementById('state');
var typeOfCustomer = document.getElementById('customerType');
var partNumber = document.getElementById('partNumber');
var descriptn = document.getElementById('descrptn');
var partPrice = document.getElementById('pricePerPart');
var quantityEl = document.getElementById('quantity');
var containerSize = document.querySelectorAll('containerSize');
var compute = document.getElementById('submit');
var ship = document.querySelectorAll('.shipping');
var dispship = document.getElementById('smship');
var ursid = document.getElementById('smid');
var namereq = document.getElementById('smname');
var statereq = document.getElementById('smstate');
var ups = document.getElementById('ups');
// Validation measure for specific input fields
const customId = /^[0-9]{3,7}$/;
const name = /^[a-zA-Z]{5,25}$/;
const state = /^[A-Z]{3}$/;
const partNum = /^[0-9]{5,7}$/;
const descript =/^[a-zA-Z0-9]{25,300}$/;
const pricePart = /^[0-9]{1,7}$/;
const qty = /^[0-9]{1,7}$/;

// Acessing html small-fields to display on browser.
var displayId =document.getElementById('smid');

// validation function to ensure correct values

compute.addEventListener("click", (event)=>{
    event.preventDefault();
    const validate = ()=>{
        if(customerId.value.match(customId)){
            customerId.style.border="1px solid green";
        }
        else{
            ursid.innerHTML="Must be numeric only" 
        }
        if(customerName.value.match(name)){
            customerName.style.border="1px solid green";
        }
        else{
            namereq.innerHTML="Required";
        }
        if(customerState.value.match(state)){
            customerState.style.border="1px solid green";
        }
        else{
            statereq.innerHTML="Must be 3 only";
    
        }
        if(partNumber.value.match(partNum)){
            partNumber.style.border="1px solid green";
        }
        else{
            partNumber.style.border="1px solid red";
        }
        if(descriptn.value.match(descript)){
            descriptn.style.border="1px solid green";
        }
        else{
            descriptn.style.border="1px solid red";
        }
        if(partPrice.value.match(pricePart)){
            partPrice.style.border="1px solid green"; 
        }
        else{
            partPrice.style.border="1px solid red";
        }
        if(quantityEl.value.match(qty)){
            quantityEl.style.border="1px solid green";
        }
        else{
            quantityEl.style.border="1px solid red";
        }
        if(ship.checked){
            dispship.innerHTML="";
        }
        else{
            dispship.innerHTML="Please select shipping method";
        }
     };
     validate();

     const costCalc = ()=>{
        let price = partPrice.value;
        let mbararebb = 5/100;
        let klaTax = 10 / 100;
        let quantity = quantityEl.value;
        let cost = (price * quantity).toFixed(2);   
        
// Calculating taxrate for the states 
    var taxRate= ()=>{
        // Mbarara and Entebbe taxrate calculation
         if(customerState.value === "MBR" || "EBB")
         { 
             if(typeOfCustomer.checked)
             {
                mbararebb * cost;
             }
             else{
                cost; 
             } 
         }
        else if(customerState.value ==="KLA")
        {
            if(typeOfCustomer.checked)
            {
                klaTax * cost;
            }
            else{
                cost;
            }

        }
        else{
            cost;
        }
    }
    taxRate();
}

     costCalc();
     
});
console.log('connecting....');

