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

//   const saveTemplateAsFile = (filename, dataObjToWrite) => {
//     const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
//     const link = document.createElement("a");

//     link.download = filename;
//     link.href = window.URL.createObjectURL(blob);
//     link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

//     const evt = new MouseEvent("click", {
//         view: window,
//         bubbles: true,
//         cancelable: true,
//     });

//     link.dispatchEvent(evt);
//     link.remove()
// };

// // downloadTextFile(JSON.stringify(myObj), "myObj.json");
// function downloadTextFile(text, name) {
//   const a = document.createElement("a");
//   const type = name.split(".").pop();
//   a.href = URL.createObjectURL(
//     new Blob([text], { type: `text/${type === "txt" ? "plain" : type}` })
//   );
//   a.download = name;
//   a.click();
// }

// function downloadJsonFile(data, filename) {
//     // Creating a blob object from non-blob data using the Blob constructor
//     const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     // Create a new anchor element
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename || 'download';
//     a.click();
//     a.remove();
//  }
