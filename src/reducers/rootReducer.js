import Data from '../classes/Data';
import User from '../classes/User';
import File from '../classes/Files';

var userArr = [];
var fileArr = [];
var countArr = [1,1,1];

userArr.push(new User("Saúl Enrique", "Labra", "1234", "quique"));
userArr.push(new User("Rodrigo", "Garcia", "5678"));
userArr.push(new User("Manuel", "Guadarrama", "abcd"));
userArr.push(new User("Emilio", "Hernandez", "efghi"));

fileArr.push(new File(0, "imagen1", ".jpg", "24/10/2019"));
fileArr.push(new File(1, "Texto prueba", ".txt", "24/10/2019"));
fileArr.push(new File(2, "Documento prueba", ".docx", "24/10/2019"));
fileArr.push(new File(3, "imagen2", ".png", "24/10/2019"));

var data = new Data(fileArr, userArr, countArr);

function rootReducer(state = data, {type, payload}) {
    switch(type) {
        case 'deleteFile': 
            state.fileArr = state.fileArr.filter(item => item.id !== payload);
            return state;
        case 'addFile':
            state.fileArr.push(payload);
            return state;
        case 'addUser':
            state.userArr.push(payload);
            return state;
        case 'deleteUser':
            for(var i=0; i< state.userArr.length; i++)
            {
                
                if(state.userArr[i].password == payload[1] && state.userArr[i].email == payload[0])
                {
                    state.userArr.splice(i,1);
                }
            }
            return state;
        case 'checkAcc':
            for(var i=0; i< state.userArr.length; i++)
            {
                
                if(state.userArr[i].password == payload[1] && state.userArr[i].email == payload[0])
                {
                    alert("Login Correcto");
                    break;
                }
                else {
                    alert("Datos incorrectos");                    
                    break;
                }
            }
            return state;
        case 'getGraph':
            state.countArr[0] = state.fileArr.filter(File => File.type == ".jpg" || File.type == ".png").length;
            state.countArr[1] = state.fileArr.filter(File => File.type == ".txt").length;
            state.countArr[2] = state.fileArr.filter(File => File.type == ".doc" || File.type == ".docx" || File.type == ".pdf").length;
            return state
        default:
            return state;
    }
}

export default rootReducer;