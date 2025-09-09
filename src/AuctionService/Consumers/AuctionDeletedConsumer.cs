using System;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers;

public class AuctionDeletedConsumer : IConsumer<AuctionDeleted>
{
    public async Task Consume(ConsumeContext<AuctionDeleted> context)
    {
        Console.WriteLine("--> Consuming AuctionDeleted: " + context.Message.Id + "...");

        
    }

}
