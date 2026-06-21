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
  }
  catch (error) {
  console.log(error.message);


}
