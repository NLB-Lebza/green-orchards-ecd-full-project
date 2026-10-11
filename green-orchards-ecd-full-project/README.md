# Green Orchards ECD Center — Full Stack

Backend: ASP.NET Core Web API **.NET 10**, EF Core + SQL Server, DTOs, services, interfaces and manual validation.
Frontend: Angular 20 + SCSS.

## Backend
```powershell
cd EcdApi
dotnet restore
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```
Swagger: `https://localhost:7080/swagger`

## Frontend
Open another terminal:
```powershell
cd ecd-web
npm install
ng serve
```
Frontend: `http://localhost:4200`

## Database
Default SQL Server database: `GreenOrchardsEcdDb`.
Change `EcdApi/appsettings.json` if your SQL Server connection differs.

## API
POST `/api/Auth/register`
POST `/api/Auth/login`
GET/POST `/api/Programs`
GET/POST `/api/Enrollment`
GET/POST `/api/Gallery`

No Data Annotations and no FluentValidation are used. Passwords are hashed with BCrypt. JWT authorization is intentionally left as a later security phase.
