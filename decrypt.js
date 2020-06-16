
const PdfEncryptor = require('./PdfEncryptor')

const password = "bf3c199c2470cb477d907b1e0917c17b"

const store = new PdfEncryptor('./encrypted.pdf', password)
store.decrypt()