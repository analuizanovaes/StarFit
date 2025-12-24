lucide.createIcons();

const modal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const actionBtn = document.getElementById('modalActionBtn');

function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 100; // Quantidade de estrelas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posição e tamanho aleatórios
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

// Inicia quando a página carregar
window.addEventListener('load', createStars);

function openLogin() {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    modalTitle.innerText = 'Área do Aluno';
    modalTitle.style.color = 'white';
    actionBtn.className = 'btn-premium';
    actionBtn.style.background = 'white';
    actionBtn.style.color = 'black';
    actionBtn.innerText = 'Entrar';
}

function openRegister(type) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);

    if (type === 'premium') {
        modalTitle.innerText = 'Cadastro Premium 🌟';
        modalTitle.style.color = 'var(--premium-yellow)';
        actionBtn.className = 'btn-premium';
        actionBtn.innerText = 'Finalizar Premium';
        actionBtn.style.background = 'var(--premium-yellow)';
    } else {
        modalTitle.innerText = 'Cadastro Normal';
        modalTitle.style.color = 'var(--normal-purple)';
        actionBtn.className = 'btn-normal';
        actionBtn.innerText = 'Finalizar Matrícula';
        actionBtn.style.background = 'var(--normal-purple)';
        actionBtn.style.color = 'white';
    }
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}