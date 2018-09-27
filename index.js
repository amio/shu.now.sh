const nzh = require("nzh")
const micro = require("micro")

module.exports = function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=31536000')

  if (req.url === '/') {
      micro.send(res, 200, 'try /123')
  }

  const num = req.url.replace('/', '')
  const parsed = nzh.cn.encodeB(num)
  micro.send(res, 200, parsed)
}
