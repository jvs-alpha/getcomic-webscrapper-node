const axios = require("axios");
const pretty = require("pretty");
const cheerio = require("cheerio");

const url = "https://getcomics.info/?s=";

async function scrape() {
    try {
        const {data} = await axios.get(url);
        // console.log(data);
        const parsed = cheerio.load(data);
        const postList = parsed("article");
        // console.log(Object.keys(postList));
        postList.each((idx, el) => {
            // console.log(Object.keys(el));
            console.log(parsed(el).attr("href"));
            console.log("\n");
            console.log("\n");
            console.log("\n");
        });
        


    } catch (err) {
        console.log(err);
    }
}
scrape();