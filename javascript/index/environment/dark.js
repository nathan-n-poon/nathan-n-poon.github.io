window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
  });
  
  var dark = false;
  
  function darkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      icon = document.getElementById("icon");
      icon.href = "images/iconNegative.png";  
      console.log("dark");
      dark = true;
    }
    else {
      console.log("light");
      dark = false;
    }
  }
  
  darkMode();