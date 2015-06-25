
$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$(document).ready(function () {
	$.fn.equivalent = function (){
      var $blocks = $(this),
         maxH    = $blocks.eq(0).height(); 
         $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
         });

        $blocks.height(maxH); 
    	}
   $('.text-block').equivalent();
});