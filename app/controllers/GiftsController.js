import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";





export class GiftsController {
    constructor() {

        AppState.on("identity", this.getGifts)




    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error("COULD NOT GET GIFT", error)

        }

    }
}