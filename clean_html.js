const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('customer_support_raw.html', 'utf8');
const $ = cheerio.load(html);

$('script, style, link, meta, noscript, svg').remove();
$('*').removeAttr('class').removeAttr('style').removeAttr('id');

const main = $('main').html();
fs.writeFileSync('customer_support_clean.html', main || '');
console.log('Clean HTML saved.');
