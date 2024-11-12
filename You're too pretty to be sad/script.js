const stringsArray = [
    "Drink a glass of water",
    "Wash your face",
    "Eat a piece of fruit or veg",
    "Sit outside for 10 minutes",
    "Call a friend",
    "Change your clothes",
  ];
  
  function shuffleText(displayBoxId) {
    const randomIndex = Math.floor(Math.random() * stringsArray.length);
    const randomString = stringsArray[randomIndex];
    document.getElementById(displayBoxId).textContent = randomString;
  }

  document.getElementById("shuffleButton1").addEventListener("click", () => {
    shuffleText("displayBox1");
  });
  
  document.getElementById("shuffleButton2").addEventListener("click", () => {
    shuffleText("displayBox2");
  });
  
  document.getElementById("shuffleButton3").addEventListener("click", () => {
    shuffleText("displayBox3");
  });