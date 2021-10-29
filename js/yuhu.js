$(document).ready(function () {
  const yuhuLink = document.querySelectorAll(".field-nama li .link");
  const yuhuGambarK = document.querySelectorAll(".field-gambark .gambar");
  const yuhuIsideskripsi = document.querySelectorAll(".field-deskripsi .isi");
  const yuhuGambarB = document.querySelectorAll(".field-gambarb .gambar");

  yuhuLink.forEach((variabelini, index) => {
    variabelini.addEventListener("mouseover", () => {
      // Hapus animate dulu di semua
      for (let i = 0; i < yuhuLink.length; i++) {
        const element = yuhuLink[i];
        yuhuLink[i].classList.remove("animate");
        yuhuGambarK[i].classList.remove("animate");
        yuhuIsideskripsi[i].classList.remove("animate");
        yuhuGambarB[i].classList.remove("animate");
      }
      // Isi class animate sesuai index diklik
      yuhuLink[index].classList.add("animate");
      yuhuGambarK[index].classList.add("animate");
      yuhuIsideskripsi[index].classList.add("animate");
      yuhuGambarB[index].classList.add("animate");
    });
  });
});
