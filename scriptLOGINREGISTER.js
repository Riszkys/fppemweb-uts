const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

document.querySelectorAll(".btn-KP").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let judul = parent.querySelector(".card-title").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada informasi yang tersedia</i>";
    let tombolmodal = document.querySelector(".btnmodal");
    tombolmodal.click();

    document.querySelector(".modaltittle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalimage").innerHTML = "";
    document.querySelector(".modalimage").appendChild(image);

    const nohp = "6285942966129";
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text= halo saya mau beli tiket ini ${gambar}`;

    document.querySelector(".btnbeli").href = pesan;
  });
});
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
