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
        "-webkit-animation-delay" : (settings.animationDelay/1000) + "s"
      })

      //Create random variable to prevent conflict
      var ___ = Math.ceil(Math.random()*100);
      eval("$animatable"+___+" = $animatable");

      function __(_){
        return eval("$"+_+___);
      }

      var dreyanimmethods = {
        zoomIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimZoomIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimZoomIn")},settings.animationTime + settings.animationDelay)
        },

        zoomOut : function(){
          $animatable.addClass("dreyAnimZoomOut");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimZoomOut")},settings.animationTime + settings.animationDelay)
        },

        fadeIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFadeIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFadeIn")},settings.animationTime + settings.animationDelay)
        },

        fadeOut : function(){
          $animatable.addClass("dreyAnimFadeOut");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFadeOut")},settings.animationTime + settings.animationDelay);
        },

        slideInFromUp : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimSlideInFromUp");
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromUp")},settings.animationTime + settings.animationDelay)
        },

        slideInFromDown : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimSlideInFromDown");
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromDown")},settings.animationTime + settings.animationDelay)
        },

        slideInFromLeft : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimSlideInFromLeft");
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromLeft")},settings.animationTime + settings.animationDelay)
        },

        slideInFromRight: function(){
          $animatable.removeClass("hidden").addClass("dreyAnimSlideInFromRight");
          setTimeout(function(){__("animatable").removeClass("dreyAnimSlideInFromRight")},settings.animationTime + settings.animationDelay)
        },

        slideOutToUp : function(){
          $animatable.addClass("dreyAnimSlideOutToUp");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToUp")},settings.animationTime + settings.animationDelay);
        },

        slideOutToDown : function(){
          $animatable.addClass("dreyAnimSlideOutToDown");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToDown")},settings.animationTime + settings.animationDelay);
        },

        slideOutToLeft : function(){
          $animatable.addClass("dreyAnimSlideOutToLeft");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToLeft")},settings.animationTime + settings.animationDelay);
        },

        slideOutToRight : function(){
          $animatable.addClass("dreyAnimSlideOutToRight");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToRight")},settings.animationTime + settings.animationDelay);
        },

        flipIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFlipIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipIn")},settings.animationTime + settings.animationDelay)
        },

        flipOut : function(){
          $animatable.addClass("dreyAnimFlipOut");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOut")},settings.animationTime + settings.animationDelay);
        },

        flipInAlternate : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFlipInAlternate");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipInAlternate")},settings.animationTime + settings.animationDelay)
        },

        flipOutAlternate : function(){
          $animatable.addClass("dreyAnimFlipOutAlternate");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOutAlternate")},settings.animationTime + settings.animationDelay);
        },

        fallIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFallIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallIn")},settings.animationTime + settings.animationDelay)
        },

        fallOut : function(){
          $animatable.addClass("dreyAnimFallOut");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOut")},settings.animationTime + settings.animationDelay);
        },

        fallInAlternate : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFallInAlternate");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallInAlternate")},settings.animationTime + settings.animationDelay)
        },

        fallOutAlternate : function(){
          $animatable.addClass("dreyAnimFallOutAlternate");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOutAlternate")},settings.animationTime + settings.animationDelay);
        },

        rotateIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimRotateIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimRotateIn")},settings.animationTime + settings.animationDelay)
        },

        rotateOut : function(){
          $animatable.addClass("dreyAnimRotateOut");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimRotateOut")},settings.animationTime + settings.animationDelay);
        },

        wipeInHorizontal : function(){
          $animatable.removeClass("hidden").addClass("wipeInHorizontal");
          setTimeout(function(){__("animatable").removeClass("wipeInHorizontal")},settings.animationTime + settings.animationDelay)
        },

        wipeInVertical : function(){
          $animatable.removeClass("hidden").addClass("wipeInVertical");
          setTimeout(function(){__("animatable").removeClass("wipeInVertical")},settings.animationTime + settings.animationDelay)
        },

        wipeOutHorizontal : function(){
          $animatable.addClass("wipeOutHorizontal");
          setTimeout(function(){__("animatable").addClass("hidden").removeClass("wipeOutHorizontal")},settings.animationTime + settings.animationDelay);
        },

        wipeOutVertical : function(){
          $animatable.addClass("wipeOutVertical");
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
