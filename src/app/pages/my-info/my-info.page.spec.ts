import { MyInfoPage } from './my-info.page';
import {AuthenticationService} from '../../services/authentication-service';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: MyInfoPage;
    let router:Router;
    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new MyInfoPage(authentication,router);
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