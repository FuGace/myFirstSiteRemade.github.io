let cardsData = [
    {
      imgUrl: 'IMG/Layer_17.png',
      text: 'NADIA DRESS',
      price: 64.95,      
      specialOffer: false
    },
    {      
      imgUrl: 'IMG/Layer_18.png',
      text: 'SOFI BLOUSE',
      price: 26.95,      
      specialOffer: true
    },
    {      
      imgUrl: 'IMG/Layer_19.png',
      text: 'GOODING SHORTS',
      price: 79.95,      
      specialOffer: false
    },
    {      
      imgUrl: 'IMG/Layer_20.png',
      text: 'MIMOSA LACE DRESS',
      price: 76,      
      specialOffer: true
    }   
  ];

  let makeElement = function(tagName, className, text) {  
    let element = document.createElement(tagName);  
    element.classList.add(className);  
    if(text) {
      element.textContent = text;
      } 
    return element;
    };

  let renderCards = function(product) {
  
    let listItem = makeElement('li', 'good')
    
  // Заголовок  
    let title = makeElement('p', 'good__description', product.text)
    listItem.appendChild(title);
    
  // // Картинка 
  //   let img = makeElement('img', 'good__image');
  //   img.src = product.imgUrl;
  //   img.alt = product.text;
  //   listItem.appendChild(img);    
    
  // // Цена 
  //   // let priceName = product.price;
  //   let price = makeElement('p', 'good__price', priceName);
  //   listItem.appendChild(price);
      
  // // Спец. цена
  //   if( product.specialOffer ) {
  //     inSale = 'goods--sale';
  //     element.classList.add(inSale);       
  //     };      
       
      
   return listItem;    
  };
   
  let cardList = document.querySelector('.goods'); 
   
  for( let i = 0; i < cardsData.length; i++ ) {
    let cardItem = renderCards( cardsData[i] );
    cardList.appendChild(cardItem); 
    };

  console.log("ghbdt");