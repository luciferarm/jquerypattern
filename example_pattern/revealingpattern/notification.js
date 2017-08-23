var notification = (function (){
    var notification = [];

    var $notification = $('#notificationModule');
    var $notificationList = $notification.find('#notificationList');
    var template = $('#notification-template').html();

    //bind events
    mediator.subscribe('productMessageSuccess', showNotify);
    render();

    function render() {
        var data = {
            notification: notification,
        };

        $notificationList.html(Mustache.render(template, data));
    }

    function showNotify(newNotification) {
        notification.push({name : newNotification});

        if(notification.length > 3){
            notification.splice(0,1);
        }

        render();
    }

    function destroy() {
        $notification.remove();
        mediador.unsubscribe('productMessageSuccess', showNotify);
    }

    return {
        destroy : destroy
    }

})();