import * as React from 'react';
import PaymentMethodsList from './PaymentMethodsList';
import { WidgetContext, useWidgetContext } from './WidgetContext';

// TODO: lazy!

export function Widget(props: any) {
  const [activeMethod, setActiveMethod] = React.useState('Credit Card');
  const [methods, setMethods] = React.useState(['Credit Card', 'PayPal', 'iDeal']);

  const value = React.useMemo(() => ({ activeMethod, setActiveMethod }), [activeMethod]);
  return (
    <div>
      <WidgetContext.Provider value={value}>
        {props.children}
      </WidgetContext.Provider>
    </div>
  );
};
Widget.displayName = 'Widget';

// const PaymentMethodsList: React.FC = () => {
//   const { activeMethod, setActiveMethod } = useWidgetContext();
//   const methods = ['Credit Card', 'PayPal', 'iDeal']; // get from store
//   return (
//     <div>
//       PaymentMethodsList:
//       <ul>
//         {methods.map((method) => (
//           <li key={method} onClick={() => setActiveMethod(method)}>
//             <div style={{color: activeMethod === method ? 'red' : 'black' }}>
//               {method}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

const MethodIcon:React.FC = () => {
  return (
    <img src="https://picsum.photos/32" alt="Lamp" width="32" height="32" />
  )
}

const PaymentMethodScreen:React.FC = () => {
  const { activeMethod } = useWidgetContext();
  const description = 'Click on Pay Now and pay!';

  return (
    <div>
      {'------------------'}
      <br />
      <MethodIcon />
      <br />
      {`Pay with ${activeMethod}`}
      <br />
      {description}
      <br />
      {'------------------'}
    </div>
  );
}

const MandatoryFields:React.FC = () => {
  const fields = ['name', 'email'];

  return (
    <div>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input id={field} />
        </div>
      ))}
    </div>
  );
}

const SubmitButton: React.FC = () => {
  const { activeMethod } = useWidgetContext();
  return (
    <button onClick={() => {
      console.log('PAY with', activeMethod);
    }}>Pay now!</button>
  );
}

Widget.PaymentMethodsList = PaymentMethodsList
Widget.PaymentMethodScreen = PaymentMethodScreen
Widget.MandatoryFields = MandatoryFields
Widget.SubmitButton = SubmitButton

export default Widget;
