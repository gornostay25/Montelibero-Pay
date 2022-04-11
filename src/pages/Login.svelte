<script>
import { slider_control,slider } from "../components/UI/slider.js";
import cards from "../components/UI/cards.js";
import { loginpopup } from "../libs/store.js";
import { menu,MenuController,menu_control } from "../components/UI/menus.js";

let errorText = ""
function error() {
    MenuController.open("menu-error")
}

async function login(){
    let r = await loginpopup()
    if (r !== true){
        errorText = r
        error()
    }
}

</script>
<div class="page-content pb-0 bg-theme">
    <div class="splide single-slider slider-no-arrows" id="walkthrough-slider" use:slider>
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mx-auto" width="320" src="https://www.enableds.com/products/sticky/v50/images/undraw/1.svg">
                                <h1 class="mb-0 font-30"> StickyMobile 5.0</h1>
                                <p class="mt-n1 color-highlight font-12">Simply the Best Mobile Webkit on Envato</p>
                                <p class="boxed-text-xl">
                                    Powered by Bootstrap 5.x with AJAX Transitions providing full
                                    PWA, RTL and Dark Mode integrations!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mx-auto" width="250" src="https://www.enableds.com/products/sticky/v50/images/undraw/2.svg">
                                <h1 class="mb-0 font-30"> Built for You</h1>
                                <p class="mt-n1 color-highlight font-12">We listen to all your Feedback</p>
                                <p class="boxed-text-xl">
                                    Sticky 5.0 is now powered by Bootstrap and is much more powerful than before. Everything has been rebuilt
                                    from the ground up adding features you requested!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mb-3 mx-auto" width="280" src="https://www.enableds.com/products/sticky/v50/images/undraw/3.svg">
                                <h1 class="mb-0 font-30"> Easy to Use</h1>
                                <p class="mt-n1 color-highlight font-12">Bootstrap Based Code. For Everyone</p>
                                <p class="boxed-text-xl">
                                    Beside the incredibly detailed documentation provided with our item, you can always use any feature from Bootstrap
                                    and follow their Knowledgebase too
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center text-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mx-auto" width="275" src="https://www.enableds.com/products/sticky/v50/images/undraw/5.svg">
                                <h1 class="mb-0 font-28"> Performance Monster</h1>
                                <p class="mt-n1 color-highlight font-12">It's Mobile. So it's super, super fast! Really!</p>
                                <p class="boxed-text-xl">
                                    Unlike our competitors, we test our products on over 50 live, actual devices. Not emulators. We test in
                                    real world conditions in 3G &amp; LTE for maximum performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mx-auto" width="320" src="https://www.enableds.com/products/sticky/v50/images/undraw/4.svg">
                                <h1 class="mb-0 font-28"> Fingertip Features</h1>
                                <p class="mt-n1 color-highlight font-12">Everything is built for your Mobile</p>
                                <p class="boxed-text-xl">
                                    Following strict guideliness for your fingertips to enjoy ever second of tapping through
                                    the features StickyMobile has to offer. Everything is pixel perfect built.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="cover" class="card text-center bg-theme" use:cards>
                        <div class="card-center">
                            <div class="content mt-n5">
                                <img alt="" class="mb-3 mx-auto" width="285" src="https://www.enableds.com/products/sticky/v50/images/undraw/6.svg">
                                <h1 class="mb-0 font-28"> And much more!</h1>
                                <p class="mt-n1 color-highlight font-12">All packed together with hundreds of features.</p>
                                <p class="boxed-text-xl">
                                    Sticky is not just your average template.
                                    We use Bootstrap to bring you the best product possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cover-button-bottom">
        <div class="row mb-0">
            <div class="col-4 ps-0">
                <a href="/about" class="btn btn-m rounded-l btn-full color-highlight border-highlight font-900 text button-m">About</a>
            </div>
            <div class="col-8 pe-0">
                <a href={undefined} role=button on:click={login} class="btn btn-m rounded-l btn-full bg-green-dark font-900 text button-m">LOGIN ACCOUNT</a>
            </div>
        </div>
    </div>
    <a href={undefined} role=button class="cover-next slider-next color-gray-dark" data-slider="walkthrough-slider" use:slider_control={">"}>Next<i class="fa fa-angle-right me-4 ms-3"></i></a>
    <a href={undefined} role=button class="cover-prev slider-prev color-gray-dark" data-slider="walkthrough-slider" use:slider_control={"<"}><i class="fa fa-angle-left me-4 ms-3"></i>Back</a>
</div>
<div id="menu-error" class="menu menu-box-bottom menu-box-detached" data-menu-height="260" use:menu>
    <div class="content mt-3">
        <div class="text-center">
            <i class="fa fa-frown color-red-dark fa-5x px-3 py-2"></i>
            <h1 class="pt-2 mb-0">Login Error</h1>
            <p class="boxed-text-xl mb-3">{errorText}</p>
            <div class="divider mb-4"></div>
            <a href={undefined} role=button use:menu_control={"close"} class="btn btn-m rounded-sm btn-full text-uppercase font-700 bg-red-dark close-menu">Close</a>
    </div>
    </div>
</div>