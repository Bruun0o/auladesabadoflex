let outros = document.getElementById("outros");
let genero = document.getElementsByName("genero");
let estados = document.querySelector("#estados");
let pais = document.getElementById("pais");
let senha1 = document.getElementById("senha1");
let senha2 = document.getElementById("senha2");

const estadosDoBrasil = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

function abrirOutros() {
  if (genero[2].checked) {
    outros.disabled = false;
  } else {
    outros.disabled = true;
    outros.value = "";
  }
}
function verEstados() {
  if (pais.value == "BR") {
    if (!estados[1]){
        for (let i = 1; i < estadosDoBrasil.length; i++) {
            let option = document.createElement("option");
            option.textContent = estadosDoBrasil[i].nome;
            option.value = estadosDoBrasil[i].sigla;
            estados.appendChild(option);
          }
    }

    estados.hidden = false;
    document.getElementById("labelEstados").hidden = false;
  } else {
    estados.hidden = true;
    document.getElementById("labelEstados").hidden = true;
  }
}

function togglePass() {
  if (senha1.type == "password") 
 senha1.type = "text", 
senha2.type = "text";
  else senha1.type = "password", senha2.type = "password";
 }
function valiDarcep (){
    if (cep.value == "" || cep.value.length !=8) {
        cep.classList.add ('')
        
    }
}

 <div>
 <h4>Endereço</h4>
 <div class="row">
   <div class="form-floating mb-3 col-3">
     <input id="cep" onclick="" type="number" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> CEP: </label>
   </div>
   <div class="col-3">
     <button class="btn btn-lg btn-primary mt-1"><i class="bi bi-search"></i> Pesquisar</button>
     <button class="btn btn-lg btn-primary mt-1"><i class="bi bi-fonts"></i> Digitar</button>
   </div> 
 </div>
 <hr>
 <div class="row">
   <div class="form-floating mb-3 col-3">
     <input id="logradouro"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Logradouro: </label>
   </div>    
   <div class="form-floating mb-3 col-1">
     <input id="numero"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Numero:  </label>
   </div> 
   <div class="form-floating mb-3 col-3">
     <input id="complemento"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Complemento:  </label>
   </div> 
 </div>
 <div class="row">
   <div class="form-floating mb-3 col-3">
     <input id="bairro"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Bairro: </label>
   </div>    
   <div class="form-floating mb-3 col-1">
     <input id="uf"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Uf:</label>
   </div> 
   <div class="form-floating mb-3 col-3">
     <input id="localidade"  type="text" class="form-control" name="floatingInput" placeholder="">
     <label for="floatingInput" class="ms-2"> Localidade:  </label>
   </div> 
 </div>

</div>

