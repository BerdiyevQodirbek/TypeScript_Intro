export class Chat {

    constructor(private _messenger?: String,  private _messages?: Array<{text: string}>, _createdAt?: String ) {
        // _createdAt = new Date().toLocaleString()
        // this._messenger = _messenger
    }

    // get messenger() {
    //     return this._messenger
    // }

    // get messages() {
    //     return this._messages
    // }

    // get createdAt() {
    //     return this.createdAt
    // }

    // set messenger(person) {
    //         this._messenger = person
    // } 
}

