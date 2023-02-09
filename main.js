const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item-carrosel');
const maxItems = items.length;
const projetoSelecionado = document.getElementsByClassName('projetos-menu');




controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');


        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1
        }

        items.forEach(items =>
            items.classList.remove('current-item'));
        
        

        items[currentItem].classList.add("current-item");
    });
});


items.forEach(selecionar => {
    selecionar.addEventListener('click',(evento) => {
        items.forEach(items =>
            items.classList.remove('current-item'));
        evento.target.classList.add("current-item");

        // evento.target.scrollIntoView({
        //     inline:"center",
        //     behavior:'smooth',
        //     block:'nearest'
        // });     
    })
});

// $('input[name=teste]').on('change', function() {
//     $("#projetos-menu-python")[this.id=='Python'? 'slideDown': 'slideUp']();
//     $("#projetos-menu-js")[this.id=='JS'?'slideDown':'slideUp']();
//     $("#projetos-menu-html")[this.id=='HTML'?'slideDown':'slideUp']();
// });

/* fiz esse codigo ficar gigante pra poder usar o setTimeout */

$('input[name=teste]').on('change', function() { 
    if (this.id=='Python') {
        setTimeout( function() {
            $('#projetos-menu-python').slideDown();
        }, 300)       
    } else {
        $('#projetos-menu-python').slideUp();
    }
    
    if (this.id=='JS') {
        setTimeout( function() {
        $('#projetos-menu-js').slideDown();
        },300)
    } else {
        $('#projetos-menu-js').slideUp();
    }

    if (this.id=='HTML') {
        setTimeout( function() {
            $('#projetos-menu-html').slideDown();
            },300)
    } else {
        $('#projetos-menu-html').slideUp();
    }
});


$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        document.getElementById("teste").reset();
    }
});


/* animações do menu */ 

 $(".move_pro_contato").click(function() {
  $('html, body').animate({
  scrollTop: $("#contato").offset().top - 20
   }, 1000);
 });

 $(".move_pro_inicio").click(function() {
    $('html, body').animate({
    scrollTop: $("#inicio").offset().top - 20
     }, 1000);
   });

   $(".move_pro_projetos").click(function() {
    $('html, body').animate({
    scrollTop: $("#projetos").offset().top - 20
     }, 1000);
   });

   $(".move_pro_sobre-mim").click(function() {
    $('html, body').animate({
    scrollTop: $("#sobre-mim").offset().top - 20
     }, 1000);
   });

   $(".move_pro_habilidades").click(function() {
    $('html, body').animate({
    scrollTop: $("#habilidades").offset().top - 20
     }, 1000);
   });

   /* animações do scrollreveal */
   
   window.sr = ScrollReveal ({reset:true});
   
   ScrollReveal().reveal(".main-sobre", {
    reset: false,
    duration: 600,
    origin: "right",
    distance: "300px",
    easing: "cubic-bezier(0.5, 0, 0, 1)"
  });

  ScrollReveal().reveal(".projetos", {
    reset: false,
    duration: 600,
    origin: "left",
    distance: "300px",
  });
  
  sr.reveal('.Container-serviços', {
    reset: false,
    duration: 300,
    delay:300,
    origin:"bottom",
    distance: "100px"

});

    sr.reveal('.contato-form', {
    reset: false,
    duration: 300,
    origin:"top",
    distance: "100px"

});
   
