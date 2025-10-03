import React from 'react'
import CountdownTimer from './CountdownTimer'
import CarImage from './CarImage'
import { Auction } from '@/types'

type Props = {
    auction: Auction
}

export default function AuctionCard({ auction }: Props) {
    return (
        <a href="#">
            <div className="relative w-full bg-gray-200 aspect-video overflow-hidden rounded-lg">
                <CarImage imageUrl={auction.imageUrl}/>
                <div className='absolute left-2 bottom-2'>
                    <CountdownTimer auctionEnd={auction.auctionEnd}/>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h3 className='text-gray-700 font-semibold'>
                    {auction.make} {auction.model}
                </h3>
                <p className='font-semibold text-sm'>
                    {auction.year}
                </p>
            </div>
            
        </a>
    )
}
