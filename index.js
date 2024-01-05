
    //AUDIO
    
    
    function reproducir() {
        var sound = document.getElementById("snd");
        var miAudio = document.getElementById('miAudio');
        if(miAudio.paused){
            playM();
            sound.style.backgroundImage = 'url("img/soundOn.png")';
        }
        else{
            pauseM();
            sound.style.backgroundImage = 'url("img/soundOff.png")';
        }
    };

    function playM(){
        var miAudio = document.getElementById('miAudio');
        miAudio.play();
    }
    function pauseM(){
        var miAudio = document.getElementById('miAudio');
        miAudio.pause();
    }

document.addEventListener("DOMContentLoaded", function () {
   

    var miDiv = document.getElementById("miDiv");

    // Evento de click al div
    miDiv.addEventListener("click", function () {
     
        miDiv.style.animation= "fadeAway 1s ease-out";
        miDiv.addEventListener("animationend", function () {
            // Oculto definitivamente el elemento después de la animación
            miDiv.style.display = "none";
             // Inicializa Typed.js
        var options = {
            strings: ["¡Hola mi esposa! <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdElEQVR4nO2ZSYwNURSGL01ibCyEiGFhaKRF0ywMiZXYGCIINmIhZrEyLAjSJLbEHMSU2Jh2ZksRIogEsTC2TsSszcEnh7/iLup1VXXX69xO3p/U4r1z7n/+U3c+5VwJJZRQQgkhA6gA1gCXgPvAJ+AbUAdcBNYBgzPwDQHWq22duD6J2/5bDQzKM4FRwGXS4TdwDqhqgG+EfMw3DS4B1U1JoC2wwwv4BtgPTFXvdATaAX2AKcBu4K18fwKbgDKPrwzYLFvEtwuYLA7j6ijuacAB+UQvaDvQJmsS3YArIvkM1ADlKdp1BjZqmBiOKAF7juk/s20w3xR85Ur+i9c7XbP0RJTEMxsKKfP3OaqAp+I45iXxBBjeCL5q4LmXTHLPaDhFSfTKGtTj6SeOCJZY3ybw9fKS2ZZmYv/WcMrcEwXe5Dc9I3PgG6lh9qtBPm91qmlqUI/TltHVOfJtkcaLhRwqvNWkPMfAfyd7jnxdvNVxYJzDWhn3u8ABHJTWVXFG200N01zgAKZL64U440MZB7jAwf9p8CDOWC9jJxc4gE7SWh9njHbPdi5wAB2iU0ec8YWMjd4EmwtAb2l9Hme8I2PjT5rNBGC0tN6OMx6VcbELHMAyaT0UZ1wu42EXOPj/0pcWurEZ3oU84YH2wAdprSjkdFMOs1ygAOZI4/WGnFbIyRJq5QID0Aq4JY1LkrrNCgGGGS4wADOlrTZx+HuT3i4xXVwg4N+pt7bgJI9p0Aa4oQYHXSAADkvTtdTXAmCYV0BYVHSVyXqWSMtXYGjWxgvU+DswsWgqk3VMkgbD/MaSRIUIqwCOzV1lcvzxqh8kFxxSXFOPe8k0W88AE4CPin2iyddl1bnOeGN0bm5qC8ecq1iGk6YhL+IylTAj7M1cvkwfZ6tXpj2aexztqhtVUzKctdJqjvxWpj0v7l8qqxbvdKGC9XsFfASMyYFzHPDYO7ROzkdtcuABwF0F/qnhkHkca/O1by4/xHXfTuHFUd1wAWCfN2+uAv0zvgxrg+bEHvusUFzVyRtWdN//ojfcOmGuLfSqNi/tm4sLAUB34JTXOzZpexcoGlzw/Gxp7e5CAzALeCWRtiDM9mz2Feq1N6EXupAB9AROe2/djjk7vd/Wcz1cSwEwT8eaCLZTr3QtEUAlcE9PpWvJ4N/NLpibZgmumfAHX8sHSn8qKcsAAAAASUVORK5CYII='><br><br>Este año no he podido regalarte mucho, lo siento jo :(",
        "Sin embargo, quiero plantearte unos planes para realizar este mes de enero...",
        "Elige tu plan favorito:"],
            typeSpeed: 50, // Velocidad de escritura en milisegundos por carácter
            backSpeed: 30,
            backDelay: 1700,
            showCursor: false, // Oculta el cursor de escritura
            onComplete: function() {
                // Esta función se ejecuta cuando Typed.js ha terminado de escribir
                activateAnimation();
            }
        };

        var typed = new Typed("#startText", options);
        }, { once: true }); // Parámetro { once: true } para que
                            // el evento se ejecute solo una vez


     function activateAnimation() {
        var opt = document.getElementById("opt");
        opt.style.display = "flex";
        opt.style.animation = "intro 3s forwards";
        
    }
    });
    var select1 = document.getElementById("selection1")
    var select2 = document.getElementById("selection2")
    var select3 = document.getElementById("selection3")
    var algTxt = document.getElementById("alignTxt");
    var result = document.getElementById("result");
    

    //FIN Y SUS DESCARGAS
    //POLLITO
    select1.addEventListener("click", function () {
        algTxt.style.display="none";
        result.style.display="flex";
        var enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = "img/pollitoInvitation.png";
        enlaceTemporal.download = "pollitoInvitation.png";
        enlaceTemporal.click();// Simula un clic en el enlace
        document.body.removeChild(enlaceTemporal);
    })
    //CINE
    select2.addEventListener("click", function () {
        algTxt.style.display="none";
        result.style.display="flex";
        var enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = "img/cineInvitation.png";
        enlaceTemporal.download = "cineInvitation.png";
        enlaceTemporal.click();// Simula un clic en el enlace
        document.body.removeChild(enlaceTemporal);
    })
    //PINTAR
    select3.addEventListener("click", function () {
        algTxt.style.display="none";
        result.style.display="flex";
        var enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = "img/pintarInvitation.png";
        enlaceTemporal.download = "pintarInvitation.png";
        enlaceTemporal.click();// Simula un clic en el enlace
        document.body.removeChild(enlaceTemporal);
    })
});


