"use strict";(function($){$.fn.owlRemoveItem=function(owl,num){var owl_data=owl.data('owlCarousel');$(this).find('.owl-item').eq(num).remove()}
$.fn.owlFilter=function(data,callback){var owl=this,owl_data=$(owl).data('owlCarousel'),$elemCopy=$('<div>').css('display','none');if(typeof($(owl).data('owl-clone'))=='undefined'){$(owl).children('.owl-stage-outer').children('.owl-stage').children('.owl-item:not(.cloned)').clone().appendTo($elemCopy);$(owl).data('owl-clone',$elemCopy)}else{$elemCopy=$(owl).data('owl-clone')}
owl.trigger('replace.owl.carousel',['<div/>']);switch(data){case '*':$elemCopy.children().each(function(){owl.trigger('add.owl.carousel',[$(this).children().clone()])})
break;default:$elemCopy.find(data).each(function(){owl.trigger('add.owl.carousel',[$(this).clone()])})
break}
owl.owlRemoveItem(owl,0);owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel',[0]);if(callback)callback.call(this,owl)}})(jQuery)