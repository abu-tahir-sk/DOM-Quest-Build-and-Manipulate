
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
                 

               const donateCat = getTextFieldValueById('donate-number') 

                  console.log(donateMoney, addDonate, donateCat);
                  const newDonate = donateMoney + addDonate;

                  const donateNumber = donateCat - 100;
                  
                  document.getElementById('add-donate').innerText = newDonate;
                  document.getElementById('donate-number').innerText = donateNumber;

                  const d = new Date();
                  document.getElementById("history-section");

                  const p = document.createElement('p');
                  p.innerHTML = `
                  <h3 class="font-bold">Donate for Flood at GAZA</h3>
                  date: ${d} donate: ${addDonate} tk. newdonate: ${newDonate} 
                  `;
                  console.log(p)

                  document.getElementById('history-container')
                  .appendChild(p);

                
               const m = document.getElementById("message-container");
               m.innerHTML = `
              <div class="rounded-lg text-center shadow-2xl bg-white py-6 fixed top-1/3 left-1/3 right-1/3 border border-solid w-3/12">
               <h3 class="font-bold text-3xl pb-2">Congrates!</h3>
               <img class="mx-auto" src="assets/coin.png" alt="">
                
               </br>
               <p class="text-gray-400">You Have Donated for Humankind</p>
               </br>
               <h3 class="font-bold">Successfully</h3>
               </br>

               <button id="success-btn" class="btn bg-btn-primary">Close confirmation</button>
               </div>
               ` ;
               m.style.display = "flex";

            document.getElementById('success-btn')
            .addEventListener('click', function(){
               document.getElementById('message-container');
               m.style.display = "none"

            })
               
           }
           else{
            alert('add money');
           }
      })

      document.getElementById('home-to-home')
         .addEventListener('click', function(){
            document.location.href = "home.html"
         })
      
// noakhali 2

document.getElementById('donate-now-btn')
   .addEventListener('click', function(event){
            event.preventDefault();

             const addDonate = getInputFieldValueById('input-add-donate-2');
          
             if(isNaN(addDonate)){
                  alert('pleas tk donate');
                  return;
             }

             if(typeof addDonate === 'number'){
               const donateMoney = getTextFieldValueById('donate-money');
               
               const donateCat = getTextFieldValueById('donate-number')
           
                  console.log(addDonate, donateMoney);
               const newDonate = addDonate + donateMoney;

                const donateNumber = donateCat - 100;

               document.getElementById('donate-money').innerText = newDonate;

                document.getElementById('donate-number').innerText = donateNumber;

                const dT = new Date();
                document.getElementById("history-section");

                const p = document.createElement('p');
                p.innerHTML = `
                   <h3 class="font-bold">Donate for Flood at Noakhali, Bangladesh</h3>
                   Date: ${dT} Donate: ${addDonate} tk. new donate: ${newDonate} 
                `
                document.getElementById('history-container').appendChild(p);

                const m = document.getElementById("message-container");

                 m.innerHTML = `
              <div class="rounded-lg text-center shadow-2xl bg-white py-6 fixed top-1/3 left-1/3 right-1/3 border border-solid w-1/3 z-40">
               <h3 class="font-bold text-3xl pb-3">Congrates!</h3>
               <img class="mx-auto" src="assets/coin.png" alt="">
                
               </br>
               <p class="text-gray-400">You Have Donated for Humankind</p>
               </br>
               <h3 class="font-bold pb-3">Successfully</h3>
               </br>

               <button id="success-btn" class="btn bg-btn-primary ">Close confirmation</button>
               </div>
               ` ;
                m.style.display = "flex";

               document.getElementById('success-btn')
            .addEventListener('click', function(){
               document.getElementById('message-container');
               m.style.display = "none"

            })
                
               
             }

             else{
               alert('peas donate')
             }
         })  
         
         // feni 3
document.getElementById('donate-new-btn-3')
   .addEventListener('click', function(event){
            event.preventDefault();

             const addDonate = getInputFieldValueById('input-add-donate-3');
          
             if(isNaN(addDonate)){
                  alert('pleas tk donate');
                  return;
             }

             if(typeof addDonate === 'number'){
               const donateMoney = getTextFieldValueById('donate-money-3');
               
               const donateCat = getTextFieldValueById('donate-number')
           
                  console.log(addDonate, donateMoney);
               const newDonate = addDonate + donateMoney;

                const donateNumber = donateCat - 100;

               document.getElementById('donate-money-3').innerText = newDonate;

                document.getElementById('donate-number').innerText = donateNumber;

                const dT = new Date();
                document.getElementById("history-section");

                const p = document.createElement('p');
                p.innerHTML = `
                   <h3 class="font-bold">Donate for Flood Relief in Feni,Bangladesh</h3>
                   Date: ${dT} Donate: ${addDonate} tk. new donate: ${newDonate} 
                `
                document.getElementById('history-container').appendChild(p);

                const m = document.getElementById("message-container");

                 m.innerHTML = `
              <div class="rounded-lg text-center shadow-2xl bg-white py-6 fixed top-1/3 left-1/3 right-1/3 border border-solid w-1/3 z-40">
               <h3 class="font-bold text-3xl pb-3">Congrates!</h3>
               <img class="mx-auto" src="assets/coin.png" alt="">
                
               </br>
               <p class="text-gray-400">You Have Donated for Humankind</p>
               </br>
               <h3 class="font-bold pb-3">Successfully</h3>
               </br>

               <button id="success-btn" class="btn bg-btn-primary ">Close confirmation</button>
               </div>
               ` ;
                m.style.display = "flex";

               document.getElementById('success-btn')
            .addEventListener('click', function(){
               document.getElementById('message-container');
               m.style.display = "none"

            })
                
               
             }

             else{
               alert('peas donate')
             }
         })   
               // 4
               document.getElementById('donate-new-btn-4')
   .addEventListener('click', function(event){
            event.preventDefault();

             const addDonate = getInputFieldValueById('input-add-donate-4');
          
             if(isNaN(addDonate)){
                  alert('pleas tk donate');
                  return;
             }

             if(typeof addDonate === 'number'){
               const donateMoney = getTextFieldValueById('donate-money-4');
               
               const donateCat = getTextFieldValueById('donate-number')
           
                  console.log(addDonate, donateMoney);
               const newDonate = addDonate + donateMoney;

                const donateNumber = donateCat - 100;

               document.getElementById('donate-money-3').innerText = newDonate;

                document.getElementById('donate-number').innerText = donateNumber;

                  const ddd = getTextFieldValueById('donate-new-btn-4');

                if(addDonate === ddd){
                   document.getElementById('input-add-donate-4').classList.remove(addDonate);
                }

                const dT = new Date();
                document.getElementById("history-section");

                const p = document.createElement('p');
                p.innerHTML = `
                   <h3 class="font-bold">Donate for Flood Relief in Feni,Bangladesh</h3>
                   Date: ${dT} Donate: ${addDonate} tk. new donate: ${newDonate} 
                `
                document.getElementById('history-container').appendChild(p);

                const m = document.getElementById("message-container");

                 m.innerHTML = `
              <div class="rounded-lg text-center shadow-slate-700 bg-white py-6 fixed top-1/3 left-1/3 right-1/3 border border-solid w-1/3 z-40">
               <h3 class="font-bold text-3xl pb-3">Congrates!</h3>
               <img class="mx-auto" src="assets/coin.png" alt="">
                
               </br>
               <p class="text-gray-400">You Have Donated for Humankind</p>
               </br>
               <h3 class="font-bold pb-3">Successfully</h3>
               </br>

               <button id="success-btn" class="btn bg-btn-primary ">Close confirmation</button>
               </div>
               ` ;
                m.style.display = "flex";

               document.getElementById('success-btn')
            .addEventListener('click', function(){
               document.getElementById('message-container');
               m.style.display = "none"

            })
                
               
             }

             else{
               alert('peas donate')
             }
         })   

