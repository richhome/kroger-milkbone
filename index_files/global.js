function DisableButton(obj) {
  obj.blur();
  obj.src          = '../errorpages/errorpage404f735.html';
  obj.disabled     = true;
  obj.style.border = 'none';
}

var ie4     = false;
var ie5     = false;
var ns4     = false;
var ns6     = false;
var mac     = false;
var testing = false;
function SetBrowser() {
  agent       = navigator.userAgent.toLowerCase();
  mac         = (agent.indexOf("mac")!=-1);
  ie4         = (document.all && !document.getElementById) ? true : false;
  ie5         = (document.all && document.getElementById)  ? true : false;
  ns4         = (document.layers)                          ? true : false;
  ns6         = (document.getElementById && !document.all) ? true : false;
  if (testing){ alert("agent: "+agent+"\nmac: "+mac+"\nie4: "+ie4+"\nie5: "+ie5+"\nns4: "+ns4+"\nns6: "+ns6+"\n"); }
}

Event.onReady(function() {
   InitMenus("nav");
   //InitMenus("shoppingTasks");
   //InitStoreTasks("shoppingTasks");
   SetBrowser();
    if (!(mac && ie5)) {
      ScrollLinks.start();
    }
});


function safemail(name, domain, display, css, subject) {
  css       = (css)     ? ' class="' + css + '"' : '';
  subject   = (subject) ? '?subject=' + subject : '';
  displayed = (display) ? display : name + '@' + domain;
  mailto    = name + '@' + domain + subject;
  document.write('<a href="mailto:' + mailto + '"' + css + '>' + displayed + '</a>');
}

function SetFocus(fieldname,formname){if (formname == ''){ formname = 'form'; }if (eval("document."+formname+".elements[fieldname].value == ''")){ eval("document."+formname+".elements[fieldname].focus();"); }}

function HideOutput() {
  // check for previous reponses/errors
  if ($('flash')) { Element.hide('flash'); }
}

function PopWindow(title, url, width, height) {
  BuildWindow({id:'popwindow', title:title, url:url, width:width, height:height});
}
function SubmitForm(obj, form_action) {
  // disable button
  DisableButton(obj);
  
  // get elements
  var frm = document.forms[obj.form.name];
  var act = frm.elements['form_action'];
  
  // set form action
  act.value = form_action;
  
  // submit form
  frm.submit();
}