<script>
import { authloaded } from "../libs/store";
import { onMount } from "svelte";
import { router } from "tinro";
import { menu,MenuController } from "./UI/menus";

/**
 * @type {BeforeInstallPromptEvent}
 */
let PWAevent = null
window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    PWAevent = e;
})

const isAndroid = !!navigator.userAgent.match(/Android/i);
const isIOS = !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
const isMobile = !!(()=>{
    return true // For testing
    if (navigator.userAgentData) {
        return navigator.userAgentData.mobile
    }
    return isAndroid || isIOS
})()
const isPromptShown = (()=>{
    let instld = localStorage.getItem("pwainstalled")
    if (instld === "tak" || instld === "ni") {
        return true
    }
    return false
})()

function close() {
    MenuController.close()
    localStorage.setItem("pwainstalled","ni")
}

onMount(()=>{
    if (!isPromptShown && isMobile) {
        new Promise(rs=>{
            setTimeout(() => {
                rs(MenuController.open(`menu-install-pwa`))
            }, 5000);
            authloaded.subscribe(v=>{
                if (v) {
                    rs(MenuController.open(`menu-install-pwa`))
                }
            })
        })
        // setTimeout(() => {
        //     MenuController.open(`menu-install-pwa`)
        // }, 400);
    } else if(!isMobile){
        router.goto("/desktop")
    }
})

function installpwa() {
    PWAevent.prompt()
    PWAevent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            localStorage.setItem("pwainstalled","tak")
        }else{
            localStorage.setItem("pwainstalled","ni")
        }
        PWAevent = null;
    });
    MenuController.close()
    isPromptShown = true
}

</script>

{#if !isPromptShown && isMobile}
    <div id="menu-install-pwa" class="menu menu-box-bottom menu-box-detached rounded-m" use:menu data-menu-hider="none">
        <img class="mx-auto mt-4 rounded-m" src="/icons/apple-touch-icon.png" alt="logo" width="90">
        <h4 class="text-center mt-4 mb-2">Add MTL Pay on your Home Screen</h4>
        {#if PWAevent}          
            <p class="text-center boxed-text-xl">
                Install Sticky on your home screen, and access it just like a regular app. It really is that simple!
            </p>
            <div class="boxed-text-l top-25">
                <a href={undefined} on:click={installpwa} role=button class="pwa-install mx-auto btn btn-m rounded-s text-uppercase font-900 bg-red-dark mb-3">Add to Home Screen</a>
            </div>
        {:else}            
            <p class="text-center boxed-text-xl">
                Install Sticky on your home screen, and access it just like a regular app. Open menu and tap "Add to Home Screen".
            </p>
        {/if}
        <a href={undefined} class="btn-full mb-3 text-center text-uppercase font-900 color-gray-light opacity-90 font-110" on:click={close}>Maybe later</a>
    </div>
{/if}
