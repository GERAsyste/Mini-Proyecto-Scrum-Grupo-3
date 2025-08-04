document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formEncuesta');
    const mensaje = document.getElementById('mensaje');
    const lista = document.getElementById('listaOpiniones');

    // Mostrar todas las opiniones guardadas (simulando un GET a una API)
    function mostrarOpiniones() {
        const opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
        lista.innerHTML = '';

        opiniones.forEach((op, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${op.nombre}</strong> (${op.correo})<br>
                Satisfacción: ${op.satisfaccion}<br>
                ¿Recomienda?: ${op.recomienda}<br>
                Comentario: ${op.comentario}<br><hr>`;
            li.style.marginBottom = "10px";
            lista.appendChild(li);
        });
    }

    // Evento al enviar el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const satisfaccion = document.getElementById('satisfaccion').value;
        const recomienda = document.querySelector('input[name="recomienda"]:checked')?.value || '';
        const comentario = document.getElementById('comentario').value.trim();

        const nuevaOpinion = { nombre, correo, satisfaccion, recomienda, comentario };

        let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
        opiniones.push(nuevaOpinion);
        localStorage.setItem("opiniones", JSON.stringify(opiniones));

        mensaje.textContent = "✅ ¡Gracias por tu opinión!";
        mensaje.style.color = "green";

        form.reset();
        mostrarOpiniones();
    });

    mostrarOpiniones(); // Mostrar al cargar
});
