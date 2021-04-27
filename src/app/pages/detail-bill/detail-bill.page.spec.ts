import { DetailBillPage } from './detail-bill.page';

describe('Component: Details', () => {

    let component: DetailBillPage;

    beforeEach(() => {
      component = new DetailBillPage();
    });

    // clear
    afterEach(() => {

        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});