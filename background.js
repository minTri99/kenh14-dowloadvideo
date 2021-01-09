chrome.extension.onMessage.addListener(function(request){
  localStorage.links = request.data
})