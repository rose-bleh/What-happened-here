//getting info from button/user input
function saveInfo() {
  const monthValue = document.getElementById("month")
  const dayValue = document.getElementById("days")
  const button = document.getElementById("button")

  button.addEventListener("click", async () => {
    month = monthValue .value;
    day = dayValue.value;
    
    await getInfo(month, day);
  })
}

// geting api info 
async function getInfo(userMonth, userDay){
  const url = `https://today.zenquotes.io/api/${userMonth}/${userDay}`;
  //https://today.zenquotes.io/api/1/1 example
  const answer = document.getElementById("answerbox");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
  console.log("error");
  }
}
