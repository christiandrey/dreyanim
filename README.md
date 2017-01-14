# dreyanim
[dreyanim](https://github.com/christiandrey/dreyanim) is an animation library that makes it super easy to add **"in"** and **"out"** CSS animations to elements.

## Browser support

dreyanim works on all browsers that support CSS3.

## Setup

Download the latest version [here](https://github.com/christiandrey/dreyanim/releases).

Include the core CSS library in your page header;

``` html
<link rel="stylesheet" href="css/dreyanim.css">
```

Include jQuery and the [dreyanim](https://github.com/christiandrey/dreyanim/releases) plugin at the end of the document;

``` js
<script src="js/jquery-3.1.0.slim.min.js"></script>
<script src="js/dreyanim.js"></script>
```

...and you're good to go!

## Usage

To use the plugin, choose from a list of 26+ animations to use and apply it to your desired element and provide any of the [available options](#available-options);

``` js
$('.element').dreyanim({
  animationType : "zoomIn",
  animationTime : 600,
  trueHide : true
})
```

## Available options

The following options are available to change in the [dreyanim](https://github.com/christiandrey/dreyanim/releases) plugin;

###### animationType
This option defines the type of animation to be used. It should be provided as a string. You can choose from any of the following animations;
> * `zoomIn`
> * `zoomOut`
> * `fadeIn`
> * `fadeOut`
> * `slideInFromUp`
> * `slideInFromDown`
> * `slideInFromLeft`
> * `slideInFromRight`
> * `slideOutToUp`
> * `slideOutToDown`
> * `slideOutToLeft`
> * `slideOutToRight`
> * `flipIn`
> * `flipOut`
> * `flipInAlternate`
> * `flipOutAlternate`
> * `fallIn`
> * `fallOut`
> * `fallInAlternate`
> * `fallOutAlternate`
> * `rotateIn`
> * `rotateOut`
> * `wipeInVertical`
> * `wipeInHorizontal`
> * `wipeOutVertical`
> * `wipeOutHorizontal`

| Attribute     | Type   | Default |
|---------------|--------|---------|
| **animationType** | *string* | `zoomIn`  |

###### animationTime
This option defines the duration of the animation. It has a unit of milliseconds.

| Attribute     | Type   | Default |
|---------------|--------|---------|
| **animationTime** | *float* | `600`  |

###### animationDelay
Provide a value for this option if you want the animation to be delayed. It also has a unit of milliseconds.

| Attribute     | Type   | Default |
|---------------|--------|---------|
| **animationDelay** | *float* | `0`  |

###### trueHide
Make this option false if you do not want a class of `hidden` to be added to the element after **"out"** animations

| Attribute     | Type   | Default |
|---------------|--------|---------|
| **trueHide** | *boolean* | `true`  |

## Dependencies

Depends on jQuery.

## License

Copyright 2017 [Christian Dréy](https://www.github.com/christiandrey).
Licensed under the [MIT License](https://christiandrey.mit-license.org/)
