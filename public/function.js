function addhost (name, phoneno, email, done) {
    $.post('/api/hosts', {
        name: name,
        phoneno: phoneno,
        email: email
    }, function (data) {
        done(data)
    })
}

function addvisitor (name, phoneno, email, hostphoneno, checkintime, done) {
    $.post('/api/visitors/checkin', {
        name: name,
        phoneno: phoneno,
        email: email,
        host: hostphoneno,
        checkintime: checkintime
    }, function (data) {
        done(data)
    })
}

function removevisitor (name, phoneno, email, hostphone, done) {
    $.post('/api/visitors/checkoutemail', {
        name: name,
        phoneno: phoneno,
        email: email,
        host: hostphone,
    }, function (data) {
        done(data)
    })
}

function validate(name, phoneno, email, hostphone, done){
    $.post('/api/visitors/validate', {
        name: name,
        phoneno: phoneno,
        email: email,
        host: hostphone,
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
    <option value="${host.phoneno}">
    <h2>${host.name}</h2><br>
    <h4>(${host.phoneno})</h4></option>`
        )
}