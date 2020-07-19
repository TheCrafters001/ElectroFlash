var file;

function readSingleFile(e) {
    file = e.target.files[0];
    console.log("file: "+ file)
    if (!file) {
      document.getElementById("file-content") = "<embed src='" + file + "'>";
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
      console.log(contents)
    };
    reader.readAsText(file);
  }
  
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    //element.textContent = contents;
    element.textContent = "<embed src='" + file + "'>";
  }
  
  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);