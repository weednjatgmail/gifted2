import { AppState } from "../AppState.js"
import { gift } from "../models/Gift.js"
import { api } from "../utils/Axios.js"



class GiftsService {

    async getGifts() {
        const response = await api.get("api/gifts")
        console.log("GET GIFT")
        const gifts = response.data.map(pojo => new gift(pojo))
        AppState.gifts = gifts
    }


}

export const giftsService = new GiftsService() 