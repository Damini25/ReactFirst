const fakeAuth = () => {
    let isAuth = false;
    return {
        authenticate: function () {
            this.isAuth = true;
        },
        signout: function () {
            this.isAuth = false;
        }
    }
}