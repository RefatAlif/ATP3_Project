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
        //fs.writeFile('script.html',data,_=>console.log('Saved'));
        //console.log(data);
        const script=data.split('data: ');
        const nscript=script[1].split('csrfToken:');
        var nnscript=nscript[0];
        nnscript=nnscript.split(',"site":"glo"}}');
        nnscript=nnscript[0];
        nnscript+='}}';
        var result=JSON.parse(nnscript);
        console.log("Title : "+result.titleModule.subject);
        //console.log(nnscript);
        //fs.writeFile('script.html',nnscript,_=>console.log('Saved'));
        //console.log(nnscript);

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
var data1 = {
    "actionModule": {
        "addToCartUrl": "//shoppingcart.aliexpress.com/addToShopcart4Js.htm",
        "aeOrderFrom": "main_detail",
        "allowVisitorAddCart": true,
        "cartDetailUrl": "//shoppingcart.aliexpress.com/shopcart/shopcartDetail.htm",
        "categoryId": 200000801,
        "companyId": 242161179,
        "confirmOrderUrl": "//shoppingcart.aliexpress.com/order/confirm_order.htm",
        "features": {},
        "i18nMap": {
            "WISH_MAX_NOTICE": "Oops, it seemed you already reached the list’s maximum.",
            "BUYER_ABLE": "This feature is only available to buyers.",
            "WISHLIST_SAVE_BUTTON": "Save",
            "WISH_MOVE_TO_ANOTHER_LIST_TIPS": "Move to another list",
            "ADD_X_MORE": "Congratulations! You've earned <div class=\"before-coin-count\"></div>{coinCount} coins. You have {number} chances today to continue to earn coins.",
            "SC_ADD_SUCC": "A new item has been added to your Shopping Cart.",
            "WISHLIST_PUBLIC_NOTICE": "(Anyone can see this list and share it)",
            "WISH_DETAULT_LIST": "Wish List",
            "WISH_CREATE_LIST": "Create a Wish List",
            "WL_ERROR": "Network is busy, please try again",
            "WISH_NAME_ALREADY_USE": "This Wish List name is already in use.",
            "WISH_REVISELIST": "Edit Your List",
            "SC_ADD_FAILED": "Failed to add, please refresh the page and re-click the \"Add to Cart\"",
            "SC_HAVE": "You now have {{number}} items in your Shopping Cart.",
            "ADD_TO_CART": "Add to Cart",
            "WISH_CANCEL_WISHLIST": "Cancel",
            "BUY_NOW": "Buy Now",
            "WISH_SYSTEM_ERROR": "Oops, system error. Please try again.",
            "SC_ADD_MAX": "You can add {{number}} items to cart at the most. Please remove some items before adding more.",
            "SC_VIEW": "View Shopping Cart",
            "WISH_YOUMAYLIKE": "You may also like",
            "WISH_VIEW_WISH_LIST": "View Wish List",
            "SC_RECOMMEND": "Buyers Who Bought This Item Also Bought:",
            "CONTINUE": "Continue Shopping",
            "ADDED_TO": "Added to {wishlist} ",
            "ORDER_NOW": "Order now",
            "SELECT_TIP": "Please provide the missing information first",
            "NO_LONGER_AVAILABLE": "Sorry, this item is no longer available!",
            "PREVIEW_PERIOD": "2019/3/21 00:00:00 GMT-0700,2019/3/27 23:59:59 GMT-0700",
            "WISH_MAX_GROUP": "Sorry, you can't create more wish lists",
            "WISHLIST_PUBLIC_TIP": "Public"
        },
        "id": 0,
        "itemStatus": 0,
        "itemWished": false,
        "itemWishedCount": 17,
        "localSeller": false,
        "name": "ActionModule",
        "preSale": false,
        "productId": 4000900052700,
        "showCoinAnim": false,
        "showShareHeader": true,
        "storeNum": 4045042,
        "totalAvailQuantity": 7996
    },
    "aePlusModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "AePlusModule"
    },
    "buyerProtectionModule": {
        "buyerProtection": {
            "brief": "Money back guarantee",
            "detailDescription": "",
            "id": 2,
            "name": "{day}-Day Buyer Protection",
            "redirectUrl": "https://sale.aliexpress.com/v8Yr8f629D.htm",
            "type": 1
        },
        "features": {},
        "i18nMap": {
            "PLAZA_BUYER_PROTECTION_TITLE": "Local Return",
            "PLAZA_BUYER_PROTECTION_TIP": "Dispones de 15 días en los que puedes devolver el artículo por no satisfacer tus expectativas, siempre que se encuentre en perfecto estado, sin usar y conserve todas las etiquetas y el embalaje original",
            "PLAZA_BUYER_PROTECTION_CONTENT": "15 days"
        },
        "id": 0,
        "name": "BuyerProtectionModule"
    },
    "commonModule": {
        "activity": true,
        "buyerAccountId": 2600646147,
        "buyerAdminSeq": 2600646147,
        "categoryId": 200000801,
        "currencyCode": "USD",
        "features": {},
        "gagaDataSite": "en",
        "i18nMap": {},
        "id": 0,
        "name": "CommonModule",
        "plaza": false,
        "preSale": false,
        "productId": 4000900052700,
        "productTags": {},
        "sellerAdminSeq": 232969202,
        "tradeCurrencyCode": "USD",
        "userCountryCode": "BD",
        "userCountryName": "Bangladesh"
    },
    "couponModule": {
        "buyerAdminSeq": 2600646147,
        "currencyCode": "USD",
        "features": {},
        "fixedDiscountLevelList": [{
            "discountAmount": "US $1.00",
            "fixedAmount": "US $20.00",
            "level": 1
        }],
        "i18nMap": {
            "GET_COUPONS": "Get coupons",
            "SCP_ERR_HAVE": "Sorry, you have already got the coupon from this store! Use coupon now!",
            "OFF_ON": "{money1} off on {money2}",
            "ORDER_OVER": "Orders over ",
            "code52Title": "Sorry, there are no more coupons available.",
            "GET_IT": "Get Now",
            "GET_NOW": "Get Now",
            "GET_MORE": "Get more",
            "systemError": "Oops, something went wrong. Please try again.",
            "OFF_PER": "{money1} off per {money2}",
            "STORE_COUPON": "Store Coupon",
            "SHOP_COUPONE_TIME_START_END": "From {0} to {1}",
            "NEW_USER_COUPON_ACQUIRE_FAIL_ALREADY_HAVE": "Sorry, you already have a New User Coupon.",
            "code50Title": "Sorry, the coupon could not be issued. Please try again.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_NOT_AVAILABLE_NOW": "Sorry, New User Coupons are not available now.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_GROUP_LIMIT": "Sorry, you have the maximum amount of New User Coupons.",
            "code14Title": "You've already collected these Select Coupons.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_NOT_NEW_USER": "Sorry, only new users are eligible to get this coupon.",
            "SHOP_PROMO_CODE_COPIED": "Promo code copied!",
            "ADDED": "Added",
            "NEW_USER_COUPON_ACQUIRE_FAIL_SECURITY": "To protect the security of your account, please use another device to sign in.",
            "SHOP_PROMO_CODE_TITLE": "Store promo code",
            "NEW_USER_COUPON_ACQUIRE_FAIL": "Oops, something went wrong! Please try again.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_DAY": "Sorry, New User Coupons are not available today.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_REGISTER_COUNTRY_LIMIT": "Please check that this coupon is redeemable in your registered country.",
            "SCP_ERR_NONE": "Sorry! All of these coupons have been allocated.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_GRANT_ERROR": "Sorry, you failed to get this coupon.",
            "code17Title": "Sorry, this coupon is no longer available.",
            "SHOP_COUPONE_TIME_EXPIRES": "Expires {0}",
            "SHOPPONG_CREDIT": "SHOPPONG CREDIT",
            "EXCHANGE_MORE": "Exchange more",
            "NEW_USER_COUPON_ACQUIRE_FAIL_SYSTEM_ERROR": "Oops, something went wrong! Please try again.",
            "MY_BALANCE": "Balance",
            "INSTANT_DISCOUNT": "Instant discount",
            "EXCHANGE_NOW": "Exchange now",
            "CROSS_STORE_VOUCHER_TIP": "Save up to {money1} on orders over {money2}",
            "NEW_USER_COUPON": "New User Coupon",
            "GET": "GET",
            "SHOP_PROMO_CODE_COP_FAILED": "Failed to copy. Please try again",
            "code-30005Title": "Uh, oh… It looks like you don't have enough coins yet.",
            "MY_COINS": "My Coins ",
            "BUY_GET_OFF": "Buy {fullpiece} get {fulldiscount} off",
            "code51Title": "Sorry, there are no more coupons available.",
            "NEW_USER_COUPON_ACQUIRE_FAIL_LIMIT_HOUR": "Sorry, New User Coupons are not available at this hour.",
            "CROSS_STORE_VOUCHER": "Select coupon "
        },
        "id": 0,
        "name": "CouponModule"
    },
    "crossLinkModule": {
        "breadCrumbPathList": [{
            "cateId": 0,
            "name": "Home",
            "remark": "",
            "url": "//www.aliexpress.com/"
        }, {
            "cateId": 0,
            "name": "All Categories",
            "remark": "",
            "target": "All Categories",
            "url": "//www.aliexpress.com/all-wholesale-products.html"
        }, {
            "cateId": 100003109,
            "name": "Women's Clothing",
            "remark": "",
            "target": "Women's Clothing",
            "url": "//www.aliexpress.com/category/100003109/women-clothing.html"
        }, {
            "cateId": 200000775,
            "name": "Jackets & Coats",
            "remark": "",
            "target": "Jackets & Coats",
            "url": "//www.aliexpress.com/category/200000775/jackets-coats.html"
        }, {
            "cateId": 200000926,
            "name": "Jackets",
            "remark": "",
            "target": "Jackets",
            "url": "//www.aliexpress.com/category/200000926/jackets.html"
        }],
        "crossLinkGroupList": [{
            "channel": "w",
            "crossLinkList": [{
                "displayName": "6xl plus size",
                "name": "6xl plus size",
                "url": "https://www.aliexpress.com/w/wholesale-6xl-plus-size.html"
            }, {
                "displayName": "grey jacket woman",
                "name": "grey jacket woman",
                "url": "https://www.aliexpress.com/w/wholesale-grey-jacket-woman.html"
            }, {
                "displayName": "autumn jacket",
                "name": "autumn jacket",
                "url": "https://www.aliexpress.com/w/wholesale-autumn-jacket.html"
            }, {
                "displayName": "the new europe autumn winter 2019",
                "name": "the new europe autumn winter 2019",
                "url": "https://www.aliexpress.com/w/wholesale-the-new-europe-autumn-winter-2019.html"
            }, {
                "displayName": "jakete of women",
                "name": "jakete of women",
                "url": "https://www.aliexpress.com/w/wholesale-jakete-of-women.html"
            }, {
                "displayName": "cool jacket",
                "name": "cool jacket",
                "url": "https://www.aliexpress.com/w/wholesale-cool-jacket.html"
            }, {
                "displayName": "autumn women",
                "name": "autumn women",
                "url": "https://www.aliexpress.com/w/wholesale-autumn-women.html"
            }, {
                "displayName": "cover rain",
                "name": "cover rain",
                "url": "https://www.aliexpress.com/w/wholesale-cover-rain.html"
            }],
            "name": "Wholesale"
        }, {
            "channel": "p",
            "crossLinkList": [{
                "displayName": "autumn jacket",
                "name": "autumn jacket",
                "url": "https://www.aliexpress.com/popular/autumn-jacket.html"
            }, {
                "displayName": "jakete of women",
                "name": "jakete of women",
                "url": "https://www.aliexpress.com/popular/jakete-of-women.html"
            }, {
                "displayName": "autumn jacket women",
                "name": "autumn jacket women",
                "url": "https://www.aliexpress.com/popular/autumn-jacket-women.html"
            }, {
                "displayName": "ax cup",
                "name": "ax cup",
                "url": "https://www.aliexpress.com/popular/ax-cup.html"
            }, {
                "displayName": "denim hood jacket",
                "name": "denim hood jacket",
                "url": "https://www.aliexpress.com/popular/denim-hood-jacket.html"
            }, {
                "displayName": "jacket men waterproof",
                "name": "jacket men waterproof",
                "url": "https://www.aliexpress.com/popular/jacket-men-waterproof.html"
            }, {
                "displayName": "corduroy jacket women",
                "name": "corduroy jacket women",
                "url": "https://www.aliexpress.com/popular/corduroy-jacket-women.html"
            }, {
                "displayName": "floral jacket print",
                "name": "floral jacket print",
                "url": "https://www.aliexpress.com/popular/floral-jacket-print.html"
            }, {
                "displayName": "cover rain",
                "name": "cover rain",
                "url": "https://www.aliexpress.com/popular/cover-rain.html"
            }],
            "name": "Popular "
        }, {
            "channel": "price",
            "crossLinkList": [{
                "displayName": "autumn jacket",
                "name": "autumn jacket",
                "url": "https://www.aliexpress.com/price/autumn-jacket_price.html"
            }, {
                "displayName": "coat thick lined",
                "name": "coat thick lined",
                "url": "https://www.aliexpress.com/price/coat-thick-lined_price.html"
            }, {
                "displayName": "acer 5332 battery",
                "name": "acer 5332 battery",
                "url": "https://www.aliexpress.com/price/acer-5332-battery_price.html"
            }, {
                "displayName": "autumn jacket for woman",
                "name": "autumn jacket for woman",
                "url": "https://www.aliexpress.com/price/autumn-jacket-for-woman_price.html"
            }, {
                "displayName": "jacket outdoor",
                "name": "jacket outdoor",
                "url": "https://www.aliexpress.com/price/jacket-outdoor_price.html"
            }, {
                "displayName": "bat jacket",
                "name": "bat jacket",
                "url": "https://www.aliexpress.com/price/bat-jacket_price.html"
            }, {
                "displayName": "jacket mezclilla",
                "name": "jacket mezclilla",
                "url": "https://www.aliexpress.com/price/jacket-mezclilla_price.html"
            }, {
                "displayName": "coat floral",
                "name": "coat floral",
                "url": "https://www.aliexpress.com/price/coat-floral_price.html"
            }, {
                "displayName": "jacket women waterproof woman",
                "name": "jacket women waterproof woman",
                "url": "https://www.aliexpress.com/price/jacket-women-waterproof-woman_price.html"
            }],
            "name": "Price"
        }, {
            "channel": "cheap",
            "crossLinkList": [{
                "displayName": "autumn cloth women",
                "name": "autumn cloth women",
                "url": "https://www.aliexpress.com/cheap/cheap-autumn-cloth-women.html"
            }, {
                "displayName": "coat thick lined",
                "name": "coat thick lined",
                "url": "https://www.aliexpress.com/cheap/cheap-coat-thick-lined.html"
            }, {
                "displayName": "5xl women",
                "name": "5xl women",
                "url": "https://www.aliexpress.com/cheap/cheap-5xl-women.html"
            }, {
                "displayName": "plastic samurai",
                "name": "plastic samurai",
                "url": "https://www.aliexpress.com/cheap/cheap-plastic-samurai.html"
            }, {
                "displayName": "jacket mezclilla",
                "name": "jacket mezclilla",
                "url": "https://www.aliexpress.com/cheap/cheap-jacket-mezclilla.html"
            }, {
                "displayName": "jacket winter women",
                "name": "jacket winter women",
                "url": "https://www.aliexpress.com/cheap/cheap-jacket-winter-women.html"
            }, {
                "displayName": "autumn coat women",
                "name": "autumn coat women",
                "url": "https://www.aliexpress.com/cheap/cheap-autumn-coat-women.html"
            }, {
                "displayName": "jacket women waterproof woman",
                "name": "jacket women waterproof woman",
                "url": "https://www.aliexpress.com/cheap/cheap-jacket-women-waterproof-woman.html"
            }, {
                "displayName": "jakets of women winter",
                "name": "jakets of women winter",
                "url": "https://www.aliexpress.com/cheap/cheap-jakets-of-women-winter.html"
            }],
            "name": "Cheap"
        }, {
            "channel": "promotion",
            "crossLinkList": [{
                "displayName": "2020 autumn",
                "name": "2020 autumn",
                "url": "https://www.aliexpress.com/promotion/promotion_2020-autumn-promotion.html"
            }, {
                "displayName": "autumn jacket women",
                "name": "autumn jacket women",
                "url": "https://www.aliexpress.com/promotion/promotion_autumn-jacket-women-promotion.html"
            }, {
                "displayName": "jacket women plus size xxl",
                "name": "jacket women plus size xxl",
                "url": "https://www.aliexpress.com/promotion/promotion_jacket-women-plus-size-xxl-promotion.html"
            }, {
                "displayName": "denim hood jacket",
                "name": "denim hood jacket",
                "url": "https://www.aliexpress.com/promotion/promotion_denim-hood-jacket-promotion.html"
            }, {
                "displayName": "autumn jacket for woman",
                "name": "autumn jacket for woman",
                "url": "https://www.aliexpress.com/promotion/promotion_autumn-jacket-for-woman-promotion.html"
            }, {
                "displayName": "7xl plus size women",
                "name": "7xl plus size women",
                "url": "https://www.aliexpress.com/promotion/promotion_7xl-plus-size-women-promotion.html"
            }, {
                "displayName": "coat long winter",
                "name": "coat long winter",
                "url": "https://www.aliexpress.com/promotion/promotion_coat-long-winter-promotion.html"
            }, {
                "displayName": "jacket men waterproof",
                "name": "jacket men waterproof",
                "url": "https://www.aliexpress.com/promotion/promotion_jacket-men-waterproof-promotion.html"
            }, {
                "displayName": "jecket",
                "name": "jecket",
                "url": "https://www.aliexpress.com/promotion/promotion_jecket-promotion.html"
            }],
            "name": "Promotion"
        }, {
            "channel": "reviews",
            "crossLinkList": [{
                "displayName": "2020 autumn",
                "name": "2020 autumn",
                "url": "https://www.aliexpress.com/2020-autumn_reviews.html"
            }, {
                "displayName": "sword of goujian",
                "name": "sword of goujian",
                "url": "https://www.aliexpress.com/sword-of-goujian_reviews.html"
            }, {
                "displayName": "acer 5332 battery",
                "name": "acer 5332 battery",
                "url": "https://www.aliexpress.com/acer-5332-battery_reviews.html"
            }, {
                "displayName": "autumn jacket for woman",
                "name": "autumn jacket for woman",
                "url": "https://www.aliexpress.com/autumn-jacket-for-woman_reviews.html"
            }, {
                "displayName": "7xl plus size women",
                "name": "7xl plus size women",
                "url": "https://www.aliexpress.com/7xl-plus-size-women_reviews.html"
            }, {
                "displayName": "coat floral",
                "name": "coat floral",
                "url": "https://www.aliexpress.com/coat-floral_reviews.html"
            }],
            "name": "Reviews"
        }],
        "features": {},
        "i18nMap": {
            "BREADCRUMB_PART2": "and you can find similar products at",
            "BREADCRUMB_PART1": "This product belongs to",
            "CROSSLINK_RELATED_SEARCHES": "Related Searches"
        },
        "id": 0,
        "name": "CrossLinkModule",
        "productId": 4000900052700
    },
    "descriptionModule": {
        "descriptionUrl": "https://aeproductsourcesite.alicdn.com/product/description/pc/v2/en_US/desc.htm?productId=4000900052700&key=Haa13b6cc49f24ec1be02c1a60336f3f5l.zip&token=4721a0f7cd6a158dcf7aac28bf0b011d",
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "DescriptionModule",
        "productId": 4000900052700,
        "sellerAdminSeq": 232969202
    },
    "features": {},
    "feedbackModule": {
        "companyId": 242161179,
        "features": {},
        "feedbackServer": "//feedback.aliexpress.com",
        "i18nMap": {},
        "id": 0,
        "name": "FeedbackModule",
        "productId": 4000900052700,
        "sellerAdminSeq": 232969202,
        "trialReviewNum": 0
    },
    "groupShareModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "GroupShareModule"
    },
    "i18nMap": {
        "VIEW_MORE": "View More",
        "ASK_BUYERS": "Buyer Questions & Answers",
        "PAGE_NOT_FOUND_NOTICE": "Sorry, this page is unavailable, but check out our other pages that are just as great. ",
        "VIEW_5_MORE_ANSWERS": "View More",
        "openTrace": "true",
        "PAGE_NOT_FOUND_RCMD_TITLE": "Sorry, the page you requested can not be found:("
    },
    "imageModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "imagePathList": ["https://ae01.alicdn.com/kf/Hdac22fe0139945949b6d3be0df01fada8/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg", "https://ae01.alicdn.com/kf/H70829c1212b544c6b073902f0de3751aY/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg", "https://ae01.alicdn.com/kf/H70339be4c4b348019a704052c9942ece6/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg", "https://ae01.alicdn.com/kf/H5998ab4c40774041b381db59387d3ef8G/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg", "https://ae01.alicdn.com/kf/Hbde6647c30664715a5c9985ab2bce12ch/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg", "https://ae01.alicdn.com/kf/H614a3b03069b40f7adf202b31bbc8f2dA/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg"],
        "name": "ImageModule",
        "summImagePathList": ["https://ae01.alicdn.com/kf/Hdac22fe0139945949b6d3be0df01fada8/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg", "https://ae01.alicdn.com/kf/H70829c1212b544c6b073902f0de3751aY/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg", "https://ae01.alicdn.com/kf/H70339be4c4b348019a704052c9942ece6/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg", "https://ae01.alicdn.com/kf/H5998ab4c40774041b381db59387d3ef8G/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg", "https://ae01.alicdn.com/kf/Hbde6647c30664715a5c9985ab2bce12ch/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg", "https://ae01.alicdn.com/kf/H614a3b03069b40f7adf202b31bbc8f2dA/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg"]
    },
    "installmentModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "InstallmentModule"
    },
    "middleBannerModule": {
        "features": {},
        "i18nMap": {
            "END_IN": "Ends in",
            "DAYS": "{number} days",
            "DAY": "{number} day",
            "STARTS_IN": "Starts in"
        },
        "id": 0,
        "name": "MiddleBannerModule"
    },
    "name": "ItemDetailResp",
    "otherServiceModule": {
        "features": {},
        "hasWarrantyInfo": false,
        "i18nMap": {
            "TAB_SPECS": "Specifications",
            "PLAZA_SERVICE_SUBTITLE_PC": "Guarantee in Spain",
            "PLAZA_SERVICE_WARRANTY_EMAIL": "Email",
            "PLAZA_SERVICE_WARRANTY_PHONE": "Phone",
            "PLAZA_SERVICE_WARRANTY_HOURS": "Hours",
            "TAB_CUSTOMER_REVIEWS": "Customer Reviews",
            "PLAZA_SERVICE_WARRANTY_WEBSITE": "Website",
            "TAB_OVERVIEW": "Overview",
            "PLAZA_SERVICE_WARRANTY_BRAND": "Brand",
            "PLAZA_SERVICE_WARRANTY_CATEGORY": "Category",
            "PLAZA_SERVICE_TITLE_PC": "Plaza Technology Guarantees",
            "PLAZA_SERVICE_CONTENT3_3_PC": "- The safety seal is not damaged and all labels are retained.",
            "PLAZA_SERVICE_WARRANTY_TITLE": "Official technical service",
            "TAB_REPORT_ITEM": "Report Item",
            "TAB_SERVICE": "Service",
            "PLAZA_SERVICE_CONTENT3_1_PC": "You have 15 days to return your Plaza Technology order, provided that:",
            "PLAZA_SERVICE_CONTENT3_2_PC": "- It is in perfect condition and in the original packaging. ",
            "PLAZA_SERVICE_CONTENT1_PC": "All items of Plaza Technology are 100% original, are covered by the protection of the buyer of AliExpress and have an official warranty of 2 years in Spain to process in the official technical service in Spain designated by the manufacturer.",
            "PLAZA_SERVICE_SUBTITLE2_PC": "Shipping and delivery",
            "PLAZA_SERVICE_CONTENT2_PC": "Shipments are free without minimum purchase. We make all our shipments from Spain, so there are no additional fees or customs. The delivery time in any point of the peninsula is 1 to 3 working days from the moment of purchase. At the moment we do not send to the Canary Islands, Ceuta or Melilla.",
            "PLAZA_SERVICE_SUBTITLE3_PC": "Returns"
        },
        "id": 0,
        "name": "OtherServiceModule"
    },
    "pageModule": {
        "aeOrderFrom": "main_detail",
        "aerSelfOperation": false,
        "amphtmlTag": "<link rel=\"amphtml\" href=\"https://h5.aliexpress.com/item/4000900052700.html\">",
        "boutiqueSeller": false,
        "canonicalTag": "<link rel=\"canonical\" href=\"https://www.aliexpress.com/item/4000900052700.html\">",
        "complaintUrl": "//report.aliexpress.com/health/reportIndex.htm?product_id=4000900052700&b_login_id=cn1522767027fxnp",
        "description": "Cheap Jackets, Buy Quality Women's Clothing Directly from China Suppliers:Women Solid Rain Jacket Outdoor Plus Size Waterproof Hooded Windproof Loose Coat Autumn Winter Fashion Jacket Coat Women#T2\nEnjoy ✓Free Shipping Worldwide! ✓Limited Time Sale ✓Easy Return.",
        "features": {},
        "hreflangTag": "<link rel=\"alternate\" hreflang=\"en\" href=\"https://www.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"id\" href=\"https://id.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"ko\" href=\"https://ko.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"ar\" href=\"https://ar.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"de\" href=\"https://de.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"es\" href=\"https://es.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"fr\" href=\"https://fr.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"it\" href=\"https://it.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"nl\" href=\"https://nl.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"pt\" href=\"https://pt.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"th\" href=\"https://th.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"tr\" href=\"https://tr.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"vi\" href=\"https://vi.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"he\" href=\"https://he.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"ru\" href=\"https://aliexpress.ru/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"ja\" href=\"https://ja.aliexpress.com/item/4000900052700.html\"/>\n<link rel=\"alternate\" hreflang=\"pl\" href=\"https://pl.aliexpress.com/item/4000900052700.html\"/>",
        "i18nMap": {},
        "id": 0,
        "imagePath": "https://ae01.alicdn.com/kf/Hdac22fe0139945949b6d3be0df01fada8/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg",
        "itemDetailUrl": "https://www.aliexpress.com/item/4000900052700.html",
        "keywords": "Jackets,Women's Clothing, Cheap Jackets,High Quality Women's Clothing,Jackets, , ",
        "kidBaby": false,
        "mSiteUrl": "https://m.aliexpress.com/item/4000900052700.html",
        "mediaTag": "<link rel=\"alternate\" media=\"only screen and (max-width: 640px)\" href=\"https://m.aliexpress.com/item/4000900052700.html\"/>",
        "multiLanguageUrlList": [{
            "language": "msite",
            "languageUrl": "https://m.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "en",
            "languageUrl": "https://www.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "it",
            "languageUrl": "https://it.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "fr",
            "languageUrl": "https://fr.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "de",
            "languageUrl": "https://de.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "ru",
            "languageUrl": "https://aliexpress.ru/item/4000900052700.html"
        }, {
            "language": "es",
            "languageUrl": "https://es.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "pt",
            "languageUrl": "https://pt.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "ja",
            "languageUrl": "https://ja.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "ko",
            "languageUrl": "https://ko.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "nl",
            "languageUrl": "https://nl.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "ar",
            "languageUrl": "https://ar.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "tr",
            "languageUrl": "https://tr.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "vi",
            "languageUrl": "https://vi.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "he",
            "languageUrl": "https://he.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "th",
            "languageUrl": "https://th.aliexpress.com/item/4000900052700.html"
        }, {
            "language": "pl",
            "languageUrl": "https://pl.aliexpress.com/item/4000900052700.html"
        }],
        "name": "PageModule",
        "ogDescription": "Smarter Shopping, Better Living!  Aliexpress.com",
        "ogTitle": "US $10.79 40% OFF|Women Solid Rain Jacket Outdoor Plus Size Waterproof Hooded Windproof Loose Coat Autumn Winter Fashion Jacket Coat Women#T2|Jackets|   - AliExpress",
        "ogurl": "//www.aliexpress.com/item/4000900052700.html",
        "oldItemDetailUrl": "https://www.aliexpress.com/item/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket/4000900052700.html",
        "plazaElectronicSeller": false,
        "productId": 4000900052700,
        "ruSelfOperation": false,
        "showPlazaHeader": false,
        "siteType": "glo",
        "spanishPlaza": false,
        "title": "Women Solid Rain Jacket Outdoor Plus Size Waterproof Hooded Windproof Loose Coat Autumn Winter Fashion Jacket Coat Women#T2|Jackets|   - AliExpress"
    },
    "preSaleModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "PreSaleModule",
        "preSale": false
    },
    "priceModule": {
        "activity": true,
        "bigPreview": false,
        "bigSellProduct": false,
        "discount": 40,
        "discountPromotion": true,
        "features": {},
        "formatedActivityPrice": "US $10.79 - 14.44",
        "formatedPrice": "US $17.99 - 24.07",
        "hiddenBigSalePrice": false,
        "i18nMap": {
            "LOT": "lot",
            "INSTALLMENT": "Installment",
            "DEPOSIT": "Deposit",
            "PRE_ORDER_PRICE": "Pre-order price"
        },
        "id": 0,
        "installment": false,
        "lot": false,
        "maxActivityAmount": {
            "currency": "USD",
            "formatedAmount": "US $14.44",
            "value": 14.44
        },
        "maxAmount": {
            "currency": "USD",
            "formatedAmount": "US $24.07",
            "value": 24.07
        },
        "minActivityAmount": {
            "currency": "USD",
            "formatedAmount": "US $10.79",
            "value": 10.79
        },
        "minAmount": {
            "currency": "USD",
            "formatedAmount": "US $17.99",
            "value": 17.99
        },
        "multiUnitName": "pieces",
        "name": "PriceModule",
        "numberPerLot": 1,
        "oddUnitName": "piece",
        "preSale": false,
        "regularPriceActivity": false,
        "showActivityMessage": false
    },
    "quantityModule": {
        "activity": true,
        "displayBulkInfo": true,
        "features": {},
        "i18nMap": {
            "LOT": "lot",
            "LOTS": "lots",
            "BUY_LIMIT": "{limit} {unit} at most per customer",
            "QUANTITY": "Quantity",
            "OFF_OR_MORE": "{discount}% off ({number} {unit} or more)",
            "ONLY_QUANTITY_LEFT": "Only {availQuantity} left",
            "ADDTIONAL": "Additional",
            "QUANTITY_AVAILABLE": "{availQuantity} {unit} available"
        },
        "id": 0,
        "lot": false,
        "multiUnitName": "pieces",
        "name": "QuantityModule",
        "oddUnitName": "piece",
        "purchaseLimitNumMax": 0,
        "skuBulkDiscount": 5,
        "skuBulkOrder": 2,
        "totalAvailQuantity": 7996
    },
    "recommendModule": {
        "categoryId": 200000801,
        "companyId": 242161179,
        "features": {
            "recommendGpsScenarioOtherSellerProducts": "pcDetailBottomMoreOtherSeller",
            "showSubTitle": "true",
            "recommendGpsScenarioTopSelling": "pcDetailLeftTopSell",
            "recommendGpsScenarioSellerOtherProducts": "pcDetailBottomMoreThisSeller"
        },
        "i18nMap": {
            "MORE_FROM_THIS_SELLER": "Seller Recommendations",
            "YOU_MAY_LIKE": "Recommended For You",
            "TOP_SELLING": "Top Selling",
            "FROM_OTHER_SELLER": "More To Love",
            "VIEW_MORE_LINK": "View More",
            "PRODUCT_SOLD": "Sold"
        },
        "id": 0,
        "name": "RecommendModule",
        "platformCount": 20,
        "productId": 4000900052700,
        "storeNum": 4045042
    },
    "redirectModule": {
        "bigBossBan": false,
        "code": "OK",
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "RedirectModule",
        "redirectUrl": ""
    },
    "shippingModule": {
        "currencyCode": "USD",
        "features": {},
        "hbaFreeShipping": false,
        "hbaFreight": false,
        "i18nMap": {
            "FAST_SHIPPING": "Fast Shipping",
            "CAN_NOT_DELIVER": "Can not deliver",
            "HBA_TRAKING_AVAILABLE": "Tracking Available",
            "HAB_BALLOON_TRAKING_AVAILABLE": "Track your order status from start to finish.",
            "SELECT_SHIP_FROM_TIP": "Please select the country you want to ship from",
            "DAYS": "days",
            "SHIPPING_TO": "Shipping:",
            "HAB_SHIPPING_TO": "to",
            "CARRIER": "Carrier",
            "FREE_SHIPPING": "Free Shipping",
            "COST": "Cost",
            "BALLOON_TIP": "If you finish the payment today, your order will arrive within the estimated delivery time.",
            "SHIP_MY_ITEM_TO": "Ship to",
            "HAB_BALLOON_VAT_INCLUDED": "Item price listed includes VAT.",
            "TO_PROVINCE": "to {provinceName}",
            "TRACKING": "Tracking",
            "TO_COUNTRY": "to {countryName}",
            "TO_CITY": "to {cityName}",
            "CAN_NOE_DELIVER_NOTE": "This Supplier/Shipping Company does not deliver to your selected Country/Region.",
            "ESTIMATED_DELIVERT_ON_DAYS": "Estimated Delivery: {0} days",
            "CHOOSE_DELIVERT_METHOD": "Shipping Method",
            "HAB_BALLOON_DOOR_DELIVERY": "Products delivered directly to your door.",
            "DELIVERED_BY": "Delivered before {date} or full refund",
            "HBA_SHIPPING_INFO": "To {countryName} in {time} days via {companyName}",
            "PLAZA_BALLOON_TIP": "This delivery date is estimated. The calculation is based on several factors, including the address, shipping option selected and the availability shown on the product detail page.",
            "IN": "in",
            "SEARCH": "State/Province/Region",
            "SELECT_SHIP_FROM": "Please select the country you want to ship from",
            "HBA_TVAT_INCLUDED": "With sterile service",
            "ESTIMATED_DELIVERY": "Estimated Delivery",
            "HBA_BALLOON_TIPS": "hba balloon tips",
            "VAT_DE_DETAIL": "Buyer is German import declarant",
            "SELECTED": "Selected",
            "TO_WHERE": "To where",
            "HBA_DOR_DELIVERY": "COD Available on APP",
            "VAT_NUMBER": "VAT number:",
            "ESTIMATED_DELIVERT_ON_DATE": "Estimated Delivery on {date}",
            "OR_FULL_REFOUND": "Full refund",
            "TO_VIA": "to {countryName} via {companyName}",
            "APPLY": "Apply",
            "PLAZA_SHOP_NOW_RECEIVE_ON": "Buy it now and receive it on {date} (est.)"
        },
        "id": 0,
        "name": "ShippingModule",
        "productId": 4000900052700,
        "regionCountryName": "Bangladesh",
        "userCountryCode": "BD",
        "userCountryName": "Bangladesh"
    },
    "skuModule": {
        "categoryId": 200000801,
        "features": {},
        "forcePromiseWarrantyJson": "{}",
        "hasSizeInfo": false,
        "hasSkuProperty": true,
        "i18nMap": {
            "SIZING_INFO": "Size Info",
            "BUST_PROMPT": "Please select your bust size.",
            "GLASSES_DIALOG_TITLE": "Prescription Detail",
            "NV_ADD": "Sometimes seen on your prescription as \"NV, ADD, Near, Reading, or Reading Addition.\"  \"NV\" stands for \"Near-Vision.\"  This number indicates the additional magnification that is added to the distance prescription to get the reading portion of the lens in a multi-focal prescription.  We display a single NV-ADD field since it is almost always the same value for both eyes.",
            "SPH": "SPHERE (SPH), or Spherical, refers to the refractive correction in the prescription. Minus (-) stands for near sightedness, and Plus (+) stands for far sightedness. If \"PL\" or \"Plano\" is written for the either SPH value on your prescription, you should select a value of 0.00.\r\r\nOD-SPH is spherical correction for your right eye.\r\r\nOS-SPH is spherical correction for your left eye.\r\r\nOD-SPH is spherical correction for your RIGHT eye.\r\r\nOS-SPH is spherical correction for your LEFT eye.",
            "PUPILLARY_PROMPT": "Please select PD (Pupillary Distance).",
            "SIZE_HOVER_TITLE": "Might be different from your local size,please see the sizing info for more information.",
            "FLOOR_CONTENT": "Begin at the hollow space between the collarbones and pull tape straight down to the floor.",
            "CUSTOM_SIZE_CONTENT": "Your body measurements",
            "NV_ADD_PROMPT": "Please select NV-ADD.",
            "PLEASE_ENTER": "please enter",
            "WAIST_TITLE": "Waist",
            "WAIST_CONTENT": "Measure the smallest part of the waist.\r\r\nKeep tape slightly loose to allow for breathing room.",
            "CYL": "CYLINDER (CYL), or Cylinder, refers to the strength of the correction for the astigmatism in the eye. It can be either positive or negative. If there is a CYL value for an eye, there must be an Axis value for that eye.\r\r\nIf \"DS\" or \"SPH\" or \"spherical\" is noted in the CYL space on your prescription, you have no astigmatism in that eye.  In that case, enter 0.00 in both the CYL and Axis.\r\r\nOD-CYL is cylinder correction for your right eye.\r\r\nOS-CYL is cylinder correction for your left eye.",
            "SERVICE": "Service",
            "BUST_CONTENT": "Wear an unpadded bra (your dress will have a built-in bra).\r\r\nPull tape across the fullest part of the bust (at nipple level).",
            "SIZE_INFO": "Size Info",
            "SIZE_INFO_DESC": "*These charts are for reference only. Fit may vary depending on the construction, materials and manufacturer.",
            "ITEM_CONDITION_TIP": "Condition",
            "BTN_CANCEL": "Cancel",
            "HOW_TO_MEASURE": "How to Measure",
            "SIZE_INFO_TIP": "once you know your body measurements,consult the Size Chart on the product pages for actual item measurements to determine which size you should purchase.",
            "FLOOR_PROMPT": "Please select the hollow to floor measurement.",
            "FLOOR_TITLE": "Hollow to Floor (Bare Foot)",
            "SIZE_INFO_COMPARE_TIP": "To choose the correct size for you measure your body as follows",
            "UNIT_PROMPT": "Please select unit.",
            "SELECT": "Select",
            "HIPS_TITLE": "Hips",
            "HEIGHT_PROMPT": "Please select the your shoes' heel height.",
            "WAIST_PROMPT": "Please select your waist size.",
            "BTN_SAVE": "Save",
            "TITLE_OPTIONAL": "Local repair warranty in {country} <span>(optional)</span>",
            "SIZE_DIALOG_TITLE": "Custom Size",
            "GLASSES_TIP": "Please provide the information from your medical prescription. If you have any special needs or have any questions, please contact the seller.",
            "SIZE_CHART": "Size Chart",
            "HIPS_PROMPT": "Please select your hips size.",
            "SPH_PROMPT": "It looks like you forgot to enter your prescription. Please fill in the sphere, cylinder and axis.",
            "HIPS_CONTENT": "Find the widest part of the hips or run the measurement tape around your hipbone.",
            "BUST_TITLE": "Bust",
            "AXIS": "AXS, or Axis, refers to the angle of the correction for the astigmatism in the eye (if one exists) from 1 to 180.  If there is an Axis value on an eye, there must be a CYL (Cylinder) value on that eye.  If there is no Cylinder value or if the value is zero, the OD Axis value is entered as 0.00.\r\r\nThe Axis value is usually written as 3 digits, which means if your Axis value is 5, it is often written as 005. This Axis value is still 5, regardless of how it is displayed.\r\r\nOD Axis is Axis correction for your right eye.\r\r\nOS Axis is Axis correction for your left eye."
        },
        "id": 0,
        "name": "SKUModule",
        "productSKUPropertyList": [{
            "isShowTypeColor": true,
            "order": 1,
            "showType": "colour_atla",
            "showTypeColor": true,
            "skuPropertyId": 14,
            "skuPropertyName": "Color",
            "skuPropertyValues": [{
                "propertyValueDefinitionName": "Black ",
                "propertyValueDisplayName": "Black ",
                "propertyValueId": 771,
                "propertyValueIdLong": 771,
                "propertyValueName": "Beige",
                "skuColorValue": "#F8F7E7",
                "skuPropertyImagePath": "https://ae01.alicdn.com/kf/Hdac22fe0139945949b6d3be0df01fada8/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_640x640.jpg",
                "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/Hdac22fe0139945949b6d3be0df01fada8/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg",
                "skuPropertyTips": "Black ",
                "skuPropertyValueShowOrder": 1,
                "skuPropertyValueTips": "Black "
            }, {
                "propertyValueDefinitionName": "Green ",
                "propertyValueDisplayName": "Green ",
                "propertyValueId": 193,
                "propertyValueIdLong": 193,
                "propertyValueName": "Black",
                "skuColorValue": "#000000",
                "skuPropertyImagePath": "https://ae01.alicdn.com/kf/H70339be4c4b348019a704052c9942ece6/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_640x640.jpg",
                "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/H70339be4c4b348019a704052c9942ece6/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg",
                "skuPropertyTips": "Green ",
                "skuPropertyValueShowOrder": 1,
                "skuPropertyValueTips": "Green "
            }, {
                "propertyValueDefinitionName": "Gray ",
                "propertyValueDisplayName": "Gray ",
                "propertyValueId": 173,
                "propertyValueIdLong": 173,
                "propertyValueName": "Blue",
                "skuColorValue": "#0080FF",
                "skuPropertyImagePath": "https://ae01.alicdn.com/kf/H70829c1212b544c6b073902f0de3751aY/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_640x640.jpg",
                "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/H70829c1212b544c6b073902f0de3751aY/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg",
                "skuPropertyTips": "Gray ",
                "skuPropertyValueShowOrder": 1,
                "skuPropertyValueTips": "Gray "
            }, {
                "propertyValueDefinitionName": "Khaki ",
                "propertyValueDisplayName": "Khaki ",
                "propertyValueId": 1254,
                "propertyValueIdLong": 1254,
                "propertyValueName": "Sky Blue",
                "skuColorValue": "#1EDDFF",
                "skuPropertyImagePath": "https://ae01.alicdn.com/kf/H5998ab4c40774041b381db59387d3ef8G/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_640x640.jpg",
                "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/H5998ab4c40774041b381db59387d3ef8G/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg",
                "skuPropertyTips": "Khaki ",
                "skuPropertyValueShowOrder": 1,
                "skuPropertyValueTips": "Khaki "
            }, {
                "propertyValueDefinitionName": "Purple ",
                "propertyValueDisplayName": "Purple ",
                "propertyValueId": 365458,
                "propertyValueIdLong": 365458,
                "propertyValueName": "Brown",
                "skuColorValue": "#8D6468",
                "skuPropertyImagePath": "https://ae01.alicdn.com/kf/Hc1e8cee72b2c4a2d8cdb6126165e37abd/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_640x640.jpg",
                "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/Hc1e8cee72b2c4a2d8cdb6126165e37abd/Women-Solid-Rain-Jacket-Outdoor-Plus-Size-Waterproof-Hooded-Windproof-Loose-Coat-Autumn-Winter-Fashion-Jacket.jpg_50x50.jpg",
                "skuPropertyTips": "Purple ",
                "skuPropertyValueShowOrder": 1,
                "skuPropertyValueTips": "Purple "
            }]
        }, {
            "isShowTypeColor": false,
            "order": 2,
            "showType": "none",
            "showTypeColor": false,
            "skuPropertyId": 5,
            "skuPropertyName": "Size",
            "skuPropertyValues": [{
                "propertyValueDisplayName": "S",
                "propertyValueId": 100014064,
                "propertyValueIdLong": 100014064,
                "propertyValueName": "S",
                "skuPropertyTips": "S",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "S"
            }, {
                "propertyValueDisplayName": "M",
                "propertyValueId": 361386,
                "propertyValueIdLong": 361386,
                "propertyValueName": "M",
                "skuPropertyTips": "M",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "M"
            }, {
                "propertyValueDisplayName": "L",
                "propertyValueId": 361385,
                "propertyValueIdLong": 361385,
                "propertyValueName": "L",
                "skuPropertyTips": "L",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "L"
            }, {
                "propertyValueDisplayName": "XL",
                "propertyValueId": 100014065,
                "propertyValueIdLong": 100014065,
                "propertyValueName": "XL",
                "skuPropertyTips": "XL",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "XL"
            }, {
                "propertyValueDisplayName": "XXL",
                "propertyValueId": 4182,
                "propertyValueIdLong": 4182,
                "propertyValueName": "XXL",
                "skuPropertyTips": "XXL",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "XXL"
            }, {
                "propertyValueDisplayName": "XXXL",
                "propertyValueId": 4183,
                "propertyValueIdLong": 4183,
                "propertyValueName": "XXXL",
                "skuPropertyTips": "XXXL",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "XXXL"
            }, {
                "propertyValueDisplayName": "4XL",
                "propertyValueId": 200000990,
                "propertyValueIdLong": 200000990,
                "propertyValueName": "4XL",
                "skuPropertyTips": "4XL",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "4XL"
            }, {
                "propertyValueDisplayName": "5XL",
                "propertyValueId": 200000991,
                "propertyValueIdLong": 200000991,
                "propertyValueName": "5XL",
                "skuPropertyTips": "5XL",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "5XL"
            }]
        }, {
            "isShowTypeColor": false,
            "order": 3,
            "showType": "none",
            "showTypeColor": false,
            "skuPropertyId": 200007763,
            "skuPropertyName": "Ships From",
            "skuPropertyValues": [{
                "propertyValueDisplayName": "China",
                "propertyValueId": 201336100,
                "propertyValueIdLong": 201336100,
                "propertyValueName": "China",
                "skuPropertySendGoodsCountryCode": "CN",
                "skuPropertyTips": "China",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "China"
            }, {
                "propertyValueDisplayName": "United States",
                "propertyValueId": 201336106,
                "propertyValueIdLong": 201336106,
                "propertyValueName": "United States",
                "skuPropertySendGoodsCountryCode": "US",
                "skuPropertyTips": "United States",
                "skuPropertyValueShowOrder": 2,
                "skuPropertyValueTips": "United States"
            }]
        }],
        "skuPriceList": [{
            "skuAttr": "14:173#Gray ;5:361386;200007763:201336100",
            "skuId": 10000010474153800,
            "skuIdStr": "10000010474153800",
            "skuPropIds": "173,361386,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.82",
                "actSkuCalPrice": "13.49",
                "actSkuDisplayBulkPrice": "US $12.82",
                "actSkuMultiCurrencyBulkPrice": "12.82",
                "actSkuMultiCurrencyCalPrice": "13.49",
                "actSkuMultiCurrencyDisplayPrice": "13.49",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.49",
                    "value": 13.49
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.49",
                    "value": 22.49
                },
                "skuBulkCalPrice": "21.37",
                "skuCalPrice": "22.49",
                "skuDisplayBulkPrice": "US $21.37",
                "skuMultiCurrencyBulkPrice": "21.37",
                "skuMultiCurrencyCalPrice": "22.49",
                "skuMultiCurrencyDisplayPrice": "22.49"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:361386;200007763:201336106",
            "skuId": 10000010474153801,
            "skuIdStr": "10000010474153801",
            "skuPropIds": "173,361386,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.25",
                "actSkuCalPrice": "10.79",
                "actSkuDisplayBulkPrice": "US $10.25",
                "actSkuMultiCurrencyBulkPrice": "10.25",
                "actSkuMultiCurrencyCalPrice": "10.79",
                "actSkuMultiCurrencyDisplayPrice": "10.79",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.79",
                    "value": 10.79
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $17.99",
                    "value": 17.99
                },
                "skuBulkCalPrice": "17.09",
                "skuCalPrice": "17.99",
                "skuDisplayBulkPrice": "US $17.09",
                "skuMultiCurrencyBulkPrice": "17.09",
                "skuMultiCurrencyCalPrice": "17.99",
                "skuMultiCurrencyDisplayPrice": "17.99"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:200000991;200007763:201336100",
            "skuId": 10000010474153802,
            "skuIdStr": "10000010474153802",
            "skuPropIds": "173,200000991,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:200000991;200007763:201336106",
            "skuId": 10000010474153803,
            "skuIdStr": "10000010474153803",
            "skuPropIds": "173,200000991,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:200000990;200007763:201336100",
            "skuId": 10000010474153804,
            "skuIdStr": "10000010474153804",
            "skuPropIds": "173,200000990,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:200000990;200007763:201336106",
            "skuId": 10000010474153805,
            "skuIdStr": "10000010474153805",
            "skuPropIds": "173,200000990,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:4183;200007763:201336100",
            "skuId": 10000010474153806,
            "skuIdStr": "10000010474153806",
            "skuPropIds": "173,4183,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.05",
                "actSkuCalPrice": "13.73",
                "actSkuDisplayBulkPrice": "US $13.05",
                "actSkuMultiCurrencyBulkPrice": "13.05",
                "actSkuMultiCurrencyCalPrice": "13.73",
                "actSkuMultiCurrencyDisplayPrice": "13.73",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.73",
                    "value": 13.73
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.89",
                    "value": 22.89
                },
                "skuBulkCalPrice": "21.75",
                "skuCalPrice": "22.89",
                "skuDisplayBulkPrice": "US $21.75",
                "skuMultiCurrencyBulkPrice": "21.75",
                "skuMultiCurrencyCalPrice": "22.89",
                "skuMultiCurrencyDisplayPrice": "22.89"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:4183;200007763:201336106",
            "skuId": 10000010474153807,
            "skuIdStr": "10000010474153807",
            "skuPropIds": "173,4183,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.43",
                "actSkuCalPrice": "10.99",
                "actSkuDisplayBulkPrice": "US $10.43",
                "actSkuMultiCurrencyBulkPrice": "10.43",
                "actSkuMultiCurrencyCalPrice": "10.99",
                "actSkuMultiCurrencyDisplayPrice": "10.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.99",
                    "value": 10.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.31",
                    "value": 18.31
                },
                "skuBulkCalPrice": "17.39",
                "skuCalPrice": "18.31",
                "skuDisplayBulkPrice": "US $17.39",
                "skuMultiCurrencyBulkPrice": "17.39",
                "skuMultiCurrencyCalPrice": "18.31",
                "skuMultiCurrencyDisplayPrice": "18.31"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:361385;200007763:201336100",
            "skuId": 10000010474153792,
            "skuIdStr": "10000010474153792",
            "skuPropIds": "173,361385,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.06",
                "actSkuCalPrice": "13.74",
                "actSkuDisplayBulkPrice": "US $13.06",
                "actSkuMultiCurrencyBulkPrice": "13.06",
                "actSkuMultiCurrencyCalPrice": "13.74",
                "actSkuMultiCurrencyDisplayPrice": "13.74",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.74",
                    "value": 13.74
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.90",
                    "value": 22.9
                },
                "skuBulkCalPrice": "21.76",
                "skuCalPrice": "22.90",
                "skuDisplayBulkPrice": "US $21.76",
                "skuMultiCurrencyBulkPrice": "21.76",
                "skuMultiCurrencyCalPrice": "22.9",
                "skuMultiCurrencyDisplayPrice": "22.90"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:361385;200007763:201336106",
            "skuId": 10000010474153793,
            "skuIdStr": "10000010474153793",
            "skuPropIds": "173,361385,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.44",
                "actSkuCalPrice": "10.99",
                "actSkuDisplayBulkPrice": "US $10.44",
                "actSkuMultiCurrencyBulkPrice": "10.44",
                "actSkuMultiCurrencyCalPrice": "10.99",
                "actSkuMultiCurrencyDisplayPrice": "10.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.99",
                    "value": 10.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.32",
                    "value": 18.32
                },
                "skuBulkCalPrice": "17.4",
                "skuCalPrice": "18.32",
                "skuDisplayBulkPrice": "US $17.40",
                "skuMultiCurrencyBulkPrice": "17.40",
                "skuMultiCurrencyCalPrice": "18.32",
                "skuMultiCurrencyDisplayPrice": "18.32"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:100014065;200007763:201336100",
            "skuId": 10000010474153794,
            "skuIdStr": "10000010474153794",
            "skuPropIds": "173,100014065,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.21",
                "actSkuCalPrice": "13.90",
                "actSkuDisplayBulkPrice": "US $13.21",
                "actSkuMultiCurrencyBulkPrice": "13.21",
                "actSkuMultiCurrencyCalPrice": "13.9",
                "actSkuMultiCurrencyDisplayPrice": "13.90",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.90",
                    "value": 13.9
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.17",
                    "value": 23.17
                },
                "skuBulkCalPrice": "22.01",
                "skuCalPrice": "23.17",
                "skuDisplayBulkPrice": "US $22.01",
                "skuMultiCurrencyBulkPrice": "22.01",
                "skuMultiCurrencyCalPrice": "23.17",
                "skuMultiCurrencyDisplayPrice": "23.17"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:100014065;200007763:201336106",
            "skuId": 10000010474153795,
            "skuIdStr": "10000010474153795",
            "skuPropIds": "173,100014065,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.57",
                "actSkuCalPrice": "11.12",
                "actSkuDisplayBulkPrice": "US $10.57",
                "actSkuMultiCurrencyBulkPrice": "10.57",
                "actSkuMultiCurrencyCalPrice": "11.12",
                "actSkuMultiCurrencyDisplayPrice": "11.12",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.12",
                    "value": 11.12
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.54",
                    "value": 18.54
                },
                "skuBulkCalPrice": "17.61",
                "skuCalPrice": "18.54",
                "skuDisplayBulkPrice": "US $17.61",
                "skuMultiCurrencyBulkPrice": "17.61",
                "skuMultiCurrencyCalPrice": "18.54",
                "skuMultiCurrencyDisplayPrice": "18.54"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:100014064;200007763:201336100",
            "skuId": 10000010474153796,
            "skuIdStr": "10000010474153796",
            "skuPropIds": "173,100014064,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.05",
                "actSkuCalPrice": "13.73",
                "actSkuDisplayBulkPrice": "US $13.05",
                "actSkuMultiCurrencyBulkPrice": "13.05",
                "actSkuMultiCurrencyCalPrice": "13.73",
                "actSkuMultiCurrencyDisplayPrice": "13.73",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.73",
                    "value": 13.73
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.89",
                    "value": 22.89
                },
                "skuBulkCalPrice": "21.75",
                "skuCalPrice": "22.89",
                "skuDisplayBulkPrice": "US $21.75",
                "skuMultiCurrencyBulkPrice": "21.75",
                "skuMultiCurrencyCalPrice": "22.89",
                "skuMultiCurrencyDisplayPrice": "22.89"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:100014064;200007763:201336106",
            "skuId": 10000010474153797,
            "skuIdStr": "10000010474153797",
            "skuPropIds": "173,100014064,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.43",
                "actSkuCalPrice": "10.99",
                "actSkuDisplayBulkPrice": "US $10.43",
                "actSkuMultiCurrencyBulkPrice": "10.43",
                "actSkuMultiCurrencyCalPrice": "10.99",
                "actSkuMultiCurrencyDisplayPrice": "10.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.99",
                    "value": 10.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.31",
                    "value": 18.31
                },
                "skuBulkCalPrice": "17.39",
                "skuCalPrice": "18.31",
                "skuDisplayBulkPrice": "US $17.39",
                "skuMultiCurrencyBulkPrice": "17.39",
                "skuMultiCurrencyCalPrice": "18.31",
                "skuMultiCurrencyDisplayPrice": "18.31"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:4182;200007763:201336100",
            "skuId": 10000010474153798,
            "skuIdStr": "10000010474153798",
            "skuPropIds": "173,4182,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.94",
                "actSkuCalPrice": "13.62",
                "actSkuDisplayBulkPrice": "US $12.94",
                "actSkuMultiCurrencyBulkPrice": "12.94",
                "actSkuMultiCurrencyCalPrice": "13.62",
                "actSkuMultiCurrencyDisplayPrice": "13.62",
                "availQuantity": 99,
                "bulkOrder": 2,
                "inventory": 99,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.62",
                    "value": 13.62
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.70",
                    "value": 22.7
                },
                "skuBulkCalPrice": "21.57",
                "skuCalPrice": "22.70",
                "skuDisplayBulkPrice": "US $21.57",
                "skuMultiCurrencyBulkPrice": "21.57",
                "skuMultiCurrencyCalPrice": "22.7",
                "skuMultiCurrencyDisplayPrice": "22.70"
            }
        }, {
            "skuAttr": "14:173#Gray ;5:4182;200007763:201336106",
            "skuId": 10000010474153799,
            "skuIdStr": "10000010474153799",
            "skuPropIds": "173,4182,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.35",
                "actSkuCalPrice": "10.90",
                "actSkuDisplayBulkPrice": "US $10.35",
                "actSkuMultiCurrencyBulkPrice": "10.35",
                "actSkuMultiCurrencyCalPrice": "10.9",
                "actSkuMultiCurrencyDisplayPrice": "10.90",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.90",
                    "value": 10.9
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.16",
                    "value": 18.16
                },
                "skuBulkCalPrice": "17.25",
                "skuCalPrice": "18.16",
                "skuDisplayBulkPrice": "US $17.25",
                "skuMultiCurrencyBulkPrice": "17.25",
                "skuMultiCurrencyCalPrice": "18.16",
                "skuMultiCurrencyDisplayPrice": "18.16"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:361386;200007763:201336100",
            "skuId": 10000010474153752,
            "skuIdStr": "10000010474153752",
            "skuPropIds": "365458,361386,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.98",
                "actSkuCalPrice": "13.66",
                "actSkuDisplayBulkPrice": "US $12.98",
                "actSkuMultiCurrencyBulkPrice": "12.98",
                "actSkuMultiCurrencyCalPrice": "13.66",
                "actSkuMultiCurrencyDisplayPrice": "13.66",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.66",
                    "value": 13.66
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.77",
                    "value": 22.77
                },
                "skuBulkCalPrice": "21.63",
                "skuCalPrice": "22.77",
                "skuDisplayBulkPrice": "US $21.63",
                "skuMultiCurrencyBulkPrice": "21.63",
                "skuMultiCurrencyCalPrice": "22.77",
                "skuMultiCurrencyDisplayPrice": "22.77"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:361386;200007763:201336106",
            "skuId": 10000010474153753,
            "skuIdStr": "10000010474153753",
            "skuPropIds": "365458,361386,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.39",
                "actSkuCalPrice": "10.93",
                "actSkuDisplayBulkPrice": "US $10.39",
                "actSkuMultiCurrencyBulkPrice": "10.39",
                "actSkuMultiCurrencyCalPrice": "10.93",
                "actSkuMultiCurrencyDisplayPrice": "10.93",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.93",
                    "value": 10.93
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.22",
                    "value": 18.22
                },
                "skuBulkCalPrice": "17.31",
                "skuCalPrice": "18.22",
                "skuDisplayBulkPrice": "US $17.31",
                "skuMultiCurrencyBulkPrice": "17.31",
                "skuMultiCurrencyCalPrice": "18.22",
                "skuMultiCurrencyDisplayPrice": "18.22"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:200000991;200007763:201336100",
            "skuId": 10000010474153754,
            "skuIdStr": "10000010474153754",
            "skuPropIds": "365458,200000991,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:200000991;200007763:201336106",
            "skuId": 10000010474153755,
            "skuIdStr": "10000010474153755",
            "skuPropIds": "365458,200000991,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:200000990;200007763:201336100",
            "skuId": 10000010474153756,
            "skuIdStr": "10000010474153756",
            "skuPropIds": "365458,200000990,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:200000990;200007763:201336106",
            "skuId": 10000010474153757,
            "skuIdStr": "10000010474153757",
            "skuPropIds": "365458,200000990,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:4183;200007763:201336100",
            "skuId": 10000010474153758,
            "skuIdStr": "10000010474153758",
            "skuPropIds": "365458,4183,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:4183;200007763:201336106",
            "skuId": 10000010474153759,
            "skuIdStr": "10000010474153759",
            "skuPropIds": "365458,4183,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:361385;200007763:201336100",
            "skuId": 10000010474153744,
            "skuIdStr": "10000010474153744",
            "skuPropIds": "365458,361385,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.89",
                "actSkuCalPrice": "13.57",
                "actSkuDisplayBulkPrice": "US $12.89",
                "actSkuMultiCurrencyBulkPrice": "12.89",
                "actSkuMultiCurrencyCalPrice": "13.57",
                "actSkuMultiCurrencyDisplayPrice": "13.57",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.57",
                    "value": 13.57
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.61",
                    "value": 22.61
                },
                "skuBulkCalPrice": "21.48",
                "skuCalPrice": "22.61",
                "skuDisplayBulkPrice": "US $21.48",
                "skuMultiCurrencyBulkPrice": "21.48",
                "skuMultiCurrencyCalPrice": "22.61",
                "skuMultiCurrencyDisplayPrice": "22.61"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:361385;200007763:201336106",
            "skuId": 10000010474153745,
            "skuIdStr": "10000010474153745",
            "skuPropIds": "365458,361385,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.31",
                "actSkuCalPrice": "10.85",
                "actSkuDisplayBulkPrice": "US $10.31",
                "actSkuMultiCurrencyBulkPrice": "10.31",
                "actSkuMultiCurrencyCalPrice": "10.85",
                "actSkuMultiCurrencyDisplayPrice": "10.85",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.85",
                    "value": 10.85
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.09",
                    "value": 18.09
                },
                "skuBulkCalPrice": "17.19",
                "skuCalPrice": "18.09",
                "skuDisplayBulkPrice": "US $17.19",
                "skuMultiCurrencyBulkPrice": "17.19",
                "skuMultiCurrencyCalPrice": "18.09",
                "skuMultiCurrencyDisplayPrice": "18.09"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:100014065;200007763:201336100",
            "skuId": 10000010474153746,
            "skuIdStr": "10000010474153746",
            "skuPropIds": "365458,100014065,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:100014065;200007763:201336106",
            "skuId": 10000010474153747,
            "skuIdStr": "10000010474153747",
            "skuPropIds": "365458,100014065,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:100014064;200007763:201336100",
            "skuId": 10000010474153748,
            "skuIdStr": "10000010474153748",
            "skuPropIds": "365458,100014064,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:100014064;200007763:201336106",
            "skuId": 10000010474153749,
            "skuIdStr": "10000010474153749",
            "skuPropIds": "365458,100014064,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:4182;200007763:201336100",
            "skuId": 10000010474153750,
            "skuIdStr": "10000010474153750",
            "skuPropIds": "365458,4182,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.96",
                "actSkuCalPrice": "13.64",
                "actSkuDisplayBulkPrice": "US $12.96",
                "actSkuMultiCurrencyBulkPrice": "12.96",
                "actSkuMultiCurrencyCalPrice": "13.64",
                "actSkuMultiCurrencyDisplayPrice": "13.64",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.64",
                    "value": 13.64
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.74",
                    "value": 22.74
                },
                "skuBulkCalPrice": "21.6",
                "skuCalPrice": "22.74",
                "skuDisplayBulkPrice": "US $21.60",
                "skuMultiCurrencyBulkPrice": "21.60",
                "skuMultiCurrencyCalPrice": "22.74",
                "skuMultiCurrencyDisplayPrice": "22.74"
            }
        }, {
            "skuAttr": "14:365458#Purple ;5:4182;200007763:201336106",
            "skuId": 10000010474153751,
            "skuIdStr": "10000010474153751",
            "skuPropIds": "365458,4182,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.37",
                "actSkuCalPrice": "10.91",
                "actSkuDisplayBulkPrice": "US $10.37",
                "actSkuMultiCurrencyBulkPrice": "10.37",
                "actSkuMultiCurrencyCalPrice": "10.91",
                "actSkuMultiCurrencyDisplayPrice": "10.91",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.91",
                    "value": 10.91
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.19",
                    "value": 18.19
                },
                "skuBulkCalPrice": "17.28",
                "skuCalPrice": "18.19",
                "skuDisplayBulkPrice": "US $17.28",
                "skuMultiCurrencyBulkPrice": "17.28",
                "skuMultiCurrencyCalPrice": "18.19",
                "skuMultiCurrencyDisplayPrice": "18.19"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:361386;200007763:201336100",
            "skuId": 10000010474153736,
            "skuIdStr": "10000010474153736",
            "skuPropIds": "1254,361386,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.05",
                "actSkuCalPrice": "13.73",
                "actSkuDisplayBulkPrice": "US $13.05",
                "actSkuMultiCurrencyBulkPrice": "13.05",
                "actSkuMultiCurrencyCalPrice": "13.73",
                "actSkuMultiCurrencyDisplayPrice": "13.73",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.73",
                    "value": 13.73
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.89",
                    "value": 22.89
                },
                "skuBulkCalPrice": "21.75",
                "skuCalPrice": "22.89",
                "skuDisplayBulkPrice": "US $21.75",
                "skuMultiCurrencyBulkPrice": "21.75",
                "skuMultiCurrencyCalPrice": "22.89",
                "skuMultiCurrencyDisplayPrice": "22.89"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:361386;200007763:201336106",
            "skuId": 10000010474153737,
            "skuIdStr": "10000010474153737",
            "skuPropIds": "1254,361386,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.43",
                "actSkuCalPrice": "10.99",
                "actSkuDisplayBulkPrice": "US $10.43",
                "actSkuMultiCurrencyBulkPrice": "10.43",
                "actSkuMultiCurrencyCalPrice": "10.99",
                "actSkuMultiCurrencyDisplayPrice": "10.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.99",
                    "value": 10.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.31",
                    "value": 18.31
                },
                "skuBulkCalPrice": "17.39",
                "skuCalPrice": "18.31",
                "skuDisplayBulkPrice": "US $17.39",
                "skuMultiCurrencyBulkPrice": "17.39",
                "skuMultiCurrencyCalPrice": "18.31",
                "skuMultiCurrencyDisplayPrice": "18.31"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:200000991;200007763:201336100",
            "skuId": 10000010474153738,
            "skuIdStr": "10000010474153738",
            "skuPropIds": "1254,200000991,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.23",
                "actSkuCalPrice": "13.93",
                "actSkuDisplayBulkPrice": "US $13.23",
                "actSkuMultiCurrencyBulkPrice": "13.23",
                "actSkuMultiCurrencyCalPrice": "13.93",
                "actSkuMultiCurrencyDisplayPrice": "13.93",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.93",
                    "value": 13.93
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.21",
                    "value": 23.21
                },
                "skuBulkCalPrice": "22.05",
                "skuCalPrice": "23.21",
                "skuDisplayBulkPrice": "US $22.05",
                "skuMultiCurrencyBulkPrice": "22.05",
                "skuMultiCurrencyCalPrice": "23.21",
                "skuMultiCurrencyDisplayPrice": "23.21"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:200000991;200007763:201336106",
            "skuId": 10000010474153739,
            "skuIdStr": "10000010474153739",
            "skuPropIds": "1254,200000991,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.58",
                "actSkuCalPrice": "11.14",
                "actSkuDisplayBulkPrice": "US $10.58",
                "actSkuMultiCurrencyBulkPrice": "10.58",
                "actSkuMultiCurrencyCalPrice": "11.14",
                "actSkuMultiCurrencyDisplayPrice": "11.14",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.14",
                    "value": 11.14
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.57",
                    "value": 18.57
                },
                "skuBulkCalPrice": "17.64",
                "skuCalPrice": "18.57",
                "skuDisplayBulkPrice": "US $17.64",
                "skuMultiCurrencyBulkPrice": "17.64",
                "skuMultiCurrencyCalPrice": "18.57",
                "skuMultiCurrencyDisplayPrice": "18.57"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:200000990;200007763:201336100",
            "skuId": 10000010474153740,
            "skuIdStr": "10000010474153740",
            "skuPropIds": "1254,200000990,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 99,
                "bulkOrder": 2,
                "inventory": 99,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:200000990;200007763:201336106",
            "skuId": 10000010474153741,
            "skuIdStr": "10000010474153741",
            "skuPropIds": "1254,200000990,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:4183;200007763:201336100",
            "skuId": 10000010474153742,
            "skuIdStr": "10000010474153742",
            "skuPropIds": "1254,4183,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.23",
                "actSkuCalPrice": "13.93",
                "actSkuDisplayBulkPrice": "US $13.23",
                "actSkuMultiCurrencyBulkPrice": "13.23",
                "actSkuMultiCurrencyCalPrice": "13.93",
                "actSkuMultiCurrencyDisplayPrice": "13.93",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.93",
                    "value": 13.93
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.21",
                    "value": 23.21
                },
                "skuBulkCalPrice": "22.05",
                "skuCalPrice": "23.21",
                "skuDisplayBulkPrice": "US $22.05",
                "skuMultiCurrencyBulkPrice": "22.05",
                "skuMultiCurrencyCalPrice": "23.21",
                "skuMultiCurrencyDisplayPrice": "23.21"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:4183;200007763:201336106",
            "skuId": 10000010474153743,
            "skuIdStr": "10000010474153743",
            "skuPropIds": "1254,4183,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.58",
                "actSkuCalPrice": "11.14",
                "actSkuDisplayBulkPrice": "US $10.58",
                "actSkuMultiCurrencyBulkPrice": "10.58",
                "actSkuMultiCurrencyCalPrice": "11.14",
                "actSkuMultiCurrencyDisplayPrice": "11.14",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.14",
                    "value": 11.14
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.57",
                    "value": 18.57
                },
                "skuBulkCalPrice": "17.64",
                "skuCalPrice": "18.57",
                "skuDisplayBulkPrice": "US $17.64",
                "skuMultiCurrencyBulkPrice": "17.64",
                "skuMultiCurrencyCalPrice": "18.57",
                "skuMultiCurrencyDisplayPrice": "18.57"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:361385;200007763:201336100",
            "skuId": 10000010474153728,
            "skuIdStr": "10000010474153728",
            "skuPropIds": "1254,361385,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.06",
                "actSkuCalPrice": "13.74",
                "actSkuDisplayBulkPrice": "US $13.06",
                "actSkuMultiCurrencyBulkPrice": "13.06",
                "actSkuMultiCurrencyCalPrice": "13.74",
                "actSkuMultiCurrencyDisplayPrice": "13.74",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.74",
                    "value": 13.74
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.90",
                    "value": 22.9
                },
                "skuBulkCalPrice": "21.76",
                "skuCalPrice": "22.90",
                "skuDisplayBulkPrice": "US $21.76",
                "skuMultiCurrencyBulkPrice": "21.76",
                "skuMultiCurrencyCalPrice": "22.9",
                "skuMultiCurrencyDisplayPrice": "22.90"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:361385;200007763:201336106",
            "skuId": 10000010474153729,
            "skuIdStr": "10000010474153729",
            "skuPropIds": "1254,361385,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.44",
                "actSkuCalPrice": "10.99",
                "actSkuDisplayBulkPrice": "US $10.44",
                "actSkuMultiCurrencyBulkPrice": "10.44",
                "actSkuMultiCurrencyCalPrice": "10.99",
                "actSkuMultiCurrencyDisplayPrice": "10.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.99",
                    "value": 10.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.32",
                    "value": 18.32
                },
                "skuBulkCalPrice": "17.4",
                "skuCalPrice": "18.32",
                "skuDisplayBulkPrice": "US $17.40",
                "skuMultiCurrencyBulkPrice": "17.40",
                "skuMultiCurrencyCalPrice": "18.32",
                "skuMultiCurrencyDisplayPrice": "18.32"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:100014065;200007763:201336100",
            "skuId": 10000010474153730,
            "skuIdStr": "10000010474153730",
            "skuPropIds": "1254,100014065,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:100014065;200007763:201336106",
            "skuId": 10000010474153731,
            "skuIdStr": "10000010474153731",
            "skuPropIds": "1254,100014065,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:100014064;200007763:201336100",
            "skuId": 10000010474153732,
            "skuIdStr": "10000010474153732",
            "skuPropIds": "1254,100014064,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.82",
                "actSkuCalPrice": "13.49",
                "actSkuDisplayBulkPrice": "US $12.82",
                "actSkuMultiCurrencyBulkPrice": "12.82",
                "actSkuMultiCurrencyCalPrice": "13.49",
                "actSkuMultiCurrencyDisplayPrice": "13.49",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.49",
                    "value": 13.49
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.49",
                    "value": 22.49
                },
                "skuBulkCalPrice": "21.37",
                "skuCalPrice": "22.49",
                "skuDisplayBulkPrice": "US $21.37",
                "skuMultiCurrencyBulkPrice": "21.37",
                "skuMultiCurrencyCalPrice": "22.49",
                "skuMultiCurrencyDisplayPrice": "22.49"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:100014064;200007763:201336106",
            "skuId": 10000010474153733,
            "skuIdStr": "10000010474153733",
            "skuPropIds": "1254,100014064,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.25",
                "actSkuCalPrice": "10.79",
                "actSkuDisplayBulkPrice": "US $10.25",
                "actSkuMultiCurrencyBulkPrice": "10.25",
                "actSkuMultiCurrencyCalPrice": "10.79",
                "actSkuMultiCurrencyDisplayPrice": "10.79",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.79",
                    "value": 10.79
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $17.99",
                    "value": 17.99
                },
                "skuBulkCalPrice": "17.09",
                "skuCalPrice": "17.99",
                "skuDisplayBulkPrice": "US $17.09",
                "skuMultiCurrencyBulkPrice": "17.09",
                "skuMultiCurrencyCalPrice": "17.99",
                "skuMultiCurrencyDisplayPrice": "17.99"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:4182;200007763:201336100",
            "skuId": 10000010474153734,
            "skuIdStr": "10000010474153734",
            "skuPropIds": "1254,4182,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:1254#Khaki ;5:4182;200007763:201336106",
            "skuId": 10000010474153735,
            "skuIdStr": "10000010474153735",
            "skuPropIds": "1254,4182,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:771#Black ;5:361386;200007763:201336100",
            "skuId": 10000010474153784,
            "skuIdStr": "10000010474153784",
            "skuPropIds": "771,361386,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.07",
                "actSkuCalPrice": "13.76",
                "actSkuDisplayBulkPrice": "US $13.07",
                "actSkuMultiCurrencyBulkPrice": "13.07",
                "actSkuMultiCurrencyCalPrice": "13.76",
                "actSkuMultiCurrencyDisplayPrice": "13.76",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.76",
                    "value": 13.76
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.94",
                    "value": 22.94
                },
                "skuBulkCalPrice": "21.79",
                "skuCalPrice": "22.94",
                "skuDisplayBulkPrice": "US $21.79",
                "skuMultiCurrencyBulkPrice": "21.79",
                "skuMultiCurrencyCalPrice": "22.94",
                "skuMultiCurrencyDisplayPrice": "22.94"
            }
        }, {
            "skuAttr": "14:771#Black ;5:361386;200007763:201336106",
            "skuId": 10000010474153785,
            "skuIdStr": "10000010474153785",
            "skuPropIds": "771,361386,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.46",
                "actSkuCalPrice": "11.01",
                "actSkuDisplayBulkPrice": "US $10.46",
                "actSkuMultiCurrencyBulkPrice": "10.46",
                "actSkuMultiCurrencyCalPrice": "11.01",
                "actSkuMultiCurrencyDisplayPrice": "11.01",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.01",
                    "value": 11.01
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.35",
                    "value": 18.35
                },
                "skuBulkCalPrice": "17.43",
                "skuCalPrice": "18.35",
                "skuDisplayBulkPrice": "US $17.43",
                "skuMultiCurrencyBulkPrice": "17.43",
                "skuMultiCurrencyCalPrice": "18.35",
                "skuMultiCurrencyDisplayPrice": "18.35"
            }
        }, {
            "skuAttr": "14:771#Black ;5:200000991;200007763:201336100",
            "skuId": 10000010474153786,
            "skuIdStr": "10000010474153786",
            "skuPropIds": "771,200000991,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.72",
                "actSkuCalPrice": "14.44",
                "actSkuDisplayBulkPrice": "US $13.72",
                "actSkuMultiCurrencyBulkPrice": "13.72",
                "actSkuMultiCurrencyCalPrice": "14.44",
                "actSkuMultiCurrencyDisplayPrice": "14.44",
                "availQuantity": 99,
                "bulkOrder": 2,
                "inventory": 99,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $14.44",
                    "value": 14.44
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $24.07",
                    "value": 24.07
                },
                "skuBulkCalPrice": "22.87",
                "skuCalPrice": "24.07",
                "skuDisplayBulkPrice": "US $22.87",
                "skuMultiCurrencyBulkPrice": "22.87",
                "skuMultiCurrencyCalPrice": "24.07",
                "skuMultiCurrencyDisplayPrice": "24.07"
            }
        }, {
            "skuAttr": "14:771#Black ;5:200000991;200007763:201336106",
            "skuId": 10000010474153787,
            "skuIdStr": "10000010474153787",
            "skuPropIds": "771,200000991,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.98",
                "actSkuCalPrice": "11.56",
                "actSkuDisplayBulkPrice": "US $10.98",
                "actSkuMultiCurrencyBulkPrice": "10.98",
                "actSkuMultiCurrencyCalPrice": "11.56",
                "actSkuMultiCurrencyDisplayPrice": "11.56",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.56",
                    "value": 11.56
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $19.26",
                    "value": 19.26
                },
                "skuBulkCalPrice": "18.3",
                "skuCalPrice": "19.26",
                "skuDisplayBulkPrice": "US $18.30",
                "skuMultiCurrencyBulkPrice": "18.30",
                "skuMultiCurrencyCalPrice": "19.26",
                "skuMultiCurrencyDisplayPrice": "19.26"
            }
        }, {
            "skuAttr": "14:771#Black ;5:200000990;200007763:201336100",
            "skuId": 10000010474153788,
            "skuIdStr": "10000010474153788",
            "skuPropIds": "771,200000990,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.28",
                "actSkuCalPrice": "13.99",
                "actSkuDisplayBulkPrice": "US $13.28",
                "actSkuMultiCurrencyBulkPrice": "13.28",
                "actSkuMultiCurrencyCalPrice": "13.99",
                "actSkuMultiCurrencyDisplayPrice": "13.99",
                "availQuantity": 99,
                "bulkOrder": 2,
                "inventory": 99,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.99",
                    "value": 13.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.31",
                    "value": 23.31
                },
                "skuBulkCalPrice": "22.14",
                "skuCalPrice": "23.31",
                "skuDisplayBulkPrice": "US $22.14",
                "skuMultiCurrencyBulkPrice": "22.14",
                "skuMultiCurrencyCalPrice": "23.31",
                "skuMultiCurrencyDisplayPrice": "23.31"
            }
        }, {
            "skuAttr": "14:771#Black ;5:200000990;200007763:201336106",
            "skuId": 10000010474153789,
            "skuIdStr": "10000010474153789",
            "skuPropIds": "771,200000990,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.63",
                "actSkuCalPrice": "11.19",
                "actSkuDisplayBulkPrice": "US $10.63",
                "actSkuMultiCurrencyBulkPrice": "10.63",
                "actSkuMultiCurrencyCalPrice": "11.19",
                "actSkuMultiCurrencyDisplayPrice": "11.19",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.19",
                    "value": 11.19
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.65",
                    "value": 18.65
                },
                "skuBulkCalPrice": "17.72",
                "skuCalPrice": "18.65",
                "skuDisplayBulkPrice": "US $17.72",
                "skuMultiCurrencyBulkPrice": "17.72",
                "skuMultiCurrencyCalPrice": "18.65",
                "skuMultiCurrencyDisplayPrice": "18.65"
            }
        }, {
            "skuAttr": "14:771#Black ;5:4183;200007763:201336100",
            "skuId": 10000010474153790,
            "skuIdStr": "10000010474153790",
            "skuPropIds": "771,4183,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:771#Black ;5:4183;200007763:201336106",
            "skuId": 10000010474153791,
            "skuIdStr": "10000010474153791",
            "skuPropIds": "771,4183,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:771#Black ;5:361385;200007763:201336100",
            "skuId": 10000010474153776,
            "skuIdStr": "10000010474153776",
            "skuPropIds": "771,361385,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:771#Black ;5:361385;200007763:201336106",
            "skuId": 10000010474153777,
            "skuIdStr": "10000010474153777",
            "skuPropIds": "771,361385,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:771#Black ;5:100014065;200007763:201336100",
            "skuId": 10000010474153778,
            "skuIdStr": "10000010474153778",
            "skuPropIds": "771,100014065,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.0",
                "actSkuCalPrice": "13.69",
                "actSkuDisplayBulkPrice": "US $13.00",
                "actSkuMultiCurrencyBulkPrice": "13.0",
                "actSkuMultiCurrencyCalPrice": "13.69",
                "actSkuMultiCurrencyDisplayPrice": "13.69",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.69",
                    "value": 13.69
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.81",
                    "value": 22.81
                },
                "skuBulkCalPrice": "21.67",
                "skuCalPrice": "22.81",
                "skuDisplayBulkPrice": "US $21.67",
                "skuMultiCurrencyBulkPrice": "21.67",
                "skuMultiCurrencyCalPrice": "22.81",
                "skuMultiCurrencyDisplayPrice": "22.81"
            }
        }, {
            "skuAttr": "14:771#Black ;5:100014065;200007763:201336106",
            "skuId": 10000010474153779,
            "skuIdStr": "10000010474153779",
            "skuPropIds": "771,100014065,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.4",
                "actSkuCalPrice": "10.95",
                "actSkuDisplayBulkPrice": "US $10.40",
                "actSkuMultiCurrencyBulkPrice": "10.4",
                "actSkuMultiCurrencyCalPrice": "10.95",
                "actSkuMultiCurrencyDisplayPrice": "10.95",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.95",
                    "value": 10.95
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.25",
                    "value": 18.25
                },
                "skuBulkCalPrice": "17.34",
                "skuCalPrice": "18.25",
                "skuDisplayBulkPrice": "US $17.34",
                "skuMultiCurrencyBulkPrice": "17.34",
                "skuMultiCurrencyCalPrice": "18.25",
                "skuMultiCurrencyDisplayPrice": "18.25"
            }
        }, {
            "skuAttr": "14:771#Black ;5:100014064;200007763:201336100",
            "skuId": 10000010474153780,
            "skuIdStr": "10000010474153780",
            "skuPropIds": "771,100014064,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.96",
                "actSkuCalPrice": "13.64",
                "actSkuDisplayBulkPrice": "US $12.96",
                "actSkuMultiCurrencyBulkPrice": "12.96",
                "actSkuMultiCurrencyCalPrice": "13.64",
                "actSkuMultiCurrencyDisplayPrice": "13.64",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.64",
                    "value": 13.64
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.74",
                    "value": 22.74
                },
                "skuBulkCalPrice": "21.6",
                "skuCalPrice": "22.74",
                "skuDisplayBulkPrice": "US $21.60",
                "skuMultiCurrencyBulkPrice": "21.60",
                "skuMultiCurrencyCalPrice": "22.74",
                "skuMultiCurrencyDisplayPrice": "22.74"
            }
        }, {
            "skuAttr": "14:771#Black ;5:100014064;200007763:201336106",
            "skuId": 10000010474153781,
            "skuIdStr": "10000010474153781",
            "skuPropIds": "771,100014064,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.37",
                "actSkuCalPrice": "10.91",
                "actSkuDisplayBulkPrice": "US $10.37",
                "actSkuMultiCurrencyBulkPrice": "10.37",
                "actSkuMultiCurrencyCalPrice": "10.91",
                "actSkuMultiCurrencyDisplayPrice": "10.91",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.91",
                    "value": 10.91
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.19",
                    "value": 18.19
                },
                "skuBulkCalPrice": "17.28",
                "skuCalPrice": "18.19",
                "skuDisplayBulkPrice": "US $17.28",
                "skuMultiCurrencyBulkPrice": "17.28",
                "skuMultiCurrencyCalPrice": "18.19",
                "skuMultiCurrencyDisplayPrice": "18.19"
            }
        }, {
            "skuAttr": "14:771#Black ;5:4182;200007763:201336100",
            "skuId": 10000010474153782,
            "skuIdStr": "10000010474153782",
            "skuPropIds": "771,4182,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.28",
                "actSkuCalPrice": "13.98",
                "actSkuDisplayBulkPrice": "US $13.28",
                "actSkuMultiCurrencyBulkPrice": "13.28",
                "actSkuMultiCurrencyCalPrice": "13.98",
                "actSkuMultiCurrencyDisplayPrice": "13.98",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.98",
                    "value": 13.98
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.30",
                    "value": 23.3
                },
                "skuBulkCalPrice": "22.14",
                "skuCalPrice": "23.30",
                "skuDisplayBulkPrice": "US $22.14",
                "skuMultiCurrencyBulkPrice": "22.14",
                "skuMultiCurrencyCalPrice": "23.3",
                "skuMultiCurrencyDisplayPrice": "23.30"
            }
        }, {
            "skuAttr": "14:771#Black ;5:4182;200007763:201336106",
            "skuId": 10000010474153783,
            "skuIdStr": "10000010474153783",
            "skuPropIds": "771,4182,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.63",
                "actSkuCalPrice": "11.18",
                "actSkuDisplayBulkPrice": "US $10.63",
                "actSkuMultiCurrencyBulkPrice": "10.63",
                "actSkuMultiCurrencyCalPrice": "11.18",
                "actSkuMultiCurrencyDisplayPrice": "11.18",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.18",
                    "value": 11.18
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.64",
                    "value": 18.64
                },
                "skuBulkCalPrice": "17.71",
                "skuCalPrice": "18.64",
                "skuDisplayBulkPrice": "US $17.71",
                "skuMultiCurrencyBulkPrice": "17.71",
                "skuMultiCurrencyCalPrice": "18.64",
                "skuMultiCurrencyDisplayPrice": "18.64"
            }
        }, {
            "skuAttr": "14:193#Green ;5:361386;200007763:201336100",
            "skuId": 10000010474153768,
            "skuIdStr": "10000010474153768",
            "skuPropIds": "193,361386,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.96",
                "actSkuCalPrice": "13.64",
                "actSkuDisplayBulkPrice": "US $12.96",
                "actSkuMultiCurrencyBulkPrice": "12.96",
                "actSkuMultiCurrencyCalPrice": "13.64",
                "actSkuMultiCurrencyDisplayPrice": "13.64",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.64",
                    "value": 13.64
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.74",
                    "value": 22.74
                },
                "skuBulkCalPrice": "21.6",
                "skuCalPrice": "22.74",
                "skuDisplayBulkPrice": "US $21.60",
                "skuMultiCurrencyBulkPrice": "21.60",
                "skuMultiCurrencyCalPrice": "22.74",
                "skuMultiCurrencyDisplayPrice": "22.74"
            }
        }, {
            "skuAttr": "14:193#Green ;5:361386;200007763:201336106",
            "skuId": 10000010474153769,
            "skuIdStr": "10000010474153769",
            "skuPropIds": "193,361386,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.37",
                "actSkuCalPrice": "10.91",
                "actSkuDisplayBulkPrice": "US $10.37",
                "actSkuMultiCurrencyBulkPrice": "10.37",
                "actSkuMultiCurrencyCalPrice": "10.91",
                "actSkuMultiCurrencyDisplayPrice": "10.91",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.91",
                    "value": 10.91
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.19",
                    "value": 18.19
                },
                "skuBulkCalPrice": "17.28",
                "skuCalPrice": "18.19",
                "skuDisplayBulkPrice": "US $17.28",
                "skuMultiCurrencyBulkPrice": "17.28",
                "skuMultiCurrencyCalPrice": "18.19",
                "skuMultiCurrencyDisplayPrice": "18.19"
            }
        }, {
            "skuAttr": "14:193#Green ;5:200000991;200007763:201336100",
            "skuId": 10000010474153770,
            "skuIdStr": "10000010474153770",
            "skuPropIds": "193,200000991,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.72",
                "actSkuCalPrice": "14.44",
                "actSkuDisplayBulkPrice": "US $13.72",
                "actSkuMultiCurrencyBulkPrice": "13.72",
                "actSkuMultiCurrencyCalPrice": "14.44",
                "actSkuMultiCurrencyDisplayPrice": "14.44",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $14.44",
                    "value": 14.44
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $24.07",
                    "value": 24.07
                },
                "skuBulkCalPrice": "22.87",
                "skuCalPrice": "24.07",
                "skuDisplayBulkPrice": "US $22.87",
                "skuMultiCurrencyBulkPrice": "22.87",
                "skuMultiCurrencyCalPrice": "24.07",
                "skuMultiCurrencyDisplayPrice": "24.07"
            }
        }, {
            "skuAttr": "14:193#Green ;5:200000991;200007763:201336106",
            "skuId": 10000010474153771,
            "skuIdStr": "10000010474153771",
            "skuPropIds": "193,200000991,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.98",
                "actSkuCalPrice": "11.56",
                "actSkuDisplayBulkPrice": "US $10.98",
                "actSkuMultiCurrencyBulkPrice": "10.98",
                "actSkuMultiCurrencyCalPrice": "11.56",
                "actSkuMultiCurrencyDisplayPrice": "11.56",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.56",
                    "value": 11.56
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $19.26",
                    "value": 19.26
                },
                "skuBulkCalPrice": "18.3",
                "skuCalPrice": "19.26",
                "skuDisplayBulkPrice": "US $18.30",
                "skuMultiCurrencyBulkPrice": "18.30",
                "skuMultiCurrencyCalPrice": "19.26",
                "skuMultiCurrencyDisplayPrice": "19.26"
            }
        }, {
            "skuAttr": "14:193#Green ;5:200000990;200007763:201336100",
            "skuId": 10000010474153772,
            "skuIdStr": "10000010474153772",
            "skuPropIds": "193,200000990,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.28",
                "actSkuCalPrice": "13.99",
                "actSkuDisplayBulkPrice": "US $13.28",
                "actSkuMultiCurrencyBulkPrice": "13.28",
                "actSkuMultiCurrencyCalPrice": "13.99",
                "actSkuMultiCurrencyDisplayPrice": "13.99",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.99",
                    "value": 13.99
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.31",
                    "value": 23.31
                },
                "skuBulkCalPrice": "22.14",
                "skuCalPrice": "23.31",
                "skuDisplayBulkPrice": "US $22.14",
                "skuMultiCurrencyBulkPrice": "22.14",
                "skuMultiCurrencyCalPrice": "23.31",
                "skuMultiCurrencyDisplayPrice": "23.31"
            }
        }, {
            "skuAttr": "14:193#Green ;5:200000990;200007763:201336106",
            "skuId": 10000010474153773,
            "skuIdStr": "10000010474153773",
            "skuPropIds": "193,200000990,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.63",
                "actSkuCalPrice": "11.19",
                "actSkuDisplayBulkPrice": "US $10.63",
                "actSkuMultiCurrencyBulkPrice": "10.63",
                "actSkuMultiCurrencyCalPrice": "11.19",
                "actSkuMultiCurrencyDisplayPrice": "11.19",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.19",
                    "value": 11.19
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.65",
                    "value": 18.65
                },
                "skuBulkCalPrice": "17.72",
                "skuCalPrice": "18.65",
                "skuDisplayBulkPrice": "US $17.72",
                "skuMultiCurrencyBulkPrice": "17.72",
                "skuMultiCurrencyCalPrice": "18.65",
                "skuMultiCurrencyDisplayPrice": "18.65"
            }
        }, {
            "skuAttr": "14:193#Green ;5:4183;200007763:201336100",
            "skuId": 10000010474153774,
            "skuIdStr": "10000010474153774",
            "skuPropIds": "193,4183,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:193#Green ;5:4183;200007763:201336106",
            "skuId": 10000010474153775,
            "skuIdStr": "10000010474153775",
            "skuPropIds": "193,4183,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }, {
            "skuAttr": "14:193#Green ;5:361385;200007763:201336100",
            "skuId": 10000010474153760,
            "skuIdStr": "10000010474153760",
            "skuPropIds": "193,361385,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.06",
                "actSkuCalPrice": "13.75",
                "actSkuDisplayBulkPrice": "US $13.06",
                "actSkuMultiCurrencyBulkPrice": "13.06",
                "actSkuMultiCurrencyCalPrice": "13.75",
                "actSkuMultiCurrencyDisplayPrice": "13.75",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.75",
                    "value": 13.75
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.91",
                    "value": 22.91
                },
                "skuBulkCalPrice": "21.76",
                "skuCalPrice": "22.91",
                "skuDisplayBulkPrice": "US $21.76",
                "skuMultiCurrencyBulkPrice": "21.76",
                "skuMultiCurrencyCalPrice": "22.91",
                "skuMultiCurrencyDisplayPrice": "22.91"
            }
        }, {
            "skuAttr": "14:193#Green ;5:361385;200007763:201336106",
            "skuId": 10000010474153761,
            "skuIdStr": "10000010474153761",
            "skuPropIds": "193,361385,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.45",
                "actSkuCalPrice": "11.00",
                "actSkuDisplayBulkPrice": "US $10.45",
                "actSkuMultiCurrencyBulkPrice": "10.45",
                "actSkuMultiCurrencyCalPrice": "11.0",
                "actSkuMultiCurrencyDisplayPrice": "11.00",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.00",
                    "value": 11.0
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.33",
                    "value": 18.33
                },
                "skuBulkCalPrice": "17.41",
                "skuCalPrice": "18.33",
                "skuDisplayBulkPrice": "US $17.41",
                "skuMultiCurrencyBulkPrice": "17.41",
                "skuMultiCurrencyCalPrice": "18.33",
                "skuMultiCurrencyDisplayPrice": "18.33"
            }
        }, {
            "skuAttr": "14:193#Green ;5:100014065;200007763:201336100",
            "skuId": 10000010474153762,
            "skuIdStr": "10000010474153762",
            "skuPropIds": "193,100014065,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.19",
                "actSkuCalPrice": "13.88",
                "actSkuDisplayBulkPrice": "US $13.19",
                "actSkuMultiCurrencyBulkPrice": "13.19",
                "actSkuMultiCurrencyCalPrice": "13.88",
                "actSkuMultiCurrencyDisplayPrice": "13.88",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.88",
                    "value": 13.88
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.14",
                    "value": 23.14
                },
                "skuBulkCalPrice": "21.98",
                "skuCalPrice": "23.14",
                "skuDisplayBulkPrice": "US $21.98",
                "skuMultiCurrencyBulkPrice": "21.98",
                "skuMultiCurrencyCalPrice": "23.14",
                "skuMultiCurrencyDisplayPrice": "23.14"
            }
        }, {
            "skuAttr": "14:193#Green ;5:100014065;200007763:201336106",
            "skuId": 10000010474153763,
            "skuIdStr": "10000010474153763",
            "skuPropIds": "193,100014065,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.55",
                "actSkuCalPrice": "11.11",
                "actSkuDisplayBulkPrice": "US $10.55",
                "actSkuMultiCurrencyBulkPrice": "10.55",
                "actSkuMultiCurrencyCalPrice": "11.11",
                "actSkuMultiCurrencyDisplayPrice": "11.11",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.11",
                    "value": 11.11
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.51",
                    "value": 18.51
                },
                "skuBulkCalPrice": "17.58",
                "skuCalPrice": "18.51",
                "skuDisplayBulkPrice": "US $17.58",
                "skuMultiCurrencyBulkPrice": "17.58",
                "skuMultiCurrencyCalPrice": "18.51",
                "skuMultiCurrencyDisplayPrice": "18.51"
            }
        }, {
            "skuAttr": "14:193#Green ;5:100014064;200007763:201336100",
            "skuId": 10000010474153764,
            "skuIdStr": "10000010474153764",
            "skuPropIds": "193,100014064,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "12.96",
                "actSkuCalPrice": "13.64",
                "actSkuDisplayBulkPrice": "US $12.96",
                "actSkuMultiCurrencyBulkPrice": "12.96",
                "actSkuMultiCurrencyCalPrice": "13.64",
                "actSkuMultiCurrencyDisplayPrice": "13.64",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.64",
                    "value": 13.64
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $22.74",
                    "value": 22.74
                },
                "skuBulkCalPrice": "21.6",
                "skuCalPrice": "22.74",
                "skuDisplayBulkPrice": "US $21.60",
                "skuMultiCurrencyBulkPrice": "21.60",
                "skuMultiCurrencyCalPrice": "22.74",
                "skuMultiCurrencyDisplayPrice": "22.74"
            }
        }, {
            "skuAttr": "14:193#Green ;5:100014064;200007763:201336106",
            "skuId": 10000010474153765,
            "skuIdStr": "10000010474153765",
            "skuPropIds": "193,100014064,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.37",
                "actSkuCalPrice": "10.91",
                "actSkuDisplayBulkPrice": "US $10.37",
                "actSkuMultiCurrencyBulkPrice": "10.37",
                "actSkuMultiCurrencyCalPrice": "10.91",
                "actSkuMultiCurrencyDisplayPrice": "10.91",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $10.91",
                    "value": 10.91
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.19",
                    "value": 18.19
                },
                "skuBulkCalPrice": "17.28",
                "skuCalPrice": "18.19",
                "skuDisplayBulkPrice": "US $17.28",
                "skuMultiCurrencyBulkPrice": "17.28",
                "skuMultiCurrencyCalPrice": "18.19",
                "skuMultiCurrencyDisplayPrice": "18.19"
            }
        }, {
            "skuAttr": "14:193#Green ;5:4182;200007763:201336100",
            "skuId": 10000010474153766,
            "skuIdStr": "10000010474153766",
            "skuPropIds": "193,4182,201336100",
            "skuVal": {
                "actSkuBulkCalPrice": "13.12",
                "actSkuCalPrice": "13.81",
                "actSkuDisplayBulkPrice": "US $13.12",
                "actSkuMultiCurrencyBulkPrice": "13.12",
                "actSkuMultiCurrencyCalPrice": "13.81",
                "actSkuMultiCurrencyDisplayPrice": "13.81",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $13.81",
                    "value": 13.81
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $23.01",
                    "value": 23.01
                },
                "skuBulkCalPrice": "21.86",
                "skuCalPrice": "23.01",
                "skuDisplayBulkPrice": "US $21.86",
                "skuMultiCurrencyBulkPrice": "21.86",
                "skuMultiCurrencyCalPrice": "23.01",
                "skuMultiCurrencyDisplayPrice": "23.01"
            }
        }, {
            "skuAttr": "14:193#Green ;5:4182;200007763:201336106",
            "skuId": 10000010474153767,
            "skuIdStr": "10000010474153767",
            "skuPropIds": "193,4182,201336106",
            "skuVal": {
                "actSkuBulkCalPrice": "10.49",
                "actSkuCalPrice": "11.05",
                "actSkuDisplayBulkPrice": "US $10.49",
                "actSkuMultiCurrencyBulkPrice": "10.49",
                "actSkuMultiCurrencyCalPrice": "11.05",
                "actSkuMultiCurrencyDisplayPrice": "11.05",
                "availQuantity": 100,
                "bulkOrder": 2,
                "inventory": 100,
                "isActivity": true,
                "optionalWarrantyPrice": [],
                "skuActivityAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $11.05",
                    "value": 11.05
                },
                "skuAmount": {
                    "currency": "USD",
                    "formatedAmount": "US $18.41",
                    "value": 18.41
                },
                "skuBulkCalPrice": "17.49",
                "skuCalPrice": "18.41",
                "skuDisplayBulkPrice": "US $17.49",
                "skuMultiCurrencyBulkPrice": "17.49",
                "skuMultiCurrencyCalPrice": "18.41",
                "skuMultiCurrencyDisplayPrice": "18.41"
            }
        }],
        "warrantyDetailJson": "[]"
    },
    "specsModule": {
        "features": {},
        "i18nMap": {},
        "id": 0,
        "name": "SpecsModule",
        "props": [{
            "attrName": "Brand Name",
            "attrNameId": 2,
            "attrValue": "WHooHoo",
            "attrValueId": "203386004"
        }, {
            "attrName": "Clothing Length",
            "attrNameId": 200000303,
            "attrValue": "Long",
            "attrValueId": "1875"
        }, {
            "attrName": "Type",
            "attrNameId": 351,
            "attrValue": "Slim",
            "attrValueId": "200005966"
        }, {
            "attrName": "Collar",
            "attrNameId": 200000457,
            "attrValue": "NONE",
            "attrValueId": "200661040"
        }, {
            "attrName": "Closure Type",
            "attrNameId": 200000306,
            "attrValue": "zipper",
            "attrValueId": "6830"
        }, {
            "attrName": "Style",
            "attrNameId": 326,
            "attrValue": "Casual",
            "attrValueId": "200000072"
        }, {
            "attrName": "Sleeve Length(cm)",
            "attrNameId": 100007732,
            "attrValue": "Full",
            "attrValueId": "200001500"
        }, {
            "attrName": "Sleeve Style",
            "attrNameId": 200000362,
            "attrValue": "REGULAR",
            "attrValueId": "200013017"
        }, {
            "attrName": "Model Number",
            "attrNameId": 3,
            "attrValue": "Women Coat",
            "attrValueId": "-1"
        }, {
            "attrName": "Thickness",
            "attrNameId": 200001085,
            "attrValue": "STANDARD",
            "attrValueId": "200005943"
        }, {
            "attrName": "Hooded",
            "attrNameId": 200001031,
            "attrValue": "Yes",
            "attrValueId": "200005296"
        }, {
            "attrName": "Material",
            "attrNameId": 10,
            "attrValue": "Polyester",
            "attrValueId": "48"
        }, {
            "attrName": "Decoration",
            "attrNameId": 19150,
            "attrValue": "Lace Up",
            "attrValueId": "200003812"
        }, {
            "attrName": "Pattern Type",
            "attrNameId": 200000329,
            "attrValue": "Solid",
            "attrValueId": "200001248"
        }]
    },
    "storeModule": {
        "buyerAdminSeq": 2600646147,
        "companyId": 242161179,
        "countryCompleteName": "China",
        "detailPageUrl": "//www.aliexpress.com/item/4000900052700.html",
        "esRetailOrConsignment": false,
        "features": {},
        "feedbackMessageServer": "//message.aliexpress.com",
        "feedbackServer": "//feedback.aliexpress.com",
        "followed": false,
        "followingNumber": 1461,
        "hasStore": true,
        "hasStoreHeader": true,
        "hideCustomerService": false,
        "i18nMap": {
            "COUSTOMER_SERVICE": "Customer Service",
            "VISIT_STORE": "Visit Store",
            "CONTACT_SELLER": "Contact",
            "FOLLOWING_STATE": "Following",
            "UNFOLLOWING_STATE": "Follow",
            "POSITIVE_FEEDBACK": "Positive Feedback",
            "FOLLOWERS": "Followers",
            "FOLLOWER": "Follower",
            "TOP_SELLER": "Top Brands",
            "STORE_CATEGORIES": "Store Categories"
        },
        "id": 0,
        "name": "StoreModule",
        "openTime": "Apr 24, 2018",
        "openedYear": 2,
        "positiveNum": 2855,
        "positiveRate": "89.6%",
        "productId": 4000900052700,
        "sellerAdminSeq": 232969202,
        "sessionId": "c40bF7QyEV4CASVv4MihkWzO",
        "siteType": "glo",
        "storeName": "Goldbana Store",
        "storeNum": 4045042,
        "storeURL": "//www.aliexpress.com/store/4045042",
        "topBrandDescURL": "https://sale.aliexpress.com/topbrand.htm",
        "topRatedSeller": false
    },
    "titleModule": {
        "features": {},
        "feedbackRating": {
            "averageStar": "0.0",
            "averageStarRage": "0.0",
            "display": false,
            "evarageStar": "0.0",
            "evarageStarRage": "0.0",
            "fiveStarNum": 0,
            "fiveStarRate": "0",
            "fourStarNum": 0,
            "fourStarRate": "0",
            "oneStarNum": 0,
            "oneStarRate": "0",
            "positiveRate": "0.0",
            "threeStarNum": 0,
            "threeStarRate": "0",
            "totalValidNum": 0,
            "trialReviewNum": 0,
            "twoStarNum": 0,
            "twoStarRate": "0"
        },
        "formatTradeCount": "4",
        "i18nMap": {
            "REVIEWS": "Reviews",
            "VIEW_ALL_REVIEWS": "View All Reviews",
            "REVIEW": "Review",
            "VIEW_OTHER_TITLE": "View title in multi-language (machine translated)",
            "VIEW_EN_TITLE": "View original title in English",
            "FREEBIE_REVIEW": "Review Of Freebies ",
            "FREEBIE_REVIEWS": "Reviews Of Freebies "
        },
        "id": 0,
        "name": "TitleModule",
        "orig": false,
        "origTitle": false,
        "subject": "Women Solid Rain Jacket Outdoor Plus Size Waterproof Hooded Windproof Loose Coat Autumn Winter Fashion Jacket Coat Women#T2",
        "tradeCount": 4,
        "tradeCountUnit": "orders",
        "trans": false,
        "transTitle": false
    },
    "webEnv": {
        "country": "BD",
        "currency": "USD",
        "env": {
            "valMap": {
                "g11n:locale": "en_US",
                "g11n:timezone": "",
                "ua:device": "pc",
                "user:id": "2600646147",
                "g11n:country": "BD",
                "page:name": "",
                "g11n:site": "glo",
                "page:app": "",
                "ua:browser": "chrome",
                "ua:platform": "other",
                "user:type": "buyer",
                "page:id": "item_html",
                "user:member": "",
                "g11n:currency": "USD"
            },
            "zone": "global_env"
        },
        "host": "www.aliexpress.com",
        "hostname": "ae-glodetail-web011134162166.us.ot7",
        "ip": "43.245.121.184",
        "lang": "en_US",
        "language": "en",
        "locale": "en_US",
        "reqHost": "https://www.aliexpress.com",
        "site": "glo"
    }
};
// data =main(url);
// console.log("-------------------------------------------");
// // console.log(data.pageModule.description);
// console.log(data);
//console.log("Title : "+data.titleModule.subject);
// console.log("Discount Price : "+data.priceModule.formatedActivityPrice);
// console.log("New Price : "+data.priceModule.formatedPrice);
// console.log("Available Quantity : "+data.actionModule.totalAvailQuantity);
//
// console.log(data.skuModule.name);
//  console.log(data.skuModule.productSKUPropertyList.length);
// //color
//   console.log(data.skuModule.productSKUPropertyList[0].skuPropertyName);
//   console.log(data.skuModule.productSKUPropertyList[0].skuPropertyValues.length);
//
//   console.log(data.skuModule.productSKUPropertyList[0].skuPropertyValues[0].skuPropertyImagePath);
// //size
//   console.log(data.skuModule.productSKUPropertyList[1].skuPropertyName);
//   console.log(data.skuModule.productSKUPropertyList[1].skuPropertyValues.length);
//
// //shipform
//   console.log(data.skuModule.productSKUPropertyList[2].skuPropertyName);
//   console.log(data.skuModule.productSKUPropertyList[2].skuPropertyValues.length);
//
// console.log("Properties: "+data.specsModule.props.length);
// console.log(data.skuModule.name);
