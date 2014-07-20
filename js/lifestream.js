(function(){
  var count = 0,
  list = [
    {
      service: 'foursquare',
      user: 'XSDHURMCMOHH4PRRK0PGDFANYYEQ4RBA'
    },
    {
      service: 'github',
      user: 'my-flow'
    },
    // Change the key when you're using it on your own website
    // You can create one on https://code.google.com/apis/console
    {
        service: 'googleplus',
        user: '105473628603980168347',
        key: 'AIzaSyDufMWmkcPT8v1rfvL3rR4YcpEcyuGzs4s'
    },
    {
      service: 'lastfm',
      user: 'my-flow'
    },
    {
      service: 'pinboard',
      user: 'my-flow'
    },
    // Run javascript:alert(userid); when you're logged in at stackoverflow
    {
      service: 'stackoverflow',
      user: '662636'
    },
    {
      service: 'tumblr',
      user: 'my-flow'
    },
    {
      service: 'twitter',
      user: 'myflow'
    },
    {
      service: 'vimeo',
      user: 'myflow'
    },
    {
      service: 'youtube',
      user: 'myflowdotcom'
    },
  ];

  Date.prototype.toISO8601 = function(date) {
      var pad = function (amount, width) {
          var padding = "";
          while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
              padding += "0";
          return padding + amount.toString();
      }
      date = date ? date : new Date();
      var offset = date.getTimezoneOffset();
      return pad(date.getFullYear(), 4)
          + "-" + pad(date.getMonth() + 1, 2)
          + "-" + pad(date.getDate(), 2)
          + "T" + pad(date.getHours(), 2)
          + ":" + pad(date.getMinutes(), 2)
          + ":" + pad(date.getUTCSeconds(), 2)
          + (offset > 0 ? "-" : "+")
          + pad(Math.floor(Math.abs(offset) / 60), 2)
          + ":" + pad(Math.abs(offset) % 60, 2);
  };

  $("#lifestream").lifestream({
    limit: 15,
    list: list,
    feedloaded: function(){
      count++;
      // Check if all the feeds have been loaded
      if( count >= list.length ){
        NProgress.done();
        $("#lifestream li").each(function(){
          var element = $(this),
              date = new Date(element.data("time"));
          element.append(' <abbr class="timeago" title="' + date.toISO8601(date) + '">' + date + "</abbr>");
        })
        $("#lifestream .timeago").timeago();
        $('#loading-lifestream').css('visibility','invisible').hide().fadeOut().removeClass('show');
        $('#hidden-lifestream').css('visibility','visible').show().fadeIn().removeClass('hidden');
      } else if (count % 2 == 0) {
        NProgress.inc();
      }
    }
  });
})();
