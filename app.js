
const body = document.querySelector('body');
const detailBtns = document.getElementsByClassName('card__detail');
const modal = document.querySelector('.modal');
const hideModalBtn = modal.getElementsByClassName('modal__hide');

for(let i = 0; i < detailBtns.length; i++) {
    const parent = detailBtns[i].parentNode;

    const title = parent.querySelector('.card__title').textContent;
    const description = parent.querySelector('.card__description').textContent;
    const source = parent.querySelector('.card__image').getAttribute('src');
    detailBtns[i].addEventListener("click", function() {
        windowLaunch(title, description, source);
    });
}

function windowLaunch(title, description, source) {

    body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    modal.classList.add('open');
    const modalTitle = modal.querySelector('.modal__title');
    modalTitle.textContent = title;
    const modalDescription = modal.querySelector('.modal__description');
    modalDescription.textContent = description;
    const modalImage = modal.querySelector('.modal__image');
    modalImage.setAttribute('src', source);
    const modalCounter = modal.querySelector('.modal__counter');
    modalCounter.textContent = 0;

    
    let counter = 0;
    const modalAdd = modal.querySelector('.modal__add');
    modalAdd.addEventListener("click", function() {
        counter ++;
        modalCounter.textContent = counter;        
    });

    hideModalBtn[0].addEventListener('click', function() {
        modal.classList.remove('open');
        body.style.overflow = 'visible';

        const sumOfGoods = parseInt(localStorage.getItem('basket'));
        const allSum = counter + sumOfGoods;
        localStorage.setItem('basket', allSum);  
        const basket = document.querySelector('.basket');
        basket.classList.add('visible');
        const basketCounter = basket.querySelector('.basket__counter');
        basketCounter.innerHTML = allSum;
        this.removeEventListener('click', arguments.callee, false);

    });

}