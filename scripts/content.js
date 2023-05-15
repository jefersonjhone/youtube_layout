if (window.location.href == "https://www.youtube.com/"){
    window.addEventListener('load', async function() {
        // espera um segundo
        await new Promise(resolve => setTimeout(resolve, 500));
        replace()
                                                    }
                            )



    setInterval(replace,30000)
    function replace(){
        var chips = document.querySelector('#chips');
        var cont = document.querySelectorAll("ytd-rich-item-renderer")
        var conteudos = document.querySelectorAll("#contents")
        var count = 0;  
        var footer = document.querySelector('#footer')
        var main = document.querySelectorAll('#video-title');
        var sections = document.getElementById('sections')
        var text = document.querySelectorAll("#text");
        var thumbnail = document.querySelectorAll("#thumbnail");
        var video_metadata = document.querySelectorAll("#metadata-line")
        var images = document.querySelectorAll('.yt-core-image--content-mode-scale-aspect-fill')
        for (let i = 0;i < main.length;i++){
            main[i].style.color = 'black';
            main[i].style.fontWeight = 900;
            main[i].style.textAlign = 'center';
        }
        
        
        chips.style.display = "none"; //chips sao os cards de categoria de conteudo
        
        conteudos.forEach((e)=>{
            e.style.border = '1px solid gray';
            e.style.marginBottom = '100px'})
            cont.forEach((e)=>{
                e.style.margin = '0 auto';
            }
            )
            
            
        footer.style.display = 'none';


        text.forEach((e)=>{ //text é o id da tag que tem o nome do canal e o título do vídeo
            //e.style.color= "black";
            e.style.fontWeight='900';
            e.style.textAlign='end';
                            }
                    )
    
        thumbnail.forEach((e)=>{//thumbnail é o card do vídeo, que por padrão tem cantos arredodados
            e.style.borderRadius="0px";
                            }
                    )


        sections.style.borderRadius = '35px';
        
        sections.style.position = 'relative';
        sections.childNodes.forEach(( ev ) => {
            if (count == 0 || count == 1){
                ev.style.backdropFilter = 'blur(10px)';
                ev.style.backgroundColor = '#b8b8b847';
                ev.style.border = '1px solid gray';
                ev.style.borderRadius = '12px';
                ev.style.margin = '20px';
                                        }
            else {
                ev.style.display = 'none';
                }
            ++ count
                                            }
                                    )

        images.forEach((e)=>{
            e.style.opacity = '0.1';
        })

        video_metadata.forEach(even=>{
            even.style.color = 'gray';
            even.style.fontWeight = '600';
                                    }
                                )
                                        }//function replace()
        }// if

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
}
else{
    alert(window.location.href.search('watch' != -1))
    }