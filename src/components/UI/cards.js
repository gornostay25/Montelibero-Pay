export default ($card)=>{

    // let hederoffset, footeroffset;
    // let isHeaderNotTransparent = document.querySelector('.header:not(.header-transparent)');
    // let isFooterBar = document.querySelector('#footer-bar');

    // isHeaderNotTransparent ? hederoffset = document.querySelector('.header')['offsetHeight'] : hederoffset = 0;

    // isFooterBar ? footeroffset = document.querySelector('#footer-bar')['offsetHeight'] : footeroffset = 0;

    function onresize($card) { 
        return ()=>{
            if ($card.getAttribute('data-card-height') === 'cover') {
        
                if (window.matchMedia('(display-mode: fullscreen)')['matches']) {
                    var height = window.outerHeight
                }else{
                    var height = window.innerHeight
                }
        
                var heightPX = height + 'px'
            }
            if ($card.hasAttribute('data-card-height')) {
        
                var datacardheight = $card.getAttribute('data-card-height');
        
                $card.style.height = datacardheight + 'px';
        
                if (datacardheight === 'cover') {
                    $card.style.height = heightPX
                }
        
            }
        }  
    }
    let cardonresize = onresize($card)

    window.addEventListener('resize', cardonresize)
    cardonresize()
    return {
        destroy(){
            window.removeEventListener('resize', cardonresize)
            cardonresize = null
        }
    }
}