var token = window.localStorage.getItem("key");

async function send_session() {
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
  console.log(data);
  text = data.data[0][0];
  point = data.data[0][1];
  console.log(text);
  document.getElementById("db_data0").innerHTML = text;
  document.getElementsByClassName("insert")[0].innerHTML = point;
}

if (token) {
  send_session();
  const ul = document.getElementById("navbar_custom");
  ul.replaceChildren();
  li = `<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#header">Home</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#features">Features</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#details">Details</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="map.html">Map</a>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
  <ul class="dropdown-menu" aria-labelledby="dropdown01">
    <li>
      <a class="dropdown-item" href="reservation.html">Reservation</a>
    </li>
    <li><div class="dropdown-divider"></div></li>
    <li>
      <a class="dropdown-item" href="privacy.html">Privacy</a>
    </li>
    <li><div class="dropdown-divider"></div></li>
    <li>
      <a class="dropdown-item" href="
      withdrawal.html">
      Withdrawal</a>
    </li>
  </ul>
  </li>`;
  ul.insertAdjacentHTML("beforeend", li);

  var login_box = document.getElementById("login_box");
  var logout_delete = document.getElementById("btn-solid-lg");
  var logout_delete0 = document.getElementById("basic-3");
  var logout_modify = document.getElementById("h1-modify");
  var le_point = document.getElementById("le_point");

  le_point.innerHTML = "Left Points";
  login_box.innerHTML = "Log out";
  logout_delete.remove();
  logout_delete0.remove();
  logout_modify.textContent = "Welcome";
  login_box["href"] = "javascript:logout();"; // Replace href link looking inside function of logout() -> this can be used as + remove sesseionitem
}

function logout() {
  window.localStorage.clear();
  window.location.href = "index.html";
}
