var MYBUTTON = (function(module){
module.Doit = function(resultObject){
 resultObject.prepend(Date() + '<br/>');
};
return module;
}(MYBUTTON || {} ));
