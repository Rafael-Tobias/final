import api from "../../api";
import {IMensagem, IMensagemResponse} from "../../../interfaces/Mensagem.interface";
import { IResponse } from "../../../interfaces/Response.interface";

class MensagemData {
    index (){
        return api.get <IMensagemResponse> ('/mensagem')
    }
    store (data: IMensagem){
        return api.post <IResponse> ('/mensagem', data, {
            headers: {
                Accept: 'application/json',
                'Content-Type':'multipart/form-data'        
            }
        });
    }
}

export default new MensagemData();