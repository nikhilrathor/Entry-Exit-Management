$(function () {
    let hostList = $('#hostdetails')
    let checkouttime
    let checkin = $('#checkin')
    let checkout = $('#checkout')

    fetchHosts(function (hosts) {
        hostList.empty()
        for (host of hosts) {
            hostList.append(createHostList(host))
        }
    })

    checkin.click(function () {
        let name = $('#name').val()
        let phoneno = $('#phoneno').val()
        let email = $('#email').val()
        let hostphoneno = document.getElementById("hostdetails").value
        let checkintime = new Date().toLocaleTimeString()

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
            addvisitor(
                name,
                phoneno,
                email,
                hostphoneno,
                checkintime,
                function (addedVisitor) {
                    if (typeof addedVisitor.name !== "undefined")
                        window.alert("Added " + addedVisitor.name + " to Database")
                    else
                        window.alert("Phone Number already registered to other visitor")
                }
            )
        }
    })

    checkout.click(function () {
        let name = $('#name').val()
        let phoneno = $('#phoneno').val()
        let email = $('#email').val()
        let hostphoneno = document.getElementById("hostdetails").value

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
            validate(
                name,
                phoneno,
                email,
                hostphoneno,
                function (valid) {
                    if(valid.toString() == "Hello")
                    {
                        removevisitor(
                            name,
                            phoneno,
                            email,
                            hostphoneno,
                            function (removedVisitor) {
                                if(removedVisitor === "1")
                                    window.alert("Removed from Database")
                            }
                        )
                    }
                    else
                    {
                        window.alert("Visitor Entry does'nt exist")
                    }
                }
            )
            
        }
    })


})