document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementsByTagName('header')[0];
  window.onscroll = () => {
    if(window.pageYOffset > document.getElementsByTagName('header')[0].offsetTop){
      header.style.position = 'sticky';
      header.style.top = 0;
      header.style.zIndex = 2;
    }else{
      header.style.position = 'block';
    }
  }
})

