import React from 'react';
import './home.css';
import myImage from '/stdempimg.jpg'; // เปลี่ยนเป็นเส้นทางที่ถูกต้องของรูปภาพ

function Home() {
    return ( 
        <div className='home-container'>
            <h1 className='badge bg-dark'>แนะนำตัวเบื้องต้น</h1>
            <img src={myImage} alt="My Introduction" style={{ width: '200px', height: 'auto' }} />
            <p>สวัสดีครับ</p>
            <p>ผมชื่อ <strong>นายปริญญา เหมือนม่วง</strong> ชื่อเล่น <strong>ยา</strong></p>
            <p>กำลังศึกษาอยู่ที่ <strong>มหาวิทยาลัยศรีปทุม</strong> คณะ <strong>เทคโนโลยีสารสนเทศ</strong> สาขา <strong>วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</strong></p>
            <p>มีความสนใจในด้าน <strong>การเขียนโค้ด</strong></p>
            <p>ในเวลาว่างชอบ <strong>การนอน</strong> และ <strong>การเล่นเกม</strong></p>
            <p>เป้าหมายในอนาคตคือ <strong>การเรียนให้จบ</strong></p>
        </div>
    );
}

export default Home;
