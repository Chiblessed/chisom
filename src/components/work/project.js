'use client';
import React from 'react'

import Link from 'next/link';

export default function Project({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className=''>
            <h2>{title}</h2>
          
        </div>
    )
}