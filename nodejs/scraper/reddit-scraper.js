/**
 * PRIMARY FILEF OR REDDIT SCRAPER
 */
// DEPENDENCIES
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// BASE URL
const url = 'https://www.reddit.com/r/news/';

// THE REQUEST
puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then(html => {
    const $ = cheerio.load(html);
    const newsHeadlines = [];
    $('a[href*="/r/news/comments"] > h2').each(function () {
      newsHeadlines.push({
        title: $(this).text(),
      });
    });

    console.log(newsHeadlines);
  })
  .catch(console.error);