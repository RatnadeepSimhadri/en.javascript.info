let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  
  for(let prop in obj){
    if(typeof obj[prop] == 'number'){
      obj[prop] *=  2;
    }
  }

}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

