// window.onload = function(){
//     addSvgObjectHooks();
// }

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        addSvgObjectHooks();
    }
  }

function addSvgObjectHooks(){
    console.log("svg import");
    [...document.querySelectorAll("object")].map(e => {
        e.onload = function(){ 
            importSvgObject(e);
        };
    });
}


function importSvgObjects(){
    console.log("svg import");
    [...document.querySelectorAll("object")].map(e => {
        importSvgObject(e);
    });
}

function importSvgObject(e){
    console.log(e);
    if (e.nodeName != "OBJECT" || e.style.visibility == "hidden")
        return;
    var parent = e.parentNode;

    var svgSource = e.contentDocument.children[0].outerHTML;

    var svg = new DOMParser().parseFromString(svgSource, 'text/html').body.childNodes[0];
    svg.id = e.id;
    svg.style.cssText = e.style.cssText;
    Object.assign(svg.dataset, e.dataset);
    
    
    parent.insertBefore(svg, e);
    parent.removeChild(e);
}