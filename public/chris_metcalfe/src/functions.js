function DemoMessage(message) {
  document.getElementById("DemoMessage").innerHTML = message;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function saveAsFile(filename, data) {
  const blob = new Blob([JSON.stringify(data)]);
  const link = document.createElement("a");
  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.click();
  link.remove();
}

function RemoveAllEventListeners(element) {
  let removedAllEventListeners = element.cloneNode(true);
  element.parentNode.replaceChild(removedAllEventListeners, element);
  return removedAllEventListeners;
}
