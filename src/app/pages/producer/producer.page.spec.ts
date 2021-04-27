import { ProducerPage } from './producer.page';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: ProducerPage;
    let router:Router;
    let productService:ProductService;

    beforeEach(() => {
      component = new ProducerPage(productService,router);
    });

    // clear
    afterEach(() => {
        productService = null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});