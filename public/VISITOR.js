$(function () {

    let name = $('#name')
    let phoneno = $('#phoneno')
    let email = $('#email')
    let hostList = $('#hostdetails')
    let hostname = document.getElementById("hostdetails");
    let checkin = $('#checkin')
    let checkout =$('#checkout')

    fetchHosts(function (hosts) {
        hostList.empty()
        for (host of hosts) {
            hostList.append(createHostList(host))
        }
    })

    checkin.click(function(){
        addvisitor(
            name.val(),
            phoneno.val(),
            email.val(),
            hostname.value,
            function (addedVisitor) {
                window.alert("Added " + addedVisitor.name + " to Database")
            }
        )
    })

    checkout.click(function(){
        removevisitor(
            name.val(),
            phoneno.val(),
            email.val(),
            hostname.value,
            function (removedVisitor) {
            window.alert("Removed from Database")
            }
        )
    })
    

})