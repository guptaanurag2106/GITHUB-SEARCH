function showData(){
    var org=document.getElementById("org").value;
    var n=document.getElementById("nrepo").value;
    var m=document.getElementById("mcom").value;
    console.log(org)
    console.log(n)
    console.log(m)
    var fork_count=[];

    var para1=document.getElementById("data")
    function def(data){
    for (i=0;i<n;i++)
        fork_count.push(data[i].forks)
    para1.innerHTML=data[0].full_name+"<br>"+fork_count
    
    console.log(fork_count)
    console.log(data)
    }
    var url="https://api.github.com/orgs/"+org+"/repos"
    fetch(url).then(res => res.json()).then(data => def(data))
    
}