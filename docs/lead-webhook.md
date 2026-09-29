# Leads to a Google Sheet and your Gmail

Every form on the site POSTs its details to `LEAD_WEBHOOK_URL` as JSON.
The simplest free receiver is a Google Apps Script web app:

1. Create a Google Sheet named "PADELTECH leads".
2. Extensions → Apps Script, paste the code below, and change `NOTIFY` to your email.
3. Deploy → New deployment → Web app. Execute as: Me. Who has access: Anyone.
4. Copy the web app URL into `LEAD_WEBHOOK_URL` on the host, and redeploy the site.

```js
const NOTIFY = "you@gmail.com"
const COLUMNS = ["createdAt", "type", "audience", "name", "role", "organization",
  "phone", "email", "propertyLocation", "message", "source", "marketingConsent", "id"]

function doPost(e) {
  const lead = JSON.parse(e.postData.contents)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS)
  sheet.appendRow(COLUMNS.map((key) => lead[key] ?? ""))
  MailApp.sendEmail(NOTIFY, `ליד חדש: ${lead.name} (${lead.organization || lead.audience || lead.type})`,
    COLUMNS.map((key) => `${key}: ${lead[key] ?? ""}`).join("\n"))
  return ContentService.createTextOutput("ok")
}
```

Without the webhook, leads are only written to `data/inquiries.json`, which is lost
on hosts without a persistent disk.
