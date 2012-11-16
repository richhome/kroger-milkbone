function toggleLayer(whichLayer)
{
	
	if (document.getElementById)
	{
		var style2 = document.getElementById(whichLayer).style;
		style2.display = (style2.display !='none'?'none':'');
		
	}

	else if (document.all)
	{
		var style2 = document.all[whichLayer].style;
		style2.display = style2.display? "":"none";
		document.all[otherLayer].style.display ="none";
	}

	else if (document.layers)
	{
		var style2 = document.layers[whichLayer].style;
		style2.display = style2.display? "":"none";
		
		document.layers[otherLayer].style.display ="none";
	}
}

function toggleHiddenLayer(whichLayer)
{
	
	if (document.getElementById)
	{
		var style2 = document.getElementById(whichLayer).style;
		style2.display = (style2.display !='block'? 'block':'');
		
	}

	else if (document.all)
	{
		var style2 = document.all[whichLayer].style;
		style2.display = style2.display? "":"block";
	}

	else if (document.layers)
	{
		var style2 = document.layers[whichLayer].style;
		style2.display = style2.display? "":"block";
	}
}

function toggleShoppingListTask(id) {
   var f = $$('ul#shoppingTasks .shoppingListOverlay');
    var s = '';
	for(var i=0; i<f.length; i++){
		//s += f[i].innerHTML + '/';
		if (f[i].id != id)
		    f[i].hide();
	}
	//alert(s);
    toggleHiddenLayer(id);
    //alert(id.display);
}
