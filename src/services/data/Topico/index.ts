import api from "../../api";
import {ITopico} from "../../../interfaces/Topico.interface";

class TopicoData {
    index(){
        return api.get <ITopico> ('/topico')
    }
}

export default new TopicoData();