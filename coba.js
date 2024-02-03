// coba fetch ke website LMS kemudian retrieve data menggunakan vanilla javascript

const nim = "21.230.0069";
const password = "fotocopy";
const form = new FormData();
form.append("usid", nim);
form.append("pwd", password);
form.append("role", "s");
form.append("action", "login");
fetch("https://lms.stmik-wp.ac.id/login/index.php", {
  method: "POST",
  body: form,
}).then((res) => {
  console.log(res);
});

