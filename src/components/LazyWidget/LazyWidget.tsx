import * as React from 'react';

const Widget = React.lazy(() => (new Promise((res) => setTimeout(res, 2000))).then(() => import('../Widget/Widget')));
const PaymentMethodsList = React.lazy(() => (new Promise((res) => setTimeout(res, 2000))).then(() => import('../Widget/PaymentMethodsList')));
// const PaymentMethodScreen = React.lazy(() => (new Promise((res) => setTimeout(res, 2000))).then(() => import('../Widget/Widget')));
// const MandatoryFields = React.lazy(() => (new Promise((res) => setTimeout(res, 2000))).then(() => import('../Widget/Widget')));

export function LazyWidget(props: any) {

  return (
    <div>
      <React.Suspense fallback={(<div>...Loading...</div>)}>
        <Widget>
          {props.children}
        </Widget>
      </React.Suspense>
    </div>
  )
}

LazyWidget.PaymentMethodsList = PaymentMethodsList;
// LazyWidget.PaymentMethodScreen = PaymentMethodScreen;
// LazyWidget.MandatoryFields = MandatoryFields;
