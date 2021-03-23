# Definieren des Basis Docker Images
FROM node:14

# Erstellen des Anwendungsverzeichnisses
WORKDIR /usr/src/app

# Kopieren der Konfigurationsdateien
# package.json und package-lock.json
COPY package*.json ./

# Installieren der Abhängigkeiten
RUN npm install
# Alternativ im Produktivsystem:
# RUN npm install --production

# Kopieren der Quelltextdateien
COPY . .

# Freigeben des Ports, unter dem der 
# Express-Server läuft
EXPOSE 8001

# Starten des definierten npm-Scripts
CMD [ "npm", "start" ]
# Alternativ Starten im Debug-Modus
# CMD [ "npm", "start:debug" ]
