const puppeteer = require('puppeteer');
const fs=require('fs');

    async function main(url,callback) {
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
        var nnscript=nscript[0];
        nnscript=nnscript.split(',"site":"glo"}}');
        nnscript=nnscript[0];
        nnscript+='}}';
        var result=JSON.parse(nnscript);
        console.log("-------------------");
        console.log("Title : "+result.titleModule.subject);
        console.log("Discount Price : "+result.priceModule.formatedActivityPrice);
        console.log("New Price : "+result.priceModule.formatedPrice);
        console.log("Available Quantity : "+result.actionModule.totalAvailQuantity);
        console.log("-------------------");
        console.log(result.skuModule.name);
         console.log(result.skuModule.productSKUPropertyList.length);
        //color
          console.log(result.skuModule.productSKUPropertyList[0].skuPropertyName);
          console.log(result.skuModule.productSKUPropertyList[0].skuPropertyValues.length);

          console.log(result.skuModule.productSKUPropertyList[0].skuPropertyValues[0].skuPropertyImagePath);
        //size
          console.log(result.skuModule.productSKUPropertyList[1].skuPropertyName);
          console.log(result.skuModule.productSKUPropertyList[1].skuPropertyValues.length);

        //shipform
          console.log(result.skuModule.productSKUPropertyList[2].skuPropertyName);
          console.log(result.skuModule.productSKUPropertyList[2].skuPropertyValues.length);


        await browser.close();

        callback(nnscript);
      } catch (err) {
        console.error(err);
      }
    }
    var url='https://www.aliexpress.com/item/4000900052700.html?spm=a2g01.12597576.p99adbb.15.1ba36501uyxkvg&gps-id=7316275&scm=1007.19881.118560.0&scm_id=1007.19881.118560.0&scm-url=1007.19881.118560.0&pvid=0da5258c-16e4-46b9-8bd4-1f36c716bd3d';
    var url1='https://www.aliexpress.com/item/4000338588033.html?spm=a2g0o.detail.1000060.1.62276c99bS4XGg&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.169870.0&scm_id=1007.13339.169870.0&scm-url=1007.13339.169870.0&pvid=d894e1ef-c162-4993-bc9b-2ba1f1359b79&_t=gps-id:pcDetailBottomMoreThisSeller,scm-url:1007.13339.169870.0,pvid:d894e1ef-c162-4993-bc9b-2ba1f1359b79,tpp_buckets:668%230%23131923%230_668%23808%234094%23103_668%23888%233325%2319_668%232846%238110%23382_668%232717%237564%23682_668%231000022185%231000069217%230_668%233468%2315618%23966';
    main(url1,function(data){
      //console.log(data);
    });
    //************************************************
    // fs.readFile('script', 'utf8', function(err, html){
    //   if (!err){
    //     var data=JSON.parse(html);
    //      //console.log(data);
    //      console.log("Title : "+data.titleModule.subject);
    //     // var dom = parser.parseFromString(html);
    //     // var scripts=dom.getElementsByTagName('head');
    //     // console.log(scripts[0].innerhtml);
    //   }
    // })
    //***************************************************
