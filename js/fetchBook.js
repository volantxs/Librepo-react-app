google.books.load();

      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('book'));
        viewer.load('ISBN:0738531367');
      }

      google.books.setOnLoadCallback(initialize);