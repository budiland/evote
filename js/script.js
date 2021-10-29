/* DOM Navbar
  -----------------------------s------------------*/
const overlay = document.querySelector("#overlay");
const kotak = document.querySelector("#kotak");
const kotakGambar = document.querySelector("#kotak-gambar");
const judul = kotakGambar.querySelector(".judul");
const gambar = kotakGambar.querySelector(".field-gambar .gambar");
const teks = kotakGambar.querySelector(".teks");
const pagination = kotakGambar.querySelector(".row .kiri");
const linkBack = kotakGambar.querySelector(".row .field-button .link.abu");
const linkNext = kotakGambar.querySelector(".row .field-button .link.merah");

const keluar = () => {
  overlay.style.display = "none";
};
const tahap1 = () => {
  overlay.style.display = "flex";
  kotak.style.display = "flex";
  kotakGambar.style.display = "none";
};
const tahap2 = () => {
  kotak.style.display = "none";
  kotakGambar.style.display = "flex";
  judul.innerHTML = "Highlight Banner";
  gambar.src = "assets/tahap/tahap 2.png";
  teks.innerHTML =
    " Disini berisi informasi banner yang sedang/akan berlangsung dan menjadi sorotan";
  pagination.innerHTML = "1 dari 10";
  linkBack.setAttribute("onclick", "tahap1()");
  linkNext.setAttribute("onclick", "tahap3()");
};
const tahap3 = () => {
  judul.innerHTML = "Pemilihan Berlangsung";
  gambar.src = "assets/tahap/tahap 3.png";
  teks.innerHTML =
    "Kamu dapat melihat pemilihan berlangsung yang tersedia saat ini disini";
  pagination.innerHTML = "2 dari 10";
  linkBack.setAttribute("onclick", "tahap2()");
  linkNext.setAttribute("onclick", "tahap4()");
};
const tahap4 = () => {
  judul.innerHTML = "Profile";
  gambar.src = "assets/tahap/tahap 4.gif";
  teks.innerHTML =
    "Profil digunakan untuk mengganti password dari akun e-vote. Sangat dianjurkan bagi yang masih menggunakan password bawaan";
  pagination.innerHTML = "3 dari 10";
  linkBack.setAttribute("onclick", "tahap3()");
  linkNext.setAttribute("onclick", "tahap5()");
};
const tahap5 = () => {
  judul.innerHTML = "Ganti Password";
  gambar.src = "assets/tahap/tahap 5.png";
  teks.innerHTML =
    "Untuk ganti pasword,  masukkan password lama terlebih dahulu lalu isi password baru sebanyak dua kali. Kemudian klik simpanUntuk ganti pasword,  masukkan password lama terlebih dahulu lalu isi password baru sebanyak dua kali. Kemudian klik simpan";
  pagination.innerHTML = "4 dari 10";
  linkBack.setAttribute("onclick", "tahap4()");
  linkNext.setAttribute("onclick", "tahap6()");
};
const tahap6 = () => {
  judul.innerHTML = "Informasi Kandidat";
  gambar.src = "assets/tahap/tahap 6.gif";
  teks.innerHTML =
    "Klik salah satu pemilihan yang ada,, maka informasi kandidat akan muncul seperti ini";
  pagination.innerHTML = "5 dari 10";
  linkBack.setAttribute("onclick", "tahap5()");
  linkNext.setAttribute("onclick", "tahap7()");
};
const tahap7 = () => {
  judul.innerHTML = "Detail Kandidat";
  gambar.src = "assets/tahap/tahap 7.gif";
  teks.innerHTML =
    "Tombol DETAIL berfungsi untuk menampilkan detail mengenai informasi biodata dan visi misi dari kandidat tersebut";
  pagination.innerHTML = "6 dari 10";
  linkBack.setAttribute("onclick", "tahap6()");
  linkNext.setAttribute("onclick", "tahap8()");
};
const tahap8 = () => {
  judul.innerHTML = "Ambil Hak Suara";
  gambar.src = "assets/tahap/tahap 8.gif";
  teks.innerHTML =
    "Untuk memilih kandidat, tekan tombol VOTE SEKARANG sehingga muncul KOTAK SUARA untuk menggunakan hak suara kamu";
  pagination.innerHTML = "7 dari 10";
  linkBack.setAttribute("onclick", "tahap7()");
  linkNext.setAttribute("onclick", "tahap9()");
};
const tahap9 = () => {
  judul.innerHTML = "Kotak Suara";
  gambar.src = "assets/tahap/tahap 9.gif";
  teks.innerHTML =
    "Gunakan hak suara kamu disini! Pilihanmu akan menentukan masa depan! Pilihan hanya sekali (klik/tekan nomor) dan tidak dapat diubah!";
  pagination.innerHTML = "8 dari 10";
  linkBack.setAttribute("onclick", "tahap8()");
  linkNext.setAttribute("onclick", "tahap10()");
};
const tahap10 = () => {
  judul.innerHTML = "Hak Suara Berhasil";
  gambar.src = "assets/tahap/tahap 10.png";
  teks.innerHTML =
    "Ketika hak suara kamu sudah digunakan, maka button akan menunjukkan bahwa SUARA TELAH DIGUNAKAN dan kamu sudah berhasil!";
  pagination.innerHTML = "9 dari 10";
  linkBack.setAttribute("onclick", "tahap9()");
  linkNext.setAttribute("onclick", "tahap11()");
};
const tahap11 = () => {
  judul.innerHTML = "Home";
  gambar.src = "assets/tahap/tahap 11.gif";
  teks.innerHTML =
    "Untuk kembali ke halaman utama, klik icon di pojok kiri atas sebagai navigasi untuk kembali ke home";
  pagination.innerHTML = "10 dari 10";
  linkBack.setAttribute("onclick", "tahap10()");
  linkNext.setAttribute("onclick", "tahap12()");
};
const tahap12 = () => {
  judul.innerHTML = "Kamu sudah siap!!!";
  gambar.src = "assets/tahap/tahap 12.gif";
  teks.innerHTML =
    "Kamu sudah siap! Ayo gunakan hak suaramu sebelum terlambat. Pilihanmu dapat menentukan masa depan";
  pagination.innerHTML = "10 dari 10";
  linkBack.setAttribute("onclick", "tahap11()");
  linkNext.setAttribute("onclick", "keluar()");
};

const customSelect = () => {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
    create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
};
