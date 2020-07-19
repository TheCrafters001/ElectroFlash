const output = document.getElementById('output');
      if (window.FileList && window.File) {
        document.getElementById('file-input').addEventListener('change', event => {
          output.innerHTML = '';
          for (const file of event.target.files) {
            const embed = document.createElement('embed');
            const name = file.name ? file.name : 'NOT SUPPORTED';
            const type = file.type ? file.type : 'NOT SUPPORTED';
            const size = file.size ? file.size : 'NOT SUPPORTED';
            document.getElementById("output").innerHTML = "<embed src='" + name + "'>";
            output.appendChild(embed);
          }
        }); 
      }