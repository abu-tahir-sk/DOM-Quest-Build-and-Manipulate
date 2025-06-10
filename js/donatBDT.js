document.getElementById('show-add-card-btn')
      .addEventListener('click', function(){
          showSectionId('donate-card');
           const h = document.getElementById("show-add-card-btn");
                  h.classList.add('bg-btn-primary');
                  document.getElementById('show-add-card-btn').appendChild(h);
                 
                   
      })
      document.getElementById('history-btn')
            .addEventListener('click', function(){
                   showSectionId('history-section');
                   const h = document.getElementById("history-btn");
                  h.classList.add('bg-btn-primary');
                  document.getElementById('history-btn').appendChild(h);

            })