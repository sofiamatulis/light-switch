$(function(){

  var lights = 'on';


  $('.on').click( function(){ switchLights() });
  // do something when this element is clicked



;


  function switchLights(){
     $('body').toggleClass("dark")
		if( lights === 'on' ){
			// $('body').addClass('dark');
        $('.status').text('It is so dark in here!');
			lights = 'off';
		}else{
			// $('body').removeClass('dark');
      // $('body').addClass('light');
      $('.status').text('Turn off the lights');
			lights = 'on';
		}// END if( lights === 'on' )
	}







});
