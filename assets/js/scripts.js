function changeMode() { /**Funçaõ que vai retornar as duas funções cridas */
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass); //Toggle adiciona ou remove a classe passada como parametro 
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if(button.classList.contains(darkModeClass)){ //Se dentro da ClassList de button existe a classe "Dark mode"
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "ON"
        return
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + "ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0] //A TagName retorna um array, por isso deve ser passa a posição do item que deseja ser exibido
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click',changeMode)

//A constante button vai armazenar o valor do botão, através do Id 'mode-selector'
//O button é invocado como o metódo addEventListener que recebe dois parâmetros
//O primeiro parâmetro indica o tipo de evento acionado e o segundo parâmetro indica a função que vai ser invocada