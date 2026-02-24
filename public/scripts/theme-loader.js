(function() {
  //const savedTheme = localStorage.getItem("theme");
  const savedTheme = true
  if (savedTheme === true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

