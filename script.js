var Burger = function(/*name,type,*/bun,set,cheese){
 // this.name = name;
 // this.type = type;
  this.bun = bun;
  this.set = set;
  this.cheese = cheese;  
}
var burgers = {
  
  Chicken:{},
  Beef:{},
 // Tavern:{},
  Finest:{},
  Misc:{},
  
  
};
    

//for(var i = 0; i < burgerArr.length; i++){};

burgers.Chicken['BBQ Chicken Burger']= new Burger('Sesame','big 3 + O"Straws','Cheddar');

burgers.Chicken['Blackened Chicken Burger'] = new Burger('Jalepeno','Green Leaf + Red Onion + Tomato',"Pepper Jack");

burgers.Chicken['Bruschetta Chicken Burger'] = new Burger('Ciabatta','Pesto Aioli + Shredded Romaine + Breschetta + balsamic Cream','Provolone');

burgers.Chicken['California Chicken Burger'] = new Burger('Sesame','Big 4 + Guacamole + Bacon','Provolone');

burgers.Chicken['Crispy Chicken Burger'] = new Burger('Sesame','Big 5','No Cheese');

burgers.Chicken['Mediterranean Chicken Burger'] = new Burger('Ciabatta','Green Leaf + Red Onion + Tomato + Cucumber + Olives + Italian Dressing','Feta');

burgers.Chicken['Simply Grilled Chicken'] = new Burger('Sesame', 'Green Leaf + Tomato + Red Onion + Pickles (Big 4)', 'No Cheese');

burgers.Chicken['Teriyaki Chicken Burger'] = new Burger('Sesame', 'Big 3 + Pinapple','Swiss');

burgers.Beef['5 Alarm Burger'] = new Burger('Jalepeno', 'Big 3 (sub Chipotle Mayo) + Salsa + Jalapenos', 'Pepper Jack');

burgers.Beef['Bacon Cheese Burger'] = new Burger('Sesame', 'Big 3 + Bacon','Choice');

burgers.Beef['Banzai Burger'] = new Burger('Sesame', 'Big 3 + Pineapple','Cheddar');

burgers.Beef['BBQ Beef Burger'] = new Burger('Sesame','Big 3 + O"Straws','Cheddar');

burgers.Beef['Blue Ribbon Burger'] = new Burger('Onion','Big 3 (sub Chipotle Mayo) + O"Straws','Bleu');

burgers.Beef['Cheese Burger'] = new Burger('Sesame','Big 6','Choice');

burgers.Beef['Guacamole Bacon Burger'] = new Burger('Sesame','Big 3 + Red Onion + Gucaomole + Bacon','Swiss');

burgers.Beef['Mushroom Burger'] = new Burger(' Sesame','GPS + Sauteed Mushrooms','Swiss');

burgers.Beef['Prime Chophouse Burger'] = new Burger('Onion','Country Dijon + HorseRadish Mush + O"Straws','Provolone');

burgers.Beef['Royal Burger'] = new Burger('Sesame','Big 3 (Lettuce On Bottom) + Bacon + Fried Egg w/ Pepper','Canadian');

burgers.Beef['Simply Grilled Beef Burger'] = new Burger('Sesame','Green Leaf + Tomato + Red Onion + Pickles', 'No Cheese');



burgers.Finest['Big Sky Burger'] = new Burger('Ciabatta','Garlic Aioli + Arugula + Bacon + Onion Ring + Siracha Sauce', ' Goat');

burgers.Finest['Black & Blue Burger'] = new Burger(' Ciabatta','Country Dijon + Portabella Planks(2-3) + 50/50 Onions', 'Blue Cheese Sauce & Blue Cheese');

burgers.Finest['Brushetta'] = new Burger('Ciabatta', 'Garlic Aoli + Shredded Romaine + Brushetta Salsa', 'Provolone');

burgers.Finest['Mad Love'] = new Burger ( ' Ciabatta', 'Trickle Relish, Shredded Romaine, Cheese Crisp, Candy Bacon, Avacado, Citrus Salsa','Swiss & Provolone');

burgers.Misc['Crispy Artic Cod'] = new Burger('Sesame','Big 4 Sub Tartar Sauce', 'No Cheese');
//console.log(burgers);
burgers.Misc['Grilled Turkey Burger'] = new Burger('Ciabatta','Mayo + Green Leaf + Tomato + Bacon', 'Cheddar');

burgers.Misc['The Wedgie Burger'] = new Burger('Lettuce, Guacamole + Red Onion + Tomato + Bacon', 'No Cheese');

burgers.Misc['The Garden Burger'] = new Burger('Whole Wheat','Big 4 sub Country Dijon', 'No Cheese');

$(document).ready(function(){
  var html = ''
  $.each(burgers,function(val){
    //console.log(Object.keys(burgers[val]));
 html+= '<h2 class = "burgerType text-center col-md-12">' + val + '</h2><div class = row>'

    var keys = Object.keys(burgers[val]);
    //console.log(keys);
    $.each(keys,function(val2){
      //console.log(keys[val2]);
      html += '<div class = "col-md-3 burgerlist ">';
      html += '<h4 class= "text-center">' + keys[val2] + '<h4>';
      console.log(burgers[val][keys[val2]]);
      html += '<h5><b class= "burgerProp">Bun:</b> '+ burgers[val][keys[val2]]['bun'] + '<h5>';
       html += '<h5><b class= "burgerProp"> Set:</b> ' + burgers[val][keys[val2]]['set'] + '<h5>';
       html += '<h5><b class= "burgerProp">Cheese:</b> ' + burgers[val][keys[val2]]['cheese'] + '<h5></div>';
    });
  html+= '</div>'
   
  });
  $('.burgers').html(html);
  
})