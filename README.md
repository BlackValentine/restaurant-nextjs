<!-- @format -->

## Install package/library for the project:

```bash
npm install
# or
yarn
```

## Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Add your database url to the env file

## I use postgresql for this application, change db_user, db_password, db_name as your configuration

```bash
DATABASE_URL="postgresql://db_user:db_password@localhost:5432/db_name?schema=public"
```

## To apply the data model to your PostgreSQL database, run the following commands:

```bash
npx prisma migrate dev --name init
```

## Generate the Prisma client to interact with your database:

```bash
npx prisma generate
```

## I have a button in the middle of screen for user quickly create a restaurant list.

## After click this button, a mock data will be stored to the database

# Function:

```bash
1. List restaurants
2. Add/remove favorite restaurant
```
