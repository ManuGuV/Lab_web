import Data from '../classes/Data';
import User from '../classes/User';
import File from '../classes/Files';

var userArr = [];
var fileArr = [];
var countArr = [1,1,1];

userArr.push(new User("Saúl Enrique", "Labra", "1234"));
userArr.push(new User("Rodrigo", "Garcia", "5678"));
userArr.push(new User("Manuel", "Guadarrama", "abcd"));
userArr.push(new User("Emilio", "Hernandez", "efghi"));

fileArr.push(new File(0, "imagen1", "jpg", "24/10/2019"));
fileArr.push(new File(1, "Texto prueba", "text", "24/10/2019"));
fileArr.push(new File(2, "Documento prueba", "doc", "24/10/2019"));
fileArr.push(new File(3, "imagen2", "png", "24/10/2019"));

var data = new Data(fileArr, userArr, countArr);

function rootReducer(state = data, {type, payload}) {
    switch(type) {
        case 'deleteFile': 
            console.log("Borrando archivo");
            state.fileArr = state.fileArr.filter(item => item.id !== payload);
            return state;
        case 'addFile':
            console.log("Agregando archivo");
            state.fileArr.push(payload);
            return state;
        case 'addUser':
            console.log("Agregando usuario");
            state.userArr.push(payload);
            return state;
        case 'getGraph':
            console.log("Updating data for chart");
            state.countArr[0] = state.fileArr.filter(File => File.type == "jpg" || File.type == "png").length;
            state.countArr[1] = state.fileArr.filter(File => File.type == "text").length;
            state.countArr[2] = state.fileArr.filter(File => File.type == "doc").length;
            return state
        default:
            console.log('entró al default');
            return state;
    }
}

export default rootReducer;