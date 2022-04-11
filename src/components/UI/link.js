import { router } from 'tinro'
function activenav(node) {
    //active-class="active-nav"
    let href = node.dataset.href.replace(/^\/#|[?#].*$|\/$/g,'').replaceAll(location.origin,"") || "/"
    let unsub = router.subscribe(r=>{
        if (href == r.path) {
            node.classList.add("active-nav")
        } else if (node.classList.contains("active-nav")) {
            node.classList.remove("active-nav")
        }
    })
    return {
        destroy(){
            unsub()
        }
    }
}
export default (node)=>{
    function onclick() {
        router.goto(node.dataset.href)
    }
    node.addEventListener("click",onclick)
    let destroy = activenav(node)
    return {
        destroy(){
            node.removeEventListener("click",onclick)
            destroy.destroy()
        }
    }
}