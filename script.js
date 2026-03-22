function show(id) {
    // إخفاء الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // إظهار الصفحة المطلوبة
    document.getElementById(id).classList.add('active');
    
    // العودة للأعلى بسلاسة
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function order(service) {
    const phone = "21627049943";
    const msg = encodeURIComponent("مرحباً، أريد طلب خدمة: " + service);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

function whatsapp() {
    window.open("https://wa.me/21627049943", "_blank");
}

function desc(text) {
    alert("ℹ️ " + text);
}

// لضمان عمل أزرار التنقل فوراً عند اللمس
document.addEventListener("DOMContentLoaded", function() {
    show('home');
});
