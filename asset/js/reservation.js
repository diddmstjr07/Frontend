var token = window.localStorage.getItem("key");

async function getredata() {
  var token = window.localStorage.getItem("key");
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
    "http://182.211.172.137:8000/reservation/show",
    settings
  );
  const data = await fetchResponse.json();

  if (data.kind == "fail") {
    console.log("fail", data.mag);
  } else if (data.kind == "ok") {
    console.log("data.data", data.data);
  }

  var datas = data.data;
  console.log(datas);
  for (var i = 0; i < datas.length; i++) {
    const date = datas[i][3].substring(0, 10);
    section = document.getElementById("section");
    var item = `<ul class="list res_list">
    <img class="image" src="/photo/${datas[i][6]}" alt="" />
    <ul class="set">
      <li class="locate">
          <ul class="location">
          <li>예약 시간: ${date}</li>
          <li>만료까지 남은 시간: 1시간 30분</li>
          </ul>
      </li>
      <div class="filebox">
        <label for="ex_file">업로드</label>
        <input type="file" id="ex_file">
      </div>
    </ul>
    `;

    section.insertAdjacentHTML("beforeend", item);
    const fileInput = document.getElementById("fileInput");
  }
}

async function submit() {
  var token = window.localStorage.getItem("key");
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
    "http://182.211.172.137:8000/reservation/submit",
    settings
  );
  const data = await fetchResponse.json();

  if (data.kind == "fail") {
    console.log("fail", data.mag);
    alert("촬영을 다시 해주십시오");
  } else if (data.kind == "ok") {
    console.log("data.data", data.data);
    point();
    window.location.href = "index.html"
  }
}

async function point() {
  var token = window.localStorage.getItem("key");
  console.log(token)
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Token: token
    }),
  };

  const fetchResponse = await fetch(
    "http://182.211.172.137:8000/reservation/point",
    settings
  );
  const data = await fetchResponse.json();

  if (data.kind == "ok") {
    alert("포인트 지급이 완료되었습니다")
  }
  else if (data.kind == "fail") {
    alert("에러가 발생했습니다. 'eunseokyang07@gmail.com'으로 연락주시면 감사하겠습니다.")
    console.log('insert error >>', data.data)
  }
}

async function result() {
  var token = window.localStorage.getItem("key");
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
    "http://182.211.172.137:8000/reservation/display",
    settings
  );
  const data = await fetchResponse.json();

  if (data.kind == "fail") {
    console.log("fail", data.mag);
  } else if (data.kind == "ok") {
    console.log("data.data", data.data);
  }

  var datas = data.data;
  console.log(datas);
  for (var i = 0; i < datas.length; i++) {
    const date = datas[i][3].substring(0, 10);
    section1 = document.getElementById("section1");
    var items = `<ul class="list">
      <img class="image" src="/photo/${datas[i][6]}" alt="" />
      <li class="locate">
        <ul class="location">
        
          <li>날짜: ${date}</li>
          <li>환경과 함께한 시간:</li>
        </ul>
      </li>
      <img class="check" src="images/checked-fill.svg" alt="check" />
    </ul>`;

    section1.insertAdjacentHTML("beforeend", items);
    const fileInput = document.getElementById("fileInput");
  }
}

function logout() {
  window.localStorage.clear();
  window.location.href = "index.html";
}

if (!token) {
  alert("로그인 후 접근가능합니다.");
  window.location.href = "index.html";
} else {
  getredata();
  result();
  login_box["href"] = "javascript:logout();";
}
