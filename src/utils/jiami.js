import SHA256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'
export function sha256(txt) {
    // return createHash('sha256').update(txt).digest('base64').toLocaleLowerCase()
    return Base64.stringify(SHA256(txt)).toLowerCase()
}