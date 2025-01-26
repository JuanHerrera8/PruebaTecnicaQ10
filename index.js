// Validación de formulario mejorada
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");
const checkbox = form.querySelector("input[type='checkbox']");

form.addEventListener("submit", (e) => {
    let valid = true;

    inputs.forEach((input) => {
        if (!input.value.trim()) {
            valid = false;
            input.classList.add("is-invalid"); // Clase Bootstrap para resaltar errores
            input.nextElementSibling?.classList.add("text-danger");
        } else {
            input.classList.remove("is-invalid");
            input.nextElementSibling?.classList.remove("text-danger");
        }
    });

    // Validar el checkbox
    if (!checkbox.checked) {
        valid = false;
        checkbox.classList.add("is-invalid");
    } else {
        checkbox.classList.remove("is-invalid");
    }

    if (!valid) {
        e.preventDefault(); // Prevenir envío del formulario
        alert("Por favor completa todos los campos antes de enviar.");
    }
});

// Animación al desplazarse por la página, incluyendo las cards
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Dejar de observar una vez animado
        }
    });
}, {
    threshold: 0.2 // Detecta cuando el 20% del elemento está visible
});

document.querySelectorAll("section, article").forEach((element) => {
    observer.observe(element);
});
