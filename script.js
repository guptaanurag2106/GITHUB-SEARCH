function showData() {
    var org = document.getElementById("org").value;
    var n = document.getElementById("nrepo").value;
    var m = document.getElementById("mcom").value;

    var repo_list = [];
    var repo_name = [];
    var repo_url = [];
    var para1 = document.getElementById("data")

    const headers = {
        "Authorization": 'Token c6777076190c33e4d1bee37da656860e809a8846'
    }

    function compare(a, b) {
        if (a.forks < b.forks) {
            return 1;
        }
        if (a.forks > b.forks) {
            return -1;
        }
        return 0;
    }


    function def(data) {
        for (i = 0; i < data.length; i++) {
            repo_list.push(data[i]);
            repo_list.sort(compare);
        }
    }
    for (var j = 1; j < 70; j++) {
        var url = "https://api.github.com/orgs/" + org + "/repos?page=" + j.toString()
        fetch(url, {
            "method": "GET", "headers": headers
        }).then(res => res.json()).then(data => def(data))

    }

    console.log(repo_list)

}
