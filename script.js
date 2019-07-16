function toggle() {  
    // Select all the p elements with class = show.  
    var par = document.querySelectorAll('p.show');
    // The link to show the hidden p.
    var linkShow = document.getElementById('linkShow');
    // The link to hide the shown p.
    var linkHide = document.getElementById('linkHide');

    for (var i = 0; i < par.length; i++) {
        // p current style display.
        var style = par[i].style.display;

        // Toggle the p style display.
        par[i].style.display = 
            (!style || style == '' ? 'none' : 
             (style == 'none' ? 'block' : 'none'));
    }

    if (linkShow != null && 
        linkHide != null) {
        // linkShow current style display.
        style = linkShow.style.display;

        // Toggle both links style display.
        linkShow.style.display = (style == 'none' ? 'block' : 'none');
        linkHide.style.display = style;
    }
}