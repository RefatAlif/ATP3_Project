const puppeteer = require('puppeteer');

module.exports ={
    findScript: function(url,callback) {
      try {
        const browser = await puppeteer.launch({
          headles: true,
          args:["--no-sandbox","--disable-setuid-sandbox"]
        });

        const page=await browser.newPage();

        await page.goto(url, { waitUntil: "networkidle0" });
        const data = await page.content();

        const script=data.split('data: ');
        const nscript=script[1].split('csrfToken:');
        const nnscript=nscript[0];
        nnscript[nnscript.length-26]=';';
        //console.log(nnscript);
        //console.log(nnscript[nnscript.length-26]);
        //fs.writeFile('script',nnscript,_=>console.log('Saved'));
        //console.log(data.skuModule.productSKUPropertyList[0].skuPropertyName);

        await browser.close();

        callback(nnscript);
      } catch (err) {
        console.error(err);
      }
    }
}
