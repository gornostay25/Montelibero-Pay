<script>
import ErrorPage from "../../pages/ErrorPage.svelte";

export let component
export let preload = true

let props = Object.entries($$props).filter(([key,value])=>{
    return key != "component"
})
let componentLoaded = null;
let e404 = false
let cmp = (component && component.then ? component : component())

if (cmp?.then) {
    cmp.then(cmp=>{
        componentLoaded = cmp.default
        preload = false
    })
}else{
    preload = false
    e404 = true
}

</script>

{#if !preload}
    {#if e404}
        <ErrorPage code="404"/>
    {:else}
        <svelte:component this={componentLoaded} {...props}/>
    {/if}
{/if}