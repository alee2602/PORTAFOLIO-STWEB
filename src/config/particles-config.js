const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1
},
background: {
    color: {
        value: "#0D0C1D"  // Fondo oscuro para simular el cielo nocturno
    }
},
particles: {
    number: {
        value: 700,  // Aumentar el número de estrellas para un cielo más denso
        density: {
            enable: true,
            area: 1000  // Mantener el área para una alta densidad
        }
    },
    color: {
        value: "#ffffff"  // Estrellas de color blanco
    },
    shape: {
        type: "circle"  // Forma circular para las estrellas
    },
    opacity: {
        value: 0.8,
        random: true,  // Opacidad variada para efecto más natural
        anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,  // Parpadeo sutil de las estrellas
            sync: false
        }
    },
    size: {
        value: 2,
        random: true,  // Tamaños variados para mayor realismo
        anim: {
            enable: false
        }
    },
    move: {
        enable: true,  // Activar el movimiento
        speed: 0.2,  // Velocidad muy baja para un movimiento sutil
        direction: "none",
        random: true,  // Movimiento aleatorio para simular un efecto natural
        straight: false,
        outMode: "out",
        bounce: false,
        attract: {
            enable: false
        }
    }
},
interactivity: {
    events: {
        onHover: {
            enable: true,
            mode: "bubble"  // Efecto de resplandor al pasar el mouse
        },
        onClick: {
            enable: false  // Sin interacción al clic
        }
    },
    modes: {
        bubble: {
            distance: 100,
            size: 4,  // Crecimiento sutil al interactuar
            duration: 2,
            opacity: 1,  // Aumento de opacidad al interactuar
            speed: 3
        }
    }
},
detectRetina: true,
};
export default particlesConfig;