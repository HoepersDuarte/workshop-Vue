<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 bg-light">
    <div class="row w-100">
      <div class="col col-sm-12 col-md-4 offset-md-4">
        <div class="col text-center text-cursive text-30 pb-2">
          WorkshopVue
        </div>
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" id="name" class="form-control" placeholder="Seu nome">
              </div>
              <div class="form-group">
                <label for="email">Endereço de email</label>
                <input type="email" id="email" class="form-control" placeholder="Seu email">
              </div>
              <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" class="form-control" placeholder="Senha">
              </div>
              <div class="form-group">
                <label for="password-confirm">Confirmação de Senha</label>
                <input type="password" class="form-control" id="password-confirm" placeholder="Confirmação de senha">
              </div>
              <button type="button" class="btn btn-orange btn-block" >Cadastrar</button>
            </form>
          </div>
        </div>
        <div class="mt-2 text-center">
          Já possui uma conta? <router-link to="/login">Faça login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
