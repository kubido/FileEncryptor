const crypto = require('crypto')
const fs = require('fs')

class PdfEncryptor {
  constructor(file, password) {
    // PASSWORD and IV can be generated as crypto.randomBytes(32).toString('hex');

    this.file = file
    this.password = password
    this.iv = "5183666c72eec9e4" // initialization vector should be 16 bytes or 16 characters
  }

  encrypt() {
    var file = fs.readFileSync(this.file)

    // create chiper using aes-256-cbc method
    // chiper is like reorganize the byte position
    var cipher = crypto.createCipheriv('aes-256-cbc', this.password, this.iv);

    // create a new temporary file containing reorganize byte of the pdf file
    let chiperText = cipher.update(file, "utf8")
    var encrypted = Buffer.concat([chiperText, cipher.final()]);

    // write the temporary file into a new file called encrypted.pdf
    fs.writeFileSync(`encrypted.pdf`, encrypted);
    return { message: "Encrypted!" };
  }

  decrypt() {
    // setup the correct dechiper using the correct password and init vector
    var decipher = crypto.createDecipheriv("aes-256-cbc", this.password, this.iv);


    // reorganized the file back to original form using valid dechiper and create temporary file (Buffer)
    var file = fs.readFileSync(this.file);
    var decrypted = Buffer.concat([decipher.update(file), decipher.final()]);

    // create new file based on temporary file (Buffer) above
    fs.writeFileSync(`decrypted.pdf`, decrypted);
    return { message: "Decrypted!" };
  }
}

module.exports = PdfEncryptor