import React from 'react'

const AuthForm = ({ type }:{type: "sign-in" | "sign-up"}) => {
  return (
    <div>
        {type === 'sign-in' && (
            <div>sign in form</div>
        )}
        {type === 'sign-up' && (
            <div>sign up form</div>
        )}
    </div>
  )
}

export default AuthForm