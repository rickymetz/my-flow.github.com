//<![CDATA[

//this function will work cross-browser for loading scripts asynchronously
function loadScript(src, callback)
{
  var s,
      r,
      t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    // console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      if (typeof callback !== 'undefined') {
          callback();
      }
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.appendChild(s);
}

function downloadJSAtOnload() {
    // jQuery Lifestream
    loadScript("//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js",
        function() { loadScript("//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js",
            function() { loadScript("#{url}/js/jquery.lifestream-0.5.2.min.js",
                function() { loadScript("#{url}/js/lifestream.min.js",
                    function() { loadScript("#{url}/js/bootstrap-3.3.4.min.js") }
                )}
            )}
        )}
    );
}
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else
    window.onload = downloadJSAtOnload;


/**
 * Function that tracks a click on an outbound link in Google Analytics.
 * This function takes a valid URL string as an argument, and uses that URL string
 * as the event label.
 */
var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
        function () {
            document.location = url;
        }
    });
}

//]]>
