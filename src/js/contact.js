// ============================================================
//  Contact – Formspree form submission
//
//  To activate: sign up free at https://formspree.io, create a
//  form and replace YOUR_FORM_ID with the ID from your dashboard.
// ============================================================

const FORMSPREE_ID = 'YOUR_FORM_ID';

export function initContactForm() {
    const form   = document.getElementById('contactForm');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn     = this.querySelector('button[type="submit"]');
        const name    = document.getElementById('nome').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('mensagem').value.trim();

        if (!name || !email || !message) return;

        btn.textContent = 'Sending…';
        btn.disabled    = true;
        status.textContent = '';
        status.className   = '';

        if (FORMSPREE_ID === 'YOUR_FORM_ID') {
            status.textContent = '✗ Form not configured yet. Please set up Formspree.';
            status.className   = 'form-error';
            btn.textContent    = 'Send Message';
            btn.disabled       = false;
            return;
        }

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(this),
            });

            if (res.ok) {
                this.reset();
                status.textContent = "✓ Message sent! I'll get back to you soon.";
                status.className   = 'form-success';
            } else {
                const data = await res.json();
                const err  = data.errors
                    ? data.errors.map(x => x.message).join(', ')
                    : 'Something went wrong.';
                status.textContent = `✗ ${err}`;
                status.className   = 'form-error';
            }
        } catch {
            status.textContent = '✗ Network error – please try again.';
            status.className   = 'form-error';
        } finally {
            btn.textContent = 'Send Message';
            btn.disabled    = false;
        }
    });
}
