FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json /opt/app
RUN npm install --quiet
RUN npm install typescript -g --quiet
RUN npm install nodemon -g --quiet
RUN npm install express -g --quiet
RUN npm install ts-node -g --quiet
COPY . .
RUN npm install
EXPOSE 8000
CMD npm run dev
# CMD nodemon -L --watch . app.js
