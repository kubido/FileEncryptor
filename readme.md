# HOW TO USE
## Encrypt 
```
const FileEncryptor = require('./FileEncryptor')

let password = "bf3c199c2470cb477d907b1e0917c17b"

const file = new FileEncryptor('./sample.pdf', password)

file.encrypt()

```

## Decrypt
```
const FileEncryptor = require('./FileEncryptor')

const password = "bf3c199c2470cb477d907b1e0917c17b"

const file = new FileEncryptor('./encrypted.pdf', password)

file.decrypt()
``` 