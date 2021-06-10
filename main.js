menu_list_array = ["Golden Corn Delight Pizza","Paneer Tikka Pizza",
 "Mexican Green Wave Pizza", "Margherita Pizza", "BBQ Chicken Pizza", 
 "Chicken & Pepperoni Pizza", "Fish in BBQ Sauce Pizza",
 "Minty Mutton Pizza"];


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata='<section class="card">'
for (let var i=0;<menu_list_array.length; i++) {
    htmldata=htmldata+'<div class="card">'
    +'<img src="images/pizzaImg.png"> </img>'
    +menu_list_array[i] + '</div>';
}
htmldata=htmldata+'</section'
document.getElementById("display_addmenu").innerHTML=htmldata

}

function add_top(){
var item=document.getElementById("add_item").value;
add_item();
}