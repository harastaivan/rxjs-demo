import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs';

const addItem = (val: String) => {
    const node: Element = document.createElement('li');
    const textnode: Text = document.createTextNode(val.toString());
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
};

const subject: BehaviorSubject<String> = new BehaviorSubject('First');

subject.subscribe(
    (data: any) => addItem('Observer 1: ' + data),
    (err) => addItem(err),
    () => addItem('Observer 1 Completed')
);

subject.next('The first thing has been sent');
subject.next('...Observer 2 is about to subscribe');

const subscription2: Subscription = subject.subscribe((data: String) => addItem('Observer 2: ' + data));

subject.next('The second thing has been sent');
subject.next('The third thing has been sent');

subscription2.unsubscribe();

subject.next('The final thing has been sent');
