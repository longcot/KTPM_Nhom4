import { ForgetPassPage } from './forget-pass.page';
import {TestBed,fakeAsync,tick} from '@angular/core/testing'
import {Location} from '@angular/common'
import {RouterTestingModule} from '@angular/router/testing'
import {AuthenticationService} from '../../services/authentication-service';
import { Router} from '@angular/router';

describe('Component: Forget-pass', () => {

    let component: ForgetPassPage;
    let router:Router;
    let location: Location;
    let authentication:AuthenticationService;
    let fixture;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ForgetPassPage]
      });
      // component = new ForgetPassPage(authentication,router);
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      fixture = TestBed.createComponent(ForgetPassPage);
      router.initialNavigation();
    });

    afterEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
    });

    it('router',fakeAsync(()=>{
      expect(location.path()).toBe(['tabs/login']);
    }))

    it('navigate to "" redirects you to /login', fakeAsync(() => {
      router.navigate(['tabs/login']).then(() => {
        expect(location.path()).toBe(['tabs/login']);
     });
    }));
});