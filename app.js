const setTab = (hash)=>{
  const active = document.querySelector('a.active');
  if (active){
    active.classList.remove('active')
  }
  const link = document.querySelector('a[href="${hash}"]');
  link.classList.add('active')
}

window.addEventListener('hashchange', () =>{
  setTab(window.location.hash);
});

if(!window.location.hash){
  window.location.hash = '#products';
}
else{
  SVGPathSegLinetoAbs(window.location.hash)
}


axios.get('')
