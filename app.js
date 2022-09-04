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
        // console.log(postList);
        postList.each((idx, el) => {
            // console.log(Object.keys(el));
            let val = parsed(el).attr().href;
            postUrl.push(val);
            
        });
        // console.log(postUrl);
        for (let ip in postUrl)
        {
            console.log(postUrl[ip]);
        }
        


    } catch (err) {
        console.log(err);
    }
}
scrape();