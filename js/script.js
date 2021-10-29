/* DOM Pre loader
  -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  var myVar;
  setTimeout(preloaderFun, 1000);
  setTimeout(preloaderFunhapus, 2500);

  function preloaderFun() {
    document.querySelector(".preloader").classList.add("hilang");
  }
  function preloaderFunhapus() {
    document.querySelector(".preloader").classList.add("hapus");
  }
});

/* Button scroll top
  -----------------------------------------------*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* DOM Navbar
  -----------------------------s------------------*/
const tes = () => {
  console.log("duar");
};
