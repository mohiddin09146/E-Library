let rollNumbers = [];
for (let i = 3201; i <= 3263; i++) {
    rollNumbers.push(`y22am${i}`);
}
for (let i=3268; i<3275;i++){
    rollNumbers.push(`l23am${i}`);
}
console.log(rollNumbers);
const login = (event) => {
    event.preventDefault();

    let rollno = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    if (rollno.length === 0) {
        msg.innerHTML = "Please enter your roll number";
        msg.style.color = "red";
        return;
    }

    if (rollno.length !== 9) {
        msg.innerHTML = "Please enter a valid roll number";
        msg.style.color = "red";
        return;
    }
    rollno = rollno.toLowerCase();
    localStorage.setItem("storedUsername", rollno);

    if (rollNumbers.includes(rollno)) {
        window.location.href = "home.html";
        alert("Login Successful");

    } else {
        msg.innerHTML = "Invalid Roll Number";
        msg.style.color = "red";
    }
};
