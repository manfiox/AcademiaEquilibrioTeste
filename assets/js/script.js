/* ========================================
   ACADEMIA EQUILÍBRIO - JAVASCRIPT
   Desenvolvido por Caio Manfio
   ======================================== */

// ========== GERENCIAMENTO DE SCROLL ==========
let scrollLocks = new Set();

function lockScroll(lockId) {
    scrollLocks.add(lockId);
    document.body.style.overflow = 'hidden';
}

function unlockScroll(lockId) {
    scrollLocks.delete(lockId);
    if (scrollLocks.size === 0) {
        document.body.style.overflow = '';
    }
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Inicializar funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initFormValidation();
    initExperimentalPopup();
});

// ========== MOBILE MENU (Bootstrap) ==========
function initMobileMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    if (!navbarCollapse) {
        console.error('Menu Bootstrap não encontrado!');
        return;
    }
    
    // Fechar menu ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Bloquear scroll quando menu está aberto
    navbarCollapse.addEventListener('show.bs.collapse', function() {
        lockScroll('mobile-menu');
    });
    
    navbarCollapse.addEventListener('hide.bs.collapse', function() {
        unlockScroll('mobile-menu');
    });
    
    console.log('Menu Bootstrap inicializado com sucesso!');
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links que são apenas "#" ou que abrem modals
            if (href === '#' || this.hasAttribute('onclick')) {
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== HEADER SCROLL EFFECT ==========
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========== MODAL AULA EXPERIMENTAL ==========
function openExperimentalModal() {
    const modal = document.getElementById('experimentalModal');
    modal.style.display = 'block';
    lockScroll('experimental');
}

function closeExperimentalModal() {
    const modal = document.getElementById('experimentalModal');
    modal.style.display = 'none';
    unlockScroll('experimental');
}

// ========== MODAL MATRÍCULA ==========
function openMatriculaModal() {
    const modal = document.getElementById('matriculaModal');
    modal.style.display = 'block';
    lockScroll('matricula');
}

function closeMatriculaModal() {
    const modal = document.getElementById('matriculaModal');
    modal.style.display = 'none';
    unlockScroll('matricula');
}

function enviarMatricula(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nomeMatricula').value;
    const email = document.getElementById('emailMatricula').value;
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    
    if (!planoSelecionado) {
        alert('Por favor, selecione um plano!');
        return;
    }
    
    const plano = planoSelecionado.value;
    
    // Montar mensagem para WhatsApp
    const mensagem = `
🏋️‍♂️ *NOVA MATRÍCULA - Academia Equilíbrio*

👤 *Nome:* ${nome}
📧 *E-mail:* ${email}
💳 *Plano Escolhido:* ${plano}

_Mensagem enviada através do site._
    `.trim();
    
    // Número do WhatsApp (formato internacional sem + e sem espaços)
    const numeroWhatsApp = '5515996177546';
    
    // Criar URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Fechar modal
    closeMatriculaModal();
    
    // Limpar formulário
    document.getElementById('formMatricula').reset();
}

// ========== MODAL MODALIDADE ==========
const modalidadesInfo = {
    musculacao: {
        titulo: 'Musculação',
        icone: 'fa-dumbbell',
        descricao: 'Nosso programa de musculação oferece treinos completos e personalizados para todos os níveis, do iniciante ao avançado.',
        beneficios: [
            'Treinos personalizados para seus objetivos',
            'Acompanhamento profissional constante',
            'Equipamentos modernos e de qualidade',
            'Avaliação física periódica',
            'Ambiente motivador e acolhedor'
        ],
        horarios: 'Segunda a Sexta: 06:00 - 22:00'
    },
    muaythai: {
        titulo: 'Muay Thai',
        icone: 'fa-hand-rock',
        descricao: 'Aulas de Muay Thai que combinam técnicas de defesa pessoal, condicionamento físico e disciplina mental.',
        beneficios: [
            'Melhora do condicionamento cardiovascular',
            'Desenvolvimento de defesa pessoal',
            'Aumento de força e flexibilidade',
            'Redução do estresse',
            'Ambiente de treino profissional'
        ],
        horarios: 'Terça e Quinta: 19:00 - 20:30 | Sábado: 09:00 - 10:30'
    },
    zumba: {
        titulo: 'Zumba',
        icone: 'fa-music',
        descricao: 'Aulas de Zumba que transformam exercício em diversão! Dance, queime calorias e se divirta ao som de músicas envolventes.',
        beneficios: [
            'Queima calórica intensa',
            'Melhora da coordenação motora',
            'Exercício cardiovascular completo',
            'Aulas animadas e motivadoras',
            'Adequado para todos os níveis'
        ],
        horarios: 'Segunda, Quarta e Sexta: 18:00 - 19:00'
    },
    fisioterapia: {
        titulo: 'Fisioterapia',
        icone: 'fa-heartbeat',
        descricao: 'Tratamentos fisioterapêuticos personalizados focados em reabilitação, prevenção de lesões e qualidade de vida.',
        beneficios: [
            'Reabilitação de lesões',
            'Fortalecimento muscular',
            'Correção postural',
            'Alívio de dores crônicas',
            'Prevenção de novas lesões'
        ],
        horarios: 'Segunda a Sexta: Horários agendados individualmente'
    }
};

function openModalidadeModal(modalidade) {
    const modal = document.getElementById('modalidadeModal');
    const content = document.getElementById('modalidadeContent');
    const info = modalidadesInfo[modalidade];
    
    if (info) {
        content.innerHTML = `
            <div class="modal-header">
                <i class="fas ${info.icone}"></i>
                <h2>${info.titulo}</h2>
            </div>
            <div style="color: var(--cinza-claro); line-height: 1.8;">
                <p style="margin-bottom: 2rem;">${info.descricao}</p>
                
                <h3 style="color: var(--dourado); margin-bottom: 1rem;">
                    <i class="fas fa-check-circle"></i> Benefícios
                </h3>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    ${info.beneficios.map(b => `
                        <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.75rem;">
                            <i class="fas fa-star" style="color: var(--dourado);"></i>
                            <span>${b}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <h3 style="color: var(--dourado); margin-bottom: 1rem;">
                    <i class="far fa-clock"></i> Horários
                </h3>
                <p style="background: rgba(216, 155, 58, 0.1); padding: 1rem; border-radius: 10px; border-left: 4px solid var(--dourado);">
                    ${info.horarios}
                </p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="closeModalidadeModal(); openExperimentalModal();">
                        <i class="fas fa-star"></i> Agendar Aula Experimental
                    </button>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        lockScroll('modalidade');
    }
}

function closeModalidadeModal() {
    const modal = document.getElementById('modalidadeModal');
    modal.style.display = 'none';
    unlockScroll('modalidade');
}

// ========== FECHAR MODALS AO CLICAR FORA ==========
window.addEventListener('click', function(event) {
    const modals = [
        {id: 'experimentalModal', lock: 'experimental'},
        {id: 'matriculaModal', lock: 'matricula'},
        {id: 'modalidadeModal', lock: 'modalidade'}
    ];
    
    modals.forEach(({id, lock}) => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = 'none';
            unlockScroll(lock);
        }
    });
});

// ========== POPUP AUTOMÁTICO AULA EXPERIMENTAL ==========
function initExperimentalPopup() {
    // Mostrar popup após 10 segundos (se não tiver sido fechado antes)
    const popupShown = sessionStorage.getItem('experimentalPopupShown');
    
    if (!popupShown) {
        setTimeout(() => {
            openExperimentalModal();
            sessionStorage.setItem('experimentalPopupShown', 'true');
        }, 10000); // 10 segundos
    }
}

// ========== VALIDAÇÃO DE FORMULÁRIOS ==========
function initFormValidation() {
    // Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
    
    // Formulário Aula Experimental
    const experimentalForm = document.getElementById('experimentalForm');
    if (experimentalForm) {
        experimentalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleExperimentalForm();
        });
    }
    
    // Formulário Matrícula
    const matriculaForm = document.getElementById('matriculaForm');
    if (matriculaForm) {
        matriculaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleMatriculaForm();
        });
    }
}

// ========== PROCESSAR FORMULÁRIO DE CONTATO ==========
function handleContactForm() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá, meu nome é ${nome}, e ${mensagem}`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5515996177546?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Mostrar mensagem de sucesso
    showSuccessMessage('Mensagem enviada! Você será redirecionado para o WhatsApp.');
    
    // Limpar formulário
    document.getElementById('contactForm').reset();
}

// ========== PROCESSAR FORMULÁRIO AULA EXPERIMENTAL ==========
function handleExperimentalForm() {
    const nome = document.getElementById('exp-nome').value;
    const telefone = document.getElementById('exp-telefone').value;
    const modalidade = document.getElementById('exp-modalidade').value;
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `🌟 AULA EXPERIMENTAL GRÁTIS 🌟%0A%0A` +
                           `Nome: ${nome}%0A` +
                           `Telefone: ${telefone}%0A` +
                           `Modalidade: ${modalidade}%0A%0A` +
                           `Gostaria de agendar minha aula experimental!`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5515999999999?text=${whatsappMessage}`, '_blank');
    
    // Fechar modal e mostrar sucesso
    closeExperimentalModal();
    showSuccessMessage('Solicitação enviada! Você será redirecionado para o WhatsApp.');
    
    // Limpar formulário
    document.getElementById('experimentalForm').reset();
}

// ========== PROCESSAR FORMULÁRIO MATRÍCULA ==========
function handleMatriculaForm() {
    const nome = document.getElementById('mat-nome').value;
    const email = document.getElementById('mat-email').value;
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    
    // Validar se um plano foi selecionado
    if (!planoSelecionado) {
        alert('Por favor, selecione um plano!');
        return;
    }
    
    const plano = planoSelecionado.value;
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `✅ SOLICITAÇÃO DE MATRÍCULA%0A%0A` +
                           `Nome: ${nome}%0A` +
                           `E-mail: ${email}%0A` +
                           `Plano: ${plano}%0A%0A` +
                           `Gostaria de finalizar minha matrícula!`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5515996177546?text=${whatsappMessage}`, '_blank');
    
    // Fechar modal e mostrar sucesso
    closeMatriculaModal();
    showSuccessMessage('Matrícula solicitada! Você será redirecionado para o WhatsApp.');
    
    // Limpar formulário
    document.getElementById('matriculaForm').reset();
}

// ========== MENSAGEM DE SUCESSO ==========
function showSuccessMessage(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #D89B3A 0%, #B8791A 100%);
        color: #1A1A1A;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.5s ease;
        max-width: 350px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    // Adicionar estilo de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// ========== MÁSCARA DE TELEFONE ==========
function maskPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    input.value = value;
}

// Aplicar máscara em todos os campos de telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            maskPhone(this);
        });
    });
});

// ========== ANIMAÇÃO DOS NÚMEROS (CONTADORES) ==========
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-item strong');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number) {
                    animateValue(target, 0, number, 2000);
                }
                
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    const suffix = element.textContent.includes('+') ? '+' : '';
    const prefix = element.textContent.includes('%') ? '' : '';
    const postfix = element.textContent.includes('%') ? '%' : '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = prefix + end + suffix + postfix;
            clearInterval(timer);
        } else {
            element.textContent = prefix + Math.floor(current) + suffix + postfix;
        }
    }, 16);
}

// Inicializar animação de números quando a página carregar
document.addEventListener('DOMContentLoaded', animateNumbers);

// ========== SCROLL TO TOP ==========
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #f37800;
        border: none;
        border-radius: 50%;
        color: #FFFFFF;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(243, 120, 0, 0.4);
    `;
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTop);

// ========== LAZY LOADING DE IMAGENS ==========
// Desabilitado temporariamente - causando problemas com imagens SVG
/*
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
*/

// ========== POP-UP AULA EXPERIMENTAL (TRIGGER NA SEÇÃO PLANOS) ==========
function initPopupAulaExperimental() {
    const planosSection = document.querySelector('.planos');

    // Observer para detectar quando a seção de planos fica visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Verifica se o usuário optou por não ver mais o popup
                const naoMostrarMais = localStorage.getItem('naoMostrarPopupExperimental');
                
                if (!naoMostrarMais) {
                    // Mostra o popup apenas se o usuário não optou por ocultá-lo
                    setTimeout(() => {
                        showPopupAulaExperimental();
                    }, 1000); // Delay de 1 segundo após entrar na seção
                }
            }
        });
    }, {
        threshold: 0.3 // 30% da seção visível
    });

    if (planosSection) {
        observer.observe(planosSection);
    }
}

function showPopupAulaExperimental() {
    const popup = document.getElementById('popupAulaExperimental');
    if (popup && popup.style.display !== 'flex') {
        popup.style.display = 'flex';
        lockScroll('popup');
    }
}

function closePopupAulaExperimental() {
    const popup = document.getElementById('popupAulaExperimental');
    const checkbox = document.getElementById('naoMostrarPopup');
    
    if (popup) {
        // Se o checkbox estiver marcado, salva a preferência no localStorage
        if (checkbox && checkbox.checked) {
            localStorage.setItem('naoMostrarPopupExperimental', 'true');
        }
        
        popup.style.display = 'none';
        unlockScroll('popup');
    }
}

// Inicializar pop-up quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    initPopupAulaExperimental();
    
    // Event listener para fechar ao clicar fora do conteúdo
    const popup = document.getElementById('popupAulaExperimental');
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopupAulaExperimental();
            }
        });
    }
});


console.log('%c🏋️‍♂️ Academia Equilíbrio', 'font-size: 20px; font-weight: bold; color: #D89B3A;');
console.log('%cDesenvolvido por Caio Manfio', 'font-size: 14px; color: #E0E0E0;');
