import consumer from "./consumer"

consumer.subscriptions.create("NotificationsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected to Notifications Channel');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log('Disconnected from Notifications Channel');
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('Notification Received: ' + data);
    // if (Notification.permission === 'granted') {
    //   var title = 'Push Notification'
    //   var body = data
    //   var options = { body: body }
    //   new Notification(title, options)
    // }
  }
});
