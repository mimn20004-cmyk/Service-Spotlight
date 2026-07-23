const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const bookBtn = document.querySelector(".book-btn");
const openBtn = document.querySelector(".open-modal-btn");

let autoCloseTimer;

// فتح الـ Modal
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    // إعادة تشغيل الـ Animation
    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    startAutoClose();
}

// غلق الـ Modal
function closeModal() {
    modal.classList.remove("show");

    setTimeout(() => {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }, 300);

    clearTimeout(autoCloseTimer);
}

// بدء عداد الإغلاق التلقائي
function startAutoClose() {
    clearTimeout(autoCloseTimer);

    autoCloseTimer = setTimeout(() => {
        closeModal();
    }, 10000);
}

// =============================
// Events
// =============================

// فتح بعد ثانية من تحميل الصفحة
window.addEventListener("load", () => {
    setTimeout(openModal, 2500);
});

// زر الإغلاق
closeBtn.addEventListener("click", closeModal);

// الضغط خارج الـ Modal
overlay.addEventListener("click", closeModal);

// زر ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// زر Book Now
bookBtn.addEventListener("click", () => {

    alert("Thank you for your interest! Booking will be available soon.");

    // لو عندك صفحة حجز حقيقية استخدم السطر ده بدلاً من الـ alert:
    // window.location.href = "booking.html";

    closeModal();
});

// إيقاف المؤقت عند المرور بالماوس على الـ Modal
modal.addEventListener("mouseenter", () => {
    clearTimeout(autoCloseTimer);
});

// إعادة تشغيل المؤقت عند الخروج بالماوس
modal.addEventListener("mouseleave", () => {
    startAutoClose();
});

openBtn.addEventListener("click", openModal);
