const otp = document.querySelector(".OTP");
const pass = document.querySelector(".pass");

const copy = document.querySelector(".copy");
const output = document.querySelector(".output");
const output1 = document.querySelector(".output1");
const copy1 = document.querySelector(".copy1");
const array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  `q`,
  `w`,
  `e`,
  `r`,
  `t`,
  `y`,
  `u`,
  `i`,
  `o`,
  `p`,
  `a`,
  `s`,
  `d`,
  `f`,
  `g`,
  `h`,
  `k`,
  `j`,
  `l`,
  `z`,
  `x`,
  `c`,
  `v`,
  `b`,
  `n`,
  `m`,
  `~`,
  `!`,
  `@`,
  `#`,
  `$`,
  `%`,
  `^`,
  `&`,
  `*`,
  `(`,
  `-`,
  `Q`,
  `W`,
  `E`,
  `R`,
  `T`,
  `Y`,
  `U`,
  `I`,
  `O`,
  `P`,
  `A`,
  `S`,
  `D`,
  `F`,
  `G`,
  `H`,
  `J`,
  `K`,
  `L`,
  `Z`,
  `X`,
  `C`,
  `V`,
  `B`,
  `N`,
  `M`,
  `;`,
  `<`,
  `>`,
  `?`,
  `\``,
  `/`,
  `|`,
  `+`,
  `-`,
  `=`,
  `:`,
];

otp.onclick = () => {
  let l1 = Math.trunc(Math.random() * 9);
  let l2 = Math.trunc(Math.random() * 9);
  let l3 = Math.trunc(Math.random() * 9);
  let l4 = Math.trunc(Math.random() * 9);
  let outotp = `${l1}${l2}${l3}${l4}`;
  output1.textContent = outotp;
};
pass.onclick = () => {
  let c1 = Math.trunc(Math.random() * (array.length - 1));
  let c2 = Math.trunc(Math.random() * (array.length - 1));
  let c3 = Math.trunc(Math.random() * (array.length - 1));
  let c4 = Math.trunc(Math.random() * (array.length - 1));
  let c5 = Math.trunc(Math.random() * (array.length - 1));
  let c6 = Math.trunc(Math.random() * (array.length - 1));
  let c7 = Math.trunc(Math.random() * (array.length - 1));
  let c8 = Math.trunc(Math.random() * (array.length - 1));
  let c9 = Math.trunc(Math.random() * (array.length - 1));
  let p1 = array[c1];
  let p2 = array[c2];
  let p3 = array[c3];
  let p4 = array[c4];
  let p5 = array[c5];
  let p6 = array[c6];
  let p7 = array[c7];
  let p8 = array[c8];
  let p9 = array[c9];
  let outpass = `${p1}${p2}${p3}${p4}${p5}${p6}${p7}${p8}${p9}`;
  output.textContent = outpass;
};
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(output.textContent);
});
copy1.addEventListener("click", function () {
  navigator.clipboard.writeText(output1.textContent);
});

const indicator = document.querySelector(".indicator");
const input = document.querySelector(".input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".show-btn");
const foot = document.querySelector(".foot");
const git = document.querySelector(".git");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let no = 0;
function trigger() {
  if (input.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )
      no = 1;

    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
    )
      no = 2;

    if (
      input.value.length >= 6 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )
      no = 3;

    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too Weak";
      text.classList.add("weak");
      foot.style.color = "red";
      foot.innerHTML = `<p class="note">The Password you entered is weak and needs to be changed immediately to keep you safe from hacking and cyber attacks.</p> `;
    }
    if (no == 2) {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
      foot.style.color = "orange";
      foot.innerHTML = `<p class="note">The Password you entered is of medium strength and needs to be changed  to keep you safe from hacking and cyber attacks.</p> `;
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (no == 3) {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
      foot.style.color = "green";
      foot.innerHTML = `<p class="note">The Password you entered is strong and will keep you safe from hacking and cyber attacks.We still recommend you to change it after sometime to be double safe</p> `;
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function () {
      if (input.type == "password") {
        input.type = "text";
        showBtn.innerHTML = `<img src="starter/506282-200.png" class="show">`;
        showBtn.style.color = "#23ad5c";
      } else {
        input.type = "password";
        showBtn.innerHTML = `<img src="starter/2072011.png" class="show">`;
        showBtn.style.color = "#000";
      }
    };
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}
git.onclick = function () {
  window.open("https://github.com/Parthib25");
};
