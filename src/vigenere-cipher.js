class VigenereCipheringMachine {
    constructor(direct){
        this.direct=direct;
    }
encrypt(message,key) {
    let encryptmes='';
    message=message.toUpperCase();
    let arr=message.split('');
    while(key.length<message.length){
        key+=key;
    }
    key=key.toUpperCase();
    let indexkey;
    let index;
    let index1;
    let i=0
    for(let j=0;j<arr.length;j++){
        if(/[A-Z]/.test(arr[j])){
        index=message.charCodeAt(j);
        indexkey=key.charCodeAt(i);
        index1=index+indexkey-65;
            if(index1>90){
                index1-=26;
            }
            i++;
            encryptmes+=String.fromCharCode(index1);
        }
        else{
            encryptmes+=message[j];
        }
    }
    if (this.direct === false) {
        return encryptmes.split('').reverse().join("")
    }
    return encryptmes;
}
  
decrypt(encryptedMessage,key) {
    let decryptmes='';
    let arr=encryptedMessage.split('');
    while(key.length<encryptedMessage.length){
        key+=key;
    }
    key=key.toUpperCase();
    let indexkey;
    let index;
    let index1;
    let i=0
    for(let j=0;j<arr.length;j++){
        if(/[A-Z]/.test(arr[j])){
            index=encryptedMessage.charCodeAt(j);
            indexkey=key.charCodeAt(i)-65;
            index1=Math.abs(index-indexkey);
            if(index1<65){
                index1+=26;
            }
            i++;
            decryptmes+=String.fromCharCode(index1);
        }
        else{
            decryptmes+=encryptedMessage[j];
        }
    }
     if (this.direct === false) {
        return decryptmes.split('').reverse().join("")
    }
    return decryptmes;
}
}
  

module.exports = VigenereCipheringMachine;