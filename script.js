lucide.createIcons();

const modal = document.getElementById('authModal');
const modalBox = document.getElementById('modalBox');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalSubTitle = document.getElementById('modalSubTitle');
const modalBtn = document.getElementById('modalActionBtn');
const themeBtn = document.getElementById('theme-toggler');
const html = document.documentElement;

// Campos
const fieldName = document.getElementById('field-name');
const fieldDob = document.getElementById('field-dob');
const fieldPhone = document.getElementById('field-phone');
const inputPhone = document.getElementById('inputPhone');
const inputPassword = document.getElementById('inputPassword');
const inputDob = document.getElementById('inputDob');
const passwordError = document.getElementById('password-error');
const eyeIcon = document.getElementById('eyeIcon'); // Ícone do olho

const imgModalPremium = 'imagens/modal-premium.png';
const imgModalNormal = 'imagens/modal-normal.png';
const imgModalLogin = 'imagens/modal-login.jpg';

// --- FUNÇÃO DO OLHINHO (MOSTRAR/ESCONDER SENHA) ---
function togglePassword() {
    const passInput = document.getElementById('inputPassword');
    const eyeBtn = document.getElementById('btn-eye'); // Pega o span que criamos

    if (passInput.type === "password") {
        // MOSTRAR SENHA
        passInput.type = "text";
        // Recria o ícone do zero como "eye-off" (olho riscado)
        eyeBtn.innerHTML = '<i data-lucide="eye-off"></i>';
    } else {
        // ESCONDER SENHA
        passInput.type = "password";
        // Recria o ícone do zero como "eye" (olho aberto)
        eyeBtn.innerHTML = '<i data-lucide="eye"></i>';
    }

    // Manda a biblioteca desenhar o novo ícone imediatamente
    lucide.createIcons();
}

// --- MÁSCARA TELEFONE ---
if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        if (value.length > 7) value = `${value.slice(0, 9)}-${value.slice(9)}`;
        e.target.value = value;
    });
}

// --- VALIDAÇÃO E ALERTS BONITOS (SweetAlert2) ---
function handleFormSubmit() {
    // LOGIN
    if (fieldName.style.display === 'none') {
        Swal.fire({
            title: 'Sucesso!',
            text: 'Login realizado com sucesso.',
            icon: 'success',
            confirmButtonColor: '#EAB308',
            background: '#fff',
            color: '#000'
        });
        closeModal();
        return;
    }

    // CADASTRO - Validação Idade
    const dobValue = inputDob.value;
    if (dobValue) {
        const dob = new Date(dobValue);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) { age--; }

        if (age > 120 || age < 0) {
            Swal.fire({
                title: 'Data Inválida',
                text: 'Por favor, insira uma idade válida.',
                icon: 'error',
                confirmButtonColor: '#EAB308'
            });
            return;
        }
    }

    // CADASTRO - Validação Senha
    const password = inputPassword.value;
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
        passwordError.style.display = 'block';
        inputPassword.style.border = '1px solid #ff4d4d';
        // Tremidinha no modal (opcional)
        modalBox.classList.add('shake');
        setTimeout(() => modalBox.classList.remove('shake'), 500);
        return;
    }

    passwordError.style.display = 'none';
    inputPassword.style.border = 'none';

    Swal.fire({
        title: 'Bem-vindo!',
        text: 'Cadastro realizado com sucesso na StarFit!',
        icon: 'success',
        confirmButtonColor: '#EAB308',
        iconColor: '#EAB308'
    });
    closeModal();
}

// ... (Resto do código igual: tema, openRegister, openLogin, closeModal, scrollReveal) ...
// Copie o restante do código anterior (Funções de Tema e Modais) aqui embaixo
// Lógica de Tema
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            html.removeAttribute('data-theme');
            themeBtn.innerHTML = '<i data-lucide="eye"></i>';
        } else {
            html.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i data-lucide="eye-off"></i>';
            createStars();
        }
        lucide.createIcons();
    });
}

function createStars() {
    const container = document.getElementById('stars-container');
    if (!container || container.children.length > 0) return;
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', Math.random());
        container.appendChild(star);
    }
}

function openRegister(type) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    fieldName.style.display = 'block';
    fieldDob.style.display = 'block';
    fieldPhone.style.display = 'block';
    passwordError.style.display = 'none';
    inputPassword.style.border = 'none';
    modalBtn.innerText = 'Finalizar Matrícula';
    modalBox.classList.remove('modal-theme-premium', 'modal-theme-normal');
    if (type === 'premium') {
        modalBox.classList.add('modal-theme-premium');
        modalImage.src = imgModalPremium;
        modalTitle.innerText = 'Hoje mesmo!';
        if (modalSubTitle) modalSubTitle.innerText = 'Matricule-se e comece';
    } else {
        modalBox.classList.add('modal-theme-normal');
        modalImage.src = imgModalNormal;
        modalTitle.innerText = 'Hoje mesmo!';
        if (modalSubTitle) modalSubTitle.innerText = 'Matricule-se e comece';
    }
}

function openLogin() {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    fieldName.style.display = 'none';
    fieldDob.style.display = 'none';
    fieldPhone.style.display = 'none';
    passwordError.style.display = 'none';
    modalBtn.innerText = 'Entrar';
    modalBox.classList.remove('modal-theme-normal');
    modalBox.classList.add('modal-theme-premium');
    modalImage.src = imgModalLogin;
    if (modalSubTitle) modalSubTitle.innerText = 'Bem-vindo de volta';
    modalTitle.innerText = 'Acesse sua conta';
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

window.onclick = function (event) {
    if (event.target == modal) closeModal();
}

if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom', distance: '40px', duration: 1000, delay: 200, reset: true
    });
    sr.reveal('.hero-text-content', { origin: 'left' });
    sr.reveal('.hero-image-wrapper', { origin: 'right' });
    sr.reveal('.discover-text', { origin: 'left' });
    sr.reveal('.discover-card', { origin: 'right' });
    sr.reveal('.feature-box', { interval: 200 });
    sr.reveal('.card.normal', { origin: 'left' });
    sr.reveal('.card.premium', { origin: 'bottom', delay: 400 });
    sr.reveal('.ia-highlight', { origin: 'right' });
}