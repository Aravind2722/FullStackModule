// Implement key taps such that on:
// 1. pressing 1 you scroll to section 1,
// 2. pressing 2 you scroll to section 2 and
// 3. pressing 3 you scroll to section 3.
// 4. Also implement key tap b to go to bottom of the page
// 5. and key tap t to go to top of the page


const section1 = document.querySelector('#s1');
const section2 = document.querySelector('#s2');
const section3 = document.querySelector('#s3');

document.addEventListener('keyup', function (event) {
    if (event.key === '1') {
        const distanceFromScreenTop = section1.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + distanceFromScreenTop,
            behavior: 'smooth'
        });
    } else if (event.key === '2') { 
        const distanceFromScreenTop = section2.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + distanceFromScreenTop,
            behavior: 'smooth'  
        });
    } else if (event.key === '3') {
        const distanceFromScreenTop = section3.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + distanceFromScreenTop,
            behavior: 'smooth'
        });
    } else if (event.key === 'b') {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    } else if (event.key === 't') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});