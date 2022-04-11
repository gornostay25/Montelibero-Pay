<script>
import { onMount } from "svelte";

let body = document.body;

let dark = false
let gradient = "body-default"
let minios15 = false

onMount(()=>{
    body.classList.add((!dark)?"theme-light":"theme-dark")
    body.dataset.gradient = gradient
})
</script>
