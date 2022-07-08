"use-strict"

import Express from "express"
import pkg from "../../../node_modules/nodemailer/lib/nodemailer.js";
import { Validator } from "./Validator.js";

const { createTransport, getTestMessageUrl } = pkg

const router = Express.Router()

router.post("/", async (req, res) => {
  const { mail, object, text } = req.body

  if (!Validator.email(mail)) return res.status(400).send({ error: `'${mail}' isn't valid mail !` })
  if (!Validator.text(object)) return res.status(400).send({ error: `The object isn't valid !` })
  if (!Validator.text(text)) return res.status(400).send({ error: `The text isn't valid !` })

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
    from: process.env.MAIL,
    to: "dylanc.code@gmail.com",
    subject: object,
    text: `Mail envoyé depuis 'Me' par : ${mail} \n`,
    html: `<h1>Mail envoyé depuis 'Me' par : ${mail}<h1><br>` + text
  });

  res.status(200).send({ result: `The mail has been send succesfully !` })
})

export { router as Sendmail }