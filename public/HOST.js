$(function () {
    let hostbtn = $('#hostbtn')

    hostbtn.click(function () {

        let name = $('#name').val()
        let phoneno = $('#phoneno').val()
        let email = $('#email').val()

        if (name.length < 1) {
            window.alert("Name cannot be empty")
        }
        else if (phoneno.length < 1) {
            window.alert("Phone Number cannot be empty")
        }
        else if (!(phoneno.match(/^\d{10}$/))) {
            window.alert("Invalid Phone Number")
        }
        else if (email.length < 1) {
            window.alert("Email cannot be empty")
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            window.alert("Invalid Email")
        }
        else {
            addhost(
                name,
                phoneno,
                email,
                function (addedHost) {
                    if (typeof addedHost.name !== "undefined")
                        window.alert("Meeting Hosted for " + addedHost.name)
                    else
                        window.alert("Phone Number already registered to other host")
                }
            )
        }
    })
})