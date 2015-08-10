   



   define(["jquery"], function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "https://torrid-torch-3031.firebaseio.com/.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});