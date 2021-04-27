import { RegistrationPage } from './registration.page';
import {AuthenticationService} from '../../services/authentication-service';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: RegistrationPage;
    let router:Router;
    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new RegistrationPage(authentication,router);
    });

    // clear
    afterEach(() => {
      authentication=null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});