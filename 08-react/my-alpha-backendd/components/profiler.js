/* 
Back-end NodeJS

    Crie um novo projeto em react no github chamado my-alpha-backend;
    Crie um módulo chamado profiler no seu back-end.

    O módulo deve ser capaz de contactar o módulo de database, realizar as seguintes operações:

    Inserir um usuário = user.insert (nome, senha, foto, data de nascimento, e-mail)
    Deletar um usuário = user.delete
    Editar um usuário = user.edit
    Validar um usuário = user.validate
    Visualizar um usuário = user.view (por id, nome, e-mail)

    Os seguintes campos devem ser validados pelo back-end no ato de INSERIR UM USUÁRIO (user.insert):

    senha (8 caracteres contendo 1 número)
    email ( * @ domain .com )
    data de nascimento ( AAAA/MM/DD )

    O controle de sessão deve ser realizado com JWT:

    uuid = id único gerado aleatoriamente para o usuário inserido pelo método user.insert
    email ( * @ domain .com )
    data de nascimento ( DD/MM/AAAA )
 */