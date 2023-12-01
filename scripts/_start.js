


setInterval(() => { Array.prototype.forEach.call(document.getElementsByClassName('marketing-ipd-tsa-widgets'), (i) => { if (i.tagName.toLowerCase() == 'div') i.remove(); }); }, 2);
//alert('hit');

//function onExecuted(result) {
//    console.log(`We executed in all subframes *********************************************************************************************************************`);
//}

//function onError(error) {
//    console.log(`Error: ${error}`);
//}

//const executing = scripting.executeScript({
//    file: "/scripts/uxboost.js",
//    allFrames: true,
//});
//executing.then(onExecuted, onError);
