!function(d){"use strict";var n={init:function(){d(document.body).on("keyup change","form.register #reg_password, form.checkout #account_password, form.edit-account #password_1, form.lost_reset_password #password_1",this.strengthMeter),d("form.checkout #createaccount").trigger("change")},strengthMeter:function(){var s,r=d("form.register, form.checkout, form.edit-account, form.lost_reset_password"),e=d('button[type="submit"]',r),t=d("#reg_password, #account_password, #password_1",r),o=t.val(),a=!r.is("form.checkout");n.includeMeter(r,t),s=n.checkPasswordStrength(r,t),wc_password_strength_meter_params.stop_checkout&&(a=!0),0<o.length&&s<wc_password_strength_meter_params.min_password_strength&&-1!==s&&a?e.attr("disabled","disabled").addClass("disabled"):e.prop("disabled",!1).removeClass("disabled")},includeMeter:function(s,r){s=s.find(".woocommerce-password-strength");""===r.val()?(s.hide(),d(document.body).trigger("wc-password-strength-hide")):0===s.length?(r.after('<div class="woocommerce-password-strength" aria-live="polite"></div>'),d(document.body).trigger("wc-password-strength-added")):(s.show(),d(document.body).trigger("wc-password-strength-show"))},checkPasswordStrength:function(s,r){var e=s.find(".woocommerce-password-strength"),s=s.find(".woocommerce-password-hint"),t='<small class="woocommerce-password-hint">'+wc_password_strength_meter_params.i18n_password_hint+"</small>",r=wp.passwordStrength.meter(r.val(),wp.passwordStrength.userInputDisallowedList()),o="";if(e.removeClass("short bad good strong"),s.remove(),e.is(":hidden"))return r;switch(r<wc_password_strength_meter_params.min_password_strength&&(o=" - "+wc_password_strength_meter_params.i18n_password_error),r){case 0:e.addClass("short").html(pwsL10n["short"]+o),e.after(t);break;case 1:case 2:e.addClass("bad").html(pwsL10n.bad+o),e.after(t);break;case 3:e.addClass("good").html(pwsL10n.good+o);break;case 4:e.addClass("strong").html(pwsL10n.strong+o);break;case 5:e.addClass("short").html(pwsL10n.mismatch)}return r}};n.init()}(jQuery);