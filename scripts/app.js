document.getElementById("file").addEventListener("change", funcionChange);

function funcionChange(event) {
  const fileUploaded = event.target.files[0];

  document.getElementById("imagen").src = URL.createObjectURL(fileUploaded);
  document.getElementById("name").value = fileUploaded.name;
  document.getElementById("type").value = fileUploaded.type;

  let sizeFormat = fileUploaded.size / 1024 / 1024;
  document.getElementById("size").value = parseFloat(sizeFormat).toFixed(2) + " MB";
}
