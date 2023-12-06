const login = () => {
 
 return <>
<section class="bg-[#221D18]">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
      </a>
      <div class="w-full bg-[#181410] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="font-mono text-xl font-bold leading-tight tracking-tight text-[#E5D437] md:text-2xl">
                  Entre em sua conta
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="font-mono block mb-2 text-sm font-medium text-white">E-mail</label>
                      <input type="email" name="email" id="email" class=" font-mono bg-[#221D18] border border-[#35302B] text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="nome@e-mail.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="font-mono block mb-2 text-sm font-medium text-white">Senha</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="font-mono bg-[#221D18] border border-[#35302B] text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-[#221D18] border border-gray-300 rounded focus:ring-3 focus:ring-primary-300" required=""></input>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500">Lembre de mim</label>
                          </div>
                      </div>
                      <a href="#" class="font-mono text-sm font-medium text-primary-600 hover:underline">Esqueceu a senha?</a>
                  </div>
                  <form action="homePage" method="get">
                  <button type="submit" class="font-mono w-full font-bold text-[#181410] bg-[#E5D437] hover:bg-[#CEBF32] focus:ring-4 focus:outline-none focus:ring-[#7E7423] rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
                  </form> 
                  <p class="font-mono text-sm font-light text-gray-500">
                      Não tem uma conta ainda? <a href="#" class="font-mono font-medium text-primary-600 hover:underline">Criar conta</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
 </>
}

export default login