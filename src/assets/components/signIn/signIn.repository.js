function SignInRepository($http) {
    
    //GET do servidor
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'data.json',
            dataType: 'json',
            contentType: 'aplication/json'          
        });
    };
    
}
    