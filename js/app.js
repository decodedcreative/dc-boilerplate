var
clientname = {},
$ = require('jquery');

clientname.website = (function(){
  return{
    init: function(){
      console.log("test");
    }
  };
}());

$(window).load(clientname.website.init);
