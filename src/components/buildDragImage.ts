export const buildDragImage = (event: React.DragEvent<HTMLDivElement>) => {
    if (!event.target || !(event.target instanceof HTMLElement)) return;



    // Clona el elemento arrastrado
    const dragElement = event.target.cloneNode(true) as HTMLElement;

    // Aplica estilos para el drag image
    dragElement.style.width = "280px";
    dragElement.style.opacity = "1";// Tamaño exacto
    dragElement.style.border = "2px solid #000000";
    dragElement.style.fontWeight = "bold";
     // Opacidad al 100%
    dragElement.style.pointerEvents = "none"; // Evita interacción
    dragElement.style.position = "absolute"; // Asegura posicionamiento
    dragElement.style.top = "-9999px"; // Oculta fuera de pantalla

    // Agrega el clon al DOM
    document.body.appendChild(dragElement);

    // Configura el drag image
    event.dataTransfer?.setDragImage(dragElement, 0, 0);

    // Limpia el clon después
    setTimeout(() => {
        document.body.removeChild(dragElement);
    }, 0);
}