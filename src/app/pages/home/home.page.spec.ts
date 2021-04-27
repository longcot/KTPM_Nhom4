import { HomePage } from './home.page';
import {AuthenticationService} from '../../services/authentication-service';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: HomePage;
    let router:Router;
    let productService:ProductService;
    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new HomePage(authentication,productService,router);
    });

    // clear
    afterEach(() => {
      authentication=null;
        productService = null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});