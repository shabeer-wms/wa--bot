var tabs;
var tab_id;
var url;
chrome.tabs.query({url: "*://*.whatsapp.com/*"}, tabs => {
  tabs = tabs;
  console.log("whatsapp detected!");
  url = tabs[0].url;
  tab_id = tabs[0].id;
  console.log(tabs[0].id);
});



function click(){
  console.log("clicked");
  var num = numbers;
  num.forEach(x => {
    let myNewUrl = `${url}send?phone=${x}&text=hello iam new bot`;
  chrome.tabs.update(tab_id, { url: myNewUrl });
  console.log("executing");
  sleep(8);
  console.log("executing");
  chrome.scripting.executeScript(
    {
      target: {tabId: tab_id},
      files: ['content.js'],
    },
    () => { console.log("complete");});
  
  });
}
function sleep (seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds*1000) {}
  return 0;
}
