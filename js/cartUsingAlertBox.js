var button1Name = "Caesar Salad with Tamago";
var button1Price = "265";
var button2Name = "Fried Calamari";
var button2Price = "360";
var button3Name = "Sneak Preview";
var button3Price = "580";
var cartInitialize = false;
var itemNames = [];
var itemPrices = [];
var itemCount = 0;

function showCart(button)
{
    if(cartInitialize)
    {
        var display = "<ol>";
        var i;
        var totalPrice = parseInt(0, 10);
        for(i = 0; i < itemCount; i++)
        {
            display = display + '<hr><li style="text-align:center;">' + itemNames[i] + ' - TK ' + itemPrices[i] + '</li>';
            totalPrice = totalPrice + parseInt(itemPrices[i], 10);
        }
        display = display + "</ol>";
        display = display + '<ul><hr><li style="text-align:center;"><b><em>Total Amount - TK ' + totalPrice + '</em></b></li><hr></ul>';
        document.getElementById("myDropdown").innerHTML = display;
    }
    else 
    {
        document.getElementById("myDropdown").innerHTML = '<hr><p style="text-align:center;">Cart Empty</p><hr>';
    }
    document.getElementById("myDropdown").classList.toggle("show");
}

function addToCart(button)
{
    if(!cartInitialize)
    {
        cartInitialize = true;
    }
    var message = "Are you sure you want to add ";
    if(button == "button1")
    {
        message = message + "Caesar Salad with Tamago to the cart?"; 
        if(confirm(message))
        {
            itemNames.push(button1Name);
            itemPrices.push(button1Price);
        }

    }
    if(button == "button2")
    {
        message = message + "Fried Calamari to the cart?";
        if(confirm(message))
        {
            itemNames.push(button2Name);
            itemPrices.push(button2Price); 
        }
    }
    if(button == "button3")
    {
        message = message + "Sneak Preview to the cart?";
        if(confirm(message))
        {
            itemNames.push(button3Name);
            itemPrices.push(button3Price); 
        }
    }
    itemCount += 1;
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }