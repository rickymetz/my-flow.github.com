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


  $("#lifestream").lifestream({
    limit: 15,
    list: list,
    feedloaded: function(){
      count++;
      // Check if all the feeds have been loaded
      if( count >= list.length ){
        NProgress.done();
        $('#loading-lifestream').css('visibility','invisible').hide().fadeOut().removeClass('show');
        $('#hidden-lifestream').css('visibility','visible').show().fadeIn().removeClass('hidden');
      } else if (count % 2 == 0) {
        NProgress.inc();
      }
    }
  });
})();
