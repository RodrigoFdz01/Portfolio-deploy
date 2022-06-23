let skills = document.querySelectorAll(".logos-skills-img");

function abc() {
  let random = skills[Math.floor(Math.random() * skills.length)];
  random.classList.toggle("logosTime");

  setTimeout(function () {
    random.classList.toggle("logosTime");
  }, 1000);
}

setInterval(abc, 3000);
