import { DetailPage } from './detail.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { ProductService } from '../../services/product-service';

describe('Component: Details', () => {

    let component: DetailPage;
    let router:Router;
    let productService:ProductService;
    let activatedRoute:ActivatedRoute;
    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new DetailPage(router,authentication,activatedRoute,productService);
    });

    // clear
    afterEach(() => {
      authentication=null;
      activatedRoute=null;
      productService =null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});