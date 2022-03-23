document.addEventListener('DOMContentLoaded', function() {

    var openbtn = document.querySelectorAll('.userIcon'),
        overlay      = document.querySelector('#signin'),
        closebtn = document.querySelectorAll('.close-btn, .vyhod');

    openbtn.forEach(function(item){
      
            item.addEventListener('click', function(e) {
               
               e.preventDefault();
               overlay.classList.add('active');
      
            }); // end click
    }); // end foreach

    closebtn.forEach(function(item){
      
            item.addEventListener('click', function(e) {
            
            e.preventDefault();
            overlay.classList.remove('active');
    
            }); // end click
    }); // end foreach

    var openbtncart = document.querySelectorAll('.cartIcon'),
        overlaycart      = document.querySelector('#cart-new'),
        closebtncart = document.querySelectorAll('.close-btn-cart');

    openbtncart.forEach(function(item){
      
            item.addEventListener('click', function(e) {
               
               e.preventDefault();
               overlaycart.classList.add('active');
      
            }); // end click
    }); // end foreach

    closebtncart.forEach(function(item){
        
            item.addEventListener('click', function(e) {
            
            e.preventDefault();
            overlaycart.classList.remove('active');

            }); // end click
    }); // end foreach

 });


