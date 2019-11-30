function addhost (name, phoneno, email, done) {
    $.post('/api/hosts', {
        name: name,
        phoneno: phoneno,
        email: email
    }, function (data) {
        done(data)
    })
}

function addvisitor (name, phoneno, email, hostname, done) {
    let hostphoneno,hostemail;
    fetchHosts(function (hosts) {
        for (host of hosts) {
            if(host.name === hostname){
                hostphoneno = host.phoneno
                hostemail = host.email
                break
            }
        }
    })
    console.log(hostphoneno, hostemail)

    $.post('/api/visitors/checkin', {
        name: name,
        phoneno: phoneno,
        email: email,
        host: hostname
    }, function (data) {
        done(data)
    })
}

function removevisitor (name, phoneno, email, hostname, done) {
    $.post('/api/visitors/checkout', {
        name: name,
        phoneno: phoneno,
        email: email,
        host: hostname
    }, function (data) {
        done(data)
    })
}

function fetchHosts (done) {
    $.get('/api/hosts', function (data) {
        done(data)
    })
}

function createHostList (host) {
    return $(`
    <option value="${host.name}">${host.name}</option>`
        )
}