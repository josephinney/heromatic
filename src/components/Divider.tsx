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
        
        <div className="top-0 z-10 sticky w-full flex w-[1440px] h-[59px] px-[271px] py-[17px] justify-center items-center gap-[10px] shrink-0 bg-[#0073FA]">
            <p className="w-full h-auto text-white font-barlow text-[16px] not-italic font-semibold leading-[200%] text-center">No long waits, Our service is fast and adapts seamlessly to your current setup.</p>
        </div>

    )
}

export default Divider