/*------------------------------------------------------
    
    400+ Free Line Icons by Ahmed Agrma
    behance.net/gallery/94660737/400-Free-Line-Icons
    
    Icon script & cheatsheet: glenthemes
    glenthemes.tumblr.com/icons/aa-line-icons
    
------------------------------------------------------*/

document.addEventListener("DOMContentLoaded",() => { 
    init_aa_icons();
});

function init_aa_icons(){
    document.querySelectorAll(".aa-line-icons").forEach(aa_icons => {
        var z_z = aa_icons.getAttribute("icon-name").replace(/ /g,"-").toLowerCase().trim();
        
        fetch("//glenthemes.github.io/aa-line-icons/-/" + z_z + ".svg")
        .then(y_y => {
            return y_y.text();
        }).then(y_y => {
            aa_icons.innerHTML = y_y;
            if(aa_icons.querySelectorAll("[http-equiv='Content-Security-Policy']").length){
                aa_icons.textContent = "";
            }
            
            var svgtit = aa_icons.querySelectorAll("title");
            if(svgtit.length){
                svgtit[0].remove();
            }
        });
    });
}
