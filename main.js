const textBox = document.getElementById("type-writer");

const text = "I can edit videos and write code without getting tired. That's what I see myself doing in the future.";

let i =0;

const typeWriter = () => {
    if(i < text.length) {
        textBox.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});