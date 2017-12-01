var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

const util = require("../util.js");

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

	// res.writeHead(200, {  
	//     'Content-Type': 'application/jpeg',  
	//     "Content-Disposition": "attachment;filename=img.jpeg;" //设置浏览器保存时的文件名称  
	// });  

	// res.writeHead(200, {  
	//     'Content-Type': 'application/jpeg',  
	//     "Content-Disposition": "attachment;filename=img.jpeg;" //设置浏览器保存时的文件名称  
	// }); 
	// res.write(dataBuffer);  
	// res.end();  

	var title = "小米与百度达成深度合作：IoT+AI，谁站谁的台？"
	var content = "据CoinMarketCap的数据，比特币在11月28日的交易中正式突破了1万美元，盘中最高达到了1.1万美元。这距离比特币突破8000美元不到一周，距离突破5000美元不到两个月。比特币价格在剧烈波动的一周后，于上周上涨50%，并且在本周再次加速，在1万美元的关口基本没有什么犹豫就一跃而过。这让多国央行十分无奈。"

	var mediaArr = ["123媒体","456媒体","789媒体"];

	res.render('index',{
		title,
		content,
		mediaArr
	});
});