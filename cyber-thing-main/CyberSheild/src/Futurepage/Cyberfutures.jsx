import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import Header from '../Homepage/Header';
import Footer from '../Homepage/Footer';
const CyberFuture = () => {
    const particlesContainerRef = useRef(null);
    const heroAnimationRef = useRef(null);
    const gameContainerRef = useRef(null);
    const botChatRef = useRef(null);
    const processAnimationRef = useRef(null);
    const careerModalRef = useRef(null);

    const processSteps = {
        1: {
            title: "Global Threat Detection",
            steps: [
                {
                    title: "Data Collection",
                    content: "Our system gathers data from millions of sources worldwide, including network sensors, dark web monitoring, and threat intelligence feeds."
                },
                {
                    title: "Threat Identification",
                    content: "Advanced algorithms scan incoming data to identify potential threats and attack patterns across the globe."
                },
                {
                    title: "Real-Time Updates",
                    content: "Our threat database updates continuously as new information is collected from our global monitoring network."
                }
            ],
            animation: (container) => {
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                const nodeCount = 20;
                const nodes = [];

                for (let i = 0; i < nodeCount; i++) {
                    const node = document.createElement('div');
                    node.className = 'network-node';
                    node.style.left = `${Math.random() * width}px`;
                    node.style.top = `${Math.random() * height}px`;
                    container.appendChild(node);
                    nodes.push(node);
                    node.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
                }

                for (let i = 0; i < nodeCount * 2; i++) {
                    const node1 = nodes[Math.floor(Math.random() * nodes.length)];
                    const node2 = nodes[Math.floor(Math.random() * nodes.length)];

                    if (node1 !== node2) {
                        const x1 = parseFloat(node1.style.left) + 10;
                        const y1 = parseFloat(node1.style.top) + 10;
                        const x2 = parseFloat(node2.style.left) + 10;
                        const y2 = parseFloat(node2.style.top) + 10;

                        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                        const line = document.createElement('div');
                        line.className = 'network-line';
                        line.style.width = `${length}px`;
                        line.style.height = '1px';
                        line.style.left = `${x1}px`;
                        line.style.top = `${y1}px`;
                        line.style.transform = `rotate(${angle}deg)`;
                        container.appendChild(line);
                    }
                }

                const dataFlows = [];
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        const flow = document.createElement('div');
                        flow.className = 'cyber-pulse';
                        flow.style.left = `${Math.random() * width}px`;
                        flow.style.top = `${Math.random() * height}px`;
                        container.appendChild(flow);
                        dataFlows.push(flow);

                        setTimeout(() => {
                            flow.remove();
                        }, 2000);
                    }, i * 500);
                }
            }
        },
        2: {
            title: "AI Analysis Engine",
            steps: [
                {
                    title: "Neural Network Processing",
                    content: "Our deep learning models analyze historical attack data to identify patterns and correlations."
                },
                {
                    title: "Anomaly Detection",
                    content: "The system flags unusual activity that deviates from normal network behavior patterns."
                },
                {
                    title: "Threat Scoring",
                    content: "Each potential threat is assigned a risk score based on likelihood and potential impact."
                }
            ],
            animation: (container) => {
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                const layerCount = 5;
                const nodeRadius = 10;
                const layerGap = width / (layerCount + 1);

                for (let l = 0; l < layerCount; l++) {
                    const nodeCount = 3 + l;
                    const layerTop = (height - (nodeCount - 1) * 30) / 2;

                    for (let n = 0; n < nodeCount; n++) {
                        const node = document.createElement('div');
                        node.className = 'network-node';
                        node.style.left = `${50 + l * layerGap}px`;
                        node.style.top = `${layerTop + n * 30}px`;
                        node.style.width = `${nodeRadius * 2}px`;
                        node.style.height = `${nodeRadius * 2}px`;
                        container.appendChild(node);

                        if (l < layerCount - 1) {
                            const nextNodeCount = 3 + l + 1;
                            const nextLayerTop = (height - (nextNodeCount - 1) * 30) / 2;

                            for (let nn = 0; nn < nextNodeCount; nn++) {
                                const x1 = 50 + l * layerGap + nodeRadius;
                                const y1 = layerTop + n * 30 + nodeRadius;
                                const x2 = 50 + (l + 1) * layerGap + nodeRadius;
                                const y2 = nextLayerTop + nn * 30 + nodeRadius;

                                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                                const line = document.createElement('div');
                                line.className = 'network-line';
                                line.style.width = `${length}px`;
                                line.style.height = '1px';
                                line.style.left = `${x1}px`;
                                line.style.top = `${y1}px`;
                                line.style.transform = `rotate(${angle}deg)`;
                                container.appendChild(line);
                            }
                        }
                    }
                }

                const dataPoints = [];
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        const point = document.createElement('div');
                        point.className = 'cyber-pulse';
                        point.style.left = '20px';
                        point.style.top = `${height / 2}px`;
                        container.appendChild(point);
                        dataPoints.push(point);

                        let pos = 0;
                        const interval = setInterval(() => {
                            pos += 5;
                            point.style.left = `${20 + pos}px`;

                            if (pos > width - 40) {
                                clearInterval(interval);
                                point.remove();
                            }
                        }, 50);
                    }, i * 300);
                }
            }
        },
        3: {
            title: "Automated Defense System",
            steps: [
                {
                    title: "Threat Analysis",
                    content: "The system analyzes the predicted attack vectors and potential impact points."
                },
                {
                    title: "Defense Strategy",
                    content: "Appropriate countermeasures are selected based on attack type and system vulnerabilities."
                },
                {
                    title: "Implementation",
                    content: "Defenses are automatically deployed across affected systems in milliseconds."
                }
            ],
            animation: (container) => {
                const width = container.offsetWidth;
                const height = container.offsetHeight;

                const system = document.createElement('div');
                system.className = 'network-node';
                system.style.left = `${width / 2 - 30}px`;
                system.style.top = `${height / 2 - 30}px`;
                system.style.width = '60px';
                system.style.height = '60px';
                system.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
                container.appendChild(system);

                const attackers = [];
                for (let i = 0; i < 3; i++) {
                    const attacker = document.createElement('div');
                    attacker.className = 'hacker-silhouette';
                    attacker.style.left = `${Math.random() * width}px`;
                    attacker.style.top = `${Math.random() * height}px`;
                    container.appendChild(attacker);
                    attackers.push(attacker);

                    const angle = Math.random() * Math.PI * 2;
                    const speed = 1 + Math.random() * 2;

                    const move = setInterval(() => {
                        const x = parseFloat(attacker.style.left);
                        const y = parseFloat(attacker.style.top);
                        const centerX = width / 2;
                        const centerY = height / 2;

                        const dx = centerX - x;
                        const dy = centerY - y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 50) {
                            clearInterval(move);
                            attacker.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
                            setTimeout(() => {
                                attacker.remove();
                            }, 1000);
                        } else {
                            attacker.style.left = `${x + dx / distance * speed}px`;
                            attacker.style.top = `${y + dy / distance * speed}px`;
                        }
                    }, 50);
                }

                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        const shield = document.createElement('div');
                        shield.className = 'shield';
                        shield.style.left = `${width / 2 - 20}px`;
                        shield.style.top = `${height / 2 - 20}px`;
                        container.appendChild(shield);

                        let size = 40;
                        const grow = setInterval(() => {
                            size += 5;
                            shield.style.width = `${size}px`;
                            shield.style.height = `${size}px`;
                            shield.style.left = `${width / 2 - size / 2}px`;
                            shield.style.top = `${height / 2 - size / 2}px`;

                            if (size > 200) {
                                clearInterval(grow);
                                shield.remove();
                            }
                        }, 50);
                    }, i * 800);
                }
            }
        }
    };

    const initParticles = () => {
        const container = particlesContainerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x0ff0fc,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    };

    const initHeroAnimation = () => {
        const container = heroAnimationRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const nodeCount = 15;
        const nodes = [];

        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'network-node';
            node.style.left = `${Math.random() * width}px`;
            node.style.top = `${Math.random() * height}px`;
            container.appendChild(node);
            nodes.push(node);
            node.style.animation = `pulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`;
        }

        for (let i = 0; i < nodeCount * 1.5; i++) {
            const node1 = nodes[Math.floor(Math.random() * nodes.length)];
            const node2 = nodes[Math.floor(Math.random() * nodes.length)];

            if (node1 !== node2) {
                const x1 = parseFloat(node1.style.left) + 10;
                const y1 = parseFloat(node1.style.top) + 10;
                const x2 = parseFloat(node2.style.left) + 10;
                const y2 = parseFloat(node2.style.top) + 10;

                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

                const line = document.createElement('div');
                line.className = 'network-line';
                line.style.width = `${length}px`;
                line.style.height = '1px';
                line.style.left = `${x1}px`;
                line.style.top = `${y1}px`;
                line.style.transform = `rotate(${angle}deg)`;
                container.appendChild(line);
            }
        }

        const dataFlowInterval = setInterval(() => {
            const startNode = nodes[Math.floor(Math.random() * nodes.length)];
            const endNode = nodes[Math.floor(Math.random() * nodes.length)];

            if (startNode !== endNode) {
                const x1 = parseFloat(startNode.style.left) + 10;
                const y1 = parseFloat(startNode.style.top) + 10;
                const x2 = parseFloat(endNode.style.left) + 10;
                const y2 = parseFloat(endNode.style.top) + 10;

                const data = document.createElement('div');
                data.className = 'cyber-pulse';
                data.style.left = `${x1}px`;
                data.style.top = `${y1}px`;
                container.appendChild(data);

                let progress = 0;
                const send = setInterval(() => {
                    progress += 0.02;
                    data.style.left = `${x1 + (x2 - x1) * progress}px`;
                    data.style.top = `${y1 + (y2 - y1) * progress}px`;

                    if (progress >= 1) {
                        clearInterval(send);
                        data.remove();
                    }
                }, 20);
            }
        }, 500);

        return () => {
            clearInterval(dataFlowInterval);
        };
    };

    const initCyberGame = () => {
        const container = gameContainerRef.current;
        const message = container.querySelector('.game-message');
        const startBtn = container.querySelector('.game-start-btn');

        let gameActive = false;
        let score = 0;
        let lives = 3;
        let level = 1;

        const handleStartClick = () => {
            message.style.display = 'none';
            gameActive = true;
            score = 0;
            lives = 3;
            level = 1;
            startGame();
        };

        startBtn.addEventListener('click', handleStartClick);

        function startGame() {
            container.innerHTML = '';
            const center = document.createElement('div');
            center.className = 'network-node';
            center.style.left = '50%';
            center.style.top = '50%';
            center.style.transform = 'translate(-50%, -50%)';
            center.style.width = '60px';
            center.style.height = '60px';
            center.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
            container.appendChild(center);

            const scoreDisplay = document.createElement('div');
            scoreDisplay.style.position = 'absolute';
            scoreDisplay.style.top = '10px';
            scoreDisplay.style.left = '10px';
            scoreDisplay.style.color = 'white';
            scoreDisplay.textContent = `Score: ${score} | Lives: ${lives} | Level: ${level}`;
            container.appendChild(scoreDisplay);

            const gameLoop = setInterval(() => {
                if (!gameActive) {
                    clearInterval(gameLoop);
                    return;
                }

                scoreDisplay.textContent = `Score: ${score} | Lives: ${lives} | Level: ${level}`;

                if (Math.random() < 0.1 * level) {
                    createThreat();
                }

                if (lives <= 0) {
                    gameActive = false;
                    endGame(false);
                }

                if (score >= level * 10) {
                    level++;
                }
            }, 1000 / 60);

            function createThreat() {
                const threat = document.createElement('div');
                threat.className = 'hacker-silhouette';
                const edge = Math.floor(Math.random() * 4);
                let x, y;

                switch (edge) {
                    case 0:
                        x = Math.random() * container.offsetWidth;
                        y = 0;
                        break;
                    case 1:
                        x = container.offsetWidth;
                        y = Math.random() * container.offsetHeight;
                        break;
                    case 2:
                        x = Math.random() * container.offsetWidth;
                        y = container.offsetHeight;
                        break;
                    case 3:
                        x = 0;
                        y = Math.random() * container.offsetHeight;
                        break;
                }

                threat.style.left = `${x}px`;
                threat.style.top = `${y}px`;
                container.appendChild(threat);

                const centerX = container.offsetWidth / 2;
                const centerY = container.offsetHeight / 2;
                const speed = 1 + level * 0.2;

                const moveInterval = setInterval(() => {
                    if (!gameActive) {
                        clearInterval(moveInterval);
                        return;
                    }

                    const currentX = parseFloat(threat.style.left);
                    const currentY = parseFloat(threat.style.top);
                    const dx = centerX - currentX;
                    const dy = centerY - currentY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 30) {
                        clearInterval(moveInterval);
                        threat.remove();
                        lives--;
                        center.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                        setTimeout(() => {
                            center.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
                        }, 300);
                    } else {
                        threat.style.left = `${currentX + dx / distance * speed}px`;
                        threat.style.top = `${currentY + dy / distance * speed}px`;
                    }
                }, 20);

                threat.addEventListener('click', () => {
                    clearInterval(moveInterval);
                    threat.remove();
                    score += level;
                    const explosion = document.createElement('div');
                    explosion.className = 'cyber-pulse';
                    explosion.style.left = threat.style.left;
                    explosion.style.top = threat.style.top;
                    explosion.style.width = '40px';
                    explosion.style.height = '40px';
                    container.appendChild(explosion);

                    setTimeout(() => {
                        explosion.remove();
                    }, 500);
                });
            }

            function endGame(win) {
                container.innerHTML = '';
                const endMessage = document.createElement('div');
                endMessage.className = 'game-message';
                endMessage.innerHTML = `
                    <h2>${win ? 'You Won!' : 'Game Over'}</h2>
                    <p>Your final score: ${score}</p>
                    <p>Level reached: ${level}</p>
                    <button class="game-start-btn" id="play-again-btn">Play Again</button>
                `;
                container.appendChild(endMessage);

                document.getElementById('play-again-btn').addEventListener('click', () => {
                    endMessage.style.display = 'none';
                    gameActive = true;
                    score = 0;
                    lives = 3;
                    level = 1;
                    startGame();
                });
            }
        }

        return () => {
            startBtn.removeEventListener('click', handleStartClick);
        };
    };

    const initCyberBot = () => {
        const botButton = document.getElementById('cyber-bot');
        const chatWindow = botChatRef.current;
        const closeButton = chatWindow.querySelector('.close-chat');
        const chatMessages = chatWindow.querySelector('.chat-messages');
        const userInput = chatWindow.querySelector('input');
        const sendButton = chatWindow.querySelector('button');

        const botResponses = [
            "Our system predicts cyberattacks with 94% accuracy using advanced AI algorithms.",
            "Did you know that 95% of cybersecurity breaches are due to human error?",
            "We monitor over 10 million data points worldwide to predict threats in real-time.",
            "Quantum computing will revolutionize both cybersecurity and cyber attacks in the coming years.",
            "The average time to detect a breach is 207 days. Our system reduces this to minutes.",
            "Fun fact: The first computer virus was created in 1971 and was called 'Creeper'!",
            "Multi-factor authentication can prevent 99.9% of automated attacks.",
            "By 2025, cybercrime is expected to cost the world $10.5 trillion annually.",
            "Our predictive models analyze patterns from past attacks to forecast future threats.",
            "Cybersecurity isn't just about technology - it's about people and processes too."
        ];

        const handleBotClick = () => {
            chatWindow.style.display = 'flex';
        };

        const handleCloseClick = () => {
            chatWindow.style.display = 'none';
        };

        botButton.addEventListener('click', handleBotClick);
        closeButton.addEventListener('click', handleCloseClick);

        const sendMessage = () => {
            const message = userInput.value.trim();
            if (message) {
                const userMsg = document.createElement('div');
                userMsg.className = 'message user-message';
                userMsg.textContent = message;
                chatMessages.appendChild(userMsg);
                userInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                setTimeout(() => {
                    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
                    const botMsg = document.createElement('div');
                    botMsg.className = 'message bot-message';
                    botMsg.textContent = randomResponse;
                    chatMessages.appendChild(botMsg);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        };

        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        return () => {
            botButton.removeEventListener('click', handleBotClick);
            closeButton.removeEventListener('click', handleCloseClick);
            sendButton.removeEventListener('click', sendMessage);
            userInput.removeEventListener('keypress', sendMessage);
        };
    };

    const createCyberPulses = () => {
        const pulseInterval = setInterval(() => {
            const pulse = document.createElement('div');
            pulse.className = 'cyber-pulse';
            pulse.style.left = `${Math.random() * 100}%`;
            pulse.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(pulse);

            setTimeout(() => {
                pulse.remove();
            }, 2000);
        }, 500);

        return () => {
            clearInterval(pulseInterval);
        };
    };
    const initProcessModal = () => {
        const modal = document.getElementById('process-modal');
        const closeModal = modal.querySelector('.close-modal');
        const modalTitle = modal.querySelector('.modal-title');
        const processAnimation = processAnimationRef.current;
        const processStepsContainer = modal.querySelector('#process-steps');
        const demoBtn = document.getElementById('demo-btn');

        const handleCardClick = (e) => {
            const card = e.currentTarget;
            const step = card.dataset.step;
            const process = processSteps[step];

            modalTitle.textContent = process.title;
            processAnimation.innerHTML = '';
            processStepsContainer.innerHTML = '';

            process.steps.forEach((step, index) => {
                const stepEl = document.createElement('div');
                stepEl.className = 'process-step';
                stepEl.innerHTML = `
                    <div class="process-step-number">${index + 1}</div>
                    <div class="process-step-content">
                        <h3 class="process-step-title">${step.title}</h3>
                        <p>${step.content}</p>
                    </div>
                `;
                processStepsContainer.appendChild(stepEl);
            });

            process.animation(processAnimation);
            modal.style.display = 'flex';
        };

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', handleCardClick);
        });

        const handleDemoClick = () => {
            const process = processSteps[1];
            modalTitle.textContent = process.title;
            processAnimation.innerHTML = '';
            processStepsContainer.innerHTML = '';

            process.steps.forEach((step, index) => {
                const stepEl = document.createElement('div');
                stepEl.className = 'process-step';
                stepEl.innerHTML = `
                    <div class="process-step-number">${index + 1}</div>
                    <div class="process-step-content">
                        <h3 class="process-step-title">${step.title}</h3>
                        <p>${step.content}</p>
                    </div>
                `;
                processStepsContainer.appendChild(stepEl);
            });

            process.animation(processAnimation);
            modal.style.display = 'flex';
        };

        demoBtn.addEventListener('click', handleDemoClick);

        const handleCloseModal = () => {
            modal.style.display = 'none';
        };

        closeModal.addEventListener('click', handleCloseModal);

        return () => {
            cards.forEach(card => {
                card.removeEventListener('click', handleCardClick);
            });
            demoBtn.removeEventListener('click', handleDemoClick);
            closeModal.removeEventListener('click', handleCloseModal);
        };
    };
    const initCareerCards = () => {
        const showPerks = (card) => {
            document.querySelectorAll('.career-perks').forEach(perks => {
                if (perks !== card.querySelector('.career-perks')) {
                    perks.classList.remove('show');
                }
            });

            const perks = card.querySelector('.career-perks');
            perks.classList.toggle('show');

            if (perks.classList.contains('show')) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        };

        const handleOutsideClick = (e) => {
            if (!e.target.closest('.career-card')) {
                document.querySelectorAll('.career-perks').forEach(perks => {
                    perks.classList.remove('show');
                });
            }
        };

        document.addEventListener('click', handleOutsideClick);

        const careerData = {
            "threat-hunter": {
                title: "AI Threat Hunter",
                subtitle: "The digital predator that stays one step ahead",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                mission: "As an AI Threat Hunter, you'll train neural networks to predict and neutralize cyber threats before they manifest. Your algorithms will be the first line of defense in our predictive security ecosystem.",
                responsibilities: [
                    "Develop and train predictive threat detection models",
                    "Analyze dark web activity for emerging attack patterns",
                    "Create simulated attack scenarios to test defenses",
                    "Collaborate with red team to improve prediction accuracy",
                    "Maintain our threat intelligence knowledge base"
                ],
                techStack: ["Python", "TensorFlow", "PyTorch", "Kafka", "Elasticsearch", "AWS SageMaker"]
            },
            "firewall-samurai": {
                title: "Firewall Samurai",
                subtitle: "Master of the quantum defense katana",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                mission: "As a Firewall Samurai, you'll wield cutting-edge quantum encryption and next-gen firewall technology to protect our digital kingdom from all invaders.",
                responsibilities: [
                    "Design and implement quantum-resistant encryption",
                    "Monitor and optimize our next-gen firewall systems",
                    "Conduct vulnerability assessments across all layers",
                    "Develop automated defense response protocols",
                    "Lead our cyber defense training programs"
                ],
                techStack: ["Go", "Quantum SDK", "Zero Trust Architecture", "Kubernetes", "Istio", "Vault"]
            },
            "data-ninja": {
                title: "Data Ninja",
                subtitle: "The unseen guardian of our information flows",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                mission: "As a Data Ninja, you'll move unseen through our networks, identifying vulnerabilities before they can be exploited and ensuring our data remains secure at all times.",
                responsibilities: [
                    "Perform stealth security audits across all systems",
                    "Develop advanced anomaly detection systems",
                    "Create deceptive network traps for attackers",
                    "Implement data obfuscation techniques",
                    "Train new recruits in covert security ops"
                ],
                techStack: ["Rust", "Apache Kafka", "Flink", "Snowflake", "SIEM", "MITRE ATT&CK"]
            }
        };

        const careerModal = careerModalRef.current;
        const closeModalBtn = careerModal.querySelector('.close-modal');
        const applyBtn = careerModal.querySelector('#apply-now-btn');

        const handleCareerCardClick = (e) => {
            const card = e.currentTarget;
            const role = card.id;
            const data = careerData[role];

            if (data) {
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-subtitle').textContent = data.subtitle;
                document.getElementById('modal-image').style.backgroundImage = `url(${data.image})`;
                document.getElementById('mission-text').textContent = data.mission;

                const responsibilitiesList = document.getElementById('responsibilities-list');
                responsibilitiesList.innerHTML = '';
                data.responsibilities.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    responsibilitiesList.appendChild(li);
                });

                const techStack = document.getElementById('tech-stack');
                techStack.innerHTML = '';
                data.techStack.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-item';
                    span.textContent = tech;
                    techStack.appendChild(span);
                });

                applyBtn.textContent = `Apply as ${data.title.split(' ')[0]}`;
                careerModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        };

        const careerCards = document.querySelectorAll('.career-card');
        careerCards.forEach(card => {
            card.addEventListener('click', handleCareerCardClick);
        });

        const closeModal = () => {
            careerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        closeModalBtn.addEventListener('click', closeModal);
        careerModal.addEventListener('click', (e) => {
            if (e.target === careerModal) closeModal();
        });

        const handleApplyClick = () => {
            const title = document.getElementById('modal-title').textContent;
            alert(`Initiating application sequence for: ${title}\n\n(Form would launch in production)`);
            closeModal();
        };

        applyBtn.addEventListener('click', handleApplyClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            careerCards.forEach(card => {
                card.removeEventListener('click', handleCareerCardClick);
            });
            closeModalBtn.removeEventListener('click', closeModal);
            careerModal.removeEventListener('click', closeModal);
            applyBtn.removeEventListener('click', handleApplyClick);
        };
    };

    useEffect(() => {
        initParticles();
        initHeroAnimation();
        initCyberGame();
        initCyberBot();
        createCyberPulses();
        initProcessModal();
        initCareerCards();
    }, []);

    return (
        <div className="cyber-future">
            <style jsx global>{`
    :root {
        --neon-blue: #0ff0fc;
        --neon-blue-dark: #0aa0a8;
        --neon-blue-light: #7ff0fc;
        --dark-bg: #0a0a20;
        --darker-bg: #050510;
        --text-color: #e0e0ff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Orbitron', 'Arial', sans-serif;
    }

    @font-face {
        font-family: 'Orbitron';
        src: url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
    }

    body {
        background-color: var(--dark-bg);
        color: var(--text-color);
        overflow-x: hidden;
        background-image: 
            radial-gradient(circle at 10% 20%, rgba(15, 240, 252, 0.05) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(15, 240, 252, 0.05) 0%, transparent 20%);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: rgba(10, 5, 16, 0.8);
        border-bottom: 1px solid var(--neon-blue);
        position: fixed;
        width: 100%;
        z-index: 1000;
        backdrop-filter: blur(5px);
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        width: 40px;
        height: 40px;
        filter: drop-shadow(0 0 5px var(--neon-blue));
    }

    .logo-text {
        color: var(--neon-blue);
        font-size: 1.5rem;
        text-shadow: 0 0 10px var(--neon-blue);
        letter-spacing: 1px;
    }

    nav ul {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    nav a {
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1px;
        position: relative;
        padding: 0.5rem 0;
        transition: all 0.3s ease;
    }

    nav a:hover {
        color: var(--neon-blue);
    }

    nav a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--neon-blue);
        transition: width 0.3s ease;
    }

    nav a:hover::after {
        width: 100%;
    }

    main {
        padding-top: 80px;
    }

    section {
        padding: 4rem 2rem;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .hero-content {
        flex: 1;
    }

    .hero-visual {
        flex: 1;
        position: relative;
        height: 500px;
    }

    .section-title {
        font-size: 3rem;
        margin-bottom: 2rem;
        color: var(--neon-blue);
        text-shadow: 0 0 10px var(--neon-blue);
        position: relative;
        display: inline-block;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--neon-blue), transparent);
    }

    .subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: var(--neon-blue-light);
    }

    .btn {
        display: inline-block;
        padding: 0.8rem 2rem;
        background: var(--neon-blue-dark);
        color: white;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .btn:hover {
        background: var(--neon-blue);
        box-shadow: 0 0 15px var(--neon-blue);
        transform: translateY(-3px);
    }

    /* Career section styles from first set */
    .career-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .career-card {
        background: rgba(15, 15, 40, 0.7);
        border: 1px solid var(--neon-blue-dark);
        border-radius: 10px;
        padding: 1.5rem;
        transition: all 0.5s ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .career-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            to bottom right,
            transparent,
            transparent,
            transparent,
            var(--neon-blue)
        );
        transform: rotate(30deg);
        transition: all 0.7s ease;
    }

    .career-card:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 10px 25px rgba(15, 240, 252, 0.3);
        border-color: var(--neon-blue);
    }

    .career-card:hover::before {
        animation: shine 1.5s infinite;
    }

    @keyframes shine {
        0% { left: -50%; }
        100% { left: 150%; }
    }

    .career-perks {
        display: none;
        margin-top: 1rem;
        padding: 1rem;
        background: rgba(10, 5, 16, 0.9);
        border-radius: 5px;
        border-left: 3px solid var(--neon-blue);
    }

    .career-perks.show {
        display: block;
        animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .perk-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .perk-icon {
        margin-right: 0.5rem;
        color: var(--neon-blue);
    }

    /* Career Modal Styles from first set */
    .career-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
    }
    
    .career-modal-content {
        width: 80%;
        max-width: 800px;
        background: var(--darker-bg);
        border: 2px solid var(--neon-blue);
        border-radius: 15px;
        padding: 2rem;
        position: relative;
        animation: modalFadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 30px rgba(15, 240, 252, 0.3);
    }
    
    @keyframes modalFadeIn {
        from { opacity: 0; transform: translateY(50px) scale(0.9); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
    
    .modal-header {
        border-bottom: 1px solid var(--neon-blue-dark);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .modal-title {
        color: var(--neon-blue);
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .modal-subtitle {
        color: var(--neon-blue-light);
        font-size: 1.2rem;
    }
    
    .modal-body {
        display: flex;
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .modal-image {
        flex: 1;
        min-height: 250px;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        border: 1px solid var(--neon-blue-dark);
    }
    
    .modal-details {
        flex: 2;
    }
    
    .detail-section {
        margin-bottom: 1.5rem;
    }
    
    .detail-title {
        color: var(--neon-blue-light);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .requirements-list {
        list-style-type: none;
    }
    
    .requirements-list li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
    }
    
    .requirements-list li::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--neon-blue);
    }
    
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .tech-item {
        background: rgba(15, 240, 252, 0.1);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        border: 1px solid var(--neon-blue-dark);
        font-size: 0.9rem;
    }

    /* Card flip styles from first set */
    .card {
        width: 300px;
        height: 400px;
        perspective: 1000px;
        cursor: pointer;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(15, 15, 40, 0.7);
        border: 1px solid var(--neon-blue-dark);
        box-shadow: 0 0 20px rgba(15, 240, 252, 0.2);
    }

    .card-back {
        transform: rotateY(180deg);
    }

    .card-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
        border: 3px solid var(--neon-blue);
        box-shadow: 0 0 15px var(--neon-blue);
        transition: transform 0.3s ease;
    }

    .card:hover .card-image {
        transform: scale(1.1);
    }

    /* Unique elements from second set that weren't in first set */
    .card-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }

    .card-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--neon-blue-light);
        text-align: center;
    }

    .card-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        color: var(--neon-blue);
    }

    .cyber-pulse {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: var(--neon-blue);
        border-radius: 50%;
        box-shadow: 0 0 10px 5px var(--neon-blue);
        animation: pulse 2s infinite;
        opacity: 0;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.8);
            opacity: 0.7;
        }
        70% {
            transform: scale(1.3);
            opacity: 0;
        }
        100% {
            transform: scale(0.8);
            opacity: 0;
        }
    }

    .fun-fact {
        background: rgba(15, 240, 252, 0.1);
        border-left: 3px solid var(--neon-blue);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0 5px 5px 0;
    }

    .fun-fact-title {
        color: var(--neon-blue-light);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .fun-fact-title::before {
        content: '💡';
    }

    .cyber-bot {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 80px;
        height: 80px;
        background-color: var(--neon-blue-dark);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 0 20px var(--neon-blue);
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .cyber-bot:hover {
        transform: scale(1.1);
    }

    .cyber-bot::before {
        content: '🤖';
        font-size: 2.5rem;
    }

    .bot-chat {
        position: fixed;
        bottom: 110px;
        right: 20px;
        width: 300px;
        height: 400px;
        background-color: rgba(10, 5, 16, 0.9);
        border: 1px solid var(--neon-blue);
        border-radius: 10px;
        padding: 1rem;
        display: none;
        flex-direction: column;
        box-shadow: 0 0 20px rgba(15, 240, 252, 0.5);
        z-index: 1000;
    }

    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--neon-blue-dark);
    }

    .chat-title {
        color: var(--neon-blue);
    }

    .close-chat {
        background: none;
        border: none;
        color: var(--neon-blue);
        font-size: 1.2rem;
        cursor: pointer;
    }

    .chat-messages {
        flex-grow: 1;
        overflow-y: auto;
        margin-bottom: 1rem;
    }

    .message {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border-radius: 5px;
        max-width: 80%;
    }

    .bot-message {
        background: rgba(15, 240, 252, 0.1);
        align-self: flex-start;
    }

    .user-message {
        background: rgba(15, 240, 252, 0.2);
        align-self: flex-end;
        margin-left: auto;
    }

    .chat-input {
        display: flex;
        gap: 0.5rem;
    }

    .chat-input input {
        flex-grow: 1;
        background: rgba(15, 15, 40, 0.7);
        border: 1px solid var(--neon-blue-dark);
        border-radius: 5px;
        padding: 0.5rem;
        color: white;
    }

    .chat-input button {
        background: var(--neon-blue-dark);
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: white;
        cursor: pointer;
    }

    .chat-input button:hover {
        background: var(--neon-blue);
    }

    .particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 2000;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background: var(--darker-bg);
        border: 2px solid var(--neon-blue);
        border-radius: 10px;
        padding: 2rem;
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--neon-blue);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .modal-title {
        color: var(--neon-blue);
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }

    .process-visual {
        width: 100%;
        height: 300px;
        background: rgba(15, 15, 40, 0.5);
        border: 1px solid var(--neon-blue-dark);
        border-radius: 10px;
        margin: 1rem 0;
        position: relative;
        overflow: hidden;
    }

    .network-node {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var(--neon-blue);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--neon-blue);
    }

    .network-line {
        position: absolute;
        background-color: rgba(15, 240, 252, 0.3);
        transform-origin: 0 0;
    }

    .hacker-silhouette {
        position: absolute;
        width: 50px;
        height: 80px;
        background-color: rgba(255, 0, 0, 0.5);
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        animation: float 3s infinite ease-in-out;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .shield {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: rgba(0, 255, 0, 0.5);
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        animation: pulse 2s infinite;
    }

    .game-container {
        width: 100%;
        height: 500px;
        background: rgba(15, 15, 40, 0.5);
        border: 1px solid var(--neon-blue);
        border-radius: 10px;
        margin: 2rem 0;
        position: relative;
        overflow: hidden;
    }

    .game-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(10, 5, 16, 0.9);
        border: 1px solid var(--neon-blue);
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        z-index: 10;
    }

    .game-start-btn {
        margin-top: 1rem;
        background: var(--neon-blue-dark);
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: white;
        cursor: pointer;
    }

    .game-start-btn:hover {
        background: var(--neon-blue);
    }

    footer {
        text-align: center;
        padding: 2rem;
        background-color: rgba(10, 5, 16, 0.8);
        border-top: 1px solid var(--neon-blue);
        margin-top: 2rem;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
    }

    .social-link {
        color: var(--text-color);
        font-size: 1.5rem;
        transition: all 0.3s ease;
    }

    .social-link:hover {
        color: var(--neon-blue);
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        header {
            flex-direction: column;
            padding: 1rem;
        }

        nav ul {
            margin-top: 1rem;
            gap: 1rem;
        }

        .hero {
            flex-direction: column;
        }

        .hero-visual {
            width: 100%;
            height: 300px;
        }

        .card-container {
            flex-direction: column;
            align-items: center;
        }
    }
`}</style>

            <Header />

            <main>
                <section id="home">
                    <div className="particles-container" ref={particlesContainerRef}></div>
                    <div className="hero">
                        <div className="hero-content">
                            <h1 className="section-title">See Cyber Threats Before They Strike</h1>
                            <p className="subtitle">Our AI-powered prediction system identifies cyberattacks before they happen, giving you time to defend your digital assets</p>
                            <button className="btn" id="demo-btn">Try Interactive Demo</button>

                            <div className="fun-fact">
                                <h3 className="fun-fact-title">Did You Know?</h3>
                                <p>The average cost of a data breach in 2023 was $4.45 million. Our system can help prevent 90% of potential breaches!</p>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div id="hero-animation" ref={heroAnimationRef}></div>
                        </div>
                    </div>
                </section>

                <section id="prediction">
                    <h1 className="section-title">Our Prediction System</h1>
                    <p>Discover how our advanced technology predicts cyber threats before they occur</p>

                    <div className="card-container">
                        <div className="card" data-step="1">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Global network" className="card-image" />
                                    <h2 className="card-title">Global Threat Detection</h2>
                                    <p>Click to learn how we monitor worldwide cyber activity</p>
                                </div>
                                <div className="card-back">
                                    <h2 className="card-title">How It Works</h2>
                                    <p>Our system scans millions of data points across the internet to identify emerging threats and attack patterns in real-time.</p>
                                    <button className="btn" style={{ marginTop: "1rem" }}>View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="card" data-step="2">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="AI brain" className="card-image" />
                                    <h2 className="card-title">AI Analysis</h2>
                                    <p>Click to see our neural networks in action</p>
                                </div>
                                <div className="card-back">
                                    <h2 className="card-title">AI Power</h2>
                                    <p>Deep learning algorithms analyze historical attack data to predict future threats with 94% accuracy.</p>
                                    <button className="btn" style={{ marginTop: "1rem" }}>View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="card" data-step="3">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Shield protection" className="card-image" />
                                    <h2 className="card-title">Automated Defense</h2>
                                    <p>Click to explore our protection systems</p>
                                </div>
                                <div className="card-back">
                                    <h2 className="card-title">Instant Protection</h2>
                                    <p>When threats are detected, our system automatically implements defenses to protect your infrastructure.</p>
                                    <button className="btn" style={{ marginTop: "1rem" }}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fun-fact">
                        <h3 className="fun-fact-title">Security Tip</h3>
                        <p>Using multi-factor authentication can prevent 99.9% of automated attacks on your accounts!</p>
                    </div>
                </section>

                <section id="game">
                    <h1 className="section-title">Interactive Defense Challenge</h1>
                    <p>Try your hand at stopping cyber threats in our simulation game</p>

                    <div className="game-container" ref={gameContainerRef}>
                        <div className="game-message" id="game-message">
                            <h2>Cyber Defense Challenge</h2>
                            <p>Protect the network from incoming attacks by clicking on the threats before they reach the center!</p>
                            <button className="game-start-btn" id="game-start-btn">Start Game</button>
                        </div>
                    </div>

                    <div className="fun-fact">
                        <h3 className="fun-fact-title">Game Fact</h3>
                        <p>In the real world, the average time to detect a breach is 207 days. Our system reduces this to minutes!</p>
                    </div>
                </section>

                <section id="careers">
                    <h1 className="section-title">Future Cyber Careers</h1>
                    <p>Join our team of digital defenders and shape the future of cybersecurity!</p>

                    <div className="career-container">
                        <div className="career-card" id="threat-hunter">
                            <h2 className="career-title">AI Threat Hunter</h2>
                            <p>Train neural networks to predict cyber attacks before they happen</p>
                            <div className="career-perks">
                                <div className="perk-item">
                                    <span className="perk-icon">🤖</span>
                                    <span>Get your own AI assistant named "Byte"</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">💸</span>
                                    <span>Hacker-proof salary (we pay in crypto if you prefer)</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">🏖️</span>
                                    <span>Unlimited vacation (as long as the bots cover for you)</span>
                                </div>
                                <button className="btn" style={{ marginTop: "1rem" }}>Apply to Hunt</button>
                            </div>
                        </div>

                        <div className="career-card" id="firewall-samurai">
                            <h2 className="career-title">Quantum Security Wizard</h2>
                            <p>Develop unbreakable quantum encryption systems</p>
                            <div className="career-perks">
                                <div className="perk-item">
                                    <span className="perk-icon">🔮</span>
                                    <span>Actual wizard robe included (with RGB lighting)</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">⚛️</span>
                                    <span>Play with quantum computers daily</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">🍕</span>
                                    <span>Free pizza when you break our own encryption</span>
                                </div>
                                <button className="btn" style={{ marginTop: "1rem" }}>Cast Application</button>
                            </div>
                        </div>

                        <div className="career-card" id="data-ninja">
                            <h2 className="career-title">Cyber Jedi</h2>
                            <p>Use the force to maintain balance in the digital galaxy</p>
                            <div className="career-perks">
                                <div className="perk-item">
                                    <span className="perk-icon">✨</span>
                                    <span>Real lightsaber (USB-C charging)</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">🌌</span>
                                    <span>Work from any planet with WiFi</span>
                                </div>
                                <div className="perk-item">
                                    <span className="perk-icon">🧘</span>
                                    <span>Meditation room with holographic Yoda</span>
                                </div>
                                <button className="btn" style={{ marginTop: "1rem" }}>Join the Order</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="modal" id="process-modal">
                <div className="modal-content">
                    <button className="close-modal" id="close-modal">✕</button>
                    <h2 className="modal-title" id="modal-title">Process Details</h2>
                    <div className="process-visual" ref={processAnimationRef}>
                    </div>

                    <div id="process-steps">
                    </div>
                </div>
            </div>

            <div className="cyber-bot" id="cyber-bot"></div>
            <div className="bot-chat" ref={botChatRef}>
                <div className="chat-header">
                    <h3 className="chat-title">CyberBot Assistant</h3>
                    <button className="close-chat" id="close-chat">✕</button>
                </div>
                <div className="chat-messages" id="chat-messages">
                    <div className="message bot-message">Hello! I'm CyberBot. How can I help you with cybersecurity today?</div>
                </div>
                <div className="chat-input">
                    <input type="text" id="user-input" placeholder="Ask me about cybersecurity..." />
                    <button id="send-message">Send</button>
                </div>
            </div>

            <div className="career-modal" ref={careerModalRef}>
                <div className="career-modal-content">
                    <button className="close-modal" id="close-modal">✕</button>
                    <div className="modal-header">
                        <h2 className="modal-title" id="modal-title">AI Threat Hunter</h2>
                        <p className="modal-subtitle" id="modal-subtitle">The digital predator that stays one step ahead</p>
                    </div>
                    <div className="modal-body">
                        <div className="modal-image" id="modal-image"></div>
                        <div className="modal-details">
                            <div className="detail-section">
                                <h3 className="detail-title">🛡️ Mission Brief</h3>
                                <p id="mission-text">As an AI Threat Hunter, you'll train neural networks to predict and neutralize cyber threats before they manifest. Your algorithms will be the first line of defense in our predictive security ecosystem.</p>
                            </div>
                            <div className="detail-section">
                                <h3 className="detail-title">⚙️ Core Responsibilities</h3>
                                <ul className="requirements-list" id="responsibilities-list">
                                </ul>
                            </div>
                            <div className="detail-section">
                                <h3 className="detail-title">💻 Tech Stack</h3>
                                <div className="tech-stack" id="tech-stack">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn" id="apply-now-btn" style={{ width: "100%" }}>Initiate Application Sequence</button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CyberFuture;