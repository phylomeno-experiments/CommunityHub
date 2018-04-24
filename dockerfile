FROM microsoft/aspnetcore-build AS build-env
WORKDIR /app

COPY CoreApi/CoreApi.csproj ./CoreApi/CoreApi.csproj
RUN dotnet restore ./CoreApi/CoreApi.csproj

COPY CoreApi/* ./CoreApi/
RUN dotnet publish ./CoreApi/CoreApi.csproj -c Release -o dist

FROM microsoft/aspnetcore
WORKDIR /app
COPY --from=build-env /app/CoreApi/dist/* ./CoreApi/
ENTRYPOINT ["dotnet", "./CoreApi/CoreApi.dll"]
