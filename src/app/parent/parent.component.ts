import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message: string = '';

  constructor(private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver){ }

  ngOnInit(): void {
  }

  loadGreetComponent() {
    this.vcref.clear();
    import('./greet.component').then(
      ({ GreetComponent }) => {
        let greetcomp = this.vcref.createComponent(
          this.cfr.resolveComponentFactory(GreetComponent)
        );
        greetcomp.instance.greetMessage = "Data Passed from Parent";
        greetcomp.instance.sendMessageEvent.subscribe(data => {
          console.log(data);
          this.message = data;
        })
      }
    )
  }

}
