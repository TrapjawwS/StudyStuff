let typedKeys = "";

document.addEventListener("keydown", function(event) {
  typedKeys += event.key;

  if (typedKeys === "1576") {
    window.location.replace(public/_redirects/tboi/tboi.html);
  } else if (typedKeys.length > 4) {
    typedKeys = "";
  }
});
