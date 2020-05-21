function start(form) {
    var a = form.message.value;
    if (a.length == 0) {
        return alert('Enter message first!');
    }
    var len = a.length;
    var y = true;
    while(y){
        var x = Math.floor((Math.random() * len) + 1);
        function makeid(length) {
           var result = '';
           var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
           var charactersLength = characters.length;
           for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result ;
        }
        var res = makeid(x);
        var count = 0;
        for ( var i = 0; i < res.length; i++) {
            if(a.includes(res[i])){
                count += 1;
            }
        }
        if(((count/res.length)>=0.75)>2) {
            alert('Hola! Your Key is: '+res);
            y = false;
        }
    }
}