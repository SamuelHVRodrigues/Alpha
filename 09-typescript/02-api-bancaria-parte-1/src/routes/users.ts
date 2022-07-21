import Router from 'express';
import { CreateUser } from '../controllers';

const route = Router();

route.route('/users').post(new CreateUser().handle.bind(new CreateUser()));
// "new CreateUser().handle" é para dar um contexto, "bind(new CreateUser()" especifíca o contexto

export default route;


// um cliente pode ter mais de uma conta
// verificação de conta bancária 
// depósito
// saque
// transferência - validar o saldo da conta, verificar se tem saldo disponível somado a taxa
// extrato - ordem de data mais recente, tarifa vem após a transaçao

// metodo para atualização de dados, buscar cliente