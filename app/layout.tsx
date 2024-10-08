'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import './global.css';
import { useEffect, useState } from 'react';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [theme, setTheme] = useState<any>();
    useEffect(() => {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)'));
    }, []);

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {theme && theme.matches ? (
                    <link id="theme-css" href={`https://unpkg.com/primereact/resources/themes/lara-dark-indigo/theme.css`} rel="stylesheet"></link>
                ) : (
                    <link id="theme-css" href={`https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
                )}
            </head>
            <body>
                <PrimeReactProvider>
                    <LayoutProvider>
                        {/* <> */}

                        {children}
                        {/* </> */}
                    </LayoutProvider>
                </PrimeReactProvider>
            </body>
        </html>
    );
}
