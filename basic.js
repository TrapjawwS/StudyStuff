let typedKeys = "";

document.addEventListener("keydown", function(event) {
  typedKeys += event.key;

  if (typedKeys === "tboi") {
    window.location.href = "tboi.html";
  } else if (typedKeys.length > 4) {
    typedKeys = "";
  }
});
