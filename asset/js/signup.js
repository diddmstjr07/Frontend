function togglePass() {
  eye.classList.toggle("active");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

async function register() {
  console.log("register()");
  var email = document.getElementById("floatingInput");
  var first_name = document.getElementById("floatingInput2");
  var password = document.getElementById("floatingPassword");

  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // if (!re.test(email.value)) {
  //   msg.innerHTML = "Please enter a valid email";
  //   email.focus();
  //   return false;
  // } else {
  //   msg.innerHTML = "";
  // }

  if (email.value === "") {
    // msg.style.display = 'block';
    // msg.innerHTML = "Please enter your email";
    alert("email error");
    email.focus();
    return false;
  } else if (password.value === "") {
    // msg.innerHTML = "Please enter your password";
    alert("pw error");
    password.focus();
    return false;
  } else if (first_name.value === "") {
    // msg.innerHTML = "Please enter your password";
    alert("firstname error");
    password.focus();
    return false;
  } else {
    //정상적인 값을 입력했을때
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email.value,
        Password: password.value,
        First_name: first_name.value,
      }),
    };
    const fetchResponse = await fetch(
      "http://182.211.172.137:8000/user/Register",
      settings
    );
    const data = await fetchResponse.json();

    console.log(data);
    if (data.kind == "ok") {
      alert("회원가입이 완료되었습니다");
      window.location.href = "log-in.html";
      return;
    }

    if (data.kind == "fail") {
      alert("회원가입이 실패하였습니다");
      return;
    }
  }
}
