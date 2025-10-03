'use client'

import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string
}

export default function CarImage({imageUrl}: Props) {
    const[loading, setLoading] = useState(true);

    return (
        <Image
            src={imageUrl}
            alt='Image of car'
            fill
            className={`object cover duration-700 ease-in-out
                ${loading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
            priority={false}
            sizes="(min-width: 768px) 700px, 100vw" // 👈 optional, improves responsive behavior
            onLoad={() => setLoading(false)}
        />
    )
}
