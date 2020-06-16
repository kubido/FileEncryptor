
const FileEncryptor = require('./lib/FileEncryptor')

let password = "bf3c199c2470cb477d907b1e0917c17b"

const file = new FileEncryptor('./sample.pdf', password)
file.encrypt()
