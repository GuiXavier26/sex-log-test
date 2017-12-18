function SignInBusiness($http) {
    
    var REP = new SignInRepository($http);

    //Simulando a resposta do servidor e fazendo um callback
    this.getData = function(setData){
       REP.getData().then(function(response){
        setData(response.data);
       });
    };  



    
}
    