//Permission API
//The Permission API is a standard way to check the permission status of an API.
//
//You can check the status of a permission using permissions.query(). The status is either granted, denied or prompt (if you need to request the permission from the user).
//
//For example:

// Check for Geolocation API permissions. 
// Pass permission's name into method
// as 'permissionDescriptor' object. 
navigator.permissions
    .query({
        name: 'geolocation'
    })
    // The Promise resolves to
    // `permissionStatus' object 
    .then(function (permissionStatus) {
            // print state of geolocation permission
            console.log('geo permission 
                state is ', permissionStatus.state);
            });
        //You can also create an event handler for permissionStatus.onchange.
        //
        //Requesting permission from the user still depends on the specific API.
        //
        //Currently this API is only available in Chrome.

        //        Notifications API The Notifications API displays desktop notifications to the user and is a great way to alert the user of important events occurring in the application.
        //
        //        It would be annoying
        //        if any website could create notifications so the user must grant the notification API permission.
        //
        //        To check
        //        if the user has granted permission check the Notification.permission property:

        if (Notification.permission === "granted") {
            ...
        }
        //        To request permission to display notifications use Notification.requestPermission():

        Notification.requestPermission(
            function (permission) {
                if (permission === "granted") {
                    //notification logic
                }
                //            }); Once permission is granted you can create notifications:

                var notification =
                    new Notification("Hello");
                //The notification can be further customised by passing in options to set an icon or body text:

                var options = {
                    icon: anImage,
                    body: someText
                }
                var n = new Notification(title, options);

                //        Battery API The Battery API provides information about the system 's battery status, such as the current charge level, the time left to full charge and the battery time remaining.
                //
                //        The Battery API exposes event handlers
                //        for handling changes to the battery level, charging and discharging times.
                //
                //        The Battery API could be used to provide a low power mode of your application or to prompt a user to save information before the battery level reaches a critical level.
                //
                //        To monitor changes to the battery level:

                navigator.getBattery()

                    .then(function (battery) {

                        LogBatteryLevel();

                        battery.addEventListener(
                            'levelchange', LogBatteryLevel);

                        function LogBatteryLevel() {
                            var bat = battery.level * 100;
                            console.log(`Level: ${bat}%`);
                        }

                    });
                //Keep in mind that this API is currently available
                //        for Opera, Firefox and Chrome(Android version as well).
