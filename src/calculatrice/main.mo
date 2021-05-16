actor Calcul {
    flexible var counter : Int = 0;

    public func add (n : Int) : async Int {counter += n; counter;};

    public func sub (n : Int) : async Int {counter -=n ; counter;};

    public func mult (n:Int) : async Int {counter *= n; counter;};

    public func div (n:Int) : async ?Int {
        if (n == 0) {
            return null
        } else {
            counter /=n;
            ?counter;
        }
    };

    public func clear() : async Int {
        counter -= counter;
        return counter;
    };

};
