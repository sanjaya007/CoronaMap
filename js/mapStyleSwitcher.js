const mapStyle = document.querySelector('.map-style');
const toggleMapStyle = document.querySelector('.toggle-map-style');
const body = document.querySelector('body');
const caretUp = document.querySelector('.caret');
const caretLeft = document.querySelector('.caret-left');

toggleMapStyle.addEventListener('click', function(){
    mapStyle.classList.toggle('open');
});

const inputs = mapStyle.getElementsByTagName('input');

function switchStyle(e) {
    var inputId = e.target.id;
    map.setStyle('mapbox://styles/mapbox/' + inputId);

    var styleValue = this.value;
    if((styleValue == "streets") || (styleValue == "light") || (styleValue == "outdoors")){
        body.classList.add('light');
        caretUp.src = "./img/caretLightUp.png";
        caretLeft.src = "./img/caretLightLeft.png";
    }else{
        body.classList.remove('light');
        caretUp.src = "./img/caretUp.png";
        caretLeft.src = "./img/caretLeft.png";
    }
}
     
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchStyle;
}