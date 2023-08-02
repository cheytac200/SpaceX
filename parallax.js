const earth = document.querySelector('.earth');
const earthImg = document.querySelector('.earth img');

earth.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX / window.innerWidth;
    const offsetY = mouseY / window.innerHeight;

    const translateX = -offsetX * 30; // Измените это значение, чтобы изменить силу эффекта параллакса по горизонтали
    const translateY = -offsetY * 30; // Измените это значение, чтобы изменить силу эффекта параллакса по вертикали

    earthImg.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

const rocket = document.querySelector('.rocket');
const rocketImg = document.querySelector('.rocket img');

rocket.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX / window.innerWidth;
    const offsetY = mouseY / window.innerHeight;

    const translateX = -offsetX * 30; // Измените это значение, чтобы изменить силу эффекта параллакса по горизонтали
    const translateY = -offsetY * 30; // Измените это значение, чтобы изменить силу эффекта параллакса по вертикали

    rocketImg.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
