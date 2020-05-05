import Mock from 'mockjs'

const Random = Mock.Random

function getQueryVariable(variable, url) {
    var query = url.split("?")[1];
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
Mock.mock(/^api\/list.*/, (opt) => {
    let index = getQueryVariable("index", opt.url);
    let size = getQueryVariable("size", opt.url);
    return Mock.mock({
        'status|+1': 1,
        ['data|' + size]: [{
            "tid|+1": 1,
            "title": Random.natural(),
            "catalog": "index",
            "fav": 20,
            "created": '@date("yyyy-MM-dd hh:mm:ss")',
            "isEnd": "0",
            "answer": Random.integer(0, 100),
            "user": {
                "avatar": Random.image('200x100'),
                "name": "@cname",
                "isVip": Random.integer(0, 1),
                "level": Random.integer(1, 10)
            }
        }]
    })
})