import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

/* linea 10, se crea una condicion que evalúa si se pasa un label, si así es, se crea un tag label, de lo contrario, no se renderiza nada, esto para selectivamente renderizar un label */
/* en className del label: con esta interpolacion digo que: el label siempre tendrá un className que se llama form-input-label, pero además, que le daré el className shrink si el usuario hace un input */