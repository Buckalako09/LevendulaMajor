document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xvgrabkp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        alert("Üzenetét sikeresen elküldtük!");
        form.reset();
      } else {
        alert("Hiba történt az üzenet elküldésekor.");
      }
    } catch (error) {
      alert("Hálózati hiba történt.");
    }
  });
});
