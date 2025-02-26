// now this is cool
export class AuthState {
    static Unknown = new AuthState('unknown');
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');

    constructor(name) {
    this.name = name;
    }
}
//this is like directly from simon but i get it its how we gon track states i like it