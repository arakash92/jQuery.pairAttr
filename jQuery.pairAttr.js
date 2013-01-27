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

    $.fn.pairAttr = function(attribute, targetElement, targetAttribute) {
        $.pairAttrs(this, attribute, targetElement, targetAttribute);
        return this;
    }

    $.pairAttrs = function (elem1, attr1, elem2, attr2) {

        //setup change event for elem1
        if (attr1 == 'value') {
            $(elem1).change(function() {
                $(elem1).trigger('attrChange.pairAttrs', ['value']);
            });
        }
        if (attr2 == 'value') {
            $(elem2).change(function() {
                $(elem2).trigger('attrChange.pairAttrs', ['value']);
            });
        }
        $(elem1).bind('attrChange.pairAttrs', function (e, attribute) {
            var elem1Value;
            if (attr1 == 'value') {
                elem1Value = $(this).val();
            }else {
                elem1Value = $(this).attr(attr1);
            }
            //check the other element
            var elem2Value;
            if (attr2 == 'value') {
                elem2Value = $(elem2).val();
            }else {
                elem2Value = $(elem2).attr(attr2);
            }
            //now check if it isn't equal
            if (elem1Value != elem2Value) {
                //update
                if (attr2 == 'value') {
                    $(elem2).val(elem1Value);
                }else {
                    $(elem2).attr(attr2, elem1Value);
                }
            }
        });
        
         $(elem2).bind('attrChange.pairAttrs', function (e, attribute) {
            var elem2Value;
            if (attr2 == 'value') {
                elem2Value = $(elem2).val();
            }else {
                elem2Value = $(elem2).attr(attr2);
            }
            //check the other element
            var elem1Value;
            if (attr1 == 'value') {
                elem1Value = $(elem1).val();
            }else {
                elem1Value = $(elem1).attr(attr1);
            }
            //now check if it isn't equal
            if (elem2Value != elem1Value) {
                //update
                if (attr1 == 'value') {
                    $(elem1).val(elem2Value);
                }else {
                    $(elem1).attr(attr1, elem2Value);
                }
            }
        });
        
        
    };


})(jQuery, window, document);