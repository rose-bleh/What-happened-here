// geting api info
getInfo()

let day = "1";
let month = "1"

async function getInfo(){

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.group(data);

    const url = "https://today.zenquotes.io/api/" + month + "/" + day
     //https://today.zenquotes.io/api/1/1 example
    const answer = document.getElementById("answerbox")
  }
  catch (error) {
  console.log(error.message);


}
}
//getting info from button? 
function sendInfo() {
  const userInput = 
}
