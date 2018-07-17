import {observable, action} from 'mobx';

class Login {
    @observable
    isLogin = false;

    @action upDataLoginState = state => {
        this.isLogin = state;
    };
}

export default new Login();