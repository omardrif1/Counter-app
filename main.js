let count = 0;

document.getElementById("plusbtn").onclick = function () {
  count += 1;
  document.getElementById("result").innerHTML = count;
};

document.getElementById("resetbtn").onclick = function () {
  count = 0;
  document.getElementById("result").innerHTML = count;
};

document.getElementById("minusbtn").onclick = function () {
  count -= 1;
  document.getElementById("result").innerHTML = count;
};
