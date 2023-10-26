let typedKeys = "";

document.addEventListener("keydown", function(event) {
  typedKeys += event.key;

  if (typedKeys === "1576") {
    window.location.href = "https://trapjawws.github.io/josh/";
  } else if (typedKeys.length > 4) {
    typedKeys = "";
  }
});
