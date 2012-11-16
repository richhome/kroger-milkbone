var running    = false;
var timerID    = null;
var currentID  = null;
var previousID = null;
var delay      = 300;
var behaviors  = {};
function InitMenus(id) {
  // get all list elements
  if ($(id)) {
    $A($(id).childNodes).each(function(child) {
      if (child.nodeName == 'LI') {
        // is there a menu?
        if ($(child.id+'-menu')) {
          // set ids
          nav_id  = child.id;
          menu_id = child.id+'-menu';
          // add behaviors
          eval("behaviors['#"+nav_id+":mouseover']  = function(e) { navShowMenu('"+nav_id+"'); }");
          eval("behaviors['#"+nav_id+":mouseout']   = function(e) { NavStartTimer(\"navHideMenu('"+nav_id+"')\"); }");
          eval("behaviors['#"+menu_id+":mouseover'] = function(e) { NavStopTimer(); }");
        }
      }
    });
    // add behaviors
    Event.addBehavior(behaviors);
  }
}



function NavStartTimer(event) { 
//event="HideMenu('mainNav_item2')";
//alert("in start timer");
running = true; 
//alert("running is "+running);
timerID = setTimeout(event, delay); }

function NavStopTimer() { running = false; clearTimeout(timerID); }

// Begin 11/12/07 Update #1
function navShowMenu(id) {
  if (running){NavStopTimer();}
  currentID = id;
  if (currentID != previousID && previousID != null){ navHideMenu(previousID); }
  $(id+'-menu').className = 'show';
  $A($(id).childNodes).each(function(child) { if (child.nodeName == 'A') { Element.addClassName(child, 'hover'); } });
  previousID = currentID;
  if (currentID == 'mainNav_item3'|| currentID == 'mainNav_item4' || currentID == 'mainNav_item5' || currentID == 'mainNav_item6' || currentID == 'mainNav_item9')
    {  
        //  searchWhere values differ between MOSS and ASP.NET environments
        $('searchWhere').className='hide'; 
    }
}

function navHideMenu(id, level) {
  $(id+'-menu').className = 'hide';
  $A($(id).childNodes).each(function(child) { if (child.nodeName == 'A') { Element.removeClassName(child, 'hover'); } });
    if (id == 'mainNav_item3'|| id == 'mainNav_item4' || id == 'mainNav_item5' || id == 'mainNav_item6' || id == 'mainNav_item9')
    	{  
    		//  searchWhere values differ between MOSS and ASP.NET environments
    		$('searchWhere').className='show';
    	}
}
// End 11/12/07 Update #1


