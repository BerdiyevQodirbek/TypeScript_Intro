
export class Chat {
    constructor(private _messengers?: Array<{name: string}>,  private _messages?: Array<{text: string}>, public _createdAt?: any ) {
        // _createdAt = new Date().toLocaleString()
        // this._messengers = _messengers
    }

    getMessenger() {
        return this._messengers
    }

    getMessages() {
        return this._messages
    }

    getCreatedAt() {
        return this._createdAt
    }

    setMessenger(person: {name: string}) {
            this._messengers.push(person)
    } 

    setMessages(message: {text: string}) {
            this._messages.push(message)
    } 
}


