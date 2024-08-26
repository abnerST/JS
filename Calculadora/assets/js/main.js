function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        inicia() {
            this.cliqueBotoes();
            this.enter();
        },
        enter() {
            document.addEventListener("keyup", e => {
                if (e.key === "Enter") {
                    this.calculaConta();
                }
            });
        },
        cliqueBotoes() {
            document.addEventListener("click", function (e) {
                const el = e.target;
                const classList = el.classList;
                if (classList.contains("btn-num")) {
                    this.preencheDisplay(el.innerText);
                }
                if (classList.contains("btn-clear")) {
                    this.clearDisplay();
                }
                if (classList.contains("btn-del")) {
                    this.apagaUm();
                }
                if (classList.contains("btn-eq")) {
                    this.calculaConta();
                }

                this.display.focus();

            }.bind(this));
        },
        preencheDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = "";
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        calculaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                this.display.value = (typeof conta === "undefined" ? "0" : conta);
            } catch (e) {
                alert("Não é possível calcular a expressão informada!");
            }
        }
    }
}


const calculadora = criaCalculadora();
calculadora.inicia();


