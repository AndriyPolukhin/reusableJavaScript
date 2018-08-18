const request = require('request');
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog/', (error, response, html) => {
  if (!error & response.statusCode === 200) {
    const $ = cheerio.load(html);

    const siteHeading = $('.site-heading');

    // console.log(siteHeading.html());
    // console.log(siteHeading.text());
    // const output = siteHeading.find('h1').text();
    // const output = siteHeading.children('h1').text();
    /*
     const output = siteHeading
       .children('h1')
       .next()
       .text();

    const output = siteHeading
      .children('h1')
      .parent()
      .text();

    console.log(output);
    */

    $('.nav-item a').each((i, el) => {
      const item = $(el).text();
      const link = $(el).attr('href');

      console.log(link);
    });




  }
});