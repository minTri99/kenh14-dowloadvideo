function kenh14() {
    let videoElement = document.querySelectorAll('.VCSortableInPreviewMode[type=VideoStream]')
    let list = []
    for (x of videoElement) {
        if(x.getAttribute('data-vid') !== null) {
            list.push({video:x.getAttribute('data-vid'),thumb:x.getAttribute('data-thumb')})
        }
    }
    chrome.extension.sendMessage({
        data: JSON.stringify(list),
    });
    
} 
kenh14()
