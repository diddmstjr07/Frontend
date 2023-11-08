id = sessionStorage.getItem("id");

async function withdrawal() {
  var id = sessionStorage.getItem("id");

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Id: id,
    }),
  };

  const fetchResponse = await fetch(
    "http://182.211.172.137:8000/user/Delete",
    settings
  );
  const data = await fetchResponse.json();
  console.log(data);

  if ((data.kind = "ok")) {
    alert("회원 탈퇴가 완료되었습니다");
    sessionStorage.clear();
    window.location.href = "log-in.html";
  }
}
if (id) {
  const ul = document.getElementById("navbar-nav ms-auto navbar-nav-scroll");
  ul.replaceChildren();
  li = `<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="index.html#header">Home</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="index.html#features">Features</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="index.html#details">Details</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="index.html#pricing">Pricing</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="map.html">Map</a>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
    <ul class="dropdown-menu" aria-labelledby="dropdown01">
      <li>
        <a class="dropdown-item" href="QR_Code.html">QR Code</a>
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
  document.getElementById("botton").innerHTML = "Log out";
}

function logout() {
  sessionStorage.clear();
  window.location.href = "log-in.html";
}
