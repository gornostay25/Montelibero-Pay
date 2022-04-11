<script>
import { t, supportedLangs } from "../libs/i18n";
import { menu,menu_control } from "./UI/menus.js";
import { router } from "tinro";
import { logout } from "../libs/store";
import link from "./UI/link";
function changeLang(lang) {
    confirm(lang)
}

function exit() {
    logout()
}

</script>

<div id="menu-language" class="menu menu-box-bottom menu-box-detached rounded-m" data-menu-height="330" data-menu-effect="menu-over" use:menu>
    <div class="menu-title mt-n1">
        <h1> {$t("menu.lang.lang")} </h1>
        <p class="color-theme opacity-50">{$t("menu.lang.change")}</p>
        <a href={undefined} role=button use:menu_control={"back"}><i class="fa fa-times"></i></a>
    </div>
    <div class="content mb-0 mt-0">
        <div class="divider mt-2 mb-0"></div>
        <div class="list-group list-custom-small ps-1">
            {#each supportedLangs as slang}                
                <a href={undefined} role=button use:menu_control={"close"} on:click={e=>changeLang(slang.lang)}>
                    <img class="me-3 mt-n1" width="20" height="20" src="/icons/flags.svg#{slang.lang}" alt={slang.langName}>
                    <!-- <img class="me-3 mt-n1" width="20" src="https://flagcdn.com/{slang.countrycode}.svg" alt={slang.langName}> -->
                    <span>{slang.langName}</span>
                    <i class="fa fa-language"></i>
                </a>
            {/each}
        </div>
    </div>
</div>

<div id="menu-sidebar" class="bg-white menu menu-box-left" data-menu-width="320" data-menu-effect="menu-parallax" use:menu>
    <div class="ps-3 pe-3 pt-3 mt-2 mb-2">
        <div class="d-flex">
            <div class="me-3">
                <img src="/icons/apple-touch-icon.png" width="43" alt="Logo">
            </div>
            <div class="flex-grow-1">
                <h1 class="font-22 font-700 mb-0">{$t("menu.title")}</h1>
                <p class="mt-n2  font-10 font-400">{$t("menu.desc")}</p>
            </div>
        </div>
    </div>
    <div class="me-3 ms-3">
        <span class="text-uppercase font-900 font-11 opacity-30">{$t("menu.pages")}</span>
        <div class="list-group list-custom-small">
            <a href={undefined} role=button  use:menu_control data-menu="menu-language">
                <i class="fa font-14 fa-cog rounded-s bg-blue-dark"></i>
                <span>Components</span>
                <span class="badge bg-red-dark">NEW</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href={"/about"} use:menu_control={"close"} role=button>
                <i class="fa font-14 fa-file rounded-s bg-brown-dark"></i>
                <span>Pages</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href={undefined} role=button>
                <i class="fa font-14 fa-camera rounded-s bg-green-dark"></i>
                <span>Media</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href={undefined} role=button>
                <i class="fa font-14 fa-image rounded-s bg-teal-dark"></i>
                <span>Contact</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a data-menu="menu-language" href={undefined} role=button use:menu_control class="border-0">
                <i class="fa font-14 fa-globe bg-green-dark rounded-s"></i>
                <span>{$t("menu.lang.lang")}</span>
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
    </div>
    <div class="me-3 ms-3 mt-4">
        <span class="text-uppercase font-900 font-11 opacity-30">SOCIAL LINKS</span>
        <div class="list-group list-custom-small">
            <a href={undefined} role=button>
            <i class="fab font-14 fa-facebook-f rounded-s bg-facebook"></i>
            <span>Facebook</span>
            <i class="fa fa-link"></i>
            </a>
            <a href={undefined} role=button>
            <i class="fab font-14 fa-twitter rounded-s bg-twitter"></i>
            <span>Twitter</span>
            <i class="fa fa-link"></i>
            </a>
            <a href={undefined} role=button class="border-0">
            <i class="fab font-14 fa-instagram rounded-s bg-instagram"></i>
            <span>Instagram</span>
            <i class="fa fa-link"></i>
            </a>
        </div>
    </div>
    <div class="me-3 ms-3 mt-4 pt-2">
        <span class="text-uppercase font-900 font-11 opacity-30">{$t("menu.settings.title")}</span>
        <div class="list-group list-custom-small">
            <a href={undefined} role=button data-toggle-theme="" data-trigger-switch="switch-dark3-mode">
                <i class="fa font-12 fa-moon bg-gray-dark rounded-s"></i>
                <span>Dark Mode</span>
                <div class="custom-control scale-switch ios-switch">
                    <input data-toggle-theme="" type="checkbox" class="ios-input" id="switch-dark3-mode">
                    <label class="custom-control-label" for="switch-dark3-mode"></label>
                </div>
                <i class="fa fa-angle-right"></i>
            </a>
            <a data-trigger-switch="sidebar-311-switch-2" href={undefined} role=button>
                <i class="fa font-14 fa-circle rounded-s bg-green-dark"></i>
                <span>Active Mode</span>
                <div class="custom-control scale-switch ios-switch">
                    <input type="checkbox" class="ios-input" id="sidebar-311-switch-2" checked="">
                    <label class="custom-control-label" for="sidebar-311-switch-2"></label>
                </div>
                <i class="fa fa-angle-right"></i>
            </a>
            <a data-trigger-switch="sidebar-31-switch-3" href={undefined} role=button class="border-0">
                <i class="fa font-14 fa-bell rounded-s bg-blue-dark"></i>
                <span>Notifications</span>
                <div class="custom-control scale-switch ios-switch">
                    <input type="checkbox" class="ios-input" id="sidebar-31-switch-3" checked="">
                    <label class="custom-control-label" for="sidebar-31-switch-3"></label>
                </div>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href={undefined} role=button class="border-0" use:menu_control={"close"} on:click={exit}>
                <i class="fa font-14 fa-person-running rounded-s bg-blue-dark"></i>
                <span>{$t("menu.exit")}</span>
                <i class="fa fa-arrow-right-from-bracket"></i>
            </a>
        </div>
    </div>
</div>


<div id="footer-bar" class="footer-bar-1">
        <a href={undefined} data-href="/" use:link>
            <i class="fa fa-home"></i>
            <span>Home</span>
        </a>
        <a href={undefined} data-href="/trans" use:link>
            <i class="fa fa-money-bill-wave"></i>
            <span>Transactions</span>
        </a>
        <a href={undefined} data-href="/scan" use:link>
            <i class="fa fa-barcode-read"></i>
            <span>Scan</span>
        </a>
        <a href={undefined} data-href="/contacts" use:link>
            <i class="fa fa-address-book"></i>
            <span>Contacts</span>
        </a>

      <a href={undefined} role=button data-menu="menu-sidebar" use:menu_control>
        <i class="fa fa-bars"></i>
        <span>{$t("menu.menu")}</span>
    </a>
</div>