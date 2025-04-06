"use client"
import React, { CSSProperties } from 'react'

function Divider() {

    const DividerStyles: Record<string, CSSProperties> = {

        dividerLayout: {
            display: 'flex',
            width: '1440px',
            height: '59px',
            padding: '17px 271px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: '0',
            background: 'var(--secondary-500-accent, #0073FA)'
        },

        dividerText: {
            color: 'var(--Shades-0, #FFF)',
            // leadingTrim: 'both',
            // textEdge: 'cap',

            /* Body/Large (semi bold) */
            fontFamily: 'Barlow',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '200%',
        }

    }

    return (

        <div className="top-0 z-10 sticky w-full flex justify-center items-center bg-[#0073FA] px-4 py-4">
            <p className="text-white font-barlow text-base sm:text-lg font-semibold leading-loose text-center max-w-screen-md">
                No long waits, Our service is fast and adapts seamlessly to your current setup.
            </p>
        </div>

    )
}

export default Divider