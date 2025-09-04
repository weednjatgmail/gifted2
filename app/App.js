import { AuthController } from './Auth/AuthController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { GiftsController } from './controllers/GiftsController.js';



class App {

  authController = new AuthController()


  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  GiftsController = new GiftsController()



}

window['app'] = new App()


