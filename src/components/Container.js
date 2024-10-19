import React from 'react';
import Alert from "react-bootstrap/Alert";

export default function ContainerNew()  {
    return (
        <div>
            <>
                {[
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].map((variant) => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
            </>

        </div>
    );
};


