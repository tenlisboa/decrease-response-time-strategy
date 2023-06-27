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


/**
{status: 'success', userId: 'user-id', ipAddress: '1.1.1.1', trusted: true, validCaptcha: false}
auditLoginIntent: 1808.05712890625 ms

{status: 'success', userId: 'user-id', ipAddress: '1.1.1.1', trusted: true, validCaptcha: true}
auditLoginIntent: 1557.825927734375 ms
*/
