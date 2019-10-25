import Data from '../classes/Data';
import User from '../classes/User';
import File from '../classes/Files';

var userArr = [];
var fileArr = [];

userArr.push(new User("Saúl Enrique", "Labra", "1234"));
userArr.push(new User("Rodrigo", "Garcia", "5678"));
userArr.push(new User("Manuel", "Guadarrama", "abcd"));
userArr.push(new User("Emilio", "Hernandez", "efghi"));

fileArr.push(new File("imagen1.jpg", "Image", ""))

var data = new Data()

function rootReducer(state = data, {type, payload}) {
    switch(type) {
        default:
            console.log('entró al default');
            return state;
    }
}

export default rootReducer;