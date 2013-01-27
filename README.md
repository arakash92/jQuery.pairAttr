#jQuery.pairAttr
> Pair two (or more) elements attributes so that they can be together forever!

If you have a `<div class="container" data-width="200"></div>`  
and a `<input class="container-width" type="text">`, you can pair the data-width and the input value to always be the same.

Simply include the latest jQuery and jQuery.pairAttr.min.js and:
```js
$.pairAttrs({
	'.container': 'data-width',
	'input.container-width': 'value',
});
```  
Such that, if the value of the input changes, the new value is added to the `data-width` of the div and the other way around.

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