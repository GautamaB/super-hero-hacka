const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}
const controllers = {

  '/': () => {
    // rendu de la page playgame
    fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(resp => {
        return resp.json()
      })
      .then(hero => {
        const hero1 = hero[Math.floor(Math.random() * (0, 500))]
        render(`
    <div class="row">
      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#exampleModal">
        Play the game</button>
      </div> 
    </div >
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Selection your character</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="container">
        <div class="card col-md-2">
           <img class="card-img-top" src="${hero1.images.lg}" alt="Card image cap">
          <div class="card-body">
          <p class="card-text">${hero1.name}</p>
          </div>   
          <button type="button" id=button" class="btn btn-primary">start</button>
        </div>
      </div>
    </div>
  </div>
      `)
      })
  },
}



// gére l'execution du routing coté client
const routing = () => {
  const routes = [
    '/',
  ]
  routes.forEach(
    path => page(path, controllers[path])
  )
  page()
}

//appel cette fonction pour gérer les routes
routing()