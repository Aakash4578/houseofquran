 // scol navbar 
    
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
    // faq 
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement; 
            parent.classList.toggle('active'); 

            
            const answer = parent.querySelector('.answer');
            if (parent.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});


    // std counting 
    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.facts-item .number');
    
        counters.forEach(counter => {
            counter.innerText = '0'; 
            const updateCount = () => {
                const target = +counter.parentElement.getAttribute('data-count'); 
                const count = +counter.innerText; 
    
               
                const increment = target / 200; 
    
               
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment); 
                    setTimeout(updateCount, 1); 
                } else {
                    counter.innerText = target; 
                }
            };
    
            updateCount(); 
        });
    });



// slider brand 

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#image-slider', {
        type   : 'loop',         
        drag   : 'free',          
        focus  : 'center',        
        perPage: 3,              
        autoScroll: {
            speed: 2,             
        },
        arrows: false,           
        pagination: false        
    });

    splide.mount({ AutoScroll: window.splide.Extensions.AutoScroll });
});
// pre loader 

    


window.onload = function(){
    document.getElementById("preloader").style.display="none";
}
// end 


// scroll effect 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// end 