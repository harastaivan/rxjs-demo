import { Observable } from 'rxjs/Observable';
import { Subscription, fromEvent } from 'rxjs';
import 'rxjs/add/operator/share';

const addItem = (val: string) => {
    const node: Element = document.createElement('li');
    const textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const observable: Observable<Event> = fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription: Subscription = observable.subscribe((x: any) => addItem(x));
}, 2000);
