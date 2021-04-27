import { CartPage } from './cart.page';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service';

describe('Component: Details', () => {

    let component: CartPage;
    let router:Router;
    let productService:ProductService;

    beforeEach(() => {
      component = new CartPage(router,productService);
    });

    // clear
    afterEach(() => {
      productService =null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});