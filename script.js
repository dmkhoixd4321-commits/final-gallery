function upDate(previewPic) {
  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabindex() {
  console.log("addTabindex đã chạy");
  var images = document.getElementsByClassName("preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh " + (i + 1));
  }
}