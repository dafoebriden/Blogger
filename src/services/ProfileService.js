import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger"

class ProfileService {
    async getProfileById(profileId) {
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('Got Profile', response.data)
        const newProfile = new Profile(response.data)
        AppState.activeProfile = newProfile

    }
}
export const profileService = new ProfileService()