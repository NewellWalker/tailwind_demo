FROM node:18-alpine
WORKDIR /tailwind_demo
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000