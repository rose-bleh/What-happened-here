//getting info from button/user input
function saveInfo() {
  const monthValue = document.getElementById("month")
  const dayValue = document.getElementById("days")
  const genreValue = document.getElementById("genre")
  const button = document.getElementById("button")

  button.addEventListener("click", async () => {
    month = monthValue.value;
    day = dayValue.value;
    genre = genreValue.value;
    
    await getInfo(month, day, genre);
  })
}

// getting api info 
async function getInfo(userMonth, userDay, userGenre){
  const url = `https://byabbe.se/on-this-day/${userMonth}/${userDay}/${userGenre}.json`;
  //https://byabbe.se/{month}/{day}/events.json example
  const answer = document.getElementById("answertext");

  try {
    answer.innerText = "Loading! If nothing shows after 10 seconds, your date is invalid. Please choose a new date if so.";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response status: ${response.status}');
    }
    const data = await response.json();
    console.log(data);

    const allYears = data[userGenre]
    const randomYearNumber = Math.floor(Math.random() * allYears.length);
    const findYearInfo = allYears[randomYearNumber];
    const trueRandomYear = findYearInfo.year;
    const answerText = findYearInfo.description || findYearInfo.name;
    if (userGenre == "events") {
       answer.innerText = `In ${trueRandomYear}, ${answerText}`;
    }
    else if (userGenre == "births") {
       answer.innerText = `In ${trueRandomYear}, ${answerText}, was born.`;
    }
    else if (userGenre == "deaths") {
       answer.innerText = `In ${trueRandomYear}, ${answerText}, died.`;
    }

  }
  catch (error) {
    console.log("error", error);
  }
}
