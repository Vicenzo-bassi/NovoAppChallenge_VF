O projeto consiste em um App para o usuário tirar dúvidas sobre produtos.
Quando for rodar o projeto, acessar "cd NovoAppChallenge" e iniciar com "npx expo start -c", depois que aparecer o qr code, aperte w para abrir na web.

As infos para a tela de login são: usuário: RM000000  Senha: 123

Integrantes:

João Deveza - RM: 551459
Diego Mecco - RM: 98768
Gabriel Eduardo - RM: 98843
Marco Henrrique - RM: 98348
Vicenzo Guardabassi - RM: 550208

Alterações
    -A tela module1screen.js foi alterada para conter o crud;
    create - handleAddDoubt adiciona à lista e a salva com AsyncStorage.
    read - loadDoubts carrega para exibir na lista.
    update - handleEditDoubt permite editar e handleUpdateDoubt salva a atualização.
    delete - handleDeleteDoubt remove do AsyncStorage e da lista.

O Asyncstorage está sendo utilizado na tela de login para salvar login e senha, e também na tela module1screen para salvar a dúvida na lista.


Arquitetura de pastas:

NovoAppChallenge/
├── assets/                  
│   ├── images/              
│   └── fonts/       
│
├── node_modules/            
|
│── screens/             
│ ├── HomeScreen.js    
│ ├── LoginScreen.js   
│ ├── ModulosScreen.js 
│ ├── Modulo1Screen.js 
│ └── ContactScreen.js 
│ │  
│ └── services/            
│     └── api.js           
│
├── .gitignore               
├── app.json
├── App.js                
├── babel.config.js
├── metro.config.js   
├── package.json            
└── README.md               
