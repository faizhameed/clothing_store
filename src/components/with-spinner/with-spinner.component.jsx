import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner =WrappedComponent =>({isLoading,...otherProps})=>{ 
    //high order component on for component and other its parameters
return isLoading ?(
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
):(
    <WrappedComponent {...otherProps} />
)
}
export default WithSpinner;