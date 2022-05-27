
const urlRegex =
  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

const openLinks = (event) => {

  event.preventDefault();

  let str = document.getElementById("pastedText").value;
  let links = str.match(urlRegex);
  if (!links) {
    console.log("No links Found");
  } else {
    for (let link of links) {
      console.log(link)
      window.open(link, '_blank')
    }
  }
};

const open10Link = () => {

  let counter = document.getElementById('counter')
  let str = document.getElementById("pastedText").value;
  let links = str.match(urlRegex);
  if (!links) {
    console.log("No links Found");
    alert("No Links Found in text")
  } else {
    for (let i = 0; i < 10; i++) {
      console.log(links[parseInt(counter.textContent)])
      if (parseInt(counter.textContent) >= links.length) {
        counter.innerHTML = 0
        document.getElementById('warn').innerHTML = "Done"
        break
      }
      window.open(links[parseInt(counter.textContent)], '_blank')
      counter.innerHTML = parseInt(counter.textContent) + 1
      console.log(counter)
    }
  }
}