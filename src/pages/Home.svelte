<script>
import { slider } from "../components/UI/slider";
import cards from "../components/UI/cards";
import { user } from "../libs/store";
import Footer from "../components/Footer.svelte";

    
</script>

<div class="page-content header-clear-small">
    <div class="content mt-0">
        <div class="d-flex">
            <div class="align-self-center">
                <p class="mb-n2 font-12">Welcome back,</p>
                <h1 class="font-30">{$user.displayName}</h1>
            </div>
            <div class="align-self-center ms-auto">
                <a href={undefined} role=button data-menu="menu-add-funds" class="icon icon-m gradient-blue color-white rounded-m shadow-l rounded-m ms-2"><i class="fa fa-plus font-14"></i></a>
            </div>
        </div>
    </div>
    <div class="splide single-slider slider-no-arrows slider-no-dots visible-slider" id="single-slider-1" use:slider={{type:'loop',perPage: 1}}>
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <div data-card-height="220" class="card card-style shadow-xl mb-2 bg-14" use:cards>
                        <div class="card-top p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-0 color-white">Account Balance</h5>
                            <h1 class="color-white font-36">$2.513</h1>
                        </div>
                        <div class="card-bottom p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-n1 color-white">Main Account</h5>
                            <h5 class="font-monospace font-14 color-white">0987 6543 2101 9876</h5>
                        </div>
                        <div class="card-top p-3">
                            <h5 class="text-end font-monospace opacity-70 font-10 mb-n1 color-white">Expires</h5>
                            <h5 class="text-end font-monospace font-14 color-white">08/29</h5>
                        </div>
                        <div class="card-overlay bg-black opacity-70"></div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="220" class="card card-style shadow-xl mb-2 bg-18" use:cards>
                        <div class="card-top p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-0 color-white">Account Balance</h5>
                            <h1 class="color-white font-36">$82.135</h1>
                        </div>
                        <div class="card-bottom p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-n1 color-white">Savings Account</h5>
                            <h5 class="font-monospace font-14 color-white">0987 6543 2101 9876</h5>
                        </div>
                        <div class="card-top p-3">
                            <h5 class="text-end font-monospace opacity-70 font-10 mb-n1 color-white">Expires</h5>
                            <h5 class="text-end font-monospace font-14 color-white">08/29</h5>
                        </div>
                        <div class="card-overlay bg-black opacity-70"></div>
                    </div>
                </div>
                <div class="splide__slide">
                    <div data-card-height="220" class="card card-style shadow-xl mb-2 bg-21" use:cards>
                        <div class="card-top p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-0 color-white">Account Balance</h5>
                            <h1 class="color-white font-36">$53.623</h1>
                        </div>
                        <div class="card-bottom p-3">
                            <h5 class="font-monospace opacity-70 font-10 mb-n1 color-white">Company Account</h5>
                            <h5 class="font-monospace font-14 color-white">0987 6543 2101 9876</h5>
                        </div>
                        <div class="card-top p-3">
                            <h5 class="text-end font-monospace opacity-70 font-10 mb-n1 color-white">Expires</h5>
                            <h5 class="text-end font-monospace font-14 color-white">08/29</h5>
                        </div>
                        <div class="card-overlay bg-black opacity-70"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="d-flex text-center px-2">
            <div class="me-auto">
                <a href={undefined} role=button data-menu="menu-add-funds" class="icon icon-xxl bg-theme color-green-dark shadow-l rounded-m"><i class="fa fa-plus"></i></a>
                <span class="font-10 font-500 color-theme d-block">Add Funds</span>
            </div>
            <div class="m-auto">
                <a href={undefined} role=button data-menu="menu-transaction-request" class="icon icon-xxl bg-theme color-blue-dark shadow-l rounded-m"><i class="fa fa-arrow-down"></i></a>
                <span class="font-10 font-500 color-theme d-block">Request</span>
            </div>
            <div class="m-auto">
                <a href={undefined} role=button data-menu="menu-transaction-transfer" class="icon icon-xxl bg-theme color-red-dark shadow-l rounded-m"><i class="fa fa-arrow-up"></i></a>
                <span class="font-10 font-500 color-theme d-block">Send Funds</span>
            </div>
            <div class="ms-auto">
                <a href={undefined} role=button data-menu="menu-transaction-1" class="icon icon-xxl bg-theme color-yellow-dark shadow-l rounded-m"><i class="far fa-clock"></i></a>
                <span class="font-10 font-500 color-theme d-block">Most Recent</span>
            </div>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content mb-0 mt-2 pt-1">
            <div class="d-flex pb-3 mb-1">
                <div class="align-self-center">
                    <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-0">Recent Transactions</h4>
                </div>
                <div class="align-self-center ms-auto">
                    <a href="page-finance-transactions.html" class="border-0 font-11 opacity-30 color-theme font-800 text-center d-block">VIEW ALL <i class="fa fa-arrow-right font-10 ps-2"></i></a>
                </div>
            </div>
            <a href={undefined} role=button data-menu="menu-transaction-1" class="d-flex mb-3">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/pictures/faces/1s.png" width="40" class="rounded-xl me-3">
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">John Doe</h1>
                    <p class="font-11 opacity-60">Payment Sent</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-red-dark">$530.24</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
            <a href={undefined} role=button data-menu="menu-transaction-2" class="d-flex mb-3">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/pictures/faces/3s.png" width="40" class="rounded-xl me-3">
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Sans Dude</h1>
                    <p class="font-11 opacity-60">Payment Received</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-green-dark">$30.15</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
            <a href={undefined} role=button data-menu="menu-transaction-3" class="d-flex mb-3">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/pictures/faces/4s.png" width="40" class="rounded-xl me-3">
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Harry Gray</h1>
                    <p class="font-11 opacity-60">Payment Request</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-blue-dark">$140.21</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content mb-3 mt-2 pt-1">
            <div class="d-flex pb-3 mb-1">
                <div class="align-self-center">
                    <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-0">Graphical Overview</h4>
                </div>
                <div class="align-self-center ms-auto">
                    <a href="page-finance-dashboard.html" class="border-0 font-11 opacity-30 color-theme font-800 text-center d-block">VIEW ALL <i class="fa fa-arrow-right font-10 ps-2"></i></a>
                </div>
            </div>
            <div class="mb-3">
                <div class="progress mb-4" style="height:7px;">
                    <div class="progress-bar bg-highlight" role="progressbar" style="width: 40%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="row mb-0">
                    <div class="col-6">
                        <h5 class="mt-n3">Expenses</h5>
                    </div>
                    <div class="col-6">
                        <h5 class="mt-n3 text-end color-red-dark">$1120</h5>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="progress mb-4" style="height:7px;">
                    <div class="progress-bar bg-green-dark" role="progressbar" style="width: 60%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="row mb-0">
                    <div class="col-6">
                        <h5 class="mt-n3">Earnings</h5>
                    </div>
                    <div class="col-6">
                        <h5 class="mt-n3 text-end color-green-dark">$1530</h5>
                    </div>
                </div>
            </div>
            <div class="mb-0">
                <div class="progress mb-4" style="height:7px;">
                    <div class="progress-bar bg-blue-dark" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="row mb-0">
                    <div class="col-6">
                        <h5 class="mt-n3">Savings</h5>
                    </div>
                    <div class="col-6">
                        <h5 class="mt-n3 text-end color-blue-dark">$2530</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content mb-0 mt-2 pt-1">
            <div class="d-flex pb-3 mb-1">
                <div class="align-self-center">
                    <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-0">Recent Transactions</h4>
                </div>
                <div class="align-self-center ms-auto">
                    <a href="page-finance-transactions.html" class="border-0 font-11 opacity-30 color-theme font-800 text-center d-block">VIEW ALL <i class="fa fa-arrow-right font-10 ps-2"></i></a>
                </div>
            </div>
            <a href={undefined} role=button data-menu="menu-expense-1" class="d-flex mb-3">
                <div class="align-self-center">
                    <span class="icon icon-s rounded-xl bg-dark-dark me-3"><i class="fab fa-apple font-18"></i></span>
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Apple Music</h1>
                    <p class="font-11 opacity-60">Monthly Subscrption</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-red-dark">$9.99</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
            <a href={undefined} role=button data-menu="menu-expense-2" class="d-flex mb-3">
                <div class="align-self-center">
                    <span class="icon icon-s rounded-xl bg-red-dark me-3"><i class="fa fa-mobile-alt font-14"></i></span>
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Cellular</h1>
                    <p class="font-11 opacity-60">Service Providers</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-red-dark">$14.99</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
            <a href={undefined} role=button data-menu="menu-expense-3" class="d-flex mb-3">
                <div class="align-self-center">
                    <span class="icon icon-s rounded-xl bg-yellow-dark me-3"><i class="fa fa-bolt font-16"></i></span>
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Electricity</h1>
                    <p class="font-11 opacity-60">Utility Expense</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-blue-dark">$140.21</h2>
                    <p class="font-12 opacity-50">15th July 2025</p>
                </div>
            </a>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content">
            <h4 class="font-700 text-uppercase color-highlight font-12 opacity-70 mb-3 mt-n2">Your Credit Cards</h4>
            <a href={undefined} role=button data-menu="menu-credit-card" class="d-flex">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/framework/pay-2.png" width="50">
                </div>
                <div class="align-self-center ps-3">
                    <h5 class="mb-n2">MasterCard</h5>
                    <p class="mt-n1 mb-0 font-10">**** 1535</p>
                </div>
                <div class="align-self-center ms-auto ps-3">
                    <h5 class="mb-0">$1553,12</h5>
                </div>
            </a>
            <div class="divider mt-2 mb-2"></div>
            <a href={undefined} role=button data-menu="menu-credit-card" class="d-flex">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/framework/pay-4.png" width="50">
                </div>
                <div class="align-self-center ps-3">
                    <h5 class="mb-n2">Visa Electron</h5>
                    <p class="mt-n1 mb-0 font-10">**** 3516</p>
                </div>
                <div class="align-self-center ms-auto ps-3">
                    <h5 class="mb-0">$4125,35</h5>
                </div>
            </a>
            <div class="divider mt-2 mb-2"></div>
            <a href={undefined} role=button data-menu="menu-credit-card" class="d-flex">
                <div class="align-self-center">
                    <img alt="" src="https://www.enableds.com/products/sticky/v50/images/framework/pay-1.png" width="50">
                </div>
                <div class="align-self-center ps-3">
                    <h5 class="mb-n2">Visa Cards</h5>
                    <p class="mt-n1 mb-0 font-10">Default Card</p>
                </div>
                <div class="align-self-center ms-auto ps-3">
                    <h5 class="mb-0">$8178,15</h5>
                </div>
            </a>
        </div>
    </div>
</div>
<Footer/>
<style>
    .bg-14 {
        background-image: url(https://www.enableds.com/products/sticky/v50/images/pictures/14.jpg)
    }
    .bg-21 {
        background-image: url(https://www.enableds.com/products/sticky/v50/images/pictures/21.jpg)
    }
    .bg-18 {
        background-image: url(https://www.enableds.com/products/sticky/v50/images/pictures/18.jpg)
    }
</style>