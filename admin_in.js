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
const textToType = "Hello, welcome to admin page please enter admin password !";
typeEffect(targetElement, textToType, 100);

let submit = ()=>{
    let password = document.getElementById("password").value.toLowerCase();
    if (password === "mohi@aiml" || password === "revan@aiml") {
        window.location.href = "admin.html";
    } else {
        let msg=document.getElementById("error");
        msg.innerHTML = "Incorrect Password please try again!";
        msg.style.color = "red";
    }
}