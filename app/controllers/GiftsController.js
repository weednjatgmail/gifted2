import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";






export class GiftsController {
    constructor() {

        AppState.on("identity", this.getGifts)
        AppState.on("gifts", this.drawGifts)




    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error("COULD NOT GET GIFT", error)

        }
    }

    async drawGifts() {
        console.log('draw gifts')
        let content = ''
        AppState.gifts.forEach(g => content += g.giftTemplate)
        console.log(content)
        setHTML("gifts", content)


    }






}


