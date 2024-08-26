console.log('JavaCat writes "Hello World!"');
DemoMessage('PS: JavaCat says "Hello World!"');
document.getElementById("PowerButton").addEventListener("click", function () {
  // console.log('JavaCat writes "Goodbye World!"');
  // DemoMessage('PS: JavaCat says "Goodbye World!"');
  if (document.getElementById("About").style.display != "none") {
    document.getElementById("About").style.display = "none";
    document.getElementById("Game").style.display = "flex";
  } else {
    document.getElementById("About").style.display = "flex";
    document.getElementById("Game").style.display = "none";
  }
});
