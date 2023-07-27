import { LightLayout } from '../../components/layout/LightLayout'
import { MainLayout } from '../../components/layout/MainLayout'
import React, { ReactNode } from 'react'

export default function Pricing() {
    return (
        <>
            <h1>Pricing</h1>
        </>
    )
}

Pricing.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <LightLayout>
                {page}
            </LightLayout>
        </MainLayout>
    )
}
