requirejs(
  ["DOM-access", "populate-songs", "get-more-songs"], 
  function(domAccess, pop, get_more) {

    pop.querySongs(function(data) {
      console.log("data", data);
      
      var domString = "";
      for (var i =0; i < data.length; i++){
      

        domString += "<div class = 'song'><h2>" + data[i].title + "</h2>" + "<p class = 'songDetails'>" +
          data[i].artist + "  |  " + data[i].album + "  |  " + data[i].year +
          "</p>" + "<br>" + "<button type ='button' class = 'removebtn' id = 'deleteButton'>Delete Song</button> </div>";

    
      // keep this one
      }
      
      domAccess.html(domString);

    });
    

    $(document).on('click', '#get-more-songs', function(){
      get_more.querySongs(function(data) {
        console.log(data);

        var domString = "";
        for (var i =0; i < data.length; i++){
        

          domString += "<div class = 'song'><h2>" + data[i].title + "</h2>" + "<p class = 'songDetails'>" +
            data[i].artist + "  |  " + data[i].album + "  |  " + data[i].year +
            "</p>" + "<br>" + "<button type ='button' class = 'removebtn' id = 'deleteButton'>Delete Song</button> </div>";

      
                // keep this one
        }

        domAccess.append(domString);
      
      });
     }); 
      $(document).on ('click', '#deleteButton', function (){
            $(this).parent().remove();
            });
  }
);

