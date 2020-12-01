import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spaceEXlaunch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spaceEXlaunch');
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header h2').textContent).toContain('SpaceEx Launch Programs');
  });
  // it('should render the base Url', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const app = fixture.componentInstance;
  //   expect(app.baseUrl).toEqual('https://api.spaceXdata.com/v3/launches?limit=100');
  // });
  it('should get the data from the server with default url', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const defaultUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    app.getApiCall(defaultUrl);
    console.log('sacsacs', app.spaceData);
    setTimeout(() => { expect(app.spaceData.length).toBeGreaterThan(0); }, 500);

  });
  it('should check filter with year', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.urlMaker('2006', undefined, undefined);
    setTimeout(() => { expect(app.spaceData.length).toBeGreaterThan(0); }, 200);
  });
  it('should check filter with successfull Launch', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.urlMaker(undefined, 'true', undefined);
    setTimeout(() => { expect(app.spaceData.length).toBeGreaterThan(0); }, 200);
  });

});
