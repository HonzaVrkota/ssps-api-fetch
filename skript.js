console.log("Start");
let data = null;
fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json())
  .then((newData) => {
    data = newData;
    let p = document.createElement("p");
    let div = document.getElementById("block");
    var elem = document.getElementById("loading");
    elem.parentNode.removeChild(elem);
    div.append(`Aktivita: ${data.activity}`, p);
    console.log(data);
  })
  .catch((err) => console.error(err));

let btn = document.getElementById("btn");

const ClickBtn = () => {
  if (data !== null) {
    console.log("Data:", data);
  } else console.log("data is not loaded");
};
