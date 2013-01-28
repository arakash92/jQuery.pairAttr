/*------------------------------
 * attrChange selectors:
 * value = value
 * data-width = attribute
 * id = attribute
 * class = attribute
 * class:myclass = single class selector
 * css:style-property = single css style selector
 *------------------------------*/
;(function ($, window, document, undefined) {


    var addClass = $.fn.addClass;
    $.fn.addClass = function () {
        var result = addClass.apply(this, arguments);
        this.trigger('attrChange', ['class']);
        return result;
    };
    
    var removeClass = $.fn.removeClass;
    $.fn.removeClass = function() {
        var result = removeClass.apply(this, arguments);
        this.trigger('attrChange', ['class']);
        return result;
    }
    
    var change = $.fn.change;
    $.fn.change = function () {
        var result = change.apply(this, arguments);
        this.trigger('attrChange', ['value']);
        return result;
    };

    var attr = $.fn.attr;
    $.fn.attr = function (attribute, value) {        
        var result = attr.apply(this, arguments);
        if (value !== undefined) {
            this.trigger('attrChange', [attribute]);
        }
        return result;
    };

    var css = $.fn.css;
    $.fn.css = function(prop,value) {
        var result = css.apply(this, arguments);

        if (value !== undefined || typeof prop == 'object') {
            
            this.trigger('attrChange');
        }

        return result;
    };

    $.pairAttr = function (options) {
       
        for (var i in options) {
            var element = i;
            var selector = options[i];
            $(element).data('pairAttr', {'element': element, 'selector': selector, elements: options});

            //trigger attrChange if it's a form input
            if (selector == 'value') {
                $(element).bind('change', function() {
                    $(this).trigger('attrChange');
                });
            }

            $(element).bind('attrChange.pairAttr', function() {
                var data = $(this).data('pairAttr');
                
                $.pairAttr.methods.log(data.element +" attrChange");

                var myValue = $.pairAttr.methods.value($(data.element), data.selector);
                $.pairAttr.methods.log(myValue);
                //update values for all the other elements, if they have changed
                for (var el in data.elements) {
                    
                    var select = options[el];
                    if ($.pairAttr.methods.value(el, select) !== myValue) {
                        $.pairAttr.methods.value(el, select, myValue);
                    }
                    
                }
            });

            //trigger an attrChange intiially
            $(element).trigger('attrChange');
        }
        
    };
    $.pairAttr.debug = false;

    $.pairAttr.methods = {
        log: function(msg) {
            if ($.pairAttr.debug) {
                console.log(msg);
            }
        },

        value: function(element, selector, value) {
            if (value !== undefined) {
                if (/^\d+$/.test(value)) {
                    var value = parseInt(value);
                }
            }
            if (selector.indexOf('css:') != -1) {
                //css property
                var cssProp = selector.substr(4);
                if (value == undefined) {
                    $.pairAttr.methods.log('returning css property: ' + cssProp);
                    return $(element).css(cssProp).replace('px', '');
                }else {
                    $(element).css(cssProp, value);
                }
            }else if (selector.indexOf('class:') != -1) {
                //class name
                var className = selector.substr(6);
                if (value == undefined) {
                    $.pairAttr.methods.log('returning class: ' + className);
                    return $(element).hasClass(className);
                }else {
                    $(element).addClass(className);
                }
            }else if (selector == 'value') {
                //form element value
                var val = $(element).val();
                if (value == undefined) {
                    $.pairAttr.methods.log('returning value: ' + val);
                    return val;
                }else {
                    $(element).val(value);
                }
            }else {
                //element attribute
                var attr = $(element).attr(selector);
                if (value == undefined) {
                    $.pairAttr.methods.log('returning ' + selector +' attribute: ' + attr);
                }else {
                    $(element).attr(selector, value);
                }
            }
        },
    };


})(jQuery, window, document);




