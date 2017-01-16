API Load

"use strict";
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


Player Load

player = new YT.Player('ytplayer', {
      height: '100%',
      width: '100%',
      videoId: youtubeid,
      playerVars: { 'autoplay': youtubeautoplay, 'controls': 0  , 'modestbranding':1 ,  'rel' : 0 , 'showinfo' :  0},
      events: {
        'onReady': onReadyYouTube
      }
    });
    

Starttime , EndTime setting

player.loadVideoById({'videoId':currentYouTubeId
	    ,'startSeconds':youtubestarttime
	    ,'endSeconds':youtubeendtime
	    ,'width':'100%'
	    ,'height':'100%'                                
	  });
