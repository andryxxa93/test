// without JQuery
// window.addEventListener('DOMContentLoaded', () => {
//     'use sctrict'

//     const modal = (selector, openDelay) => {
//         const modal = document.querySelector(selector);
//         const close = modal.querySelector('[data-close]');
//         const content = modal.querySelector('[data-modal]');

//         close.addEventListener('click', () => {
//             modal.style.display = 'none';
//         })

//         const openModalByTime = () => {
//             if (!sessionStorage.getItem('modal-opened')) {
//                 setTimeout(() => {
//                     modal.style.display = 'flex';
//                     setTimeout(() => {
//                         content.style.opacity = '1';
//                     }, 100);
//                 }, openDelay);
//                 sessionStorage.setItem('modal-opened', 'true');
//             }
//         }
//         openModalByTime();
//     }

//     modal('.modal', 6000);
// })
$(function(){
    'use strict'

    const modal = (selector, time) => {
        const openModalByTime = () => {
            if (!sessionStorage.getItem('modal-opened')) {
                setTimeout(() => {
                    $(selector).fadeIn('slow')
                    $(selector).css('display', 'flex')
                }, time);
                sessionStorage.setItem('modal-opened', 'true');
            }
        }
        openModalByTime();

        $('.modal__close').click(() => {
            $('.modal').fadeOut()
        })
    }
    modal('.modal', 5000)
})