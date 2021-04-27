import { BillPage } from './bill.page';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: BillPage;
    let router:Router;

    beforeEach(() => {
      component = new BillPage(router);
    });

    // clear
    afterEach(() => {
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});