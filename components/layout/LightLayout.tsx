import React, { FC, ReactNode } from "react"

interface LightLayoutProps {
children: ReactNode
}

export const LightLayout = ({ children }:LightLayoutProps) => {
    return (
        <div style={{
            backgroundColor: "#CCC",
            padding: "10px",
            borderRadius: "10px"
        }}>
            LightLayout
            {children}
        </div>
    )
}
