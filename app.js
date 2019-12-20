const content = {
  '#products': [],
  '#companies': []
};

const setTab = (hash)=> {
  const active = document.querySelector('a.active');
  if(active){
    active.classList.remove('active');
  }
  const link = document.querySelector(`a[href="${hash}"]`);
  link.classList.add('active');
};
window.addEventListener('hashchange', ()=> {
  setTab(window.location.hash);
});


const productsPromise = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
.then( response => response.data)

const companiesPromise = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
.then( response => response.data)


Promise.all([
  productsPromise,
  companiesPromise
])
.then( ([products, companies]) => {
  content['#products'] = products;
  content['#companies'] = companies;

  Object.keys(content).forEach( key => {
    const link = document.querySelector(`a[href="${key}"]`);
    link.innerHTML += `(${key.length})`;
  });

  if(!window.location.hash){
    window.location.hash = '#products';
  }
  else {
    setTab(window.location.hash);
  }
});











// const API = 'https://acme-users-api-rev.herokuapp.com/api/'
// const loadData = async() => {
//   const URLS = ['products', 'companies'].map(name => `${API}${name}`);

//   const responses = await Promise.all(URLS.map(url => axios.get(url)));

//   const [products, companies] = await Promise.all(responses.map(response => response.json()));

//   console.log(products, companies);
// };

// loadData();

