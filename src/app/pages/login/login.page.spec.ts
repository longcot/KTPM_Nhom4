import { LoginPage } from './login.page';
import {TestBed,ComponentFixture} from '@angular/core/testing'
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
// import {} from ''
import {AuthenticationService} from '../../services/authentication-service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {User} from '../../models/user'

describe('Component: Login', () => {

    let component: LoginPage;
    let router:Router;
    let modalController:ModalController;
    let authentication:AuthenticationService;
    let fixture: ComponentFixture<LoginPage>;
    let submitEl: DebugElement;
    let loginEl: DebugElement;
    let passwordEl: DebugElement;

    beforeEach(() => {

      // refine the test module by declaring the test component
      TestBed.configureTestingModule({
          declarations: [LoginPage]
      });


      // create component and test fixture
      fixture = TestBed.createComponent(LoginPage);

      // get test component from the fixture
      component = fixture.componentInstance;

      submitEl = fixture.debugElement.query(By.css('button'));
      loginEl = fixture.debugElement.query(By.css('input[type=email]'));
      passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

      it('Entering email and password emits loggedIn event', () => {
        let user:User;
        loginEl.nativeElement.value = "1710204@dlu.edu.com";
        passwordEl.nativeElement.value = "P@ssw0rd";

        component.logIn(loginEl,passwordEl);

        submitEl.triggerEventHandler('click', null);

        expect(user.email).toBe("1710204@dlu.edu.com");
        expect(user.password).toBe("P@ssw0rd");
    });


  //   beforeEach(() => {
  //       component = new LoginPage(authentication,router,modalController);
  //       TestBed.configureTestingModule({
  //         declarations: [LoginPage],
  //         providers: [AuthenticationService]
  //       });
  //       fixture = TestBed.createComponent(LoginPage);

  //       // get test component from the fixture
  //       // component = fixture.componentInstance;

  //       // UserService provided to the TestBed
  //       // authentication = TestBed.get(AuthenticationService);
  //   });

  //   // clear
  //   // afterEach(() => {
  //   //   authentication=null;
  //   //     modalController = null;
  //   //     router = null;
  //   //     component = null;
  //   // });


  //   it('should create', () => {
  //       expect(component).toBeTruthy();
  //   });

  //   it('needsLogin returns true when the user has not been authenticated', () => {
  //     // spyOn(authentication, 'isAuthenticated').and.returnValue(false);
  //     expect(authentication.GoogleAuth).toHaveBeenCalled();
  //     expect(component.logIn('1710204@dlu.edu.vn','Lam@0982841295')).toBeTruthy();
      
  // });

    // it('testLogin',()=>{
    //   expect(component.logIn('1710204@dlu.edu.vn','Lam@0982841295')).toBeTruthy();
    // })

    // it('navigate to "" redirects you to /home', (() => {
    //   // router.navigate([""]).then(() => {
    //   //   expect(location.path()).toBe("/home");
    //   // });
    //   expect(router.navigate(["tabs/profile"])).toBeTruthy();
    // }));
});