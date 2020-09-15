$("#addToCart").on("click", function () {
    //get the input value
    itemName = $('#itemName').val();
    itemPrice = $('#itemPrice').val();
    $.post("/api/cart",

        {
            product_name: itemName,
            price: itemPrice
        },

        //on success
        success: function (data) {
            console.log("Item had successfully been added to cart!")
        },
        //on error
        error: function () {
            console.log("Item has not been added to cart!")
        }
    });
}