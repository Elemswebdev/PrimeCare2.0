const fs = require('fs');
const content = fs.readFileSync('C:/Users/Anijim James Maurice/.gemini/antigravity/brain/a5d48680-e0de-46c2-94e9-5cf356a809ac/.system_generated/steps/50/content.md', 'utf8');
const regex = /<span class="vc_tta-title-text">(.*?)<\/span>.*?<div class="wpb_wrapper">(.*?)<\/div><\/div><\/div><\/div>/g;
let match;
const res = [];
while ((match = regex.exec(content)) !== null) {
  res.push({ q: match[1], a: match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() });
}
console.log(JSON.stringify(res, null, 2));
