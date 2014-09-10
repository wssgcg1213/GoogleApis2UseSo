chrome.webRequest.onBeforeRequest.addListener(callback,
  {urls: ["<all_urls>"]},
  ["blocking"]
);

function callback(details){
	var url = details.url;
	var domain = url.match(/^(http|https)\:\/\/([a-zA-Z0-9\.\-])+/g);
	var judge = domain && domain[0].match(/googleapis/g);

	if(judge){
 		//for useso do not support https...
 		url = url.replace(/^https/, 'http').replace('googleapis', 'useso')
		return {redirectUrl: url};
	}
}