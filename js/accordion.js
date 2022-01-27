let accordions = document.querySelectorAll('.accordion_item')

for(accordion_item  of accordions){
    accordion_item.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active') 
        } else{
            for(accordion_item of accordions){
                accordion_item.classList.remove('active') 
            }
            this.classList.add('active')
        }    
    })
}