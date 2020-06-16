
const PdfEncryptor = require('./PdfEncryptor')

let password = "bf3c199c2470cb477d907b1e0917c17b"

const store = new PdfEncryptor('./sample.pdf', password)
store.encrypt()
