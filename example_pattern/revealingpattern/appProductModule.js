/**
 * Created by Jefferson on 14/06/2017.
 */

var product = (function(){
    var product = [
        {
            name : 'Almofada',
            refs : 'AMD',
            category : 'Utils'
        },
        {
            name : 'Agua',
            refs : 'AG',
            category : 'Food'
        }
    ];

    //Cache DOM
    var $el = $('#productModule');
    var $btnAddProduct = $el.find('#addProduct');
    var $inputName = $el.find('#inputName');
    var $productList = $el.find('#productList');
    var template = $el.find('#product-template').html();


    //Bind Events
    $btnAddProduct.on('click', addProduct);
    $productList.on('click','button#deleteProduct', deleteProduct);

    _render();

    function _render() {

        var data = {
            product: product,
        };

        $productList.html(Mustache.render(template, data));
    }

    function addProduct (value) {
        var productClass = (typeof value === "object") ? value : { name : $inputName.val() };
        product.push(productClass);
        _render();
        $inputName.val('');
    }

    function deleteProduct (event) {
        var i;

        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('#record');
            i = $productList.find('.record').index($remove);
        }

        product.splice(i, 1);
        _render();
    }

    return {
        addProduct: addProduct,
        deleteProduct: deleteProduct
    };

})();