<script>
import cards from "../components/UI/cards";

let qrloaded = false

</script>
<div class="page-content pb-0">
    <div class="card" data-card-height="cover" use:cards>
        <div class="card-center">
            <div class="content text-center mb-0">
                <i class="fa fa-mobile fa-fade fa-8x color-highlight mb-5"></i>
                <h1 class="font-30">Only mobile device suported</h1>
                <p class="text-center mb-2">
                    To use MTL Pay open it on mobile device
                </p>
                <div class:qr-logo={qrloaded}>
                    <img alt="QRcode" width="200" class:d-none={!qrloaded} class="mx-auto polaroid-effect shadow-l mb-3" src={`https://barcode.tec-it.com/barcode.ashx?data=${"https://mtl-pay.web.app/"||window.origin}&code=QRCode&imagetype=Svg&eclevel=H`} on:load={()=>qrloaded=true}>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .fa-mobile{
        animation-duration: 2s
    }
    .qr-logo::after{
        content: "";
        background: url(/icons/android-chrome-384x384.png) round no-repeat ;
        position: absolute;
        height: 85px;
        width: 85px;
        transform: translate3d(-42px, -155px,0);
    }
</style>