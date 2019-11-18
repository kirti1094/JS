var emailId = [];

function addEmailId() {
  var emailValue = document.getElementById("emailInput").value;
  for (var i = 0; i <= emailId.length; i++) {
    if (emailId[i] == emailValue) {
      alert("EmailId Already Exists in Database. Please Enter Unique EmailId!");
      return false;
    }
  }

  if (emailValue == "" || emailValue.length == 0) {
    alert("Please Enter an Email Address");
    return false; //stop the function since the value is empty.
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    alert("Please Enter Valid Email Address");
    return false;
  }

  emailId.push(emailValue);
  document.getElementById("email-Database").innerHTML +=
    "<tr><td><label class='container'><input type='checkbox'><span class='checkmark onlymainCheckbox'></span></label></td><td>" +
    emailId[emailId.length - 1] +
    "</td><td><span class='delete' onclick=deleteEmailId(this)><i class='fa fa-trash' style='font-size:medium;'></i></span></td></tr>";
  document.getElementById("emailInput").value = "";
}

function searchEmailId() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("emailSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("email-Database");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function deleteEmailId(e) {
  var table, tr, span, index;
  table = document.getElementById("email-Database");
  tr = table.getElementsByTagName("tr");
  e.className = "deleteElement";
  for (i = 1; i < tr.length; i++) {
    span = tr[i].getElementsByTagName("span");
    index = emailId.indexOf(tr[i].getElementsByTagName("td")[1].innerText);
    if (span[1].className == "deleteElement") {
      tr[i].parentNode.parentNode.removeChild(tr[i].parentNode);
      if (index > -1) {
        emailId.splice(index, 1);
      }
    }
  }
}

function showOnlyEnable() {
  var showCheckbox;
  showCheckbox = document.getElementById("emailShow");
  table = document.getElementById("email-Database");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    input = tr[i].getElementsByTagName("input")[0];
    if (!input.checked && showCheckbox.checked) {
      input.parentNode.parentNode.parentNode.style.display = "none";
    } else {
      input.parentNode.parentNode.parentNode.style.display = "";
      if (showCheckbox.checked) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    }
  }
}
