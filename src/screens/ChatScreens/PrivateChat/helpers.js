import { Platform } from "react-native"



export const protocol = Platform.OS == 'ios' ? 'https' : 'http'


export const voiceMessageRequestBody = (type) => {
    if (type === 'team') {
        return '/team/chat'
    } else if (type === 'team_game') {
        return '/team/create_game/chat'
    } else if (type === 'game') {
        return '/create/game/chat/'
    } else {
        return '/tourney/chat'
    }
}

export const socketBody = (type) => {
    if (type === 'team_game') {
        return '/team/create_game'
    } else if (type === 'team') {
        return '/team'
    } else if (type === 'tournament') {
        return '/tourney'
    } else {
        return ''
    }
}


export const chatIdKey = (type) => {
    if (type === 'team') {
        return 'team'
    } else if (type === 'game') {
        return 'create_game'
    } else if (type === 'team_game') {
        return 'team_game'
    } else {
        return 'tourney'
    }
}