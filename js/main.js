const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
    if(!e.target.classList.contains("accordion__header")) return;
    const accordionHeadr = e.target;
    const accordionBodycontainer = accordionHeadr.nextElementSibling;
    const accordionItem = accordionHeadr.parentElement;

    accordionItem.classList.toggle("active");
    if(accordionItem.classList.contains("active")){
        accordionBodycontainer.style.height = accordionBodycontainer.scrollHeight + "px";
        
    }else{
        accordionBodycontainer.style.height = 0 + "px";

    }

})



document.addEventListener("DOMContentLoaded", function() {
	
	OverlayScrollbars(document.body, 
        {
            className       : "os-theme-dark",
            resize          : "both",
            scrollbars : {
                clickScrolling : true
            }
        }

     );
});