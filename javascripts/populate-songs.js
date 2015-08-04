   



   define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "./jsonFiles/songs.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});