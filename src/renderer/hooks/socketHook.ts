/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

import { createSocketConnection } from '../services/socketService';
// import { useAppContext } from '@myapp/app-context';

function listen(
  callBack: (payload: any) => void,
  channel: string,
  event: string,
) {
  window.Echo.channel('channel-name').listen(
    'ProductCreated',
    (payload: any) => {
      // callBack(payload);
      console.log('received');
    },
  );

  return function cleanUp() {
    window.Echo.leaveChannel(`private-${channel}`);
  };
}

type Options = {
  type: 'ORDER_UPDATED' | 'ORDER_UPDATED_NOTICE' | 'NEW_ORDER';
  callBack: (payload: any) => void;
};

export const useSocket = ({ type, callBack }: Options) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    createSocketConnection('token');
    // eslint-disable-next-line default-case
    switch (type) {
      case 'NEW_ORDER': {
        return listen(callBack, `customer.orders`, '.new_order');
      }
      case 'ORDER_UPDATED': {
        return listen(callBack, `customer.orders`, '.order_updated');
      }
      case 'ORDER_UPDATED_NOTICE': {
        return listen(callBack, `customer.notice`, '.order_update_notice');
      }
    }
  });
};
