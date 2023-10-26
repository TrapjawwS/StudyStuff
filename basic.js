let typedKeys = "";

document.addEventListener("keydown", function(event) {
  typedKeys += event.key;

  if (typedKeys === "1576") {
    window.location.href = "public/_redirects/emulator/emulatorindex.html";
  } else if (typedKeys.length > 4) {
    typedKeys = "";
  }
});
