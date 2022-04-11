<script>
import Header from "../components/Header.svelte";
import cards from "../components/UI/cards";

let fname,fmail,fmess,formsended=false

function sendGform(name,email,mess){
    let formid = "1FAIpQLSfvtyyf9sLKu1sHOSV8jCY1frFxeYet29eS_Rhks61veG4pWg"
    let url= `https://docs.google.com/forms/d/e/${formid}/formResponse?entry.1853606567=${name}&entry.1235274665=${email}&entry.2074511749=${mess}&submit=Submit`
    fetch(url,{
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        mode:"no-cors"
    }).catch(confirm)
}

function formvalidate(e) {
    e.preventDefault()
    const mailregex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let isvalid = true
    let fname_val =  fname.value.trim()
    let fmail_val =  fmail.value.trim()
    let fmess_val =  fmess.value.trim()

    if (fname_val === '') {
        isvalid = false
        fname.classList.add('border-red-dark');
    } else {
        fname.classList.remove('border-red-dark')
    }

    if (fmail_val === '') {
        isvalid = false
        fmail.classList.add('border-red-dark');
    } else if (!mailregex.test(fmail_val)) {
        isvalid = false
        fmail.classList.add('border-red-dark');
    } else {
        fmail.classList.remove('border-red-dark')
    }

    if (fmess_val === '') {
        isvalid = false
        fmess.classList.add('border-red-dark');
    } else {
        fmess.classList.remove('border-red-dark')
    }
    
    if (!isvalid) return;

    sendGform(fname_val,fmail_val,fmess_val)

    formsended = true

}

</script>

<Header/>

<div class="page-content header-clear-medium pb-0">
    <div class="form-sent" class:d-none={!formsended}>
        <div class="card card-style">
            <div class="shadow-l rounded-m gradient-green me-n1 ms-n1 mb-n1 ">
                <h1 class="color-white text-center pt-4"><i class="fa fa-check-circle fa-3x shadow-s scale-box rounded-circle"></i></h1>
                <h2 class="color-white bold text-center pt-3">Message Sent</h2>
                <p class="color-white pb-4 text-center mt-n2 mb-0">We'll get back to you shortly.</p>
            </div>
        </div>
        <div class="card card-style" use:cards>
            <div class="content text-center">
                <h2>Meanwhile, let's get social!</h2>
                <p class="boxed-text-xl">
                    Here are our social media platforms! Follow us for the latest updates or just say hello!
                </p>
                <a href={undefined} role=button class="icon icon-xl shadow-xl rounded-xl bg-facebook"><i class="fab fa-facebook-f"></i></a>
                <a href={undefined} role=button class="icon icon-xl shadow-xl rounded-xl bg-instagram ms-3 me-3"><i class="fab fa-instagram"></i></a>
                <a href={undefined} role=button class="icon icon-xl shadow-xl rounded-xl bg-twitter"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>

    <div class="card card-style contact-form" use:cards class:d-none={formsended}>
        <div class="content">
            <form on:submit={formvalidate}>
                <fieldset>
                    <div class="form-field form-name">
                        <label class="color-theme" for="contactNameField">Name:<span>(required)</span></label>
                        <input bind:this={fname} type="text" name="contactNameField"  class="round-small" id="contactNameField" placeholder="Konto Kontic">
                    </div>
                    <div class="form-field form-email">
                        <label class="color-theme" for="contactEmailField">Email:<span>(required)</span></label>
                        <input bind:this={fmail} type="text" name="contactEmailField"  class="round-small" id="contactEmailField" placeholder="crypto228@gmail.com">
                    </div>
                    <div class="form-field form-text">
                        <label class="color-theme" for="contactMessageTextarea">Message:<span>(required)</span></label>
                        <textarea bind:this={fmess} name="contactMessageTextarea" class="round-small" id="contactMessageTextarea"></textarea>
                    </div>
                    <div class="form-button">
                        <input type="submit" class="btn bg-highlight text-uppercase font-900 btn-m btn-full rounded-sm  shadow-xl contactSubmitButton" value="Send Message">
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>