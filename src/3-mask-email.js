const maskEmail = (email) => {
    let maskedEmail;
    const str = email.trim().slice(0, email.indexOf('@'));
    if (str.length <= 2){
        return email;
    }
    maskedEmail = str[0] + '***' + email.slice(email.indexOf('@'), email.length);
    return maskedEmail;
}

console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)