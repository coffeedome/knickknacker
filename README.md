# DEVELOPER START HERE

# DB from scratch

docker-compose up -d
npx prisma migrate dev --name <migration name>

# Running app

npm run dev
