# Spare Credit Data Management System (CRUD)

โปรเจคจัดการข้อมูลสำหรับ Database `Spare_Credit` แบ่งเป็น 2 ส่วน คือ Frontend (React Vite) และ Backend (Node.js Express)

## โครงสร้างโปรเจค

- `frontend/`: ระบบ Frontend พัฒนาด้วย React (Vite) + Tailwind CSS + Lucide Icons
- `backend/`: ระบบ Backend พัฒนาด้วย Node.js + Express + MSSQL

---

## การตั้งค่าฐานข้อมูล (Database Setup)

ก่อนเริ่มการรันโปรเจค ให้เข้าไปตั้งค่าข้อมูลการเชื่อมต่อฐานข้อมูลของคุณที่ไฟล์:
📁 `backend/dbConfig.js`
ตรงส่วนที่มี `user:` และ `password:` ให้เปลี่ยนเป็นของคุณ (เช่น `sa` และรหัสผ่าน)

1.สร้างตาราง
📁 `สร้างตารางSpare_Credit_DLC.txt`
2.เพิ่มข้อมูลในตาราง
📁 `เพิ่มข้อมูลในตารางCom ex.txt`
3.เพิ่มข้อมูลในตาราง
📁 `เพิ่มข้อมูลในตารางBrand acc.txt`

---

## ขั้นตอนการติดตั้งและรัน Backend (backend)

1. เปิด Terminal ใหม่แล้วเข้าไปยังโฟลเดอร์ `backend`
   ```bash
   cd backend
   ```
2. ติดตั้ง Dependencies (Express, MSSQL, Cors)
   ```bash
   npm install
   ```
3. เริ่มรันเซิร์ฟเวอร์
   ```bash
   npm run dev
   # หรือรันด้วยคำสั่ง node backend.js
   ```
   > Backend จะเริ่มทำงานที่ `http://localhost:5000`

---

## ขั้นตอนการติดตั้งและรัน Frontend (frontend)

1. เปิด Terminal ใหม่อีก 1 หน้าต่าง แล้วเข้าไปยังโฟลเดอร์ `frontend`
   ```bash
   cd frontend
   ```
2. ติดตั้ง Dependencies (React, Tailwind CSS, Axios, Lucide-react)
   ```bash
   npm install
   ```
3. เริ่มรัน Frontend
   ```bash
   npm run dev
   ```
   > Frontend จะทำงานที่ `http://localhost:5173` (หรือตามที่ Vite กำหนด)
   > ผู้ใช้สามารถนำ URL ดังกล่าวไปเปิดในเบราว์เซอร์เพื่อใช้งานหน้าเว็บได้เลย
