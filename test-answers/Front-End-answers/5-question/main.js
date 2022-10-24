
let Sort

Sort = $('.parent > .class ');

function Sortbyheight($) {
    var sortByHeight = function(a, b) {
        var a = $(a).height();
        var b = $(b).height();
        return a > b ? 1 : -1;
    };

    var list = $(Sort).clone();
    list.sort(sortByHeight);
    for (var i = 0; i < list.length; i++) {
        $('#result').append(list[i]);
    }
}


Sortbyheight();