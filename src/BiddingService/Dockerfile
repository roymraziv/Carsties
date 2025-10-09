FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy solution and project files with correct casing
COPY Carsties.sln ./
COPY src/BiddingService/BiddingService.csproj ./src/BiddingService/
COPY src/Contracts/Contracts.csproj ./src/Contracts/

# Restore dependencies with explicit path
RUN dotnet restore ./src/BiddingService/BiddingService.csproj

# Copy the rest of the code and build
COPY . .
RUN dotnet publish ./src/BiddingService/BiddingService.csproj -c Release -o /app/publish

# Use AMD64 for runtime as well
FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "BiddingService.dll"]