curl \
  -X POST \
  -d '{"userId": "user-id","ipAddress": "1.1.1.1","appId": "come-from-web-id","captchaString": "captcha-string"}' \
  -H "Content-Type: application/json" \
  http://localhost:3000

curl \
  -X POST \
  -d '{"userId": "user-id","ipAddress": "1.1.1.1","appId": "come-from-mobile-id","version": "1.0.0"}' \
  -H "Content-Type: application/json" \
  http://localhost:3000
