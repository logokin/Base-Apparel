gsap.from(".coming", { duration: 1, y: "-300%", delay: 1.2, ease: "bounce" });
gsap.from(".para", {
  duration: 1,
  x: "-200%",
  delay: 2,
  stagger: 1.4,
  animationIterationCount: "infinite",
});
gsap.from(".image", { duration: 1, y: "-300%", delay: 1.9 });
gsap.from(".input", { duration: 1, y: "400%", delay: 1.2 });
// gsap.fromto(
//   "button",
//   { opacity: 0, rotate: 750, scale: 0 },
//   { opacity: 1, rotate: 0, scale: 1 }
// );

var email = document.getElementById("email");
var warn = document.getElementById("warn");
var img = document.querySelector(".img");
var check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var press = document.getElementById("press");
press.addEventListener("click", validateEmail);

function validateEmail() {
  if (email.value.match(check)) {
    img.classList.remove("img-show");
    warn.innerHTML = "";
    return true;
  } else {
    img.classList.add("img-show");
    warn.innerHTML = "please enter a valid email address";
    return false;
  }

  return true;
}
