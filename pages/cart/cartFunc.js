const deleteItemBTN = document.querySelectorAll(".delete");
let totalPrice = document.querySelector(".price");
let alertBadge = document.querySelector(".alert");
totalPrice = 0;


// iterate thru all items and add the delete functionality when click on a button
for (let i = 0; i < deleteItemBTN.length; i++){

    deleteItemBTN[i].addEventListener("click", (e) => {
        let item = e.currentTarget;
        item.parentNode.classList.add("delete-effect")
        // show alert
        alertBadge.classList.add("show-alert")
        // settimeout to have the class take effect for .5 seconds
          setTimeout(function () {
              item.parentNode.parentNode.remove();   
          }, 500);
          setTimeout(function () {
            alertBadge.classList.remove("show-alert");
          }, 750);
       
    })
}