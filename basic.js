let typedKeys = "";

document.addEventListener("keydown", function(event) {
  typedKeys += event.key;

  if (typedKeys === "1576") {
    indow.location.href = "public/_redirects/tboi/tboi.html";
  } else if (typedKeys.length > 4) {
    typedKeys = "";
  }
});
