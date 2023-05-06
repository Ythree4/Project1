document.addEventListener('DOMContentLoaded', function(){
document.getElementById("open-drawer-button").addEventListener('click',function(){
  document.querySelector('.drawer').setAttribute('aria-hidden', false)
});
document.getElementById("close-drawer-button").addEventListener('click',function(){
  document.querySelector('.drawer').setAttribute('aria-hidden', true)
});
});