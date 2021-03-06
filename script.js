function showData() {
    var org = document.getElementById("org").value;
    var n = document.getElementById("nrepo").value;
    var m = document.getElementById("mcom").value;

    var repo_list = [];
    var repo_name = [];
    var repo_url = [];
    var para1 = document.getElementById("data")
    var para2 = document.getElementById("data1")

    const headers = {
        "Authorization": 'Token d74198808d4c2adb0827864cec19fc9e0da27fe6'
    }

    function compare(a, b) {
        if (a[0] < b[0]) {
            return 1;
        }
        if (a[0] > b[0]) {
            return -1;
        }
        return 0;
    }
    var org_url = "https://github.com/" + org;
    var avatar_url = "https://api.github.com/orgs/" + org;
    fetch(avatar_url).then(res => res.json()).then(data => para1.innerHTML = "<img src='" + data.avatar_url + "' alt='avatar' width=70px> <br>" + "<a href='" + org_url + "' target='_blank'>" + data.name + "</a>"
    )


    function def(data) {
        for (i = 0; i < data.length; i++) {
            repo_list.push([data[i].forks, data[i].name]);

        }
        repo_list.sort(compare);
    }
    for (var j = 1; j < 70; j++) {
        var url = "https://api.github.com/orgs/" + org + "/repos?page=" + j.toString()
        fetch(url, {
            "method": "GET", "headers": headers
        }).then(res => res.json()).then(data => def(data))

    }

    console.log(repo_list)


    para2.innerHTML = repo_list
    // for (var i = 0; i < n; i++) {
    //     para2.innerHTML += repo_list[i][0]
    // }

}
