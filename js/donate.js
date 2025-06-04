
 document.getElementById('btn-donate')
      .addEventListener('click', function(event){
            event.preventDefault()
           

            const addDonate = getInputFieldValueById('input-add-donate');
            if(isNaN(addDonate)){
               alert('Pleas taka donate');
               return;
            }

           if(typeof addDonate === 'number'){
                  const donateMoney = getTextFieldValueById('add-donate');
                  const overlay = getTextFieldValueById('overlay')

               const donateCat = getTextFieldValueById('donate-number') 

                  console.log(donateMoney, addDonate, donateCat);
                  const newDonate = donateMoney + addDonate;
                  const donateNumber = donateCat - 100;
                  
                  document.getElementById('add-donate').innerText = newDonate;
                  document.getElementById('donate-number').innerText = donateNumber;
                   
               
           }
           else{
            alert('add money');
           }
      })
