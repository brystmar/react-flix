import React, { useState } from 'react'
import { Form } from '../components'
import HeaderContainer from "../containers/header"

export default function Signin() {
    const [ error, setError ] = useState("")
    const [ emailAddress, setEmailAddress ] = useState("")
    const [ password, setPassword ] = useState("")
    const isInvalid = password === "" | emailAddress === ""

    function handleSignin(event) {
        event.preventDefault()
        // TODO: Authenticate via Firebase
    }

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>

                    <Form.Text>
                        New to React-Flix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by crossing your fingers and squinting really hard.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}
