curl \
  -X POST \
  -d '{"userId": "user-id","ipAddress": "1.1.1.1","appId": "come-from-web-id","version": "1.0.0","captchaString": "captcha-string"}' \
  -H "Content-Type: application/json" \
  http://localhost:3000
