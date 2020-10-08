var draw = null;
window.onload = function () {
    //return;
    
    var svgSource = document.querySelector("#cv-svg").contentDocument.children[0].outerHTML;
    document.querySelector("#canvas").innerHTML = svgSource;
    
    draw = SVG("#canvas");
    draw.svg(svgSource, true);

    //draw = SVG(document.querySelector("#cv-svg"));
    //draw = SVG("#cv-svg");
    //var rect = draw.rect(100, 100).attr({ fill: '#f06' })

    var network = SVG.find("#network")[0];
    var all = SVG.find("[label='MainLayer']")[0]
    network.on(['click', 'mouseover'], function (e){
        console.log("mouse");
    });
    network.animate().scale(
       1.05,-100,0
    ).loop(true, true)

    var lines = SVG.find("[id*='line']").map(path => {
        path.attr({
            fill: '#f06'
          , 'fill-opacity': 0.5
          , stroke: '#000'
          , 'stroke-width': 10
          })
        //path.fill('none')
        //path.fill('#FF0066')
        // path.fill('none').move(20, 20)
        //path.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
        //x.animate(5000).stroke({ color: '#f06', opacity: 1, width: 10 })
        //.rotate(5).loop(true,true);
    });
}

// new Vivus('cv-svg', {duration: 5000, type: "sync",pathTimingFunction: Vivus.EASE }, vivusCallback);

// function vivusCallback(element){

// }