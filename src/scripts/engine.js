const pianoKeys = document.querySelectorAll(".piano-keys .key");

// * CONTROLE DE VOLUME
const volumeSlider = document.querySelector(".volume-slider input");

// * TOGGLE TECLAS
const keysCheck = document.querySelector(".keys-check input")

// * MAPEANDO TECLAS PERMITIDAS
let mapeKeys = [];


let audio = new Audio(`src/tunes/a.wav`);

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();


//ADICIONA EFEITO CRIADO NO CSS AO USAR O TECLADO

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapeKeys.push(key.dataset.key);
});

//DETECTA USO DO TECLADO
document.addEventListener("keydown", (e) => {

    // * MAPEANDO TECLAS PERMITIDAS
    if(mapeKeys.includes(e.key)){
        playTune(e.key);
    }
});

// * CONTROLE DE VOLUME
const handleVolume = (e) =>{
    audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

// * TOGGLE TECLAS
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheck.addEventListener("click", showHideKeys)