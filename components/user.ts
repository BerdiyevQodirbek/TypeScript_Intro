

export class User {
    constructor(private _name?: string, private _id?: number){
    }

    getName() {
        console.log(this._name)
        return this._name
    }

    getId() {
        console.log(this._id)
        return this._id
    }
}



