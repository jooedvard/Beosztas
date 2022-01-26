$(function(){
    const ajax = new Ajax();
    const local = "../json/";
    const faliujsagok = [];
    ajax.ajaxGet(local+"faliujsag.json",faliujsagUser);
    

    
    
    //Faliujsag menu
    function faliujsagUser(adatok){
    //Faliujsag posztok//
        class Post{
            constructor(szulo,adat,kep){
                this.szulo = szulo;
                this.kep = kep;
                this.szulo.append(`<div class="post"><h3></h3></div>`);
                this.adat = adat;
                this.elem = szulo.find(".post:last");
                this.elem.find("h3").text(this.adat.cím);
    
                this.elem.on("click",(e)=>{
                    this.postElem = $(".post-info");
                    this.postElem.css("visibility", "visible");
                    this.postElem
                    .children(".post-info-user-data")
                    .children("p")
                    .html(adat.tartalom);
                  
                  this.postElem
                    .children(".post-info-user-data")
                    .find("h3")
                    .html(adat.cím);
                 this.postElem.find(".post-img img").attr("src",this.kep);
                 
                });
               
            }
        }

        const szulo = $(".posts");
        
        adatok.forEach((adat)=>{
            const szulo = $(".posts-container");
            let faliujsagPost = new Faliujsag(szulo,adat);
            faliujsagPost.elem.find("button").remove();
        });
        ajax.ajaxGet(
            "https://randomuser.me/api/?results=" + adatok.length,
            (kepek) => {
                
                kepek.results.map((ember, index) => {
                    
                    if(index<5){
                        const element = adatok[index];
                        let kep = ember.picture.large;
                        let post = new Post(szulo,element,kep);
                    }
                    $(".post-content").eq(index).find("img").attr("src",(ember.picture.large));
                   
                });
            }
        );
    }
})