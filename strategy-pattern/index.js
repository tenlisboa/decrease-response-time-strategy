import { createServer } from 'http'
import { AuditLoginIntent } from './auditLoginIntent.js'

function handler(req, res) {
  let bodyBuffer = []
  req.on("data" , (chunk) => {
    bodyBuffer.push(chunk)
  })

  req.on("end", async () => {
    console.time("auditLoginIntent")
    const body = Buffer.concat(bodyBuffer).toString()

    const usecase = new AuditLoginIntent()
    await usecase.execute(
      JSON.parse(body)
    )

    console.timeEnd("auditLoginIntent")
    res.end("ok")
  })
}

createServer(handler)
  .listen(3000, () => console.log('Server running on port 3000'))

/*
{userId: 'user-id', ipAddress: '1.1.1.1', appId: 'come-from-web-id', captchaString: 'captcha-string'}
auditLoginIntent: 514.141845703125 ms

{userId: 'user-id', ipAddress: '1.1.1.1', appId: 'come-from-mobile-id', version: '1.0.0'}
auditLoginIntent: 344.9140625 ms
*/
