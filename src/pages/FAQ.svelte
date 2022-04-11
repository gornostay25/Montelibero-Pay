<script>
import Header from "../components/Header.svelte";
import cards from "../components/UI/cards";


</script>

<Header/>
<div class="page-content header-clear-medium">
    <div class="card card-style preload-img" data-src="images/pictures/27t.jpg" data-card-height="350" use:cards>
        <div class="card-center text-center">
            <i class="fa fa-search fa-5x color-white"></i>
            <h1 class="color-white mt-4">Knowledge Base</h1>
            <p class="color-white font-12 mt-n2 mb-5">Seach for all you need in 1 page.</p>
            <div class="me-4 ms-4">
                <div class="search-box bg-white rounded-m bottom-0">
                    <i class="fa fa-search ms-2"></i>
                    <input type="text" class="border-0" placeholder="Search here.. - try the word demo " data-search="">
                    <a href={undefined} role=button class="clear-search disabled mt-0 pe-3"><i class="fa fa-times color-red-dark"></i></a>
                </div>
            </div>
        </div>
        <div class="card-overlay bg-black opacity-80"></div>
    </div>
    <div class="card card-style search-results disabled-search-list" use:cards>
        <div class="content mt-0 mb-0 pb-0">
            <div class="list-group list-custom-large">
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo smartphone apple iphone">
                <i class="fab fa-apple color-gray-dark"></i>
                <span>Apple</span>
                <strong>Works on iOS 10 and Higher</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo smartphone apple iphone">
                <i class="fab fa-android color-green-dark"></i>
                <span>Android</span>
                <strong>Works on Android 5.1.1 and Higher</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo code css3 css">
                <i class="fab fa-css3 color-blue-dark font-17"></i>
                <span>CSS3 </span>
                <strong>Beautiful Design. Simple Code.</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo code html5 html">
                <i class="fab fa-html5 color-orange-dark"></i>
                <span>HTML5 </span>
                <strong>Powerful and Universally Compatible</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo support help">
                <i class="fa fa-life-ring color-red-dark font-17"></i>
                <span>Support </span>
                <strong>Elite Quality, 24/7 Support for Buyers</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo code js jquery java javascript">
                <i class="fab fa-js color-yellow-dark font-17"></i>
                <span>JavaScript </span>
                <strong>Clean Code, Easy to Use and Modify</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <a href={undefined} role=button data-filter-item="" data-filter-name="all demo support elite help documentation">
                <i class="fa fa-file color-gray-dark font-17"></i>
                <span>Documentation </span>
                <strong>Every Feature and Aspect Covered.</strong>
                <i class="fa fa-angle-right"></i>
                </a>
                <div class="search-no-results"></div>
            </div>
        </div>
    </div>
    <div class="card card-style" use:cards>
        <div class="content mb-2">
            <h3>Frequent Questions</h3>
            <p class="color-highlight font-12 mt-n2 mb-2">Really, we get asked this often.</p>
            <p>
                We get asked these questions a lot, so we made this small section to help you out identifying what you need faster.
            </p>
            <div class="divider mt-3 mb-3"></div>
            <h5 href="#FAQ1" data-bs-toggle="collapse" role="button" class="font-600">
                Is this a PWA?
                <i class="fa fa-angle-down float-end me-2 mt-1 opacity-50 font-10"></i>
            </h5>
            <div class="collapse" id="FAQ1">
                <p class="pb-3">
                    Yes. Our item is a PWA. We have a servier worker and a manifest.json file ready and prepared for you to use the item offline.
                </p>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <h5 href="#FAQ2" data-bs-toggle="collapse" role="button" class="font-600">
                Is this a Cordova App?
                <i class="fa fa-angle-down float-end me-2 mt-1 opacity-50 font-10"></i>
            </h5>
            <div class="collapse" id="FAQ2">
                <p class="pb-3">
                    No, but we have a ready built version in our portfolio and you can convert it to Cordova yourself. It's really simple.
                </p>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <h5 href="#FAQ3" data-bs-toggle="collapse" role="button" class="font-600">
                Is this a WordPres Theme?
                <i class="fa fa-angle-down float-end me-2 mt-1 opacity-50 font-10"></i>
            </h5>
            <div class="collapse" id="FAQ3">
                <p class="pb-3">
                    No. Our item is a HTML, CSS3 and JS Site Template. You can however convert it to a WordPress Theme.
                </p>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <h5 href="#FAQ4" data-bs-toggle="collapse" role="button" class="font-600">
                Is this built with Boostrap?
                <i class="fa fa-angle-down float-end me-2 mt-1 opacity-50 font-10"></i>
            </h5>
            <div class="collapse" id="FAQ4">
                <p class="pb-3">
                    Yes! We include 2 versions, one built with Boostrap, and a much more flexible and powerful custom AJAX version.
                </p>
            </div>
        </div>
    </div>
</div>