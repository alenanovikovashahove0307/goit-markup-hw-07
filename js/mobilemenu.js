(() => {
  const refs = {
    openMobilemenuBtn: document.querySelector("[data-mobilemenu-open]"),
    closeMobilemenuBtn: document.querySelector("[data-mobilemenu-close]"),
    mobilemenu: document.querySelector("[data-mobilemenu]"),
  };

  refs.openMobilemenuBtn.addEventListener("click", toggleMobilemenu);
  refs.closeMobilemenuBtn.addEventListener("click", toggleMobilemenu);

  function toggleMobilemenu() {
    refs.mobilemenu.classList.toggle("is-hidden");
  }
})();
