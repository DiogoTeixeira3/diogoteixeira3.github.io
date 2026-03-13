// ============================================================
//  contact.js – Formspree form submission
// ============================================================

const FORMSPREE_ID = 'mvzbvqpb';

export function initContact() {
    const form   = document.getElementById('contactForm');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = this.querySelector('button[type="submit"]');
        btn.disabled    = true;
        btn.querySelector('span').textContent = 'Sending…';
        status.textContent = '';
        status.className   = '';

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method:  'POST',
                headers: { Accept: 'application/json' },
                body:    new FormData(this),
            });

            if (res.ok) {
                this.reset();
                status.textContent = '✓ Message sent!';
                status.className   = 'fs-ok';
            } else {
                const data = await res.json();
                const err  = data.errors
                    ? data.errors.map(x => x.message).join(', ')
                    : 'Something went wrong.';
                status.textContent = `✗ ${err}`;
                status.className   = 'fs-err';
            }
        } catch {
            status.textContent = '✗ Network error – please try again.';
            status.className   = 'fs-err';
        } finally {
            btn.disabled = false;
            btn.querySelector('span').textContent = 'Send Message';
        }
    });
}