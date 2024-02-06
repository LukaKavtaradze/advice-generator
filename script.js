const adviceId = document.getElementById("#");

const sentence = document.querySelector(".sentence");

// console.log(adviceId);
// console.log(sentence);

const button = document.querySelector("button");

button.addEventListener("click", getUserData)



async function getUserData() {
  const responce = await fetch("https://api.adviceslip.com/advice");

  const data = await responce.json();


  adviceId.textContent = `${data.slip.id}`
  sentence.textContent = `${data.slip.advice}`



}

// getUserData();
