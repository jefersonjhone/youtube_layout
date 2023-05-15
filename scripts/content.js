if (window.location.href == "https://www.youtube.com/"){

    var main = document.querySelectorAll('#video-title');
    for (let i = 0;i < main.length;i++){
        main[i].style.color = 'red';
        //main[i].style
    }
    
    ///chips sao os cards de conteudo
    
    var chips = document.querySelector('#chips.ytd-feed-filter-chip-bar-renderer');
    chips.style.display = "none";
    
    
    //text nome do canal
    
    var text = document.querySelectorAll("#text");
    text.forEach((e)=>{e.style.color= "red";})
    
    //thumbnail
    var thumbnail = document.querySelectorAll("#thumbnail");
    thumbnail.forEach((e)=>{e.style.borderRadius="0px";})
}
else if (window.location.href.search('watch' != -1)){
    //secundary 
    window.addEventListener('load', async function() {
        // espera um segundo
        await new Promise(resolve => setTimeout(resolve, 1000));
        var secundary = document.getElementById("secondary");
        var title = document.getElementById('above-the-fold');
        var top = document.getElementById('top-row');
        
        secundary.style.display = 'none';
        
        title.style.display = 'flex';
        title.style.flexDirection = 'column';
        title.style.alignItems = 'center';
        
        top.style.display = 'flex';
        top.style.flexDirection = 'column';
        top.style.alignItems = 'center';
        
      });

    //comment-teaser
    //var comment = document.querySelector("#comment-teaser");
    //comment.style.display = "none"; 
}
else{
    alert(window.location.href.search('watch' != -1))
}



//#page-manager
