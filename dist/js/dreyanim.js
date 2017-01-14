(function($){
  $.fn.dreyanim = function(options){
    var settings = $.extend({},{
      animationType : "zoomIn",
      animationTime : 300,
      animationDelay : 0,
      trueHide : true
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
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimZoomOut")},settings.animationTime + settings.animationDelay)
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimZoomOut")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        fadeIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFadeIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFadeIn")},settings.animationTime + settings.animationDelay)
        },

        fadeOut : function(){
          $animatable.addClass("dreyAnimFadeOut");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFadeOut")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimFadeOut")},settings.animationTime + settings.animationDelay);
            break;
          }
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
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToUp")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimSlideOutToUp")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        slideOutToDown : function(){
          $animatable.addClass("dreyAnimSlideOutToDown");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToDown")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimSlideOutToDown")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        slideOutToLeft : function(){
          $animatable.addClass("dreyAnimSlideOutToLeft");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToLeft")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimSlideOutToLeft")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        slideOutToRight : function(){
          $animatable.addClass("dreyAnimSlideOutToRight");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimSlideOutToRight")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimSlideOutToRight")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        flipIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFlipIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipIn")},settings.animationTime + settings.animationDelay)
        },

        flipOut : function(){
          $animatable.addClass("dreyAnimFlipOut");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOut")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimFlipOut")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        flipInAlternate : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFlipInAlternate");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFlipInAlternate")},settings.animationTime + settings.animationDelay)
        },

        flipOutAlternate : function(){
          $animatable.addClass("dreyAnimFlipOutAlternate");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFlipOutAlternate")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimFlipOutAlternate")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        fallIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFallIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallIn")},settings.animationTime + settings.animationDelay)
        },

        fallOut : function(){
          $animatable.addClass("dreyAnimFallOut");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOut")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimFallOut")},settings.animationTime + settings.animationDelay)
            break;
          }
        },

        fallInAlternate : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimFallInAlternate");
          setTimeout(function(){__("animatable").removeClass("dreyAnimFallInAlternate")},settings.animationTime + settings.animationDelay)
        },

        fallOutAlternate : function(){
          $animatable.addClass("dreyAnimFallOutAlternate");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimFallOutAlternate")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimFallOutAlternate")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        rotateIn : function(){
          $animatable.removeClass("hidden").addClass("dreyAnimRotateIn");
          setTimeout(function(){__("animatable").removeClass("dreyAnimRotateIn")},settings.animationTime + settings.animationDelay)
        },

        rotateOut : function(){
          $animatable.addClass("dreyAnimRotateOut");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("dreyAnimRotateOut")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("dreyAnimRotateOut")},settings.animationTime + settings.animationDelay);
            break;
          }
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
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("wipeOutHorizontal")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("wipeOutHorizontal")},settings.animationTime + settings.animationDelay);
            break;
          }
        },

        wipeOutVertical : function(){
          $animatable.addClass("wipeOutVertical");
          switch(settings.trueHide){
            case (true):
            setTimeout(function(){__("animatable").addClass("hidden").removeClass("wipeOutVertical")},settings.animationTime + settings.animationDelay);
            break;

            case (false):
            setTimeout(function(){__("animatable").removeClass("wipeOutVertical")},settings.animationTime + settings.animationDelay)
            break;
          }
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
