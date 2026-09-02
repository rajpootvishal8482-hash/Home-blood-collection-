function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
document.getElementById("date").min=new Date().toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const address=document.getElementById("address").value.trim();
  const service=document.getElementById("service").value;
  const date=document.getElementById("date").value;
  const time=document.getElementById("time").value;
  const notes=document.getElementById("notes").value.trim();
  const message=`Namaste, mujhe Home Collection book karna hai.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(phone)}%0A*Address:* ${encodeURIComponent(address)}%0A*Service:* ${encodeURIComponent(service)}%0A*Date:* ${encodeURIComponent(date)}%0A*Time:* ${encodeURIComponent(time)}%0A*Notes:* ${encodeURIComponent(notes||"N/A")}`;
  window.open(`https://wa.me/919876543210?text=${message}`,"_blank");
});