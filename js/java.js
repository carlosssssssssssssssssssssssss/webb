function generarEnlace() {
    // Obtener el valor del input
    const numero = document.getElementById('numero').value;
    
    // Crear la URL basada en el número
    const url = `pagina${numero}.1.html`;
    
    // Crear el enlace
    const enlace = document.getElementById('enlace');
    enlace.href = url;
    enlace.textContent = `Ir a la página ${numero}`;
    
    // Hacer visible el enlace
    enlace.style.display = 'inline';
}