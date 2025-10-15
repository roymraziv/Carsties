'use client'

import { placeBidForAuction } from '@/app/actions/auctionActions';
import { useBidStore } from '@/hooks/useBidStore';
import { numberWithCommas } from '@/lib/numberWithComma';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type Props = {
    auctionId: string;
    highBid: number;
}

export default function BidForm({ auctionId, highBid }: Props) {
    const {register, handleSubmit, reset} = useForm();
    const addBid = useBidStore(state => state.addBid);

    function onSubmit(data: FieldValues) {
      if (data.amount <= highBid) {
        reset();
        return toast.error(`Your bid must be higher than $${numberWithCommas(highBid)}`);
      } 
        placeBidForAuction(auctionId, +data.amount).then(bid => {
            if (bid.error) {
              reset();
              throw bid.error;
            }
            addBid(bid);
            reset();
        }).catch(err => toast.error(err.message))
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center border-2 rounded-lg py-2'>
      <input type="number" {...register("amount")} 
        placeholder={`Enter your bid (Minimum: $${numberWithCommas(highBid + 1)})`} 
        className='input-custom'/>
      <button type="submit">Place Bid</button>
    </form>
  )
}
