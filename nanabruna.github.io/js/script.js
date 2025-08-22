

document.addEventListener("DOMContentLoaded", function() {

  // Função para validar formulários
  function validarFormulario(form) {
    let valid = true;
    const inputs = form.querySelectorAll("input, textarea, select");
    
    inputs.forEach(input => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "";
      }
    });

    return valid;
  }

  // Formulário de agendamento de pedidos (servicos.html)
  const formServico = document.querySelector("form[action='#']");
  if(formServico) {
    formServico.addEventListener("submit", function(e){
      e.preventDefault();
      if(validarFormulario(formServico)) {
        alert("Pedido agendado com sucesso! 😊");
        formServico.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }

  // Formulário de contato (contato.html)
  const formContato = document.querySelectorAll("form[action='#']")[1];
  if(formContato) {
    formContato.addEventListener("submit", function(e){
      e.preventDefault();
      if(validarFormulario(formContato)) {
        alert("Mensagem enviada com sucesso! 📬");
        formContato.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }

  // auto-slide do carrossel
  const carrossel = document.querySelector("#carrossel");
  if(carrossel) {
    const carousel = new bootstrap.Carousel(carrossel, {
      interval: 4000,
      ride: "carousel"
    });
  }

});
