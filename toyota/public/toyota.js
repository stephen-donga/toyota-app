// Acessing html input fields by their ids and classnames.
var customerId = document.getElementById('customerId');
var customerName = document.getElementById('name');
var customerState = document.getElementById('state');
var typeOfCustomer = document.getElementById('customerType')
var partNumber = document.getElementById('partNumber');
var partPrice = document.getElementById('pricePerPart');
var quantityEl = document.getElementById('partquantity');
var container = document.querySelectorAll('.containerSize');
var compute = document.getElementById('submit');
var ship = document.querySelectorAll('.shipping').value;
var dispship = document.getElementById('smship');
var ursid = document.getElementById('smid');
var namereq = document.getElementById('smname');
var statereq = document.getElementById('smstate');
var ups = document.getElementById('ups');
var fedexair = document.getElementById('fedexair');
var fedexg = document.getElementById('fedexgr');
var postal= document.getElementById('postalair');
var shipphandle = document.getElementById("shiphandling");
// Validation measure for specific input fields
const customId = /^[0-9]{3,7}$/;
const name = /^[a-zA-Z]{5,25}$/;
const state = /^[A-Z]{3}$/;
const partNum = /^[0-9]{5,7}$/;
const pricePart = /^[0-9\.]{1,7}$/;
const qty = /^[0-9]{1,7}$/;

// Acessing html small-fields to display on browser.
var displayId =document.getElementById('smid');

// validation function to ensure correct values

compute.addEventListener("click", (event)=>{
    event.preventDefault();

    // A function validating the fields for a user to put in correct values;
    const validate = ()=>{
        if(customerId.value.match(customId)){
            customerId.style.border="1px solid green";
        }
        else{
            ursid.innerHTML="Must be numeric only" ;
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
 
    
         
            var  quantity =quantityEl.value;
            let price = partPrice.value;
            const cost = parseFloat(price * quantity).toFixed(2);
        
            document.getElementById('salescost').value =`$ ${cost}`;


    if (customerState.value === "KLA") {
        
        if(typeOfCustomer.checked){
        tax = cost * 0.1;

        }
        else{
            tax = parseFloat(cost +0).toFixed(2);

    }
      } else if (customerState.value === "EBB" || customerState.value === "MBR") {
        
        if(typeOfCustomer.checked){
        tax = cost * 0.05;

        }
        else{
            tax = parseFloat(cost + 0).toFixed(2);

    }
      } 
      else {
        tax =  parseFloat(cost + 0).toFixed(2);
        return tax;
      }
     
        document.getElementById('taxsales').value =`$${tax}`;


        if(ups.checked){
            if(container.checked){
                ship = parseFloat((quantity * 5) * 7.00).toFixed(2);
                shipMethod = "UPS";
              }
            else{
                ship = parseFloat(quantity * 7.00);
                shipMethod = "UPS";
            }
          
        }else if(fedexair.checked){
            if(container.checked){
             ship = parseFloat((quantity * 5) * 12.00).toFixed(2);
             shipMethod = "Fed Ex Air";
             }
            else{
             ship = quantity * 12.00;
              shipMethod = "Fed Ex Air";
            }
           }
        else if(postalair.checked){
            if(container.checked){
            ship = parseFloat((quantity * 5) * 8.50).toFixed(2);
            shipMethod = "Postal Air";
           }
          else{
            ship = (quantity * 8.50).toFixed(2);
            shipMethod = "Postal Air";
           }
          }
        else if(fedexg.checked){
          if(container.checked){
            ship = parseFloat((quantity * 5) * 9.25).toFixed(2);
            shipMethod = "Fed Ex  Ground";
            }
          else{
            ship = parseFloat(quantity * 9.25).toFixed(2);
            shipMethod = "Fed Ex  Ground";
            }
          }
        else{
           ship = 0;
           shipMethod ="none";
           return ship;
        }
        shipphandle.value = `$${ship}`;
        
        var total =parseFloat((cost + tax) + ship).toFixed(2);
        document.getElementById('toatlcost').value = `$${total}`;
        console.log( total);





    };
    validate();

     

});
    
     

 



