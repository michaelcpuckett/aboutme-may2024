function DemoMessage(message) { 
    document.getElementById('DemoMessage').innerHTML = message;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  