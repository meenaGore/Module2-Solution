(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
;


ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItems();
  toBuy.qty="";
  toBuy.item="";
  toBuy.errorMsg ="";
  ShoppingListCheckOffService.additem();

  toBuy.BoughtAlready = function (itemIdx) {
      try {
        ShoppingListCheckOffService.BoughtAlready(itemIdx);
      } catch (e)
      {
        toBuy.errorMsg = e.message;

      }

  }



}
AlreadyBoughtShoppingController.$inject =['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtItems = this;
  var bItems =[];
  bItems = ShoppingListCheckOffService.getBoughtItems();
  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  boughtItems.qty ="";
  boughtItems.itemnm="";
  boughtItems.errorMsg ="Nothing bought yet!";

}

function ShoppingListCheckOffService() {
  var service =this;
  var items=[];
  var boughtItem=[];


  var shoppinglist =["Milk","bread","yoghurt","butter","eggs","Apples"];
  var shoppingQty=["1 litre","1 loaf","0.5 litre","200 gm","12","1 dozen"];

  service.additem=function () {
    for (var i = 0; i < 6; i++)
    {
        var item = {
            itemnm :shoppinglist[i],
            qty:shoppingQty[i]
            }
            items.push(item);
    }

  }

  service.getItems=  function() {
    return items;
  }
  service.BoughtAlready =function (idx) {

    boughtItem.push(items[idx]);
      items.splice(idx,1);
      var error_msg="";
    if (boughtItem.length === undefined)
      {
         error_msg ="";

         throw new Error (error_msg);
      }
    else
      {

          if (boughtItem.length >5)
           {
             error_msg ="Everything is bought!";
             throw new Error (error_msg);
           }
          else
          {
              error_msg ="";

              throw new Error (error_msg);
          }
      }



  };


  service.getBoughtItems=  function() {
    return boughtItem;
  }
}
}

)();
