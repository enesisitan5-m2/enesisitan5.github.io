
document.getElementById("year").textContent = new Date().getFullYear();

// Demo form handler (mail göndermiyor). İstersen WhatsApp'a yönlendirir.
document.getElementById("leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get("name") || "";
  const phone = fd.get("phone") || "";
  const need = fd.get("need") || "";
  const note = fd.get("note") || "";
  const text = `Merhaba, ben ${name}. Telefon: ${phone}. İhtiyacım: ${need}. Not: ${note}`;
  const wa = "905445640167"; // kendi numaran
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, "_blank");
});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      document.getElementById("successMessage").style.display = "block";
      contactForm.reset();
    } else {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  });
}


