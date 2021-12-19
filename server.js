console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`
            <!DOCTYPE html>
            <head>
                <link rel="stylesheet" href="/x">
            </head>
            <body>
                <h1>XKF</h1>
                <script src="/y"> </script>
            </body>
        `)
        response.end()
    } else if (path === '/x') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(`body{color: red;}`)
        response.end()
    } else if (path === "/y") {
        response.setHeader("Content-Type", "text/javascript;charset=utf-8");
        response.write(`console.log('JS内容')`);
        response.end();
    }
    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你访问的页面不存在 404`)
        response.end()
    }