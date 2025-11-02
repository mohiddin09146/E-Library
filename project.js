function typeEffect(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
const targetElement = document.getElementById("typewriter");
const textToType = "Hello, student! Hope your doing well please login to use E-library.";
typeEffect(targetElement, textToType, 100);