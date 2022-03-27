// API
const API_ENDPOINT = 'https://yesno.wtf/api';

//selectors

const ballSelector =  document.querySelector('#ball');
const buttonSelectors = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 * 
 * 
 * 
 * 
 */
const disableButton = () =>{
 buttonSelectors .setAttribute('disabled', 'disabled');

}



const cleanupResponse = () => {

    setTimeout (() => { 
            document.querySelector('#answer').innerHTML = '';
            document.querySelector('#input').value = '';

        }, 4000);
        




};

const showAnswer = (answer) =>  {
    setTimeout( () =>{
        document.querySelector('#answer').innerHTML = `<p>${answer}</p>`;
    document.querySelector('#ball').classList.remove('shake__ball');
    cleanupResponse();

},1000);
    



};

const fetchAnswer = () => {
    document.querySelector('#ball').classList.add('shake__ball');

    fetch(API_ENDPOINT)
    .then(data => data.json())
    .then(data => showAnswer(data.answer));

};

const handleKeyEnter = e => {
    if (!inputSelector.value) return;
    if (e.keycode === 13) {
        fetchAnswer();
    };

};
buttonSelectors.addEventListener('click', () => fetchAnswer())