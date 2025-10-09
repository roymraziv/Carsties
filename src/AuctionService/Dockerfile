FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app
EXPOSE 80

# Copy csproj and restore as distinct layers
COPY Carsties.sln Carsties.sln
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj

RUN dotnet restore src/AuctionService/AuctionService.csproj

# Copy everything else and build
COPY . .
RUN dotnet publish src/AuctionService/AuctionService.csproj -c Release -o /app/publish

# Build runtime image
FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "AuctionService.dll"]