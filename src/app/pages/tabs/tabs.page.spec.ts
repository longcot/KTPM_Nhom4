import { TabsPage } from './tabs.page';
import { OrderService } from 'src/app/services/order-service';


describe('Component: Details', () => {

    let component: TabsPage;
    let orderService:OrderService;
    beforeEach(() => {
      component = new TabsPage(orderService);
      
    });

    // clear
    afterEach(() => {
        orderService= null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});