<script>
import { Route, router } from 'tinro';
import ErrorPage from './pages/ErrorPage.svelte';
import { authloaded, user } from "./libs/store.js"

import NetworkDetect from './components/NetworkDetect.svelte';
import Preloader from './components/router/Preloader.svelte';
import AppTheme from './components/AppTheme.svelte';
import DynamicLoad from './components/router/DynamicLoad.svelte';
import PWA from './components/PWA.svelte';

import Home from './pages/Home.svelte';

router.subscribe( _ => window.scrollTo(0, 0));
</script>

<Preloader/>
{#if $authloaded}

<Route>
  <Route path="/about">
    <DynamicLoad component={()=>import("./pages/About.svelte")}/> 
  </Route>
  <Route path="/contact">
    <DynamicLoad component={()=>import("./pages/Contact.svelte")}/> 
  </Route>
  <Route path="/faq">
    <DynamicLoad component={()=>import("./pages/FAQ.svelte")}/> 
  </Route>
  <Route path="/desktop">
    <DynamicLoad component={()=>import("./pages/Desktop.svelte")}/> 
  </Route>
  {#if $user }
      <!-- /Home -->
    <Route path="/">
        <Home/>
    </Route>
      <!-- /Home -->

    <Route path="/login" redirect="/"/>
  {:else}
    <Route path="/login">
        <DynamicLoad component={()=>import("./pages/Login.svelte")} />
      </Route>
    <Route fallback redirect="/login"/>
  {/if}
</Route>



<Route fallback>
  <ErrorPage code=404/>
</Route>
{/if}
<NetworkDetect/>
<AppTheme/>
<PWA/>