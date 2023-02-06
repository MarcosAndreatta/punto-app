# Stage for installing the dependencies
FROM node:18 as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Stage for building the app
FROM node:18 as builder
WORKDIR /app
# Copies all the stuff to the working directory
COPY . .
# COpies the node_modules stuff that was generated in the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Stage for production
FROM node:18 as production
WORKDIR /app
ENV NODE_ENV production
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# We copy the stuff from the builder stage
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
