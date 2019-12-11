let cardsDataTop = [
  {
    imgUrl: 'IMG/Layer_8.png',
    text: 'MIMOSA LACE DRESS',
    price: 76.95,      
    specialOffer: false    
  },
  {      
    imgUrl: 'IMG/Layer_9.png',
    text: 'FEEL TANK',
    price: 59.95,      
    specialOffer: true
  },
  {      
    imgUrl: 'IMG/Layer_10.jpg',
    text: 'HOT SHORTS',
    price: 79.95,      
    specialOffer: false
  },
  {      
    imgUrl: 'IMG/Layer_11.png',
    text: 'PETROL SWEATER',
    price: 21.50,      
    specialOffer: true
  }   
];

let cardsDataBottom = [
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
    element.textContent = text;
      
    return element;
    };

  let renderCards = function(product) {
  
    let listItem = makeElement('li', 'good')
    
  // Картинка 
    let img = makeElement('img', 'good__image');
    img.src = product.imgUrl;
    img.alt = product.text;
    listItem.appendChild(img);    
    
   // Заголовок  
   let title = makeElement('p', 'good__description', product.text)
   listItem.appendChild(title);

  // Цена 
    let priceName = '$' + product.price;
    let price = makeElement('p', 'good__price', priceName);
    listItem.appendChild(price);
      
  // Спец. цена
    if( product.specialOffer ) {
      let inSale = 'good__sale';      
      listItem.classList.add(inSale);       
      };
      
  // Кнопка 
    let button = makeElement('a', 'good__button-pay', )
    button.textContent = 'ADD TO CART';
    button.href = '#';
    listItem.appendChild(button);
      
   return listItem;    
   };
   
   let cardListBottom = document.querySelector('.goods__bottom-row'); 
   
  for( let i = 0; i < cardsDataBottom.length; i++ ) {
    let cardItem = renderCards( cardsDataBottom[i] );
    cardListBottom.appendChild(cardItem); 
    };

  let cardListTop = document.querySelector('.goods__top-row');   

  for( let i = 0; i < cardsDataTop.length; i++ ) {
    let cardItem = renderCards( cardsDataTop[i] );
    cardListTop.appendChild(cardItem); 
    };