
const filterContainer = document.querySelector('.project-filter'),
filterbtns = filterContainer.children;
totalFilterbtns = filterbtns.length;
// console.log(totalFilterbtns );

// projectItems =document.querySelector(".project-items").children;

 projectItems =document.querySelectorAll(".project-item");
// console.log(projectItems);

totalprojectItems = projectItems .length;
console.log(totalprojectItems );
for(i=0; i<totalFilterbtns; i++){
   console.log(filterbtns[i] ) ;
   filterbtns[i].addEventListener('click' , function(){
    //    console.log(this.innerHTML);
    filterContainer.querySelector(".active").classList.remove("active");
       this.classList.add('active');
           
       const fitlerValue = this.getAttribute("data-filter");
    //    console.log(fitlerValue);

    for(let k=0; k<totalprojectItems; k++ ){
        if(fitlerValue === projectItems[k].getAttribute("data-catogory")){
            projectItems[k].classList.remove("hide");
            projectItems[k].classList.add("show");
        }else{
            projectItems[k].classList.remove("show");
            projectItems[k].classList.add("hide");

        }
        if(fitlerValue === "all"){
            projectItems[k].classList.add("show");
            projectItems[k].classList.remove("hide");
        }
    }
   }) 
}


// Aside nav
const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalNavList =navlist.length;
allSection = document.querySelectorAll(".section"),
 totalSection = allSection.length;
      for(i=0; i<totalNavList; i++){
        //   console.log(navlist[i]);
        const a = navlist[i].querySelector('a')
        a.addEventListener("click", function(){
            // console.log(this);

            for(j=0; j<totalNavList; j++){
             
                const a = navlist[j].querySelector('a').classList.remove("active")
            }

            this.classList.add("active");
            showSection(this);

            if(window.innerwidth < 1200){
                asideSectionTogglerBtn();
            }
        })
      }

      function showSection(element){
        //   console.log(element);
        for(let i=0;
            i<totalSection ; i++){
                allSection[i].classList.remove("active");
            }
      const target =  element.getAttribute('href').split("#")[1];

        // console.log(target);
        document.querySelector("#" +target).classList.add("active");
      }

    //   nav toggler

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click" , () =>{
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;
            i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
            console.log(allSection);
    }