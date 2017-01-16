(function($){
  $.fn.dreyanim = function(options){
    var settings = $.extend({},{
      animationType : "zoomIn",
      animationTime : 300,
      animationDelay : 0
    }, options);
    return this.each(function(){
      $animatable = $(this);
      var allClasses = "dreyAnimZoomIn, dreyAnimZoomOut, dreyAnimFadeIn, dreyAnimFadeOut, dreyAnimSlideInFromUp, dreyAnimSlideInFromDown, dreyAnimSlideOutToLeft, dreyAnimSlideInFromRight, dreyAnimSlideOutToUp, dreyAnimSlideOutToDown, dreyAnimSlideOutToLeft, dreyAnimSlideOutToRight, dreyAnimFlipIn, dreyAnimFlipOut, dreyAnimFlipInAlternate, dreyAnimFlipOutAlternate, dreyAnimFallIn, dreyAnimFallOut, dreyAnimFallInAlternate, dreyAnimFallOutAlternate, dreyAnimRotateIn, dreyAnimRotateOut";
      $animatable.removeClass(allClasses);
      $animatable.css({
        "-webkit-animation-duration" : (settings.animationTime/1000) + "s",
      })

      //Create random variable to prevent conflict
      var ___ = Math.ceil(Math.random()*100);
      eval("$animatable"+___+" = $animatable");

      function __(_){
        return eval("$"+_+___);
      }

      var dreyanimmethods = {
        zoomIn : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimZoomIn");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimZoomIn")},settings.animationTime + settings.animationDelay)
        },

        zoomOut : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimZoomOut");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimZoomOut")},settings.animationTime + settings.animationDelay)
        },

        fadeIn : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimFadeIn");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimFadeIn")},settings.animationTime + settings.animationDelay)
        },

        fadeOut : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimFadeOut");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFadeOut")},settings.animationTime + settings.animationDelay);
        },

        slideInFromUp : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimSlideInFromUp");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromUp")},settings.animationTime + settings.animationDelay)
        },

        slideInFromDown : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimSlideInFromDown");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromDown")},settings.animationTime + settings.animationDelay)
        },

        slideInFromLeft : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimSlideInFromLeft");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromLeft")},settings.animationTime + settings.animationDelay)
        },

        slideInFromRight: function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimSlideInFromRight");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromRight")},settings.animationTime + settings.animationDelay)
        },

        slideOutToUp : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimSlideOutToUp");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToUp")},settings.animationTime + settings.animationDelay);
        },

        slideOutToDown : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimSlideOutToDown");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToDown")},settings.animationTime + settings.animationDelay);
        },

        slideOutToLeft : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimSlideOutToLeft");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToLeft")},settings.animationTime + settings.animationDelay);
        },

        slideOutToRight : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimSlideOutToRight");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToRight")},settings.animationTime + settings.animationDelay);
        },

        flipIn : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimFlipIn");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipIn")},settings.animationTime + settings.animationDelay)
        },

        flipOut : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimFlipOut");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOut")},settings.animationTime + settings.animationDelay);
        },

        flipInAlternate : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimFlipInAlternate");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipInAlternate")},settings.animationTime + settings.animationDelay)
        },

        flipOutAlternate : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimFlipOutAlternate");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOutAlternate")},settings.animationTime + settings.animationDelay);
        },

        fallIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFallIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallIn")},settings.animationTime + settings.animationDelay)
        },

        fallOut : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimFallOut");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOut")},settings.animationTime + settings.animationDelay);
        },

        fallInAlternate : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimFallInAlternate");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallInAlternate")},settings.animationTime + settings.animationDelay)
        },

        fallOutAlternate : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimFallOutAlternate");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOutAlternate")},settings.animationTime + settings.animationDelay);
        },

        rotateIn : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("dreyAnimRotateIn");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("dreyAnimRotateIn")},settings.animationTime + settings.animationDelay)
        },

        rotateOut : function(){
          setTimeout(function(){__("animatable").addClass("dreyAnimRotateOut");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimRotateOut")},settings.animationTime + settings.animationDelay);
        },

        wipeInHorizontal : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("wipeInHorizontal");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("wipeInHorizontal")},settings.animationTime + settings.animationDelay)
        },

        wipeInVertical : function(){
          setTimeout(function(){__("animatable").removeClass("hidden").addClass("wipeInVertical");},settings.animationDelay);
          setTimeout(function(){__("animatable").removeClass("wipeInVertical")},settings.animationTime + settings.animationDelay)
        },

        wipeOutHorizontal : function(){
          setTimeout(function(){__("animatable").addClass("wipeOutHorizontal");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("wipeOutHorizontal")},settings.animationTime + settings.animationDelay);
        },

        wipeOutVertical : function(){
          setTimeout(function(){__("animatable").addClass("wipeOutVertical");},settings.animationDelay);
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("wipeOutVertical")},settings.animationTime + settings.animationDelay);
        }
      }

      dreyanimmethods[settings.animationType]();

      setTimeout(function(){
        __("animatable").css({
          "-webkit-animation-duration" : "",
          "-webkit-animation-delay" : "",
        })
      }, settings.animationTime + settings.animationDelay)
    })
  }
}(jQuery))
