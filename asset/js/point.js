var token = window.localStorage.getItem("key");

let nickname;
async function point_display() {
  var token = window.localStorage.getItem("key");

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Token: token,
    }),
  };
  const fetchResponse = await fetch(
    "http://182.211.172.137:8000/user/input",
    settings
  );
  const data = await fetchResponse.json();
  console.log(">>", data);
  nickname = data.data[0][0];
  document.getElementsByClassName("nick")[0].innerHTML = nickname;
  console.log(nickname);
}

if (token) {
  point_display();
}
