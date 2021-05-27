import * as React from 'react';
import { useWidgetContext } from './WidgetContext';

export default function PaymentMethodsList() {
  const { activeMethod, setActiveMethod } = useWidgetContext();
  const methods = ['Credit Card', 'PayPal', 'iDeal']; // get from store
  return (
    <div>
      PaymentMethodsList:
      <ul>
        {methods.map((method) => (
          <li key={method} onClick={() => setActiveMethod(method)}>
            <div style={{color: activeMethod === method ? 'red' : 'black' }}>
              {method}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
