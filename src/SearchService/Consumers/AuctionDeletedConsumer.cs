using System;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionDeletedConsumer : IConsumer<AuctionDeleted>
{
    public Task Consume(ConsumeContext<AuctionDeleted> context)
    {
        Console.WriteLine("--> Consuming AuctionDeleted: " + context.Message.Id + "...");
        
        var result = DB.DeleteAsync<Item>(context.Message.Id);

        if (!result.IsCompletedSuccessfully)
        {
            throw new MessageException(typeof(AuctionDeleted), "Could not delete item in MongoDB");
        }
        return Task.CompletedTask;
    }
}
