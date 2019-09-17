import React from 'react';
import { toast } from 'react-toastify';

function Message({message}) {
  return (
    <div>
      {message}
    </div>
  );
}

const flashMessage = function flashMessage({message, status = 'success'}) {
  if (!window) return console.log('No window!');
  const component = <Message message={message} />;
  switch(status) {
    case 'success':
      toast.success(component, {hideProgressBar: true});
      break;
    case 'error':
      toast.error(component, {hideProgressBar: true});
      break;
    case 'info':
      toast.info(component, {hideProgressBar: true});
      break;
    default:
      toast.success(component, {hideProgressBar: true});
  }
};

export default flashMessage;
