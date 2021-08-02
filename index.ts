import {Chat} from './components/message'
import {User} from './components/user'

// making console.log() function

var log = (arg: any) => console.log(arg)

// testing block

var makeInitialChat = () => {
}
var CavernClub = new Chat([], [], new Date().toLocaleDateString("ru"))

var Ahmad = new User("Ahmadjon Abdusamadov", 1)
CavernClub.setMessenger({name: "Abduboriy Mirzayev"})
log(CavernClub)
CavernClub._createdAt