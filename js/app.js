let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "geetha@gmail.com",
    "email": "geetha@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "geetha@gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="image/loading.svg" alt="">`
    let key="ema_live_zzLahTilGVqyLrR9IJtdCyuCVMkXRX95jklsc63C";
    let email=document.getElementById("email").value;
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str);
    resultCont.innerHTML = str;
})