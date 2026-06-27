# Studio Web Kilat - Python Backend v1.0
# Dibuat oleh: Trimo Wawan
# Fungsi: API sederhana untuk Form Contact

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Biar bisa diakses dari frontend

@app.route('/')
def home():
    return jsonify({
        "brand": "Studio Web Kilat",
        "owner": "Trimo Wawan",
        "status": "API Aktif ⚡",
        "stack": "Python + Flask"
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    
    nama = data.get('nama')
    brand = data.get('brand')
    pesan = data.get('pesan')
    
    # Log ke console server
    print(f"Pesan Baru dari: {nama} | Brand: {brand} | Pesan: {pesan}")
    
    # Respon sukses
    return jsonify({
        "status": "success",
        "message": f"Terima kasih {nama}. Tim Studio Web Kilat akan WA Anda < 1 jam."
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
