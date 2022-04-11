const SLIDERS = new Map()

class SliderElement {
    node = null
    splide = null
    constructor(node,options=null){
        this.node = node
        
        if (options) {
            this.splide = new window.Splide(node,options)
        }else{
            this.splide = new window.Splide(node,{
                type: 'loop',
                autoplay: true,
                interval: 4000,
                perPage: 1
            })
        }
        this.splide.mount()
    }

    go(){
        this.splide.go('>')
    }
    prev(){
        this.splide.go('<')
    }

    destroy(){
        this.node = null
    }
}

export function slider(node,options=null){
    let slider = new SliderElement(node,options)
    const id = node.id
    if (SLIDERS.has(id)) {
        SLIDERS.get(id).destroy()
        console.warn("slider rewrite with id:",id)
    }
    SLIDERS.set(id,slider)
    return {
        destroy(){
            slider.destroy()
            SLIDERS.delete(id)
        }
    }
}
/**
 * 
 * @param {HTMLElement} node 
 * @param {">"|"<"} operation 
 * @returns 
 */
export function slider_control(node,operation){
    let next = operation == ">"
    let slider = SLIDERS.get(node.dataset.slider)
    function gonext() {
        slider.go()
    }
    function goprev() {
        slider.prev()
    }
    if (next) {
        node.addEventListener("click",gonext)
    } else {
        node.addEventListener("click",goprev)
    }
    return {
        destroy(){
            if (next) {
                node.removeEventListener("click",gonext)
            } else {
                node.removeEventListener("click",goprev)
            }
        }
    }
}