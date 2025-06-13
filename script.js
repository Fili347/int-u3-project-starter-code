document.addEventListener('DOMContentLoaded', () => {
    const optionOneBtn = document.querySelector('.option-one');
    const optionTwoBtn = document.querySelector('.option-two');
    const optionOneScreen = document.querySelector('.option-one-screen');
    const optionTwoScreen = document.querySelector('.option-two-screen');
    const optionOneEnd = document.querySelector('.option-one-end');
    const optionTwoEnd = document.querySelector('.option-two-end');
    const optionOneContinueBtn = document.querySelector('.option-one-continue');
    const optionTwoContinueBtn = document.querySelector('.option-two-continue');

    optionOneBtn.addEventListener('click', () => {
        document.querySelector('.story-opening').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        optionOneScreen.style.display = 'block';
    });

    optionTwoBtn.addEventListener('click', () => {
        document.querySelector('.story-opening').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        optionTwoScreen.style.display = 'block';
    });

    optionOneContinueBtn.addEventListener('click', () => {
        optionOneScreen.style.display = 'none';
        optionOneEnd.style.display = 'block';
    });

    optionTwoContinueBtn.addEventListener('click', () => {
        optionTwoScreen.style.display = 'none';
        optionTwoEnd.style.display = 'block';
    });
});