/**
 * Created by Jefferson on 14/06/2017.
 */
var project = {
    project: ['Almofada', 'Agua'],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function() {
        this.$el = $('#productModule');
        this.$addProduct = this.$el.find('#addProduct');
        this.$inputName = this.$el.find('#inputName');
        this.$productList = this.$el.find('#productList');
        this.template = this.$el.find('#product-template').html();

        console.log(this.$el,this.$addProduct,this.$inputName,this.$productList,this.template);
    },
    bindEvents: function() {
        this.$addProduct.on('click', this.addProduct.bind(this));
        this.$productList.delegate('a#deleteProduct', 'click', this.deleteProduct.bind(this));
    },
    render: function() {
        var data = {
            project: this.project,
        };
        this.$productList.html(Mustache.render(this.template, data));
    },
    addProduct: function() {
        //debugger;
        this.project.push(this.$inputName.val());
        this.render();
        this.$inputName.val('');
    },
    deleteProduct: function(event) {
        var $remove = $(event.target).closest('#record');
        var a = this.$productList.find('.record').index($remove);

        this.project.splice(a, 1);
        this.render();
    }

};

project.init();