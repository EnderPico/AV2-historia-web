document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    
    const results = {
        a: {
            title: "🎓 Sócrates (Grécia)",
            description: "Você é o filósofo inquieto! Questionador, busca a verdade em tudo e vive para entender o mundo. Idealista, às vezes parece fora do tempo — e está mesmo."
        },
        b: {
            title: "⚔️ Alexandre, o Grande (Grécia)",
            description: "O conquistador nato! Você é ambicioso, carismático e não tem medo de romper limites. Líder por natureza, sonha grande — e age maior ainda."
        },
        c: {
            title: "🏛️ Júlio César (Roma)",
            description: "O estrategista supremo! Você é prático, inteligente e comanda com autoridade. Vê o jogo inteiro antes dos outros fazerem a primeira jogada."
        },
        d: {
            title: "📜 Sêneca (Roma)",
            description: "O sábio estoico! Você valoriza a razão, a calma e a vida bem vivida. Gosta de observar antes de agir e acredita que a virtude é o maior dos poderes."
        }
    };

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Conta as respostas
        const answers = {
            a: 0,
            b: 0,
            c: 0,
            d: 0
        };
        
        // Verifica cada resposta
        for (let i = 1; i <= 5; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedAnswer) {
                answers[selectedAnswer.value]++;
            }
        }
        
        // Encontra a resposta mais frequente
        let maxCount = 0;
        let mostFrequent = '';
        
        for (const [answer, count] of Object.entries(answers)) {
            if (count > maxCount) {
                maxCount = count;
                mostFrequent = answer;
            }
        }
        
        // Mostra o resultado
        const result = results[mostFrequent];
        alert(`${result.title}\n\n${result.description}`);
    });
});
