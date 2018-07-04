const pwfield = document.querySelectorAll('input[type="password"]');
const pwdiv = document.querySelector('.pw');
const reveal = document.querySelector('.reveal');
const div = document.createElement('div');
const submit = document.querySelector('input[type="submit"]');

pwfield[1].addEventListener('keyup', (e) => {
  let pw1 = pwfield[0].value;
  let pw2 = pwfield[1].value;
  if(pw1 != pw2){
    pwdiv.appendChild(div).textContent = `Passwords doesn't match, please try again!`;
    div.classList.add('nomatch');
    submit.setAttribute('disabled','');
  }
  if(pw1 == pw2 && div.classList.contains('nomatch')) {
    pwdiv.removeChild(div);
    div.classList.remove('nomatch');
    submit.removeAttribute('disabled');
  }
});

reveal.addEventListener('click', function() {
  if(pwdiv.classList.contains('clicked')){
    pwfield[0].setAttribute('type','password');
    pwfield[1].setAttribute('type','password');
    pwdiv.classList.remove('clicked');
  } else {
    pwfield[0].setAttribute('type','text');
    pwfield[1].setAttribute('type','text');
    pwdiv.classList.add('clicked');
  }
})