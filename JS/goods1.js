

  let makeElementTop = function(tagName, className, text) {  
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
   
   let cardListTop = document.querySelector('.goods__top-row'); 
   
  for( let i = 0; i < cardsDataTop.length; i++ ) {
    let cardItem = renderCards( cardsDataTop[i] );
    cardListTop.appendChild(cardItem); 
    };