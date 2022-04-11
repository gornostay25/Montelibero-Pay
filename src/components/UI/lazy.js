
let intersectionObserver;

function ensureIntersectionObserver() {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
                entry.isIntersecting && entry.target.dispatchEvent(new CustomEvent("enterViewport"));
			});
		}
	);
}

export default (node)=>{
    ensureIntersectionObserver();
    intersectionObserver.observe(node);
    function onenterv() {
        node.style.background = `url(${node.dataset.src})`
    }
    node.addEventListener("enterViewport",onenterv)

    return {
        destroy(){
            intersectionObserver.unobserve(node)
            node.removeEventListener("enterViewport",onenterv)
        }
    }
}