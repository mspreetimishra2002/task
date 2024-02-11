function showHiddenBox(showId,hideId,radioId) 
            {
              
            var hiddenBox = document.getElementById(showId);
            hiddenBox.style.display = 'block';
            var hiddenBox1 = document.getElementById(hideId);
            hiddenBox1.style.display = 'none';
            document.getElementById(radioId).checked = true;
        }

        function hideHiddenBox(showId,hideId) {
            var hiddenBox = document.getElementById(hideId);
            hiddenBox.style.display = 'none';
            var hiddenBox1 = document.getElementById(showId);
            hiddenBox1.style.display = 'block';
        }