import './sass/main.scss';

document.querySelector('.menu__btn').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.menu__list').classList.toggle('hide')
    }, 0);
    !document.querySelector('.menu__list-container').classList.contains('none')
    ? setTimeout(() => {
        document.querySelector('.menu__list-container').classList.add('none')
    }, 400)
    : document.querySelector('.menu__list-container').classList.remove('none')
})