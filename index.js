const nzh = require("nzh")
const micro = require("micro")

module.exports = function (req, res) {
  if (req.url === '/') {
      micro.send(res, 200, 'try /123')
  }

  const num = req.url.replace('/', '')
  const parsed = nzh.cn.encodeB(num)
  micro.send(res, 200, parsed)
}
