document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formEncuesta');
    const mensaje = document.getElementById('mensaje');

    if (!form || !mensaje) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const satisfaccion = document.getElementById('satisfaccion').value;
        const recomienda = document.querySelector('input[name="recomienda"]:checked')?.value || '';
        const comentario = document.getElementById('comentario').value.trim();

        const opinion = { nombre, correo, satisfaccion, recomienda, comentario };

        let respuestas = JSON.parse(localStorage.getItem("opiniones")) || [];
        respuestas.push(opinion);
        localStorage.setItem("opiniones", JSON.stringify(respuestas));

        mensaje.textContent = "✅ ¡Gracias por tu opinión!";
        mensaje.style.color = "green";

        form.reset();
    });
});
