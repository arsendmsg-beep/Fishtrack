window.onload = function(){

    const parametros = new URLSearchParams(window.location.search);

    const pez = parametros.get("pez");


    const peces = document.querySelectorAll(".pezWiki");


    if(pez){

        peces.forEach(function(p){

            if(p.id !== pez){

                p.style.display = "none";

            }else{

                p.classList.add("seleccionado");

                setTimeout(function(){

                    p.scrollIntoView({
                        behavior:"smooth",
                        block:"center"
                    });

                },300);

            }

        });

    }



    const modal = document.querySelector(".modalUbicaciones");

    const botones = document.querySelectorAll(".btnUbicaciones");

    const cerrar = document.querySelector(".cerrarModal");



    botones.forEach(function(boton){

        boton.addEventListener("click",function(){

            modal.style.display="flex";

        });

    });



    cerrar.addEventListener("click",function(){

        modal.style.display="none";

    });



    modal.addEventListener("click",function(e){

        if(e.target === modal){

            modal.style.display="none";

        }

    });


};