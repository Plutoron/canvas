// function base64ToBuffer(data){
// 	let base64 = data.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
// 	return new Buffer(base64, 'base64'); //把base64码转成buffer对象，
// }

function base64ToBuffer(data){
	let base64 = data.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
	return new Buffer(base64, 'base64'); //把base64码转成buffer对象，
}

module.exports = {
	base64ToBuffer
};