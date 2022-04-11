import { writable,derived,get } from "svelte/store";
// fallback locale
import fallbacklocale from "./locales/uk.i18n.js"
// Vars
const TAG = "[i18n]"
export const isLoaded = writable(false)
export const supportedLangs = [
    {
        lang:"uk",
        langName:"Українська"
    },
    {
        lang:"me",
        langName:"Crnogorski"            
    },
    {
        lang:"en",
        langName:"English"            
    },
    {
        lang:"ru",
        langName:"Русский"        
    },
]
export const supportedLangsList = supportedLangs.map(el=>el.lang)

export const defaultOptions = {
    fallbackLocale:"uk",
    initLocale:"en"
}
export const locale = create_locale_store()
const dict = writable(fallbacklocale)

export async function init(newlocale) {
    // locale.set(newlocale)
}


function getMessageFromDict($dict,id,params) {
    return delve(fallbacklocale,id)
}

export const t = derived(dict,($dict)=>{
    return (id,params)=>getMessageFromDict($dict,id,params)
})

export async function importlocale(loc) {
    
    let dictmod = {default:{}}
    if (supportedLangs.includes(loc) && loc != defaultOptions.fallbackLocale) {
        dictmod = await import("./locales/"+loc+".i18n.js")
    } else {
        return fallbacklocale
    }
    return dictmod.default
}

function delve(obj, fullKey) {
    if (fullKey == null) return undefined;

    if (fullKey in obj) {
        return obj[fullKey];
    }

    const keys = fullKey.split('.');
    let result = obj;

    for (let p = 0; p < keys.length; p++) {
        if (typeof result === 'object') {
        if (p > 0) {
            const partialKey = keys.slice(p, keys.length).join('.');

            if (partialKey in result) {
            result = result[partialKey];
            break;
            }
        }

        result = result[keys[p]];
        } else {
        result = undefined;
        }
    }

    return result;
}
class Locale {
    /**
     * @type {string}
     */
    locale = undefined
    /**
     * @type {Intl.LocaleHourCycleKey}
     */
    hourCycle = undefined
    /**
     * @type {string}
     */
    language = undefined
    /**
     * @type {"ltr"|"rtl"}
     */
    textDirection = undefined

    /**
     * 
     * @param {string} locale 
     */
    constructor(locale){

        let local = new Intl.Locale(locale)
        if (!local.hourCycle) {
            if (local.hourCycles?.lenght){
                this.hourCycle = local.hourCycles[0]
            }else{
                this.hourCycle = "h23"
            }
        }else{
            this.hourCycle = local.hourCycle
        }

        this.language = local.language

        if (!local.textInfo?.direction) {
            this.textDirection = local.textInfo.direction
        }else{
            this.textDirection = "ltr"
        }

        local = null
        this.locale = this.toString()
    }

    toString(){
        let locale = new Intl.Locale(this.language,{
            hourCycle:this.hourCycle,
            textInfo:{
                direction:this.textDirection
            }
        })
        return locale.toString()
    }
}
/**
 * @typedef {import('svelte/store').Writable} Writable
 */

/**
 * @returns {Writable<Locale>} Locale strorage
 */
function create_locale_store() {
    const { subscribe, set } = writable(defaultOptions.initLocale);

    return {
        subscribe,
        set(value){
            if (supportedLangs.includes(value)) {
                isLoaded.set(false);
                new Promise(async (rs,rj)=>{
                    console.log(TAG,value)
                    let ldict = await importlocale(value)
                    dict.set(ldict)
                    rs(value)
                }).then(vl=>{
                    if(vl){set(vl)}
                    isLoaded.set(true)
                    localStorage.setItem("locale",vl)
                })
            }else{
                console.error(TAG,"locale not suported:",value)
            }
        },
        getSpec(){
            return new Locale(get(this))
        }
    }
}