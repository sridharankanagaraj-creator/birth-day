const nameText = "ABARNA";
let i = 0;

function typeName() {
  if (i < nameText.length) {
    document.getElementById("typing-name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, 150);
  }
}

window.onload = typeName;

function checkPassword() {
  const correct = "Arunchii";
  const entered = document.getElementById("pass").value;

  if (entered === correct) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Wrong da 😜");
  }
}
   RAIN 
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 50000);
  }, 3000);