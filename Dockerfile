# Studio Web Kilat - Dockerfile v1.0
# Fungsi: Jalanin Backend Python + Node.js dalam 1 wadah

# Step 1: Pake Python 3.11 sebagai base
FROM python:3.11-slim

# Step 2: Install Node.js juga di dalam 1 wadah
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

# Step 3: Set folder kerja
WORKDIR /app

# Step 4: Copy semua file ke dalam wadah
COPY .

# Step 5: Install semua library Python & Node
RUN pip install --no-cache-dir -r requirements.txt
RUN npm install

# Step 6: Buka port 3000 buat API
EXPOSE 3000

# Step 7: Perintah jalanin server
CMD ["npm", "run", "dev"]
