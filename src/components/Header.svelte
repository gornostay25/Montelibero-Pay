<script>
import { router } from "tinro";
function goback() {
    let from = $router.from
    router.goto(((from != "/contact")?from:false)?from:"/")
}
</script>
<div class="header header-fixed header-auto-show header-active header-logo-app">
    <a href="/" class="header-title">MTL Pay</a>
    <a href={undefined} role=button on:click={goback} class="header-icon header-icon-1">
        <i class="fas fa-arrow-left"></i>
    </a>
</div>