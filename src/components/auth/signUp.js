import React, { useState } from 'react'

function SignUp() {

    const []

    const InputHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <form>
                <input
                    key='1'
                    onChange={(e) => InputHandler(e)}
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                />
                <input
                    key='2'
                    onChange={(e) => InputHandler(e)}
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <input
                    key='3'
                    onChange={(e) => InputHandler(e)}
                    name="password"
                    placeholder="Password"
                    type="password"
                />
            </form>
        </div>
    )
}

export default SignUp
