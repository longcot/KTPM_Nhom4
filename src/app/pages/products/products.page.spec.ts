import { ProductsPage } from './products.page';
import {AuthenticationService} from '../../services/authentication-service';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

describe('Component: Details', () => {

    let component: ProductsPage;
    let router:Router;
    let productService:ProductService;
    let authentication:AuthenticationService;
    let toastController:ToastController;

    beforeEach(() => {
      component = new ProductsPage(authentication,productService,toastController,router);
    });

    // clear
    afterEach(() => {
      authentication=null;
        productService = null;
        router = null;
        toastController=null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});