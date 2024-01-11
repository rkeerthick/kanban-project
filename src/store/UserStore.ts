import { action, makeObservable, observable } from 'mobx';

export interface UserDetailsType {
    email: string;
    password: string;
}

class userStore {
  userDetails: UserDetailsType = {
    email: "",
    password: "",
  };
    
    constructor() {
        makeObservable(this, {
          userDetails: observable,
          setUserDetails: action,
        });
    }

    setUserDetails(value: UserDetailsType) {
        this.userDetails = value;
    }
}

export const UserStore = new userStore();