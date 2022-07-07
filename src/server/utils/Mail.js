"use-strict"

import Express from "express"
import pkg from "../../../node_modules/nodemailer/lib/nodemailer.js";

const { createTestAccount, createTransport, getTestMessageUrl } = pkg

const router = Express.Router()

router.post("/", async (req, res) => {
  let test = await createTestAccount()

  let transport = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    ls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD
    }
  })

  let info = await transport.sendMail({
    from: "Habibi",
    to: "dylanc.code@hotmail.com",
    subject: "BLABLA",
    text: "Hello world",
    html: "<p>Babouin</p>"
  });

  console.log(`Message send: %s`, info.messageId);

  console.log(`Preview url : %s`, getTestMessageUrl(info));
})

export { router as Sendmail }