console.log('JavaCat writes "Hello World!"');
DemoMessage('PS: JavaCat says "Hello World!"');
document.getElementById("PowerButton").addEventListener("click", function () {
  // console.log('JavaCat writes "Goodbye World!"');
  // DemoMessage('PS: JavaCat says "Goodbye World!"');
  if (document.getElementById('Main').style.display != 'none') {
    document.getElementById('Main').style.display = 'none';
  } else {
    document.getElementById('Main').style.display = 'flex';
  }
});
