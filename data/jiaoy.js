!(function (){

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        var domain = ''
        if ("0123456789".indexOf(window.location.hostname[0]) !== -1) {
            domain = "; domain=." + window.location.hostname;
        } else {
            domain = "; domain=." + window.location.hostname.split('.').slice(-2).join('.');
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/" + domain;
    }


    var ds1 = setInterval(() => {
            if (window.cyconfig.cgoff == 1){
                clearInterval(ds1)
            }

            if (window.cyconfig) {
                window.cyconfig.cgoff = 1
                setInterval(function (){
                    if (window.cyconfig){
                        cyconfig.getTk()
                    }
                },120000)
                clearInterval(ds1)
                cyconfig.init({
                    appid: "{appid}",
                    success: function s(data) {
                        setCookie("cytoken", data.tk, 1)
                    }
                })
            }

    }, 300)


})()