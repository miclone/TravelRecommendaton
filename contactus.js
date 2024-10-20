function contactusthankyou() {
    const contactus_name = document.getElementById("contactus-name").value;
    const contactus_email = document.getElementById("contactus-email").value;
    if (contactus_name && contactus_email) {
        alert('Thank you for contacting us!');
        resetContactUsForm();
    }
}

function resetContactUsForm() {
    document.getElementById("contactus-name").value = "";
    document.getElementById("contactus-email").value = "";
    document.getElementById("contactus-telephone").value = "";
    document.getElementById("contactus-numberofpeople").value = "";
    document.getElementById("contactus-whentotrevel").value = "";
    document.getElementById("contactus-trevelduration").value = "";
    document.getElementById("contactus-favouriteplaces").value = "";
    document.getElementById("contactus-moredetails").value = "";
}