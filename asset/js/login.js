async function checkStuff() {
  var email = document.getElementById("floatingInput");
  var password = document.getElementById("floatingPassword");
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Email: email.value,
      Password: password.value,
    }),
  };

  const fetchResponse = await fetch(
    "http://182.211.172.137:8000/user/Login",
    settings
  );
  const data = await fetchResponse.json();
  console.log(data);

  if (data.kind == "fail") {
    alert("로그인에 실패하였습니다");
  } else if (data.kind == "ok") {
    window.localStorage.setItem("key", data.token);
    window.location.href = "index.html";
  }
}
