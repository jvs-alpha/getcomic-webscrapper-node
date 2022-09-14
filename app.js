const axios = require("axios");
const pretty = require("pretty");
const cheerio = require("cheerio");

const url = "https://getcomics.info/?s=";


async function scrape() {
    try {
        const {data} = await axios.get(url);
        // console.log(data);
        const parsed = cheerio.load(data);
        const postList = parsed("div[class=post-header-image] > a");    // This bacically searches for all the div with class as post-head-image and get the a tag from it
        const postUrl = new Array();
        // console.log(postList.__proto__);
        postList.each((idx, el) => {
            // console.log(Object.keys(el));
            let val = parsed(el).attr().href;
            postUrl.push(val);
            
        });
        // console.log(postUrl);
        for (let ip in postUrl)
        {
            // console.log(typeof postUrl[ip]);
            const {data2} = await axios.get(postUrl[ip]);
            console.log(data2);
            const parsed2 = cheerio.load(data2);
            // console.log(parsed2);
            break;
        }
        


    } catch (err) {
        console.log(err);
    }
}
scrape();