const btn = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeBtn = document.querySelector ('.icon-close');
const sText = document.querySelector('.start-text');
wrapper.style.display = "none";

btn.addEventListener('click', () => {
    wrapper.style.display = "flex"; 
    sText.style.display = "none";
    
    
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

closeBtn.addEventListener('click', ()=> {
    wrapper.style.display = "none";
    sText.style.display = "flex";
});
