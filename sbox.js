
/**
 *
 *	Functions for the Dialog Windows
 * Copyright (c) 2011 Shawn Crigger (http://s-vizion.com)
 * Licensed under the MIT License (LICENSE.txt). 
 *	Created by Shawn Crigger <shawn@s-vizion.com>@ EWD 1-15-11
 *
 **/
$(function() {
    var b = $('<img src="http://yoursitename.com/images/loading.gif" alt="loading" class="loading">');
    if ($("a.sbox").length != 0) {
        $("a.sbox").each(function() {
            $(this).css("display", "visible");
            var d = $("<div></div>").append(b.clone());
            var a = $(this).one("click", function() {
                d.load(a.attr("href")).dialog({
                    title: a.attr("title"),
                    width: 400,
                    height: 400,
                    modal: true,
                    position: top,
                    draggable: false,
                    resizable: false,
                    buttons: {
                        Close: function() {
                            $(this).dialog("close");
                        }
                    }
                });
                a.click(function() {
                    d.dialog("open");
                    return false;
                });
                return false;
            });
        });
    }
});
