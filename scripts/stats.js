(function (host, sudo, table) {
    fetch(`${host}/sudo?table=${table}`, {
        headers: {
            'X-Auth-Token': sudo
        }
    })
        .then(res => res.json())
        .then(json => console.log(json))

})('http://ec2-13-126-206-194.ap-south-1.compute.amazonaws.com:80','no-homo-homo', 'users')

//python ./scripts/stats.py -s ec2-13-126-206-194.ap-south-1.compute.amazonaws.com:80 users