import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarouselService, Image} from './carousel.service';
import {HttpModule} from '@angular/http';
import {CarouselComponent} from './carousel.component';
import {By} from '@angular/platform-browser';

class MockCarouselService {
  public images: Image[] = [
    {imgName: 'apieu', location: 'assets/img/mainBrands/APIEU.jpg', active: 'active'},
    {imgName: 'cosRx', location: 'assets/img/mainBrands/COSRX.jpg', active: ''},
    {imgName: 'huxley', location: 'assets/img/mainBrands/Huxley.jpg', active: ''}
  ];
}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let componentFixture: ComponentFixture<CarouselComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports: [HttpModule],
      providers: [{provide: CarouselService, useValue: MockCarouselService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(CarouselComponent);
    component = componentFixture.componentInstance;
  });

  it('should create CarouselComponent', () => {
    expect(component).toBeTruthy();
  });


  it('images should be loaded', () => {
    componentFixture.detectChanges();
    const activeElements = componentFixture.debugElement.queryAll(By.css('img'));
    expect(activeElements.length).toBe(3);
  });

  it('classes to be active', () => {
    componentFixture.detectChanges();
    const classes: string[] = component.setClasses(component.images[0]);
    expect(classes.length).toBe(2);
    expect(classes[0]).toBe('active');
    expect(classes[1]).toBe('item');
  });

  it('classes to not be active', () => {
    componentFixture.detectChanges();
    const classes: string[] = component.setClasses(component.images[1]);
    expect(classes.length).toBe(1);
    expect(classes[0]).toBe('item');
  });
});
