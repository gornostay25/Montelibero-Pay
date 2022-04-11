<script>
import lazy from "../components/UI/lazy";
import Header from "../components/Header.svelte";
import cards from "../components/UI/cards";

</script>

<Header/>
<div class="page-content header-clear-medium pb-0">
    <div class="card card-style" data-card-height="450" use:cards>
        <div class="card-center text-center">
            <img alt="" src="images/preload-logo.png" class="mx-auto mt-4 scale-box" width="120">
            <h1 class="color-white mt-4 font-40">MTL Pay</h1>
            <p class="color-highlight font-12 mt-n1">Montelibero EURMTL coin wallet app</p>
            <p class="boxed-text-xl color-white opacity-70 mb-0">
                We've builit a reputation. We care about all our customers and we give 150% attention to detail for perfect quality.
            </p>
        </div>
        <div class="card-overlay-infinite preload-img" data-src="https://montelibero.org/wp-content/uploads/2022/02/EURMTL_LOGO_NEW_1-300x300.jpg" use:lazy></div>
        <div class="card-overlay bg-black opacity-50"></div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content">
            <h6 class="color-highlight text-uppercase font-700 mb-1">Happy CUstomers</h6>
            <h1 class="text-uppercase font-900 mt-n2">TENS OF THOUSANDS</h1>
            <p>
                We've served over 30.000 Customers. We're delighted to see happy customers!
            </p>
            <div class="divider"></div>
            <div class="row text-center">
                <div class="col-6">
                    <i class="fa fa-code fa-4x color-theme mb-3"></i>
                    <h6 class="text-uppercase color-highlight font-700">Themes &amp; <br> Templates</h6>
                    <p>
                        We have over 80 mobile items in our portfolio.
                    </p>
                </div>
                <div class="col-6">
                    <i class="fa fa-mobile fa-4x color-theme mb-3"></i>
                    <h6 class="text-uppercase color-highlight font-700">APPS &amp; HYBRD <br> APPS</h6>
                    <p>
                        We have over 70 mobile items in our portfolio.
                    </p>
                </div>
            </div>
            <div class="divider"></div>
            <h6 class="color-highlight text-uppercase font-700 mb-1 font-15">OVER 1500 RATINGS</h6>
            <h1 class="text-uppercase font-900 mt-n2">Unmatched</h1>
            <p>
                We've builit a reputation. We care about all our customers and we give 150% attention to detail for perfect quality.
            </p>
            <div class="row mb-3">
                <div class="col-3 text-center">
                    <a href={undefined} role=button class="icon icon-xxl rounded-l bg-yellow-dark"><i class="fa fa-trophy font-24"></i></a>
                </div>
                <div class="col-9">
                    <h5 class="text-uppercase font-800 mb-0">Best in Class</h5>
                    <p>
                        Your feedback made our products twice as fast, we're always listening to you.
                    </p>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-3 text-center">
                    <a href={undefined} role=button class="icon icon-xxl rounded-l bg-green-dark"><i class="fa fa-sync font-24"></i></a>
                </div>
                <div class="col-9">
                    <h5 class="text-uppercase font-800 mb-0">Ultra Flexible</h5>
                    <p>
                        We believe our product should be very easy to use. Our code is beautifully simple.
                    </p>
                </div>
            </div>
            <div class="row mb-0">
                <div class="col-3 text-center">
                    <a href={undefined} role=button class="icon icon-xxl rounded-l bg-blue-dark"><i class="far fa-handshake font-24"></i></a>
                </div>
                <div class="col-9">
                    <h5 class="text-uppercase font-800 mb-0">TOP NOTCH SUPPORT</h5>
                    <p>
                        We love helping our customers achieve the best end product! We're always here.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content mb-3 pt-2">
            <h6 class="color-highlight text-center text-uppercase font-700 font-13">Our customers say we rock</h6>
            <h1 class="text-uppercase text-center font-900 mt-n1 font-30">Testimonials</h1>
            <p class="text-center mt-4">
                <i class="fa font-16 fa-star color-yellow-dark"></i>
                <i class="fa font-24 ms-2 fa-star color-yellow-dark"></i>
                <i class="fa font-38 me-2 ms-2 fa-star color-yellow-dark"></i>
                <i class="fa font-24 me-2 fa-star color-yellow-dark"></i>
                <i class="fa font-16 fa-star color-yellow-dark"></i>
            </p>
            <div class="single-slider owl-carousel owl-no-dots">
                <h2 class="text-center font-300 ps-3 pe-3 line-height-xl">
                    The code is always great with any Enabled template, the customer support that wins me over always.
                    The best support I have ever had, it's so good I purchased another theme. Highlighy Recommended.
                </h2>
            </div>
        </div>
    </div>
</div>