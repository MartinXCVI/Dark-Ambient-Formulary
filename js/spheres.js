const myCircles = document.querySelectorAll(".spheres");

function moveSpheres(sphere) {
    const maxXAxis = window.innerWidth - sphere.clientWidth;
    const maxYAxis = window.innerHeight - sphere.clientHeight;

    const randomXPosition = Math.random() * maxXAxis;
    const randomYPosition = Math.random() * maxYAxis;

    sphere.style.right = `${randomXPosition}px`;
    sphere.style.top = `${randomYPosition}px`;

    setTimeout(() => {
        moveSpheres(sphere);
    },Math.random() * 8000)
}

myCircles.forEach((sphere) => {
    moveSpheres(sphere);
}
)