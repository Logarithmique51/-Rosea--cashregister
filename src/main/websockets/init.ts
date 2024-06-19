import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// declare global {
//   interface Window {
//     Pusher: any;
//     Echo: Echo;
//   }
// }

// window.Pusher = Pusher;
// window.Echo = new Echo({
//   broadcaster: 'reverb',
//   key: 'ionyhphr1hj3znhnzkqr',
//   wsHost: 'localhost',
//   wsPort: '8080',
//   wssPort: '8080',
//   forceTLS: false,
//   enabledTransports: ['ws', 'wss'],
// });

// global.Echo.channel('channel-name').listen('ProductCreated', () => {
//   const date = new Date();
//   const hour = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   console.log(`${hour}:${min}:${sec}`);
//   console.log('received');
// });

console.log('---------------------------------');
console.log(global.Echo);
