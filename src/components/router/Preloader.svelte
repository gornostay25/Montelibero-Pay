<script>
import { authloaded } from "../../libs/store";
</script>
{#if !$authloaded}
<div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
{/if}
