const openLinks = (event) => {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

  event.preventDefault();

  let str = document.getElementById("pastedText").value;
  let links = str.match(urlRegex);
  if (!links) {
    console.log("No links Found");
  }
  for (let link of links) {
     console.log(link)
     window.open(link, '_blank')
  }
};
