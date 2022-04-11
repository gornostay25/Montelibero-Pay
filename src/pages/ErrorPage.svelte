<script>
import card from "../components/UI/cards";
import { t } from "../libs/i18n";

export let code

</script>

<div class="page-content pb-0">
    <div data-card-height="cover" class="card" use:card>
        <div class="card-center text-center">
            <h1 class="center-text mb-5"><i class="fa fa-3x fa-exclamation-triangle color-red-dark "></i></h1>
            <h1 class="center-text fa-5x mb-3">ERROR</h1>
            <h6 class="center-text font-800 font-14 mb-4">Error code: {code}</h6>
            <p class="boxed-text-l mb-5 opacity-80">
                {$t("error")}
            </p>
            <div class="row me-5 ms-5 mb-0">
                <div class="col">
                    <a href="/" tinro-ignore class="back-button ms-2 btn btn-m bg-highlight rounded-sm btn-full text-uppercase font-900 shadow-l">{$t("footer.home")}</a>
                </div>
                <div class="claerfix"></div>
            </div>
        </div>
    </div>
</div>