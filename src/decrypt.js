
const FileEncryptor = require('./lib/FileEncryptor')

const password = "bf3c199c2470cb477d907b1e0917c17b"

const file = new FileEncryptor('./encrypted.pdf', password)
file.decrypt()