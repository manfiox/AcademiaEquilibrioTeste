/* ========================================
   ACADEMIA EQUILÍBRIO - JAVASCRIPT
   Desenvolvido por Caio Manfio
   ======================================== */

// ========== GERENCIAMENTO DE SCROLL ==========
let scrollLocks = new Set();
let scrollPosition = 0;

function lockScroll(lockId) {
    scrollLocks.add(lockId);
    
    // Se já está bloqueado, não fazer nada
    if (scrollLocks.size > 1) {
        return;
    }
    
    // Salvar posição atual do scroll
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    // Bloquear scroll do HTML e body (prevenir barra dupla)
    const html = document.documentElement;
    const body = document.body;
    
    // Salvar estilos originais
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyWidth = body.style.width;
    const originalBodyTop = body.style.top;
    const originalHtmlOverflow = html.style.overflow;
    const originalHtmlHeight = html.style.height;
    const originalHtmlPosition = html.style.position;
    const originalHtmlWidth = html.style.width;
    
    // Armazenar no body para restaurar depois
    body._originalStyles = {
        overflow: originalBodyOverflow,
        position: originalBodyPosition,
        width: originalBodyWidth,
        top: originalBodyTop
    };
    html._originalStyles = {
        overflow: originalHtmlOverflow,
        height: originalHtmlHeight,
        position: originalHtmlPosition,
        width: originalHtmlWidth
    };
    
    // Bloquear scroll do HTML primeiro (prevenir barra dupla)
    html.style.overflow = 'hidden';
    html.style.height = '100%';
    html.style.position = 'fixed';
    html.style.width = '100%';
    html.classList.add('body-locked');
    
    // Bloquear scroll do body
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.top = `-${scrollPosition}px`;
    body.style.left = '0';
    
    // Adicionar classe para CSS
    if (lockId.includes('popup')) {
        body.classList.add('popup-open');
    } else {
        body.classList.add('modal-open');
    }
}

function unlockScroll(lockId) {
    scrollLocks.delete(lockId);
    
    // Só restaurar se não houver mais locks
    if (scrollLocks.size === 0) {
        const html = document.documentElement;
        const body = document.body;
        
        // Restaurar estilos originais do HTML
        if (html._originalStyles) {
            html.style.overflow = html._originalStyles.overflow || '';
            html.style.height = html._originalStyles.height || '';
            html.style.position = html._originalStyles.position || '';
            html.style.width = html._originalStyles.width || '';
            delete html._originalStyles;
        } else {
            html.style.overflow = '';
            html.style.height = '';
            html.style.position = '';
            html.style.width = '';
        }
        html.classList.remove('body-locked');
        
        // Restaurar estilos originais do body
        if (body._originalStyles) {
            body.style.overflow = body._originalStyles.overflow || '';
            body.style.position = body._originalStyles.position || '';
            body.style.width = body._originalStyles.width || '';
            body.style.top = body._originalStyles.top || '';
            delete body._originalStyles;
        } else {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
            body.style.top = '';
        }
        body.style.left = '';
        
        // Remover classes
        body.classList.remove('modal-open', 'popup-open');
        
        // Restaurar posição do scroll após um pequeno delay para garantir que os estilos foram aplicados
        requestAnimationFrame(() => {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'auto'
            });
            
            // Forçar scroll novamente se necessário (fix para mobile)
            setTimeout(() => {
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'auto'
                });
            }, 10);
        });
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
                if (bsCollapse && bsCollapse._isShown()) {
                    bsCollapse.hide();
                    // Garantir que o scroll seja desbloqueado após fechar o menu
                    setTimeout(() => {
                        if (scrollLocks.has('mobile-menu')) {
                            unlockScroll('mobile-menu');
                        }
                    }, 300);
                }
            }
        });
    });
    
    // Bloquear scroll quando menu está aberto
    navbarCollapse.addEventListener('show.bs.collapse', function() {
        if (window.innerWidth < 992) {
            lockScroll('mobile-menu');
        }
    });
    
    navbarCollapse.addEventListener('shown.bs.collapse', function() {
        // Garantir que o scroll esteja bloqueado após o menu abrir completamente
        if (window.innerWidth < 992 && !scrollLocks.has('mobile-menu')) {
            lockScroll('mobile-menu');
        }
    });
    
    navbarCollapse.addEventListener('hide.bs.collapse', function() {
        // Preparar para desbloquear antes do menu fechar completamente
        if (window.innerWidth < 992) {
            // Pequeno delay para garantir que o Bootstrap termine a animação
            setTimeout(() => {
                unlockScroll('mobile-menu');
            }, 150);
        }
    });
    
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        // Garantir que o scroll seja desbloqueado após o menu fechar completamente
        if (window.innerWidth < 992 && scrollLocks.has('mobile-menu')) {
            unlockScroll('mobile-menu');
        }
    });
    
    // Listener para quando a janela redimensiona e o menu precisa ser fechado
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 992) {
                // Se estiver em desktop, garantir que o menu esteja fechado e scroll desbloqueado
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse && bsCollapse._isShown()) {
                    bsCollapse.hide();
                }
                if (scrollLocks.has('mobile-menu')) {
                    unlockScroll('mobile-menu');
                }
            }
        }, 250);
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
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        lockScroll('experimental');
    }
}

function closeExperimentalModal() {
    const modal = document.getElementById('experimentalModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        unlockScroll('experimental');
    }
}

// ========== MODAL DE MATRÍCULA ========== */
function openMatriculaModal() {
    const modal = document.getElementById('matriculaModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        lockScroll('matricula');
        // Fechar menu mobile se estiver aberto
        if (window.innerWidth < 992) {
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    }
}

function closeMatriculaModal() {
    const modal = document.getElementById('matriculaModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        unlockScroll('matricula');
        // Limpar formulário
        const form = document.getElementById('matriculaForm');
        if (form) {
            form.reset();
        }
    }
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
    
    if (info && modal) {
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
        
        modal.style.display = 'flex';
        modal.classList.add('active');
        lockScroll('modalidade');
    }
}

function closeModalidadeModal() {
    const modal = document.getElementById('modalidadeModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        unlockScroll('modalidade');
    }
}

// ========== FECHAR MODALS AO CLICAR FORA ==========
window.addEventListener('click', function(event) {
    const modals = [
        {id: 'experimentalModal', lock: 'experimental'},
        {id: 'modalidadeModal', lock: 'modalidade'},
        {id: 'matriculaModal', lock: 'matricula'}
    ];
    
    modals.forEach(({id, lock}) => {
        const modal = document.getElementById(id);
        if (modal && event.target === modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
            if (lock) {
                unlockScroll(lock);
            }
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
    
    // Formulário de Matrícula
    const matriculaForm = document.getElementById('matriculaForm');
    if (matriculaForm) {
        matriculaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleMatriculaForm();
        });
        
        // Habilitar/desabilitar botão de confirmar baseado na validação
        const nomeInput = document.getElementById('matricula-nome');
        const cpfInput = document.getElementById('matricula-cpf');
        const planoInputs = document.querySelectorAll('input[name="plano"]');
        const confirmarBtn = matriculaForm.querySelector('.btn-confirmar-matricula');
        
        function validateMatriculaForm() {
            const nome = nomeInput ? nomeInput.value.trim() : '';
            const cpf = cpfInput ? cpfInput.value.trim() : '';
            const planoSelecionado = document.querySelector('input[name="plano"]:checked');
            
            if (confirmarBtn) {
                if (nome.length >= 3 && cpf.length >= 14 && planoSelecionado) {
                    confirmarBtn.disabled = false;
                } else {
                    confirmarBtn.disabled = true;
                }
            }
        }
        
        // Event listeners para validação em tempo real
        if (nomeInput) {
            nomeInput.addEventListener('input', validateMatriculaForm);
        }
        
        if (cpfInput) {
            cpfInput.addEventListener('input', function(e) {
                maskCPF(e.target);
                validateMatriculaForm();
            });
        }
        
        planoInputs.forEach(input => {
            input.addEventListener('change', validateMatriculaForm);
        });
        
        // Validação inicial
        validateMatriculaForm();
    }
    
    // Máscara de CPF (fallback caso não encontre no formulário)
    const cpfInputFallback = document.getElementById('matricula-cpf');
    if (cpfInputFallback && !matriculaForm) {
        cpfInputFallback.addEventListener('input', function(e) {
            maskCPF(e.target);
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
    const whatsappMessage = `🌟 AULA EXPERIMENTAL GRÁTIS 🌟\n\n` +
                           `Nome: ${nome}\n` +
                           `Telefone: ${telefone}\n` +
                           `Modalidade: ${modalidade}\n\n` +
                           `Gostaria de agendar minha aula experimental!`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5515999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Fechar modal e mostrar sucesso
    closeExperimentalModal();
    showSuccessMessage('Solicitação enviada! Você será redirecionado para o WhatsApp.');
    
    // Limpar formulário
    document.getElementById('experimentalForm').reset();
}

// ========== PROCESSAR FORMULÁRIO DE MATRÍCULA ==========
function handleMatriculaForm(e) {
    if (e) {
        e.preventDefault();
    }
    
    const nome = document.getElementById('matricula-nome').value.trim();
    const cpf = document.getElementById('matricula-cpf').value.trim();
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    
    // Validações
    if (!nome || nome.length < 3) {
        showErrorMessage('Por favor, digite um nome válido (mínimo 3 caracteres).');
        return;
    }
    
    if (!cpf || cpf.length < 14) {
        showErrorMessage('Por favor, digite um CPF válido.');
        return;
    }
    
    if (!planoSelecionado) {
        showErrorMessage('Por favor, selecione um plano.');
        return;
    }
    
    const plano = planoSelecionado.value;
    
    // Criar mensagem para WhatsApp no formato solicitado com caixa
    const linhaSuperior = '__________________________________________________________';
    const linhaVazia = '|                                                          |';
    const linhaTitulo = '|             *SOLICITAÇÃO DE MATRÍCULA*                   |';
    
    // Calcular espaços para alinhar o conteúdo dentro da caixa (58 caracteres de largura total)
    const nomeLinha = `|  NOME: ${nome}`;
    const cpfLinha = `|  CPF:  ${cpf}`;
    const planoLinha = `|  PLANO SELECIONADO: ${plano}`;
    
    const whatsappMessage = `Olá, vim pelo site e gostaria de dar início a minha matrícula...\n\n` +
                           `${linhaSuperior}\n` +
                           `${linhaVazia}\n` +
                           `${linhaTitulo}\n` +
                           `${linhaVazia}\n` +
                           `${nomeLinha}${' '.repeat(Math.max(0, 56 - nomeLinha.length))}|\n` +
                           `${cpfLinha}${' '.repeat(Math.max(0, 56 - cpfLinha.length))}|\n` +
                           `${planoLinha}${' '.repeat(Math.max(0, 56 - planoLinha.length))}|\n` +
                           `${linhaVazia}\n` +
                           `${linhaSuperior}`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5515996177546?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Fechar modal e mostrar sucesso
    closeMatriculaModal();
    showSuccessMessage('Solicitação enviada! Você será redirecionado para o WhatsApp.');
}

// ========== MÁSCARA DE CPF ==========
function maskCPF(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length <= 3) {
            input.value = value;
        } else if (value.length <= 6) {
            input.value = value.replace(/(\d{3})(\d+)/, '$1.$2');
        } else if (value.length <= 9) {
            input.value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
        } else {
            input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
        }
    } else {
        input.value = value.substring(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}

// ========== MENSAGEM DE ERRO ==========
function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        color: #FFFFFF;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(220, 53, 69, 0.4);
        z-index: 10001;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.5s ease;
        max-width: 350px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle" style="font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
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
