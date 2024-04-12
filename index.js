const buttonFilter = document.querySelector('.button--filter')
const asside = document.querySelector('.filter')
const filterMenu = document.querySelector('.filter__menu')
const fogOfWar = document.querySelector('.fog-off-war');

const filterInputMiscellaneous = document.querySelector('.filter__input--miscellaneous')
const filterInputWeb = document.querySelector('.filter__input--web-site')
const filterInputPeople = document.querySelector('.filter__input--people')
const filterInputTransports = document.querySelector('.filter__input--transport')
const filterInputAudio = document.querySelector('.filter__input--audio')
const filterInputPhoto = document.querySelector('.filter__input--photo')
const filterInputVideo = document.querySelector('.filter__input--video')
const filterInputGeo = document.querySelector('.filter__input--geo')


buttonFilter.addEventListener('click',()=>{
    asside.classList.toggle('filter--off')
})

filterMenu.addEventListener('click',(e) =>{
    if(e.target === filterInputMiscellaneous){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputWeb){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputPeople){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputTransports){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputAudio){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputPhoto){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputVideo){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
    else if (e.target === filterInputGeo){
        e.target.nextElementSibling.classList.add("drop-down-menu--open")
        fogOfWar.classList.toggle('fog-off-war--open')
        fogOfWar.addEventListener('click',()=> {
            fogOfWar.classList.toggle('fog-off-war--open')
            e.target.nextElementSibling.classList.toggle("drop-down-menu--open")
        },{once:true})
    }
})