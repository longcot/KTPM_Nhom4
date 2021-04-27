import { VerifyEmailPage } from './verify-email.page';
import {AuthenticationService} from '../../services/authentication-service';



describe('Component: Details', () => {

    let component: VerifyEmailPage;
    let authenticationService:AuthenticationService;
    beforeEach(() => {
      component = new VerifyEmailPage(authenticationService);
    });

    // clear
    afterEach(() => {

        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});