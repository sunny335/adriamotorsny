!function(e){"use strict";var t=window.VAMTAM=window.VAMTAM||{};t.debounce=function(e,t,a){var o;return function(){var n=this,r=arguments,i=a&&!o;clearTimeout(o),o=setTimeout(function(){o=null,a||e.apply(n,r)},t),i&&e.apply(n,r)}},t.offset=function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+a}},t.scroll_handlers=[],t.latestKnownScrollY=0;var a=!1;t.addScrollHandler=function(e){requestAnimationFrame(function(){e.init(),t.scroll_handlers.push(e),e.measure(t.latestKnownScrollY),e.mutate(t.latestKnownScrollY)})},t.onScroll=function(){t.latestKnownScrollY=window.pageYOffset,a||(a=!0,requestAnimationFrame(function(){var e;for(e=0;e<t.scroll_handlers.length;e++)t.scroll_handlers[e].measure(t.latestKnownScrollY);for(e=0;e<t.scroll_handlers.length;e++)t.scroll_handlers[e].mutate(t.latestKnownScrollY);a=!1}))},window.addEventListener("scroll",t.onScroll,{passive:!0}),t.load_script=function(e,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),document.getElementsByTagName("script")[0].before(a)},t.load_style=function(e,t,a,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.media=t,n.href=e,a&&(n.onload=a),o?o.after(n):document.getElementsByTagName("link")[0].before(n)},t.isBelowMaxDeviceWidth=function(){return!window.matchMedia("(min-width: "+VAMTAM_FRONT.max_breakpoint+"px)").matches},t.isMaxDeviceWidth=function(){return window.matchMedia("(min-width: "+VAMTAM_FRONT.max_breakpoint+"px)").matches},t.isMobileBrowser=/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,t.getScrollbarWidth=(()=>window.innerWidth-document.documentElement.clientWidth)}(),function(e,t,a){"use strict";var o,n,r=e("header.main-header").find(".header-contents"),i=document.getElementById("vamtam-fallback-main-menu-toggle"),s=document.querySelector("#main-menu > .mega-menu-wrap > .mega-menu-toggle"),c=function(){clearTimeout(o),o=setTimeout(d,200)},d=function(){window.removeEventListener("scroll",c,{passive:!0}),t.blockStickyHeaderAnimation=!1,n&&n()},m=function(e,a,o){requestAnimationFrame(function(){var a=e.offset().top;t.blockStickyHeaderAnimation=!0;var d;d=r.height()||0;var m=a-t.adminBarHeight-d;n=o,window.addEventListener("scroll",c,{passive:!0}),window.scroll({left:0,top:m,behavior:"smooth"}),e.attr("id")&&(history.pushState?history.pushState(null,null,"#"+e.attr("id")):window.location.hash=e.attr("id")),i&&i.classList.remove("mega-menu-open"),s&&s.classList.remove("mega-menu-open")})};if(e(document.body).on("click",".vamtam-animated-page-scroll[href], .vamtam-animated-page-scroll [href], .vamtam-animated-page-scroll [data-href]",function(t){var a=e(this).prop("href")||e(this).data("href"),o=e("#"+a.split("#")[1]),n=document.createElement("a");n.href=a,o.length&&n.pathname===window.location.pathname&&(i&&i.classList.remove("mega-menu-open"),s&&s.classList.remove("mega-menu-open"),m(o),t.preventDefault())}),""!==window.location.hash&&(e('.vamtam-animated-page-scroll[href*="'+window.location.hash+'"]').length||e('.vamtam-animated-page-scroll [href*="'+window.location.hash+'"]').length||e('.vamtam-animated-page-scroll [data-href*="'+window.location.hash+'"]').length)){var l=e(window.location.hash);l.length>0&&e(window).add("html, body, #page").scrollTop(0),setTimeout(function(){m(l)},400)}}(jQuery,window.VAMTAM),function(e,t){"use strict";window.VAMTAM=window.VAMTAM||{},e(function(){var t,a;window.VAMTAM.adminBarHeight=document.body.classList.contains("admin-bar")?32:0,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&requestAnimationFrame(function(){document.documentElement.classList.add("ios-safari")}),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&requestAnimationFrame(function(){document.documentElement.classList.add("safari")}),a=document.body,window.addEventListener("scroll",function(){clearTimeout(t),requestAnimationFrame(function(){a.classList.add("disable-hover"),t=setTimeout(function(){a.classList.remove("disable-hover")},300)})},{passive:!0}),document.addEventListener("click",function(e){e.target.closest(".vamtam-trigger-print")&&(window.print(),e.preventDefault())}),window.VAMTAM.resizeElements=function(){e("#page .media-inner,\t\t\t\t.wp-block-embed-vimeo:not(.wp-has-aspect-ratio),\t\t\t\t:not(.wp-block-embed__wrapper) > .vamtam-video-frame").find("iframe, object, embed, video").each(function(){setTimeout(function(){requestAnimationFrame(function(){var t=this.offsetWidth;this.style.width="100%","0"===this.width&&"0"===this.height?this.style.height=9*t/16+"px":this.style.height=this.height*t/this.width+"px",e(this).trigger("vamtam-video-resized")}.bind(this))}.bind(this),50)}),setTimeout(function(){requestAnimationFrame(function(){e(".mejs-time-rail").css("width","-=1px")})},100)},window.addEventListener("resize",window.VAMTAM.debounce(window.VAMTAM.resizeElements,100),!1),window.VAMTAM.resizeElements()});var a=function(){var t=document.querySelectorAll(".vamtam-overlay-trigger"),a=[],o=window.VAMTAM.isBelowMaxDeviceWidth(),n=function(t){var o=t.currentTarget;if(e(o).hasClass("elementor-menu-toggle")){var r=e(o).closest(".elementor-row");r.length||(r=e(o).closest(".elementor-container")),r.hasClass("vamtam-overlay-trigger--overlay")&&(r.removeClass("vamtam-overlay-trigger--overlay"),o.removeEventListener("click",n),a.forEach(function(e){e.overlayTarget!==o&&e.closeTrigger!==o||(e.isActive=!1)}))}e(".vamtam-overlay-trigger--overlay .vamtam-overlay-element:visible").length<2&&(e("html, body").removeClass("vamtam-disable-scroll"),e("#scroll-to-top").removeClass("hidden"))},r=function(t){var o=t.currentTarget;if(e(o).hasClass("elementor-menu-toggle")){var r=e(o).closest(".elementor-row");if(r.length||(r=e(o).closest(".elementor-container")),r.hasClass("vamtam-menu-nav-overlay-inside")||(r.addClass("vamtam-menu-nav-overlay-inside"),e(r).find(".vamtam-overlay-element").css("top",e(r)[0].getBoundingClientRect().top+e(r).height()+"px")),r.hasClass("vamtam-overlay-trigger--overlay"))return;r.addClass("vamtam-overlay-trigger--overlay"),a.forEach(function(e){e.overlayTarget!==o&&e.closeTrigger!==o||(e.isActive=!0)})}e("html, body").addClass("vamtam-disable-scroll"),e("#scroll-to-top").addClass("hidden"),function(t){if(e(t).hasClass("elementor-menu-toggle"))t.removeEventListener("click",n),t.addEventListener("click",n)}(o)};if(t.forEach(function(t){if(e(t).hasClass("elementor-widget-nav-menu")){var o=e(t).find(".elementor-menu-toggle")[0];o.removeEventListener("click",r),o.addEventListener("click",r),a.push({overlayTarget:t,closeTrigger:o,isActive:!1});var n=e(t).closest(".elementor-row");return n.length||(n=e(t).closest(".elementor-container")),void e('<span class="vamtam-overlay-element"></span>').appendTo(n)}}),t.length){document.addEventListener("click",function(e){a.forEach(function(t){t.isActive&&(e.target===t.overlayTarget||t.overlayTarget.contains(e.target)||t.closeTrigger.click())})},!0),window.addEventListener("resize",window.VAMTAM.debounce(function(){var e=window.VAMTAM.isBelowMaxDeviceWidth();o!==e&&(a.forEach(function(e){e.isActive&&e.closeTrigger.click()}),o=e)},200),!1)}};document.addEventListener("DOMContentLoaded",function(){window.VAMTAM.load_script(VAMTAM_FRONT.jspath+"low-priority.js"),a(),jQuery("html").css("--vamtam-scrollbar-width",window.VAMTAM.getScrollbarWidth()+"px")},{passive:!0})}(jQuery),function(e,t,a){"use strict";window.Cookies=window.Cookies||{get:function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()}},e(function(){var t=e(".fixed-header-box .cart-dropdown"),a=e(".vamtam-cart-dropdown-link"),o=e(".products",a),n=e(".elementor-widget-woocommerce-menu-cart"),r=n.length,i=r&&e(n).find(".vamtam-elementor-menu-cart__header .item-count"),s="wc_add_to_cart_params"in window&&window.wc_add_to_cart_params.is_cart;function c(){s&&document.querySelectorAll(".woocommerce-cart-form__contents").forEach(function(t){!e(t).hasClass("shop_table")&&!e(t).parent().hasClass("vamtam-cart-main")&&e(t).removeClass("woocommerce-cart-form__contents")})}function d(){const t=e("#elementor-menu-cart__toggle_button:visible");e.each(t,function(e,t){t.click()})}e(document.body).on("applied_coupon_in_checkout",function(){let e=document.querySelector(".woocommerce-error");e&&e.scrollIntoView({block:"center",behavior:"smooth"})});var m=function(t){const a=e(".elementor-widget-woocommerce-menu-cart.vamtam-has-theme-widget-styles .elementor-menu-cart__toggle_button");let o=!1;if(e.each(a,function(a,n){if(e(n).is(t.target)||e(n).has(t.target).length)return o=!0,!1}),o)return t.preventDefault(),s?(t.stopImmediatePropagation(),!1):window.VAMTAM.isMobileBrowser?(t.stopImmediatePropagation(),window.location=window.wc_add_to_cart_params.cart_url,!1):(e("body").addClass("vamtam-disable-scroll"),e("#scroll-to-top").addClass("hidden"),void e(t.target).closest(".elementor-top-section").css("z-index","1000"))},l=function(t,a){(e(t.target).hasClass("elementor-menu-cart__container")||e(t.target).hasClass("vamtam-close-cart")||"no-target"===t&&a)&&(e("body").removeClass("vamtam-disable-scroll"),e("#scroll-to-top").removeClass("hidden"),e(t.target).closest("section.elementor-element").css("z-index",""))};function u(){document.querySelectorAll(".elementor-widget-woocommerce-menu-cart.vamtam-has-theme-widget-styles .elementor-menu-cart__toggle_wrapper").forEach(function(e){e.removeEventListener("click",m),e.addEventListener("click",m,!0)}),document.querySelectorAll(".elementor-widget-woocommerce-menu-cart.vamtam-has-theme-widget-styles .elementor-menu-cart__container .elementor-menu-cart__close-button, .elementor-widget-woocommerce-menu-cart.vamtam-has-theme-widget-styles .elementor-menu-cart__container").forEach(function(e){e.removeEventListener("click",l),e.addEventListener("click",l)})}function f(t){var a=e("#scroll-to-top.vamtam-scroll-to-top");a.length&&(t?a.css("bottom","10px"):a.css("bottom","95px"))}u();const h=r?"vamtam_elementor_menu_cart_fragments wc_fragments_loaded":"added_to_cart removed_from_cart wc_fragments_refreshed wc_fragments_loaded";function v(t){if(t){e(".woocommerce-notices-wrapper").empty().append(t);var a=e(".woocommerce-notices-wrapper").find(".vamtam-close-notice-btn");if(!a.length)return;a[0].addEventListener("click",function(){var t=e(this).closest(".woocommerce-message");t.fadeOut("fast"),f(!0),setTimeout(function(){t.remove()},2e3)}),setTimeout(function(){var e=a.closest(".woocommerce-message");e.fadeOut("fast"),setTimeout(function(){e.remove(),f(!0)},2e3)},1e4)}}e(document.body).on(h,function(){var a=parseInt(Cookies.get("woocommerce_items_in_cart")||0,10);if(a>0)if(r){n.removeClass("hidden");var s=n[0].querySelectorAll(".cart_item .quantity select"),d=!1,m=n.find("#elementor-menu-cart__toggle_button .elementor-button-icon-qty");s.length||(s=n[0].querySelectorAll(".cart_item .product-quantity"),d=!0);var h=0;s.forEach(function(e){const t=d?e.textContent:e.value;h+=parseInt(t,10)}),i.text("("+h+")"),e.each(m,function(t,a){const o=parseInt(e(a).attr("data-counter"),10);h!==o&&e(a).attr("data-counter",h)})}else{var v=0,w=document.querySelector(".widget_shopping_cart"),p=w?w.querySelectorAll("li .quantity"):[];if(w){for(var g=0;g<p.length;g++)v+=parseInt(p[g].innerHTML.split("<span")[0].replace(/[^\d]/g,""),10);v=v>=0?v:"",o.text(v),o.removeClass("cart-empty"),t.removeClass("hidden")}}else if(r){var _=n.hasClass("elementor-menu-cart--empty-indicator-hide");n.toggleClass("hidden",_),i.text("(0)"),l("no-target",!0)}else{var y=t.hasClass("show-if-empty");o.addClass("cart-empty"),o.text("0"),t.toggleClass("hidden",!y)}document.body.classList.toggle("vamtam-wc-cart-empty",0===a),!!e("body").hasClass("single-product")&&e(".woocommerce-notices-wrapper .woocommerce-message").length&&f(),u(),c()}),e(document).on("click",'.woocommerce-cart button[name="apply_coupon"]',function(t){t.preventDefault(),e('input[type="submit"][name="apply_coupon"]').trigger("click")}),document.body.classList.contains("vamtam-limited-layout")||(e(document).on("click",".single_add_to_cart_button, .products.vamtam-wc.table-layout .add_to_cart_button:not(.product_type_variable)",function(t){var a=e(this),o=a.closest("form.cart"),n=a.val(),i=o.find("input[name=quantity]").val()||1,s=o.find("input[name=product_id]").val()||n,c=o.find("input[name=variation_id]").val()||0,m=c,l=o.find("input[name=add-to-cart].wc-booking-product-id").val(),u=o.hasClass("grouped_form"),f=o.parent(".elementor-product-external").length&&"get"===o.attr("method"),h=a.closest(".products.vamtam-wc.table-layout").length,w={};if(!a.parents(".elementor-widget-woocommerce-product-add-to-cart.vamtam-has-disable-theme-ajax-atc").length)if(t.preventDefault(),f)window.open(o.attr("action"),"_blank");else{if(u){s=parseInt(o.find("input[name=add-to-cart]").val());var p=o.find('[id^="product-"]');e.each(p,function(t,a){var o,n=e(a).find(".add_to_cart_button"),r=e(a).attr("id").substr(8);o=n.length?parseInt(n.attr("data-quantity"))||0:parseInt(e(a).find("input.qty").val())||0,w[r]=o})}if(h){if("yes"!==window.VAMTAM_FRONT.enable_ajax_add_to_cart)return void o.submit();{const e=a.closest("tr.vamtam-product");e.length&&(i=e.find("input[name=quantity]").val()||1,s=a.attr("data-product_id")||n)}}if(window.wc_add_to_cart_params){var g={};if(l){new FormData(o[0]).forEach(function(e,t){"add-to-cart"===t?g.product_id=e:g[t.replace("wc_bookings_field","")]=e,g[t]=e}),g.is_wc_booking=!0}else if(u)g={product_id:s,products:w,is_grouped:!0};else if(m){g={product_id:s,is_variable:!0},new FormData(o[0]).forEach(function(e,t){"add-to-cart"===t?g.product_id=e:g[t]=e})}else{g={product_id:s},new FormData(o[0]).forEach(function(e,t){"add-to-cart"===t?g.product_id||(g.product_id=e):g[t]=e})}return g.product_sku="",g.quantity=i,g.variation_id=c,g.action="woocommerce_ajax_add_to_cart",e(document.body).trigger("adding_to_cart",[a,g]),e.ajax({type:"post",url:window.wc_add_to_cart_params.ajax_url,data:g,beforeSend:function(){a.removeClass("added").addClass("loading")},complete:function(e){e.error?a.removeClass("loading"):a.addClass("added").removeClass("loading")},success:function(t){if(t.error)v(t.notice),e(document.body).trigger("wc_fragments_refreshed");else{if(t.redirect_to_cart)return void(window.location=window.wc_add_to_cart_params.cart_url);if(r)if(h){!window.VAMTAM.isMobileBrowser&&a.parents('.vamtam-has-adc-triggers-menu-cart[data-widget_type="woocommerce-products.products_table_layout"]').length&&setTimeout(()=>{d()},500)}else{!window.VAMTAM.isMobileBrowser&&setTimeout(()=>{d()},500)}else v(t.fragments.notice);e(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a])}}}),!1}}}),window.wc_add_to_cart_params&&e(document).on("click",".mini_cart_item a.remove, .woocommerce-mini-cart .woocommerce-cart-form__cart-item .product-remove > a:not([class])",function(t){t.preventDefault();var a=e(this),o=e(this).attr("data-product_id"),n=e(this).attr("data-cart_item_key"),r=e(this).parents(".mini_cart_item, .woocommerce-cart-form__cart-item");e.ajax({type:"post",dataType:"json",url:window.wc_add_to_cart_params.ajax_url,data:{action:"product_remove",product_id:o,cart_item_key:n},beforeSend:function(){r.css("pointer-events","none").css("opacity","0.5"),e("body").css("cursor","wait")},complete:function(){e("body").css("cursor","default")},success:function(t){t&&t.fragments?e(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")}})}),e(document).on("change",".woocommerce-cart-form__cart-item .vamtam-quantity > select",function(t){t.preventDefault();var a=e(".woocommerce-cart").length,o=e(this).val(),n=e(this).attr("data-product_id"),r=e(this).attr("data-cart_item_key"),i=e(this).parents(".mini_cart_item, .woocommerce-cart-form__cart-item");if(a){var s=e('input[type="submit"][name="update_cart"]');return s.prop("disabled",!1),void s.trigger("click")}window.wc_add_to_cart_params&&e.ajax({type:"post",dataType:"json",url:window.wc_add_to_cart_params.ajax_url,data:{action:"update_item_from_cart",product_id:n,cart_item_key:r,product_quantity:o},beforeSend:function(){i.css("pointer-events","none").css("opacity","0.5"),e("body").css("cursor","wait")},complete:function(){i.css("pointer-events","auto").css("opacity","1"),e("body").css("cursor","default")},success:function(t){t&&t.fragments&&e(document.body).trigger("wc_fragment_refresh")},error:function(){}})})),window.addEventListener("load",function(){!function(){const t=e(document.body).hasClass("woocommerce-checkout"),a=t&&e("form.checkout"),o=t&&e(".woocommerce > .woocommerce-notices-wrapper").first();if(!t||!a.length||!o.length)return;e(document.body).on("checkout_error",function(){const e=a.find(".woocommerce-NoticeGroup.woocommerce-NoticeGroup-checkout");o.append(e)})}(),r&&(u(),c())}),r&&e(document).ajaxComplete((t,a,o)=>{const n=a.responseJSON,r=n&&n.fragments,i=o.data&&-1!==o.data.indexOf("action=elementor_menu_cart_fragments");r&&i&&e(document.body).trigger("vamtam_elementor_menu_cart_fragments")})})}(jQuery,window.VAMTAM),function(e,t){"use strict";window.VAMTAM=window.VAMTAM||{},window.VAMTAM.CUSTOM_ANIMATIONS={},e(function(){window.VAMTAM.CUSTOM_ANIMATIONS={init:function(){this.VamtamCustomAnimations.init()},onDomReady:function(){this.VamtamCustomAnimations.scrollBasedAnims()},VamtamCustomAnimations:{init:function(){this.registerAnimations(),this.utils.watchScrollDirection()},registerAnimations:function(){var e=this;["stickyHeader"].forEach(function(t){e[t].apply(e)})},stickyHeader:function(){var t=e(".vamtam-sticky-header"),a=this;t.length&&(t.length>1&&(t=t[0]),function(){var o,n=e(t).hasClass("vamtam-sticky-header--transparent-header"),r=!window.elementorFrontend.isEditMode(),i=function(){e(t).removeClass("vamtam-sticky-header--fixed-shown"),e(t).hasClass("vamtam-sticky-header--fixed-hidden")||e(t).addClass("vamtam-sticky-header--fixed-hidden"),o="fixedHiddenState"},s=function(){e(t).removeClass("vamtam-sticky-header--fixed-shown"),e(t).removeClass("vamtam-sticky-header--fixed-hidden"),o="noAnimState"};(()=>{const a=e("body").css("padding-left"),o=e("body").css("padding-right"),n=e(t).parents('[data-elementor-type="header"]').first();n.length&&(parseInt(a)&&n.css("--vamtam-sticky-mleft",`-${a}`),parseInt(o)&&n.css("--vamtam-sticky-mright",`-${o}`))})();function c(){if(r){var a=e(t).innerHeight();e(t).css("margin-bottom","-"+a+"px"),e(t).next(".vamtam-prevent-scroll-jumps").css("padding-top",a+"px")}}r&&e(t).after('<div class="vamtam-prevent-scroll-jumps"></div>'),window.VAMTAM.isMaxDeviceWidth()&&(c(),setTimeout(()=>{!function(){if(!e("body").hasClass("e--ua-webkit"))return;const t=e(".vamtam-sticky-header").find(".elementor-icon-wrapper > .elementor-icon");e.each(t,function(t,a){const o=e(a),n=o.height(),r=o.parent(),i=o.parent().height();Math.abs(n-i)>5&&r.css("height",i-1+"px")})}(),c()},50)),window.pageYOffset>=300&&i();var d,m=null,l=window.scrollY;window.addEventListener("scroll",function(r){null!==m&&clearTimeout(m),m=setTimeout(function(){l=window.scrollY},500);var u=window.VAMTAM.debounce(function(){if("#document"===r.target.nodeName){if(!(()=>!e(t).find("a:hover").length&&!e(".vamtam-header-mega-menu:visible").length)())return;var c=a.utils.getScrollDirection();if(d!==c&&(l=window.scrollY),d=c,Math.abs(window.scrollY-l)<80&&window.scrollY>80)return;if("up"===c)return void(window.pageYOffset>=300?"fixedShownState"!==o&&(e(t).removeClass("vamtam-sticky-header--fixed-hidden"),e(t).hasClass("vamtam-sticky-header--fixed-shown")||e(t).addClass("vamtam-sticky-header--fixed-shown"),o="fixedShownState"):"noAnimState"!==o&&s());if("down"===c&&(window.pageYOffset>=300||n)){var m=!e(t).find(".elementor-menu-cart--shown").length;"fixedHiddenState"!==o&&m&&i()}}},200);window.VAMTAM.isMaxDeviceWidth()?(c(),requestAnimationFrame(u)):"noAnimState"!==o&&s()},{passive:!0})}())},observedAnims:function(){var t="vamtam-animate",a=document.querySelectorAll(".vamtam-observe");if(a.length){var o,n=function(a,o){a.forEach(function(a){var n=!1,r=a.target,i=r&&e(r);a.isIntersecting&&(n=!0),n?(i.hasClass(t)||(i.addClass(t),i.trigger("vamtam:animate")),i.hasClass("vamtam-looped")||o&&o.unobserve&&o.unobserve(r)):i.hasClass(t)&&i.removeClass(t)})};a.forEach(function(a){e(a).removeClass(t),o||(o=new IntersectionObserver(n)),o.observe(a)})}},scrollBasedAnims:function(){var t=document.querySelectorAll(['[data-settings*="growFromLeftScroll"]','[data-settings*="growFromRightScroll"]'].join(", "));if(!t.length)return;var a,o={},n=this,r=function(e){e.forEach(function(e){var t=e.boundingClientRect.y,a=e.isIntersecting,r=e.target,i=Math.abs(parseFloat((100*e.intersectionRatio).toFixed(2))),s=o[r.dataset.vamtam_anim_id].lastScrollPercentage,c=o[r.dataset.vamtam_anim_id].lastScrollY,d=o[r.dataset.vamtam_anim_id].animateEl,m=function(){window.requestAnimationFrame(function(){d.style.setProperty("--vamtam-scroll-ratio",i+"%")})};a&&c!==t&&("down"===n.utils.getScrollDirection()?s<i&&m():m()),o[r.dataset.vamtam_anim_id].lastScrollY=t,o[r.dataset.vamtam_anim_id].lastScrollPercentage=i})};const i=function(){var e,t=[];for(e=1;e<=50;e++){var a=e/50;t.push(a)}return t.push(0),t}();t.forEach(function(t){var n;a||(a=new IntersectionObserver(r,{root:null,rootMargin:"20% 0% 20% 0%",threshold:i}));if(t.style.setProperty("--vamtam-scroll-ratio","1%"),t.classList.contains("elementor-widget")||t.classList.contains("elementor-column"))(n=t.parentElement).setAttribute("data-vamtam_anim_id",t.dataset.id);else{e(t).before('<div class="vamtam-scroll-anim-wrap" data-vamtam_anim_id="'+t.dataset.id+'"></div>');var s=e(t).prev(".vamtam-scroll-anim-wrap");e(s).append(t),n=s[0]}o[t.dataset.id]={lastScrollY:"",lastScrollPercentage:"",observeEl:n,animateEl:t},a.observe(n)})},utils:{getAdminBarHeight:function(){return window.VAMTAM.adminBarHeight},watchScrollDirection:function(){var e=function(){return this.lastScrollTop=0,this.utils=this,{init:function(){},measure:function(e){this.direction=e>this.lastScrollTop?"down":"up"}.bind(this),mutate:function(e){this.utils.getScrollDirection=function(){return this.direction},this.lastScrollTop=e<=0?0:e}.bind(this)}}.bind(this);window.VAMTAM.addScrollHandler(e())},isTouchDevice:function(){const e=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)||function(e){return window.matchMedia(e).matches}(["(",e.join("touch-enabled),("),"heartz",")"].join(""))}}}},window.VAMTAM.CUSTOM_ANIMATIONS.init(),e(window).ready(function(){window.VAMTAM.CUSTOM_ANIMATIONS.onDomReady()})})}(jQuery);