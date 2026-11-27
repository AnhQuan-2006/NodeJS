var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <html>
      <head>
        <title>Giới thiệu bản thân</title>
      </head>
      <body>
        <h1>GIỚI THIỆU BẢN THÂN</h1>
        <p>Họ và tên: Nguyễn Anh Quân</p>
        <p>Lớp: CĐ-CNTT18A</p>
      </body>
    </html>
  `);
}).listen(8080);