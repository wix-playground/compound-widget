import * as React from 'react';

export const WidgetContext = React.createContext({
  activeMethod: '',
  setActiveMethod: (() => {}) as any,
});


export function useWidgetContext() {
  const context = React.useContext(WidgetContext);
  if (!context) {
    throw new Error(
      `Widget compound components cannot be rendered outside the Widget component`,
    )
  }
  return context
}
