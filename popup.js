function myfunction(){
    let linkVid = JSON.parse(localStorage.links)
    let render = ''
    let html = document.querySelector('.link-list')
    linkVid.map(function(obj){
        return render+= `
        <li style="display:flex; align-items:center; margin:8px 0; border:1px soild black;">
            <img style = "max-width:200px; max-height:150px; margin-right:8px" src = "${obj.thumb}">
            <span><a type="video/mp4" href="https://${obj.video}" target="_blank">download</a></span>
        </li>`
        
    })
    html.innerHTML=render;
    
}
myfunction()
