import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Container, Button, Table } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return(
    <nav className="headbar">
      <NavLink to='/'
        className='link px-2' 
        style={({ isActive }) => {
          return {
          textDecoration: isActive ? "none" : "underline",
          };
        }}>หน้าแรก</NavLink>

      <NavLink to='/'
        className='link px-2' 
        style={({ isActive }) => {
          return {
          textDecoration: isActive ? "none" : "underline",
          };
        }}>ผู้จัดทำ</NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
    <Layout />
    <p className="textheadmenu">วิธีทำอาหารญี่ปุ่นยอดฮิต</p>
    <div className="block">
      <div className="blockmenu">
        <img className="imgmenu" src='https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2022/02/3-3.pngw3.webp' alt='salmon'></img>
        <h2 className="text">ซูชิหน้าปลาแซลมอน</h2>
        <h4 className="text">ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว</h4>
      <button type="button" class='btn btn-secondary btn-lg'>ดูวิธีทำ</button>
      </div>

      <div className="blockmenu">
        <img className="imgmenu" src='https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2022/02/5-3.pngw3.webp' alt='fishsaba'></img>
        <h2 className="text">ปลาซาบะย่างซอสเทริยากิ</h2>
        <h4 className="text">ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน</h4>
      <button type="button" class='btn btn-secondary btn-lg'>ดูวิธีทำ</button>
      </div>

      <div className="blockmenu">
        <img className="imgmenu" src='https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2022/03/1-34.jpgw3.webp' alt='geayza'></img>
        <h2 className="text">เกี๊ยวซ่า</h2>
        <h4 className="text">ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย</h4>
      <button type="button" class='btn btn-secondary btn-lg'>ดูวิธีทำ</button>
      </div>
    </div>
    </>
  );
}

function Contract() {
  return (
    <>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="headbar">
       <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/main" element={<Index/>} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
