
console.log('inside index.js');
console.log(myNamespace.services.MyService.getMyBusinessObject());


myNamespace.services.toTheBackend.doGet("myLovelyUrl", function(){console.log('done');}, function(){console.log('error');}, function(){console.log('always');});
