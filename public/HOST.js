$(function (){
    let name = $('#name')
    let phoneno = $('#phoneno')
    let email = $('#email')
    let hostbtn = $('#hostbtn')

    hostbtn.click(function(){
        addhost(
            name.val(),
            phoneno.val(),
            email.val(),
            function (addedHost) {
                window.alert("Added " + addedHost.name + " to Database")
            }
        )
    })
})