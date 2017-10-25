import {NgModule, Component} from '@angular/core';
import {IonicPageModule, IonicPage} from 'ionic-angular';
import {HomePage} from './home';

@IonicPage(
    {
        name: 'HomePage'
    }
)
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)],
})

export class HomeModule{

}