#jQuery.pairAttr
> Pair two elements attributes so that they can be together forever!

If you have a `<div class="container" data-width="200"></div>`  
and a `<input class="container-width" type="text">`, you can pair the data-width and the input value to always be the same.

Simply include jQuery and jQuery.pairAttr.min.js in your html, and:
```js
$.pairAttrs('input.container-width', 'value', 'div.container', 'data-width');
```  
Such that, if the value of the input changes, the new value is added to the `data-width` of the div and the other way around.

##Events and supported attributes
pairAttr fires an `attrChange` event with the name of the attribute as an argument.  
This event is fired upon changing attribute via `$().change()` method, as well as the `change` event and the `$().attr()` method.

##License
> Released under the 'DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE'

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.