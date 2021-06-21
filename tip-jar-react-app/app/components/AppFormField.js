import React from 'react';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
       <>
         <AppTextInput 
            //autoCapitalize="none"
            //autoCorrect={false}
            //icon="email"
            //keyboardType="email-address"
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
            //placeholder="Email"
            //textContentType="emailAddress"
        />
            {touched[name] && <ErrorMessage error={errors[name]} />}
       </>
    );
}

export default AppFormField;