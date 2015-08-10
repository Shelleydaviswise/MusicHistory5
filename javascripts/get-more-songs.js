


define(["jquery"], function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "./jsonFiles/songs2.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});