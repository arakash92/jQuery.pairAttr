#jQuery.pairAttr
> Pair two (or more) elements attributes so that they can be together forever!

If you have a `<div class="container" data-width="200"></div>`  
and a `<input class="container-width" type="text">`, you can pair the data-width and the input value to always be the same.

Simply include the latest jQuery and jQuery.pairAttr.min.js and:
```js
$.pairAttr({
	'.container': 'data-width',
	'input.container-width': 'value',
});
```  
Such that, if the value of the input changes, the new value is added to the `data-width` of the div and the other way around.

> NOTE: pixel-based css properties are now SET as `float` but returned as `string` type. This solves incompatability problems.

##Supported attributes
* Any html attribute such as `data-width`, or `href`.
* For form input values, use `value`.
* for a single css style property, use `css:width`, `css:background-color` etc.
* for a single classname, use `class:someclassname`. (This will simply watch for removal or adding of the class for one of the elements that are paired).

##Events
pairAttr fires an `attrChange` event upon:  

* form input `change` event.
* `$.setAttr` method.
* `$.addClass` method.
* `$.removeClass` method.
* `$.css` method.

pairAttr fires an `attrChange` event with the name of the attribute as an argument.  
This event is fired upon changing attribute via `$().change()` method, as well as the `change` event and the `$().attr()` method.

##Changelog
###2.1.2
* Fixed jquery.json manifest yet again.

###2.1.1
* Fixed jquery.json manifest version.

###2.1.0
* Changed method `$.pairAttr` to `$.pairAttr` to be the same as the plugin name. (there was previously two methods but there is only one now).
* Values returned from elements now strip away `px` from the values and makes sure they are strings for maximum compatability among different attributes.
* When setting a value, it will parseInt any number-like strings. This fixes a bug with the `max-width` css property.
* Introduced bolean `$.pairAttr.debug`, turn this on if you wish to debug.
* Introduced debug method `$.pairAttr.methods.log` that sends the string to `console.log` if `$.pairAttr.debug == true`.

###2.0.3
* Tried to fix jquery.json manifest

###2.0.2
* Introduced jquery.json manifest

###2.0.1
* Updated readme

###2.0
* Rewritten to support css properties.
* `$.pairAttr` now takes an object of key: value pairs to support unlimited amount of elements.

###1.0
* Initial release


##License
```
           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004
                   
		Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

       		DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
```