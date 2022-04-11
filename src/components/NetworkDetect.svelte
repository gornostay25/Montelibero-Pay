<script>
import { onMount } from "svelte";
const TAG = "[NetworkDetect]"
let offlinemessg,onlinemessg

function online() {
    onlinemessg.classList.add('online-message-active');
    setTimeout(function() {
        onlinemessg.classList.remove('online-message-active')
    }, 2000);
    console.info(TAG,'Connection: Online')
}
function offline() {
    offlinemessg.classList.add('offline-message-active');
    setTimeout(function() {
        offlinemessg.classList.remove('offline-message-active')
    }, 2000);
    console.info(TAG,'Connection: Offline')
}
    
onMount(()=>{
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
})
</script>
<p class="offline-message bg-red-dark color-white" bind:this={offlinemessg}>No internet connection detected</p>
<p class="online-message bg-green-dark color-white" bind:this={onlinemessg}>You are back online</p>