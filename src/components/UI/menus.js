/*

! dataset dataset\[["|']\w+- abc-dfe => abcDfe

*/

const TAG = "[ui-menus]"
/**
 * @type {Map<string,MenuElement>}
 */
const MENUS = new Map()
/**
 * @type {Array<MenuElement>}
 */
const menusstack = new Array()

class MenuHiderClass extends EventTarget {
    menuhider = document.createElement("div")
    #showclass = "menu-active"
    constructor(){
        super()
        this.menuhider.classList.add("menu-hider")
        document.body.appendChild(this.menuhider)
        this.menuhider.addEventListener("click",()=>{
            this.dispatchEvent(new CustomEvent("click"))
        })
    }
    show(){
        this.menuhider.classList.add(this.#showclass)
    }
    hide(){
        this.menuhider.classList.remove(this.#showclass)
    }
}
const MenuHider = new MenuHiderClass()

class MenuControllerClass {
    /**
     * @type {"back"|"close"|"none"}
     */
    hidermode = "back"
    constructor(){
        MenuHider.addEventListener("click",this.onhiderclick.bind(this))
    }

    onhiderclick(){
        console.log(TAG,MENUS,menusstack)
        switch (this.hidermode) {
            case "back":
                return this.back()
            case "close":
                return this.close()
        }
    }
    /**
     * 
     * @param {string} menuid 
     */
    open(menuid){
        
        let menu = MENUS.get(menuid)
        if (!menu) return console.error(TAG,"Menu is not exist",menuid);
        if (menusstack.length>0) {
            menusstack.at(-1).hide()
        }else{
            MenuHider.show()
        }
        this.hidermode = menu.hidermode
        menu.show()
        menusstack.push(menu)
    }
    back(){
        if (menusstack.length<2) return this.close();
        let menu = menusstack.pop()
        menu.hide()
        menu = menusstack.at(-1)
        this.hidermode = menu.hidermode
        menu.show()

    }
    close(){
        if (!menusstack.length) return;
        let menu = menusstack.pop()
        menu.hide()
        menusstack.length = 0
        MenuHider.hide()
    }

}
export const MenuController = new MenuControllerClass()


class MenuElement {
    /**
     * @type {HTMLElement}
     */
    node = null
    /**
     * @type {"back"|"close"|"none"}
     */
    hidermode = "back"
    /**
     * 
     * @param {HTMLElement} node 
     */
    constructor(node){
        this.node = node
        this.node.style.display = "block"

        let menuBoxLR = this.node.classList.contains("menu-box-left") || this.node.classList.contains("menu-box-right")
        let menuBoxBTM = this.node.classList.contains("menu-box-bottom") || this.node.classList.contains("menu-box-top") || this.node.classList.contains("menu-box-modal")

        if (menuBoxLR) {
            if (this.node.dataset['menuWidth'] === 'cover') {
                this.node.style.width = '100%'
            } else {
                this.node.style.width = this.node.dataset['menuWidth'] + 'px'
            }
        }

        if (menuBoxBTM) {
            if (this.node.dataset['menuWidth'] === 'cover') {
                this.node.style.width = '100%'
                this.node.style.height = '100%'
                if (this.node.dataset['menuHeight'] === 'cover') {
                    this.node.style.maxHeight = "100%"
                }
            } else {
                this.node.style.width = this.node.dataset['menuWidth'] + 'px'
                this.node.style.height = this.node.dataset['menuHeight'] + 'px'
            }
        }

        if (this.node.dataset.menuHider && this.node.dataset.menuHider == "close" || this.node.dataset.menuHider == "none" || this.node.dataset.menuHider == "back") {
            this.hidermode = this.node.dataset.menuHider
        }
    }

    show(){
        this.node.classList.add('menu-active')
        
        let mtargetEffect = this.node.dataset['menuEffect']
        let mtboxLeft = this.node.classList.contains('menu-box-left');
        let mtboxRight = this.node.classList.contains('menu-box-right');
        let mtboxTop = this.node.classList.contains('menu-box-top');
        let mtboxBottom = this.node.classList.contains('menu-box-bottom');
        let mtoffsetWidth = this.node.offsetWidth;
        let mtoffsetHeight = this.node.offsetHeight;
        let $HeaderFooterPagecont = document.querySelectorAll('.header, #footer-bar, .page-content')

        if (mtargetEffect === 'menu-push') {
            mtoffsetWidth = target.dataset['menuWidth'] ?? mtoffsetWidth
            if (mtboxLeft) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateX(' + mtoffsetWidth + 'px)'
                }
            }
            if (mtboxBottom) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateY(-' + mtoffsetHeight + 'px)'
                }
            }
            if (mtboxTop) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateY(' + mtoffsetHeight + 'px)'
                }
            }
        }
        if (mtargetEffect === 'menu-parallax') {
            mtoffsetWidth = this.node.dataset['menuWidth'] ?? mtoffsetWidth
            if (mtboxLeft) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateX(' + mtoffsetWidth / 10 + 'px)'
                }
            }
            if (mtboxRight) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateX(-' + mtoffsetWidth / 10 + 'px)'
                }
            }
            if (mtboxBottom) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateY(-' + mtoffsetHeight / 5 + 'px)'
                }
            }
            if (mtboxTop) {
                for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
                    $HeaderFooterPagecont[i].style.transform = 'translateY(' + mtoffsetHeight / 5 + 'px)'
                }
            }
        }
    }

    hide(){
        let $HeaderFooterPagecont = document.querySelectorAll('.header, #footer-bar, .page-content');
        for (let i = 0; i < $HeaderFooterPagecont.length; i++) {
            $HeaderFooterPagecont[i].style.transform = 'translateX(-' + 0 + 'px)'
        }
        this.node?.classList.remove('menu-active')
    }

    destroy(){
        this.node = null
    }

}

/**
 * 
 * @param {HTMLElement} node 
 */
 export function menu(node) {
    const menu = new MenuElement(node)
    const id = node.id
    if (MENUS.has(id)) {
        MENUS.get(id).destroy()
        console.warn(TAG,"menus rewrite with id:",id)
    }
    MENUS.set(id,menu)
    return {
        destroy() {
            menu.destroy()
            MENUS.delete(id)
        }
    }
}

/**
 * 
 * @param {HTMLElement} node 
 * @param {"open"|"back"|"close"} action 
 */
 export function menu_control(node,action="open") {
    // data-menu="menu-id"
    // action="open|back|close"
    const handlers = {
        open:()=>MenuController.open(node.dataset.menu),
        back:()=>MenuController.back(),
        close:()=>MenuController.close(),
    }
    node.addEventListener("click",handlers[action])
    return {
        destroy(){
            node.removeEventListener("click",handlers[action])
        }
    }
}