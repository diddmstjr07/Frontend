var id = window.localStorage.getItem("key");

async function save() {
  var token = window.localStorage.getItem("key");
  console.log(id);
  console.log(token);
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
    "http://182.211.172.137:8000/user/Infor",
    settings
  );
  const data = await fetchResponse.json();
  console.log(data);
  const datas = data.data;

  // 이 부분 내일 토큰 작업 할 때 하기
  document.getElementById("email_").innerHTML = datas[0][2];
  document.getElementById("bottton").innerHTML = datas[0][1];
}
async function update() {
  var name = document.getElementById("floatingInput2");
  console.log(name);
  var password = document.getElementById("floatingInput3");
  console.log(password);
  var token = window.localStorage.getItem("key");
  console.log(token);

  var pass = document.getElementById("floatingInput3").value;
  var repass = document.getElementById("floatingInput4").value;

  if (pass != repass) {
    alert("비밀번호가 일치하지 않습니다");
    return;
  }

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: name.value,
      Password: password.value,
      Token: token,
    }),
  };

  const fetchResponse = await fetch(
    "http://182.211.172.137:8000/user/Update",
    settings
  );
  const data = await fetchResponse.json();
  console.log(data);

  if ((data.kind = "ok")) {
    alert("회원정보가 수정되었습니다 ");
    alert("다시 로그인해 주십시오");
    sessionStorage.clear();
    window.location.href = "log-in.html";
  }
}

if (id) {
  save();
  document.getElementById("botton").innerHTML = "Log out";

  var login_box = document.getElementById("botton");
  var saveButton = document.getElementById("saveButton");

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
  login_box["href"] = "javascript:logout();"; // Replace href link looking inside function of logout() -> this can be used as + remove sesseionitem
} else {
  alert("로그인 후 사용가능합니다");
  window.location.href = "index.html";
}

function logout() {
  sessionStorage.clear();
  window.location.href = "log-in.html";
}
