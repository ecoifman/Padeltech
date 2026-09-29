// Post-process the static export in out/ for uPress (or any static host):
// root redirect, redirect stubs for retired pages, .htaccess, and a zip.
import { execSync } from "node:child_process"
import { mkdirSync, writeFileSync, existsSync, rmSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const out = "out"
if (!existsSync(out)) throw new Error("Run `next build` first: out/ is missing")

const stub = (to) => `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8">
<meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}"><title>PADELTECH</title></head>
<body><script>location.replace(${JSON.stringify(to)})</script><a href="${to}">PADELTECH</a></body></html>\n`

// "/" → Hebrew. (Many Israeli browsers are set to English, so no language sniffing.)
writeFileSync(join(out, "index.html"), `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/he/"><link rel="canonical" href="/he/"><title>PADELTECH ישראל</title>
<script>location.replace("/he/")</script>
</head><body><a href="/he/">PADELTECH ישראל</a></body></html>\n`)

const retired = ["club", "clubs", "padel", "wellness", "groups", "story", "book", "network", "membership"]
for (const locale of ["he", "en"]) {
  for (const page of retired) {
    const dir = join(out, locale, page)
    if (existsSync(join(dir, "index.html"))) continue
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, "index.html"), stub(`/${locale}/`))
  }
}

// Apache/LiteSpeed; ignored by hosts that do not read .htaccess.
writeFileSync(join(out, ".htaccess"), `DirectoryIndex index.html
ErrorDocument 404 /404.html
Options -Indexes
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
RewriteRule ^(he|en)/clubs/.+$ /$1/ [L,R=301]
</IfModule>
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpeg "access plus 30 days"
ExpiresByType image/png "access plus 30 days"
ExpiresByType video/mp4 "access plus 30 days"
ExpiresByType font/woff2 "access plus 1 year"
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"
</IfModule>
`)

// Drop brand assets that no exported page references (old renders, unused crops).
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f)
  return statSync(p).isDirectory() ? walk(p) : [p]
})
const text = walk(out)
  .filter((p) => /\.(html|txt|js|css|json|xml)$/.test(p))
  .map((p) => readFileSync(p, "utf8"))
  .join("\n")
let removed = 0
for (const file of walk(join(out, "brand"))) {
  const url = "/" + file.slice(out.length + 1).split("\\").join("/")
  if (!text.includes(url) && !text.includes(encodeURI(url))) {
    rmSync(file)
    removed++
  }
}
console.log(`Removed ${removed} unused brand files`)

rmSync("padeltech-upress.zip", { force: true })
execSync(`cd ${out} && zip -qr ../padeltech-upress.zip . -x "*.DS_Store"`)
console.log("Ready: padeltech-upress.zip — upload its contents to the site root (public_html).")
