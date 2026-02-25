(function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
})();

