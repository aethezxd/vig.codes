async function start(type, id, wait) {
    let message = '';

    for(let i = 0; i < type.length; i++) {
        if(![',', ' '].includes(type)) {
            await promiseDelay(wait);
        }

        message += type[i];

        console.log(message);

        document.getElementById(id).innerHTML = message;
    }
}

function promiseDelay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

function getBrowser() {
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
      return "chromium";
    } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
      return "opera";
    } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
      return "ie";
    } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
      return "firefox";
    } else {
      return "idk what browser u r using";
    }
  }
