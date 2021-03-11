import xss from "xss"


export default {
    install(Vue, options) {
        const xssHtml = (value) => xss(value, options)
        Vue.directive("xss-html", (el, { value }) => {
            el.innerHTML = xssHtml(value);
        })
        Vue.prototype.$xssHtml = xssHtml;
    }
}
