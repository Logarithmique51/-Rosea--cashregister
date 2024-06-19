/* eslint-disable import/prefer-default-export */
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
  interface Window {
    Pusher: any;
    Echo: Echo;
  }
}

window.Pusher = Pusher;

export function createSocketConnection(token: string) {
  if (!window.Echo) {
    window.Echo = new Echo({
      broadcaster: 'reverb',
      key: 'ionyhphr1hj3znhnzkqr',
      wsHost: 'localhost',
      wsPort: '8080',
      wssPort: '8080',
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
    });
  }
}
