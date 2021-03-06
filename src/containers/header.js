import React from "react"
import { Header } from "../components"
import { routerPaths } from "../constants/routerPaths"

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo
                    to={routerPaths.home}
                    src="/images/misc/logo.svg"
                    alt="React-Flix Logo" />
                <Header.ButtonLink to={routerPaths.signin}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
