describe("UserService", function() {
    var UserServiceObj;

    beforeEach(function(){
        module('mindBurstApp.user');
    });

    beforeEach(inject(function(UserService) {
        UserServiceObj = UserService;
    }));

    describe("get method", function(){

        it("should return an object with a name property", function() {
            var obj = UserServiceObj.get();

            expect(obj.name.length).toBe(2);
        });
    });

});